(function () {
  const DATA = window.JGT_DATA;
  const state = {
    selectedId: null,
    lane: "",
    owner: "",
    query: "",
    pxPerDay: 9,
    didInitialScroll: false,
    functionOwners: loadFunctionOwners()
  };

  const lanes = [
    { id: "p35", label: "P35 programme timing", kind: "programme" },
    { id: "p47", label: "P47 programme timing", kind: "programme" },
    { id: "pf2", label: "PF2.0 gates and mitigations", kind: "pf2" },
    { id: "ui", label: "UI owner allocations", kind: "owner" },
    { id: "ux", label: "UX lane - intentionally unpopulated", kind: "ux" },
    { id: "contract", label: "Contract window", kind: "contract" }
  ];

  const colours = {
    programme: "#4aa3ff",
    p35: "#4aa3ff",
    p47: "#9876ff",
    pf2: "#ff8a00",
    owner: "#f2c15f",
    ux: "#6f7887",
    contract: "#ff8a00",
    mrd: "#f2c15f",
    mass: "#00bf70",
    drop: "#ff4c4c"
  };

  const els = {
    metrics: document.getElementById("header-metrics"),
    laneFilter: document.getElementById("lane-filter"),
    ownerFilter: document.getElementById("owner-filter"),
    search: document.getElementById("search-input"),
    reset: document.getElementById("reset-view"),
    taskList: document.getElementById("task-list"),
    timeline: document.getElementById("timeline"),
    chart: document.getElementById("chart"),
    detail: document.getElementById("selected-detail"),
    anchor: document.getElementById("anchor-summary"),
    ownerModel: document.getElementById("owner-model"),
    functionOwners: document.getElementById("function-owners"),
    toggleSidebar: document.getElementById("toggle-sidebar"),
    editFunctions: document.getElementById("edit-functions"),
    functionDialog: document.getElementById("function-dialog"),
    functionJson: document.getElementById("function-json"),
    saveFunctions: document.getElementById("save-functions"),
    resetFunctions: document.getElementById("reset-functions")
  };

  const allTasks = buildTasks();
  const allMilestones = buildMilestones();
  const range = buildRange(allTasks, allMilestones);
  const laneLabels = Object.fromEntries(lanes.map((lane) => [lane.id, lane.label]));

  initControls();
  renderStaticPanels();
  render();

  function parseDate(value) {
    const parts = value.split("-").map(Number);
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }

  function addDays(date, days) {
    const copy = new Date(date);
    copy.setDate(copy.getDate() + days);
    return copy;
  }

  function diffDays(start, end) {
    return Math.round((end.getTime() - start.getTime()) / 86400000);
  }

  function fmtDate(value) {
    const date = typeof value === "string" ? parseDate(value) : value;
    return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  }

  function toX(date) {
    return diffDays(range.start, parseDate(date)) * state.pxPerDay;
  }

  function duration(start, end) {
    return Math.max(1, diffDays(parseDate(start), parseDate(end)) + 1);
  }

  function buildTasks() {
    const tasks = [];
    let id = 1;

    for (const release of DATA.programmeTiming.P35_MY29) {
      tasks.push(releaseTask(id++, "p35", "P35 MY29", release));
    }

    for (const release of DATA.programmeTiming.P47_MY30) {
      tasks.push(releaseTask(id++, "p47", "P47 MY30", release));
    }

    tasks.push({
      id: id++,
      lane: "pf2",
      name: "MR0.0.3 / PF2.0 commitment and handover",
      start: DATA.pf2Anchor.gates.G0.date,
      end: DATA.pf2Anchor.gates.G4.date,
      kind: "pf2",
      programme: "P35",
      release: DATA.pf2Anchor.release,
      phase: "G0 to G4",
      uiOwners: ["Jamie", "Design System Head", "New UI Lead"],
      summary: "PF2.0 gates must keep UI commitment and wireframe handover visible by G1."
    });

    tasks.push({
      id: id++,
      lane: "pf2",
      name: "Screen hardware mitigation path",
      start: DATA.pf2Anchor.gates.G0.date,
      end: DATA.pf2Anchor.gates.G2.date,
      kind: "pf2",
      programme: "P35 / P47",
      release: "Screens dependency",
      phase: "Mitigation",
      uiOwners: ["Jamie", "Design System Head"],
      summary: DATA.pf2Anchor.notes.slice(1).join(" ")
    });

    for (const [family, owners] of Object.entries(DATA.featureFamilies)) {
      tasks.push({
        id: id++,
        lane: "ui",
        name: family,
        start: DATA.contractWindow.start,
        end: DATA.contractWindow.end,
        kind: "owner",
        programme: "UI",
        release: "Contract Window 1",
        phase: "UI ownership",
        uiOwners: owners,
        summary: ownerSummary(family, owners)
      });
    }

    tasks.push({
      id: id++,
      lane: "ux",
      name: "UX scope placeholder - Jymy to populate separately",
      start: DATA.pf2Anchor.gates.G0.date,
      end: DATA.pf2Anchor.gates.G1.date,
      kind: "ux",
      programme: "UX",
      release: "Separate lane",
      phase: "Not populated",
      uiOwners: [],
      summary: "UX is intentionally separate and unpopulated per issue rule."
    });

    tasks.push({
      id: id++,
      lane: "contract",
      name: DATA.contractWindow.label,
      start: DATA.contractWindow.start,
      end: DATA.contractWindow.end,
      kind: "contract",
      programme: "Commercial",
      release: "In scope",
      phase: "Contract",
      uiOwners: ["Jamie"],
      summary: "Optional support begins " + fmtDate(DATA.contractWindow.optionalSupportStarts) + "."
    });

    return tasks;
  }

  function releaseTask(id, lane, programme, release) {
    const builds = release.builds || [{ phase: release.phase, MRD: release.MRD, SW_G4: release.SW_G4 }];
    const lastBuildDate = maxDate(builds.map((build) => build.SW_G4 || build.MRD).filter(Boolean));
    const end = lastBuildDate || release.SW_G4 || release.SW_G3;
    return {
      id,
      lane,
      name: programme + " " + release.release + (release.platformDrop ? " / " + release.platformDrop : ""),
      start: release.SW_G0,
      end,
      kind: lane,
      programme,
      release: release.release,
      phase: builds.map((build) => build.phase).filter(Boolean).join(" + ") || release.phase || "Release",
      status: release.status,
      uiOwners: [],
      summary: release.scope.join("; "),
      meta: release
    };
  }

  function buildMilestones() {
    const milestones = [];
    for (const [gate, item] of Object.entries(DATA.pf2Anchor.gates)) {
      milestones.push({ date: item.date, label: "PF2.0 " + gate + " - " + item.label, type: gate === "G4" ? "drop" : "gate" });
    }
    for (const [programme, releases] of Object.entries(DATA.programmeTiming)) {
      for (const release of releases) {
        for (const gate of ["SW_G0", "SW_G1", "SW_G2", "SW_G3", "SW_G4"]) {
          if (release[gate]) {
            milestones.push({ date: release[gate], label: release.release + " " + gate.replace("SW_", ""), type: gate === "SW_G4" ? "drop" : "gate", programme });
          }
        }
        const builds = release.builds || [{ phase: release.phase, MRD: release.MRD, SW_G4: release.SW_G4, MASS: release.MASS }];
        for (const build of builds) {
          if (build.MRD) milestones.push({ date: build.MRD, label: release.release + " " + build.phase + " MRD", type: "mrd", programme });
          if (build.MASS) milestones.push({ date: build.MASS, label: release.release + " MASS", type: "mass", programme });
        }
        if (release.MASS) milestones.push({ date: release.MASS, label: release.release + " MASS", type: "mass", programme });
        if (release.potentialHotfix) milestones.push({ date: release.potentialHotfix, label: release.release + " potential hotfix", type: "mrd", programme });
      }
    }
    return milestones;
  }

  function buildRange(tasks, milestones) {
    const dates = [];
    tasks.forEach((task) => dates.push(task.start, task.end));
    milestones.forEach((milestone) => dates.push(milestone.date));
    const parsed = dates.filter(Boolean).map(parseDate);
    const min = new Date(Math.min.apply(null, parsed));
    const max = new Date(Math.max.apply(null, parsed));
    return { start: addDays(min, -21), end: addDays(max, 35) };
  }

  function maxDate(values) {
    if (!values.length) return "";
    return values.sort()[values.length - 1];
  }

  function ownerSummary(family, owners) {
    if (family.toLowerCase().includes("media")) return "Media-related work is assigned to Oli.";
    if (family.toLowerCase().includes("cluster") || family.toLowerCase().includes("tachometer")) {
      return "Cluster-related ownership stays grouped, with Jamie covering production escalation.";
    }
    if (family.toLowerCase().includes("handover")) return "Jamie remains final quality owner for production handover.";
    return "UI owner allocation from issue #1. UX owner intentionally not populated.";
  }

  function initControls() {
    for (const lane of lanes) {
      const option = document.createElement("option");
      option.value = lane.id;
      option.textContent = lane.label;
      els.laneFilter.appendChild(option);
    }

    const ownerNames = new Set();
    Object.values(DATA.featureFamilies).flat().forEach((owner) => ownerNames.add(owner));
    Object.keys(DATA.owners).forEach((owner) => ownerNames.add(owner));
    [...ownerNames].sort().forEach((owner) => {
      const option = document.createElement("option");
      option.value = owner;
      option.textContent = owner;
      els.ownerFilter.appendChild(option);
    });

    els.laneFilter.addEventListener("change", () => {
      state.lane = els.laneFilter.value;
      render();
    });
    els.ownerFilter.addEventListener("change", () => {
      state.owner = els.ownerFilter.value;
      render();
    });
    els.search.addEventListener("input", () => {
      state.query = els.search.value.trim().toLowerCase();
      render();
    });
    els.reset.addEventListener("click", () => {
      state.lane = "";
      state.owner = "";
      state.query = "";
      state.selectedId = null;
      els.laneFilter.value = "";
      els.ownerFilter.value = "";
      els.search.value = "";
      render();
    });
    els.toggleSidebar.addEventListener("click", () => document.body.classList.toggle("sidebar-closed"));
    els.editFunctions.addEventListener("click", openFunctionDialog);
    els.saveFunctions.addEventListener("click", saveFunctionOwners);
    els.resetFunctions.addEventListener("click", resetFunctionOwners);
  }

  function renderStaticPanels() {
    els.metrics.innerHTML = [
      metric("P35 releases", DATA.programmeTiming.P35_MY29.length),
      metric("P47 releases", DATA.programmeTiming.P47_MY30.length),
      metric("UI families", Object.keys(DATA.featureFamilies).length),
      metric("PF2.0 G4", fmtDate(DATA.pf2Anchor.gates.G4.date))
    ].join("");

    els.anchor.innerHTML = Object.entries(DATA.pf2Anchor.gates)
      .map(([gate, item]) => '<span class="pill orange">' + gate + " " + fmtDate(item.date) + "</span>")
      .join("") + DATA.pf2Anchor.notes.map((note) => '<span class="pill">' + escapeHtml(note) + "</span>").join("");

    els.ownerModel.innerHTML =
      Object.entries(DATA.featureFamilies).map(([family, owners]) => {
        const note = family === "Media / Audio / Now Playing" ? "Media-related work goes to Oli." : "UX owner: not populated.";
        return '<div class="owner-card"><h3>' + escapeHtml(family) + '</h3><p><strong>UI:</strong> ' + escapeHtml(owners.join(", ")) + '</p><p>' + escapeHtml(note) + '</p></div>';
      }).join("") +
      Object.entries(DATA.owners).map(([owner, skills]) => {
        return '<div class="owner-card"><h3>' + escapeHtml(owner) + '</h3><p>' + escapeHtml(skills.join(", ")) + "</p></div>";
      }).join("");

    renderFunctionOwners();
  }

  function metric(label, value) {
    return '<div class="metric"><span>' + escapeHtml(label) + '</span><strong>' + escapeHtml(String(value)) + "</strong></div>";
  }

  function getVisibleTasks() {
    return allTasks.filter((task) => {
      if (state.lane && task.lane !== state.lane) return false;
      if (state.owner && !task.uiOwners.includes(state.owner)) return false;
      if (state.query) {
        const haystack = [task.name, task.programme, task.release, task.phase, task.summary, task.uiOwners.join(" ")].join(" ").toLowerCase();
        if (!haystack.includes(state.query)) return false;
      }
      return true;
    });
  }

  function render() {
    const tasks = getVisibleTasks();
    const rows = buildRows(tasks);
    const width = Math.max(1100, diffDays(range.start, range.end) * state.pxPerDay);
    const height = Math.max(360, rows.length * 36 + 60);

    els.timeline.style.width = width + "px";
    els.chart.style.width = width + "px";
    els.chart.style.height = height + "px";

    renderTimeline(width);
    renderTaskList(rows);
    renderChart(rows, width, height);
    renderDetail(tasks);
    scrollToPf2AnchorOnce();
  }

  function buildRows(tasks) {
    const rows = [];
    for (const lane of lanes) {
      const laneTasks = tasks.filter((task) => task.lane === lane.id);
      if (!laneTasks.length) continue;
      rows.push({ type: "group", lane: lane.id, label: lane.label });
      laneTasks.forEach((task) => rows.push({ type: "task", lane: lane.id, task }));
    }
    return rows;
  }

  function renderTimeline(width) {
    const monthStart = new Date(range.start.getFullYear(), range.start.getMonth(), 1);
    const parts = [];
    for (let date = monthStart; date <= range.end; date = new Date(date.getFullYear(), date.getMonth() + 1, 1)) {
      const next = new Date(date.getFullYear(), date.getMonth() + 1, 1);
      const left = Math.max(0, diffDays(range.start, date) * state.pxPerDay);
      const monthEnd = next < range.end ? next : range.end;
      const monthWidth = Math.max(36, diffDays(date > range.start ? date : range.start, monthEnd) * state.pxPerDay);
      const dayCount = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
      const days = [1, 8, 15, 22].filter((day) => day <= dayCount).map((day) => '<span class="day-marker">' + day + "</span>").join("");
      parts.push(
        '<div class="month" style="left:' + left + 'px;width:' + monthWidth + 'px">' +
        '<div class="month-name">' + date.toLocaleDateString("en-GB", { month: "short", year: "numeric" }) + '</div>' +
        '<div class="month-days">' + days + '</div></div>'
      );
    }
    els.timeline.innerHTML = parts.join("");
  }

  function renderTaskList(rows) {
    els.taskList.innerHTML = rows.map((row) => {
      if (row.type === "group") {
        return '<div class="group-row"><span>' + escapeHtml(row.label) + '</span><span>' + countLane(row.lane) + " rows</span></div>";
      }
      const task = row.task;
      const selected = task.id === state.selectedId ? " selected" : "";
      const owners = task.uiOwners.length ? task.uiOwners.join(", ") : "";
      return '<div class="task-row' + selected + '" data-id="' + task.id + '">' +
        '<span class="task-title">' + escapeHtml(task.name) + '</span>' +
        '<span class="owner-cell">' + escapeHtml(owners) + '</span></div>';
    }).join("");

    els.taskList.querySelectorAll(".task-row").forEach((row) => {
      row.addEventListener("click", () => selectTask(Number(row.dataset.id)));
    });
  }

  function renderChart(rows, width, height) {
    const parts = [];
    rows.forEach((row, index) => {
      const top = index * 36;
      parts.push(row.type === "group"
        ? '<div class="group-band" style="top:' + top + 'px"></div>'
        : '<div class="row-bg" style="top:' + top + 'px"></div>');
    });

    const todayX = diffDays(range.start, new Date()) * state.pxPerDay;
    if (todayX >= 0 && todayX <= width) {
      parts.push('<div class="today-line" style="left:' + todayX + 'px"></div>');
    }

    for (const milestone of allMilestones) {
      const x = toX(milestone.date);
      if (x < 0 || x > width) continue;
      const klass = milestone.type === "gate" ? "gate-line" : "milestone-line";
      const labelClass = milestone.type === "drop" ? " drop" : milestone.type === "gate" ? " gate" : "";
      parts.push('<div class="' + klass + '" style="left:' + x + 'px"></div>');
      parts.push('<div class="milestone-label' + labelClass + '" title="' + escapeHtml(milestone.label) + '" style="left:' + x + 'px">' + escapeHtml(milestone.label) + '</div>');
    }

    rows.forEach((row, index) => {
      if (row.type !== "task") return;
      const task = row.task;
      const top = index * 36 + 5;
      const left = toX(task.start);
      const barWidth = Math.max(22, duration(task.start, task.end) * state.pxPerDay);
      const selected = task.id === state.selectedId ? " selected" : "";
      parts.push(
        '<div class="bar ' + task.kind + selected + '" data-id="' + task.id + '" style="left:' + left + 'px;top:' + top + 'px;width:' + barWidth + 'px">' +
        '<span class="dot"></span><span class="bar-label">' + escapeHtml(task.name) + '</span></div>'
      );
    });

    els.chart.innerHTML = parts.join("");
    els.chart.querySelectorAll(".bar").forEach((bar) => {
      bar.addEventListener("click", () => selectTask(Number(bar.dataset.id)));
    });
  }

  function renderDetail(visibleTasks) {
    const selected = allTasks.find((task) => task.id === state.selectedId) || visibleTasks[0] || allTasks[0];
    if (!selected) {
      els.detail.innerHTML = "";
      return;
    }
    if (state.selectedId === null) state.selectedId = selected.id;

    const owners = selected.uiOwners.length
      ? '<div class="pill-row">' + selected.uiOwners.map((owner) => '<span class="pill orange">' + escapeHtml(owner) + '</span>').join("") + '</div>'
      : '<span class="pill">No UI owner assigned</span>';

    els.detail.innerHTML =
      '<h2>' + escapeHtml(selected.name) + '</h2>' +
      '<p>' + escapeHtml(selected.summary) + '</p>' +
      '<div class="key-value"><span>Lane</span><strong>' + escapeHtml(laneLabels[selected.lane] || selected.lane) + '</strong></div>' +
      '<div class="key-value"><span>Window</span><strong>' + fmtDate(selected.start) + ' - ' + fmtDate(selected.end) + '</strong></div>' +
      '<div class="key-value"><span>Release</span><strong>' + escapeHtml(selected.release || "") + '</strong></div>' +
      '<div class="key-value"><span>Phase</span><strong>' + escapeHtml(selected.phase || "") + '</strong></div>' +
      '<div class="key-value"><span>UI owner</span><div>' + owners + '</div></div>' +
      '<div class="key-value"><span>UX owner</span><strong>Not populated</strong></div>';
  }

  function selectTask(id) {
    state.selectedId = id;
    render();
  }

  function scrollToPf2AnchorOnce() {
    if (state.didInitialScroll) return;
    state.didInitialScroll = true;
    requestAnimationFrame(() => {
      const region = document.querySelector(".chart-region");
      if (!region) return;
      region.scrollLeft = Math.max(0, toX(DATA.pf2Anchor.gates.G0.date) - 220);
    });
  }

  function countLane(lane) {
    return getVisibleTasks().filter((task) => task.lane === lane).length;
  }

  function renderFunctionOwners() {
    els.functionOwners.innerHTML = Object.entries(state.functionOwners).map(([area, owners]) => {
      return '<div class="function-card"><h3>' + escapeHtml(area) + '</h3><p>' + escapeHtml(owners.join(", ")) + '</p></div>';
    }).join("");
  }

  function openFunctionDialog() {
    els.functionJson.value = JSON.stringify(state.functionOwners, null, 2);
    els.functionDialog.showModal();
  }

  function saveFunctionOwners() {
    try {
      const parsed = JSON.parse(els.functionJson.value);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Expected object");
      Object.entries(parsed).forEach(([key, value]) => {
        if (!key || !Array.isArray(value)) throw new Error("Each owner group must be an array");
      });
      state.functionOwners = parsed;
      localStorage.setItem("jgt-function-owners", JSON.stringify(parsed));
      renderFunctionOwners();
      els.functionDialog.close();
    } catch (error) {
      alert("Could not save JSON: " + error.message);
    }
  }

  function resetFunctionOwners() {
    state.functionOwners = JSON.parse(JSON.stringify(DATA.functionOwners));
    localStorage.removeItem("jgt-function-owners");
    els.functionJson.value = JSON.stringify(state.functionOwners, null, 2);
    renderFunctionOwners();
  }

  function loadFunctionOwners() {
    try {
      const saved = localStorage.getItem("jgt-function-owners");
      if (saved) return JSON.parse(saved);
    } catch (_) {
      // Fall back to source data if local JSON was edited badly outside the app.
    }
    return JSON.parse(JSON.stringify(DATA.functionOwners));
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
})();
