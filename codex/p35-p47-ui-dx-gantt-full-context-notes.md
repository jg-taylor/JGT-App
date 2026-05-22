# P35 / P47 UI-DX Gantt — Full Context Notes for Codex

## Purpose of this file

This file exists so Codex has the current working context without James having to copy/paste long chat history.

The Gantt should now focus on the actual UI-DX work that must be completed by **P35 MR0.0.3 / PF2.0 SW G1 — 10 June 2026**.

This is a **data and planning update only**. Do not redesign the Gantt.

---

## Non-negotiable implementation rules

1. **Preserve the current visual design.**
   - Do not alter colours.
   - Do not alter typography.
   - Do not alter the dark/orange styling.
   - Do not alter the current spacing, expansion width, scroll behaviour, milestone styling, lane hierarchy or chart density.
   - Reuse existing visual tokens/classes/colours only.

2. **Do not redesign the component.**
   - The Cursor visual version is considered the preferred visual baseline.
   - This update is about adding workstreams, risk, accountability and metadata.

3. **UI and UX are separate.**
   - UI-DX ownership is James GT's lane.
   - UX is Jymy's lane.
   - Do not assign UI team members into UX owner fields.
   - Leave UX owner blank / TBC unless the existing app already supports a UX-only placeholder.

4. **The Gantt should focus on actual UI tasks due by G1.**
   - Do not render every feature or requirement as an individual bar.
   - Use grouped UI workstreams.
   - Feature details, function owners and risks should live in tooltips, side panels or metadata.

5. **G1 is the critical UI deadline.**
   - G0 = requirements baseline / VDR setup.
   - G1 = UX/UI negotiated and wireframes submitted to NIO.
   - By G2, NIO should already be working from agreed PRD / Figma / VDR content.

---

## Primary timing anchor — P35 MR0.0.3 / PF2.0

Use this as the active UI-DX planning window.

| Gate | Date | Meaning | UI-DX implication |
|---|---:|---|---|
| SW G0 | 20 May 2026 | Functional requirements agreed with NIO / Gate0 requirement status | UI-DX must know which requirements affect screens, controls, states or HMI feedback. |
| SW G1 | 10 June 2026 | UX/UI negotiated and wireframes submitted to NIO | Critical UI handoff deadline. Actual Figma / PRD / VDR package must be agreed here. |
| SW G2 | 8 July 2026 | NIO work | NIO moves into FDS / development using agreed handoff inputs. |
| SW G3 | 16 September 2026 | NIO output to McLaren | Review NIO output against agreed UI-DX intent. |
| SW G4 | 11 November 2026 | Vehicle-level SW business drop | Final review / delta capture, not the UI definition deadline. |
| MRD | 14 August 2026 | LabCar MRD | Relevant build milestone, but not the UI definition deadline. |

---

## Gate0 Definition of Done from MR0.0.3 review

Gate0 DoD is:

- Complete requirement breakdown.
- New or modified function requirement reaches **Open** or **Defined** status.
- Carry-over Epic reaches **Open** status.
- Carry-over Epic creation completed with specific information filled in the VDR system.

Interpretation for the Gantt:

- G0 does not mean UI is finished.
- G0 means the requirement / VDR structure exists enough to proceed.
- UI-DX must then focus on resolving actual design intent and handoff readiness by G1.

---

## Current MR0.0.3 requirement dashboard

From the Gate0 review:

| Domain | Open | Defined | Total |
|---|---:|---:|---:|
| BC&VM | 79 | 7 | 86 |
| CT | 8 | 0 | 8 |
| DC | 39 | 0 | 39 |
| Infrastructure | 24 | 0 | 24 |
| SC | 6 | 0 | 6 |
| **Total unique issues** | **156** | **7** | **163** |

Key point:

- Digital Cockpit has **39 requirement tickets**, but **delivery scope is not aligned**.
- Many DC tickets are placeholders and may not be deliverable in MR0.0.3.

---

## Main Digital Cockpit risks to represent as data

The Gantt should visibly flag these as risk/dependency metadata, not new styling.

### 1. DC scope not aligned

- DC has 39 requirement tickets.
- Delivery scope is not aligned yet.
- Many tickets are placeholders.
- Some may not be deliverable in MR0.0.3.

Recommended representation:

```json
{
  "id": "dc-scope-alignment",
  "label": "DC scope alignment / ticket triage",
  "start": "2026-05-20",
  "end": "2026-06-10",
  "lane": "Core UI definition",
  "status": "at_risk",
  "riskLevel": "high",
  "criticalDeadline": "2026-06-10"
}
```

