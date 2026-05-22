# LATEST CODEX HANDOFF — P35 / P47 UI-DX Gantt

**Date:** 22 May 2026  
**Owner:** James GT / UI-DX  
**Repo:** `jg-taylor/JGT-App`  
**Purpose:** Give Codex a single latest source-of-truth handoff for updating the P35/P47 UI-DX Gantt.

---

## Critical instruction

This is a **data-only Gantt update**.

Do **not** redesign the Gantt.

Preserve the current Cursor visual version exactly:

- current colours
- dark/orange visual treatment
- typography
- spacing
- expansion width
- horizontal scroll behaviour
- lane hierarchy
- milestone styling
- chart density
- existing visual tokens/classes

Only add or update:

- workstreams
- dates
- owners
- function-owner metadata
- L2 feature-family metadata
- risk flags
- dependency notes
- tooltips / detail-panel content
- G1 accountability

If a colour is needed, map to the existing palette. Do not invent a new colour system.

---

## Source files Codex should use

Use these files in this order:

1. `codex/p35-p47-ui-dx-gantt-full-context-notes.md`  
   **Primary narrative context**. Explains the G1 focus, UI-DX workstreams, Gate0 facts, risks and what the Gantt should communicate.

2. `codex/p35-p47-mr003-g0-uxui-data-addendum.json`  
   **Gate0 / MR0.0.3 data addendum**. Contains Gate0 DoD, 163 requirement issue dashboard, DC 39-ticket risk, screen interim solution risk and cross-domain UI touchpoints.

3. `codex/p35-p47-l2-feature-family-groupings.md`  
   **L2 feature-family taxonomy**. Contains all Jama L2 feature families by domain and maps them to grouped UI-DX workstreams.

4. `codex/p35-p47-l2-feature-ui-head-assignments.json`  
   **Latest UI head assignment data**. Contains the current owner assignment across every L2 feature family.

Treat these files as the current Codex brief. If older issue text conflicts with these files, these files win.

---

## Gantt focus

The Gantt should now focus on the actual UI-DX tasks required by:

> **P35 MR0.0.3 / PF2.0 SW G1 — 10 June 2026**

G1 is the critical UI-DX handoff deadline.

G4 is not the design-definition deadline. G4 is the software business drop.

---

## PF2.0 / MR0.0.3 timing anchor

| Gate | Date | Meaning | UI-DX implication |
|---|---:|---|---|
| SW G0 | 20 May 2026 | Requirements baseline / VDR setup | Identify UI-impacting requirements. |
| SW G1 | 10 June 2026 | UX/UI negotiated and wireframes submitted to NIO | Critical UI-DX handoff deadline. |
| SW G2 | 8 July 2026 | NIO work starts | NIO proceeds from PRD / Figma / VDR input. |
| SW G3 | 16 September 2026 | NIO output to McLaren | Review implementation against UI-DX intent. |
| SW G4 | 11 November 2026 | Vehicle-level SW business drop | Record deltas / release review. |

---

## Actual UI-DX workstreams to render

Do **not** render 61 L2 family bars or 163 requirement bars.

Render grouped workstreams only:

1. DC scope triage / ticket categorisation
2. Screen interim solution / mitigation route
3. Cluster / driver display G1 UI pack
4. ICS / centre display G1 UI pack
5. Controls / hard switch state mapping
6. HVAC / Auto climate UI check
7. Energy / range / charging UI surfaces
8. Voice assistant / SDK dependency UI
9. Connectivity / vehicle status UI touchpoints
10. Infrastructure / diagnostic / vehicle moding states
11. ADAS / vehicle visualisation dependencies
12. Design system component capture
13. NIO Figma / PRD / VDR handoff QA

The first 8 are the main G1 UI pressure items. Connectivity, infrastructure, ADAS and design-system capture may extend to G2 as dependency/support workstreams.

---

## UI / UX separation

UI and UX are separate lanes.