### 2. Screen interim solution not confirmed

Open questions from Gate0 review:

- IC: use NIO RCP as mitigation?
- ICS: use QinLing ICS or NT3 Cetus ICS?

Recommended representation:

```json
{
  "id": "screen-interim-solution",
  "label": "Screen interim solution / mitigation route",
  "start": "2026-05-20",
  "end": "2026-06-10",
  "lane": "Rig / mule support",
  "status": "unconfirmed",
  "riskLevel": "high",
  "dependencies": ["NIO RCP", "QinLing ICS", "NT3 Cetus ICS"]
}
```

### 3. PRD / UXUI / third-party SW availability risk

Gate0 review explicitly lists hardware, PRD, UXUI and third-party software such as Voice Assistant SDK as blockers.

Recommended representation:

```json
{
  "id": "prd-uxui-availability-risk",
  "label": "PRD / UXUI / third-party dependency risk",
  "start": "2026-05-20",
  "end": "2026-06-10",
  "lane": "Core UI definition",
  "status": "at_risk",
  "riskLevel": "high"
}
```

---

## What the Gantt should focus on by G1

The current Gantt should not be a generic feature-release Gantt. It should be a UI-DX delivery view answering:

> What must UI-DX complete by G1 so NIO can proceed from G2 without inventing the UI themselves?

Use these grouped workstreams as the core G1 bars.

---

## Actual UI-DX G1 workstreams

### 1. DC scope triage / ticket categorisation

```json
{
  "id": "ui-g1-dc-scope-triage",
  "label": "DC scope triage / ticket categorisation",
  "lane": "Core UI definition",
  "start": "2026-05-20",
  "end": "2026-06-10",
  "uiOwner": "James GT / Jamie",
  "uxOwner": "TBC by Jymy",
  "functionOwners": ["Monisha Raju", "Andy YAN", "Alex GU", "Anastasis"],
  "outputs": [
    "Split DC requirements into deliverable / mitigation / placeholder / blocked / not UI-impacting",
    "Identify which tickets need Figma references",
    "Identify which tickets need PRD clarification",
    "Identify which tickets are not deliverable for MR0.0.3"
  ],
  "criticalDate": "2026-06-10",
  "riskLevel": "high"
}
```

Purpose:

- Prevent UI-DX being blamed for placeholder requirements.
- Create a clean committed-vs-blocked view by G1.

---

### 2. Screen interim solution / mitigation route

```json
{
  "id": "ui-g1-screen-mitigation",
  "label": "Screen interim solution / mitigation route",
  "lane": "Rig / mule support",
  "start": "2026-05-20",
  "end": "2026-06-10",
  "uiOwner": "New UI Lead / Jamie",
  "uxOwner": "TBC by Jymy",
  "functionOwners": ["Monisha Raju", "Andy YAN", "Alex GU", "Anastasis"],
  "outputs": [
    "Confirm IC interim route: NIO RCP or alternative",
    "Confirm ICS interim route: QinLing ICS or NT3 Cetus ICS",
    "Document UI assumptions for mitigation screen path",
    "Flag design-system impact from mitigation path"
  ],
  "criticalDate": "2026-06-10",
  "riskLevel": "high"
}
```

Purpose:

- UI cannot confidently design production-ready layouts if the interim screen/platform route is unknown.

---

### 3. Cluster / driver display package

```json
{
  "id": "ui-g1-cluster-driver-display",
  "label": "Cluster / driver display G1 UI pack",
  "lane": "Core UI definition",
  "start": "2026-05-20",
  "end": "2026-06-10",
  "uiOwner": "New UI Lead",
  "uxOwner": "TBC by Jymy",
  "functionOwners": ["Anastasis", "Anil Janarthanan", "Maxime YING", "David LI"],
  "featureFamilies": [
    "IC general layout",
    "Main driver display",
    "Speedometer",
    "Tachometer",
    "Gear indicator",
    "Power meter",
    "Odometer",
    "Trip computer",
    "Energy / range information",
    "TPMS",
    "Vehicle setup indicator",
    "Handling / drive mode surfaces"
  ],
  "outputs": [
    "Grouped Figma references for cluster surfaces",
    "State assumptions for speed/tacho/gear/power/range/mode",
    "List of blocked/conditional cluster features",
    "Design-system component impact list"
  ],
  "criticalDate": "2026-06-10"
}
```