- UI-DX ownership = James GT / Jamie / Oli / Laura / Bruno / New UI Lead / Design System Head.
- UX ownership = Jymy / UX lane.

Do not populate UX owners with UI people.

Use `TBC by Jymy` only where a placeholder is needed.

---

## Latest UI head assignment model

Use `codex/p35-p47-l2-feature-ui-head-assignments.json` as the latest source.

Primary split:

| UI Head | L2 families | Intent |
|---|---:|---|
| Jamie | 14 | Controls, hardpoints, production logic, escalation, final quality. |
| New UI Lead | 14 | Cluster, driver display, vehicle states, warnings, motion surfaces. |
| Oli | 13 | Media, app/services, projection, telephony, centre display, navigation. |
| Bruno | 9 | ADAS, visualisation, perception, renders, richer motion surfaces. |
| Design System Head | 9 | Native system, localisation, diagnostics/status components, handover. |
| Laura | 2 | IVA, clean/motion-led states, minimalist clarity. |

Important grouping rule:

If someone owns a feature family, they own adjacent features within that same family/domain.

Example:

- Oli owns media widgets, so Oli also owns Spotify-style surfaces, media apps, audio surfaces, telephony and smartphone projection where the UI is part of the same centre-display/media ecosystem.
- New UI Lead owns speed/tachometer/odometer-type surfaces, so they also own driver information, vehicle states, warnings/tell-tales and cluster/motion surfaces.
- Jamie owns hard controls and switches, so Jamie also owns related body-control feedback and screen/control state mapping.

---

## Highest-risk items to show in metadata

Show these as risk flags, tooltip text or detail-panel content. Do not create new styling.

1. **DC scope not aligned**  
   DC has 39 requirement tickets, but delivery scope is not aligned and many tickets are placeholders.

2. **Screen interim solution unconfirmed**  
   IC interim route may use NIO RCP. ICS interim route may use QinLing ICS or NT3 Cetus ICS. This impacts layout and handoff assumptions.

3. **PRD / UXUI / third-party software risk**  
   Hardware, PRD, UX/UI and third-party software such as Voice Assistant SDK are blockers for MR0.0.3 delivery.

4. **G1 handoff risk**  
   NIO needs agreed PRD / Figma / VDR references before G2. The UI-DX definition must therefore land by G1.

---

## Suggested data handling

For each rendered workstream, include:

```ts
{
  id: string,
  label: string,
  lane: string,
  start: string,
  end: string,
  uiOwner: string,
  uxOwner: "TBC by Jymy",
  functionOwners: string[],
  featureFamilies: string[],
  outputs: string[],
  riskLevel?: "low" | "medium" | "high",
  status?: "on_track" | "at_risk" | "blocked" | "unconfirmed" | "dependency",
  criticalDate: string,
  tooltipNote: string
}
```

Do not force a visual redesign to fit this. Use whatever existing structure the app already has.

---

## Acceptance criteria

The update is successful when:

- Current Gantt visual styling is unchanged.
- The chart is focused on actual UI-DX tasks due by G1.
- PF2.0 / MR0.0.3 timing is accurate.
- DC scope alignment appears as a high-risk item.
- Screen interim solution appears as a high-risk/unconfirmed dependency.
- UI heads are shown from the latest L2 owner assignment data.
- L2 feature families are available in metadata/tooltips/details.
- UI and UX remain separate.
- UX owners remain blank or TBC by Jymy.
- Codex does not generate one bar per feature family or one bar per requirement.
- Codex runs build/lint if available.
- Codex reports changed files and any assumptions.

---

## Do not do this

- Do not redesign the Gantt.
- Do not change styling colours.
- Do not compress the layout.
- Do not populate UX owners.
- Do not create 61 separate family bars.
- Do not create 163 requirement bars.
- Do not treat G4 as the design deadline.
- Do not imply UI-DX owns functional requirements.
- Do not merge UI, UX, Product and Function Owner accountability.