Purpose:

- Keep cluster features together rather than splitting odometer, tacho, gear and TPMS across unrelated people.

---

### 4. ICS / centre display package

```json
{
  "id": "ui-g1-ics-centre-display",
  "label": "ICS / centre display G1 UI pack",
  "lane": "Core UI definition",
  "start": "2026-05-20",
  "end": "2026-06-10",
  "uiOwner": "Oli",
  "uxOwner": "TBC by Jymy",
  "functionOwners": ["Anastasis", "Monisha Raju"],
  "featureFamilies": [
    "ICS home",
    "ICS app list",
    "ICS dock",
    "ICS gestures",
    "ICS notification centre",
    "ICS quick access",
    "ICS status bar",
    "Comfort app",
    "Vehicle settings",
    "Service history"
  ],
  "outputs": [
    "Figma references for core ICS surfaces",
    "Interaction/state assumptions for home/dock/app list/quick access",
    "Comfort/HVAC visible UI assumptions",
    "Settings/status component list"
  ],
  "criticalDate": "2026-06-10"
}
```

Purpose:

- Make centre-display scope tangible before NIO begins FDS/dev.

---

### 5. Controls / hard switch state mapping

```json
{
  "id": "ui-g1-controls-hard-switches",
  "label": "Controls / hard switch state mapping",
  "lane": "Core UI definition",
  "start": "2026-05-20",
  "end": "2026-06-10",
  "uiOwner": "Jamie",
  "uxOwner": "TBC by Jymy",
  "functionOwners": ["Anastasis", "Ricardo De Carvalho", "Marco Paelicke", "Zheng ZUO", "David LI"],
  "featureFamilies": [
    "Binnacle switches",
    "CCSP",
    "Door panel windows / blinds",
    "Interior frunk switch",
    "Gear selector",
    "Hard switch control",
    "Steering wheel heating activation",
    "Row 2 seat fold / suspension / towbar control",
    "MLS switches",
    "OHC controls",
    "PRND / Manual / EPB",
    "Seat controls",
    "Steering column joystick",
    "Steering wheel controls",
    "Stalks",
    "Tailgate switch"
  ],
  "outputs": [
    "Control-to-screen feedback map",
    "State mapping for controls and switches",
    "Figma references where UI feedback is required",
    "Blocked items list where hardware is unavailable"
  ],
  "criticalDate": "2026-06-10"
}
```

Purpose:

- Ensure physical controls and screen feedback are not treated as disconnected systems.

---

### 6. HVAC / Auto climate UI check

```json
{
  "id": "ui-g1-hvac-auto-climate",
  "label": "HVAC / Auto climate UI check",
  "lane": "Core UI definition",
  "start": "2026-05-20",
  "end": "2026-06-10",
  "uiOwner": "Oli / Jamie",
  "uxOwner": "TBC by Jymy",
  "functionOwners": ["Giorgia Morlando", "John Vallins", "Monisha Raju", "David LI"],
  "outputs": [
    "Confirm whether Auto HVAC is simply an exposed hidden control/state",
    "Confirm whether HVAC interaction model changes",
    "Confirm fail states and unavailable states",
    "Confirm reuse into PF2.0"
  ],
  "criticalDate": "2026-06-10",
  "riskLevel": "medium"
}
```

Purpose:

- Avoid 'just one Auto button' becoming an untracked PF2.0 clean-up.

---

### 7. Energy / range / charging UI surfaces

```json
{
  "id": "ui-g1-energy-range-charging",
  "label": "Energy / range / charging UI surfaces",
  "lane": "Core UI definition",
  "start": "2026-05-20",
  "end": "2026-06-10",
  "uiOwner": "New UI Lead / Laura",
  "uxOwner": "TBC by Jymy",
  "functionOwners": ["John Vallins", "Zheng ZUO", "David LI"],
  "featureFamilies": [
    "Range estimator",
    "HV battery management",
    "HV energy storage",
    "Charging/discharging states",
    "Energy information",
    "Energy flow"
  ],
  "outputs": [
    "Identify visible energy/range/charging surfaces",
    "Map required cluster/ICS touchpoints",
    "Capture state and component requirements",
    "Flag hidden functional scope with no UI impact"
  ],
  "criticalDate": "2026-06-10"
}
```

Purpose:

- UI-DX tracks visible surfaces only; it does not own thermal/energy functional software.

---

### 8. Voice assistant / SDK dependency UI

```json
{
  "id": "ui-g1-voice-assistant-sdk",
  "label": "Voice assistant / SDK dependency UI",
  "lane": "Core UI definition",
  "start": "2026-05-20",
  "end": "2026-06-10",
  "uiOwner": "Laura / Bruno",
  "uxOwner": "TBC by Jymy",
  "functionOwners": ["Olga", "Dominic", "Monisha Raju", "Alex GU"],
  "featureFamilies": [
    "Wake word",
    "Push to talk",
    "Voice assistant states",
    "Third-party SDK dependency"
  ],
  "outputs": [
    "Flag dependency on Voice Assistant SDK",
    "Define placeholder UI states if SDK is unavailable",
    "Capture motion/voice-state references if in scope",
    "Mark blocked or conditional content for G1"
  ],
  "criticalDate": "2026-06-10",
  "riskLevel": "high"
}
```

Purpose:

- Prevent voice UI being treated as deliverable if SDK path is not mature.

---

### 9. Connectivity / vehicle status UI touchpoints

```json
{
  "id": "ui-g1-connectivity-status",
  "label": "Connectivity / vehicle status UI touchpoints",
  "lane": "PF2 uplift",
  "start": "2026-05-20",
  "end": "2026-07-08",
  "uiOwner": "Oli / Design System Head",
  "uxOwner": "TBC by Jymy",
  "functionOwners": ["Stelios Gorgoris", "Hongjun MA", "Jiahua FU"],
  "featureFamilies": [
    "MAL EU Cloud",
    "CDF WiFi",
    "Cellular network",
    "DCL",
    "IDC",
    "Vehicle status",
    "Special event report",
    "VMS"
  ],
  "outputs": [
    "Identify visible connectivity/status touchpoints",
    "Define status/icon/component requirements",
    "Mark non-visual CT scope as no UI impact"
  ],
  "criticalDate": "2026-07-08"
}
```

Purpose:

- Track visible CT surfaces without making CT a core screen-design bar.

---

### 10. Infrastructure / diagnostic / vehicle moding states

```json
{
  "id": "ui-g1-infrastructure-status",
  "label": "Infrastructure / diagnostic / vehicle moding states",
  "lane": "PF2 uplift",
  "start": "2026-05-20",
  "end": "2026-07-08",
  "uiOwner": "Design System Head / Jamie",
  "uxOwner": "TBC by Jymy",
  "functionOwners": ["Rafael Monteiro", "Hongjun MA", "Ashish ANAND"],
  "featureFamilies": [
    "Diagnostic and flashing",
    "Network",
    "Occupant sensing",
    "Low voltage power management",
    "Vehicle moding",
    "Vehicle wakeup and sleep",
    "Data Closed Loop"
  ],
  "outputs": [
    "Identify visible diagnostic/network/vehicle-mode states",
    "Capture icon/status/component requirements",
    "Mark back-end infrastructure scope as no UI impact where applicable"
  ],
  "criticalDate": "2026-07-08"
}
```

Purpose:

- Keep UI-DX involved where infrastructure creates visible user states.

---

### 11. Design system component capture

```json
{
  "id": "ui-g1-design-system-component-capture",
  "label": "Design system component capture",
  "lane": "Design system foundations",
  "start": "2026-05-20",
  "end": "2026-07-08",
  "uiOwner": "Design System Head",
  "uxOwner": "TBC by Jymy",
  "functionOwners": ["Monisha Raju", "Alex GU", "Anastasis"],
  "outputs": [
    "Component list required for PF2.0 handoff",
    "Icon/tell-tale/status requirement list",
    "Theme/localisation impact list",
    "Figma hygiene and export assumptions",
    "NIO handoff pack structure"
  ],
  "criticalDate": "2026-07-08"
}
```

Purpose:

- Convert one-off UI requests into reusable system assets.

---

### 12. NIO Figma / PRD / VDR handoff QA

```json
{
  "id": "ui-g1-nio-handoff-qa",
  "label": "NIO Figma / PRD / VDR handoff QA",
  "lane": "Core UI definition",
  "start": "2026-06-03",
  "end": "2026-06-10",
  "uiOwner": "Jamie / Design System Head",
  "uxOwner": "TBC by Jymy",
  "functionOwners": ["Monisha Raju", "Andy YAN", "Alex GU", "Anastasis"],
  "outputs": [
    "Check Figma references attached or linked correctly",
    "Check PRD references are aligned",
    "Check VDR IDs are captured",
    "Check assumptions/blocked items are clearly labelled",
    "Check NIO has a single agreed implementation reference by G1"
  ],
  "criticalDate": "2026-06-10",
  "riskLevel": "high"
}
```

Purpose:

- Make the G1 handoff robust enough that NIO cannot reasonably misinterpret the UI-DX intent.

---

## Function owner / domain map for Gantt metadata

These are the current working owners/stakeholders to expose in tooltips or detail panels.

| Domain / feature family | Function owners / stakeholders | UI-DX relevance |
|---|---|---|
| Digital Cockpit | Monisha Raju, Andy YAN, Alex GU, Anastasis | Main UI-DX dependency. 39 DC tickets, scope not aligned. |
| Body Control | Ricardo De Carvalho, Marco Paelicke, Zheng ZUO, David LI, Anastasis | Screens/switches, seats, windows, doors, lights, climate, steering column. |
| Thermal & Energy | John Vallins, Zheng ZUO, David LI | Range, energy, charging/discharging visible surfaces. |
| Motion | Anil Janarthanan, Maxime YING, David LI, Anastasis | Cluster, vehicle speed, gear, drive modes, TPMS, powertrain states. |
| Connectivity / CT | Stelios Gorgoris, Hongjun MA, Jiahua FU | Cloud, DCL, IDC, vehicle status, event report, VMS. |
| Infrastructure | Rafael Monteiro, Hongjun MA, Ashish ANAND | Diagnostics, network, vehicle moding, wake/sleep, LV power visible states. |
| Voice / IVA | Olga, Dominic, Alex GU | Wake word, push-to-talk, SDK dependency. |
| Localisation / coordination | Monisha Raju | EN-UK, EN-US, Simplified Chinese, Spanish, DC coordination. |

---

## UI-DX resource model

Use this only for UI ownership metadata. Do not populate UX.

| UI owner | Role / best use |
|---|---|
| James GT | Creative direction / Digital Experience owner. Owns final UI-DX position and senior framing. |
| Jamie | UI lead / second-in-command. Production judgement, handoff QA, hard-point logic, escalation, final quality. |
| Oli | Concepting, refinement, media, infotainment, centre-display experiences, animation. |
| Laura | Clean modern minimalist UI, motion, crisp states, voice/motion moments, driver-display clarity. |
| Bruno | Atmospheric design, animation, 3D/renders, ADAS/visualisation support, production support. |
| New UI Lead | Heavyweight senior UI lead, cluster specialist, production cluster, concept UI, animation/3D. |
| Design System Head | Components, tokens, design-system governance, Figma hygiene, handover packs, implementation readiness. |

---

## Recommended visual handling

Do **not** add new colour systems.

Use current styling and existing palette/class names. If colour mapping is required, map workstreams to current colours only:

- Core UI definition = existing core UI bar style.
- Design system foundations = existing design system bar style.
- Rig / mule support = existing rig/mule style.
- PF2 uplift = existing PF2 uplift style.
- Risk = existing risk marker/tint/tooltip pattern if already present.

If there is no existing risk marker pattern, encode risk in metadata / tooltip text only.

---

## What not to do

- Do not create 39 separate DC bars.
- Do not create 163 requirement bars.
- Do not introduce new visual styling.
- Do not populate UX owners.
- Do not treat G4 as the design deadline.
- Do not imply UI-DX owns functional requirements.
- Do not convert every cross-domain requirement into a screen-design task.

---

## What the Gantt should communicate

The chart should make this message obvious:

> By G1 on 10 June 2026, UI-DX must triage the DC scope, resolve screen/platform assumptions, group the UI-impacting features into deliverable work packages, and produce the minimum Figma / PRD / VDR handoff NIO needs to proceed from G2 without inventing or misreading the UI.

---

## Acceptance criteria for Codex

- Current visual styling remains unchanged.
- Gantt focuses on actual UI tasks due by G1.
- PF2.0 / MR0.0.3 gates are present and accurate.
- DC scope alignment is shown as high-risk.
- Screen interim solution is shown as high-risk/unconfirmed.
- PRD / UXUI / third-party dependency is shown as high-risk.
- Workstreams are grouped and readable.
- Function owners appear in metadata/tooltips/details.
- UI-DX owners appear only in UI metadata.
- UX owner fields remain blank/TBC for Jymy.
- Build/lint is run if available.
- Codex reports changed files and assumptions.
