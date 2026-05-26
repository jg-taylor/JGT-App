# NIO DFT Delivery Update — 26 May 2026

## Purpose

Use this file as a data/planning addendum for the P35/P47 UI-DX Gantt and NIO delivery planning view.

This captures the latest DFT session update from Monisha regarding MR0.0.3 and MR0.2.0, including mitigation screens, UX/UI effort sequencing, VDR impact and updated G0/G1 timing.

## Non-negotiable implementation rule

This is a **data-only update**.

Do not alter the Gantt visual styling, colours, typography, dark/orange treatment, layout density, expansion width, scroll behaviour, milestone styling, lane hierarchy or component structure.

Only update:
- dates
- delivery markers
- workstream metadata
- accountability
- tooltips
- planning notes
- risk/dependency labels

---

## Key update summary

### MR0.0.3

MR0.0.3 remains the immediate recovery / clarification window.

Actions:
1. Mitigation screens need to be discussed and aligned with NIO.
2. This is fully dependent on cross-domain screen needs for the LabCar.
3. Monisha to action mitigation screen alignment by **Friday 29 May 2026**.
4. UX/UI effort will be discussed after functional scope and screen choice are clear.
5. Monisha and Jymy are action owners for UX/UI effort discussion.
6. Based on the functional scope and screen choice, new VDRs may need to be raised to accommodate UX/UI adaptation needs.

### MR0.2.0

MR0.2.0 appears to carry the same scope previously declared, shifted from MR0.0.3 to MR0.2.0 under PF2.0.

Actions / assumptions:
1. Mitigation screen proposal to NIO:
   - Driver Display: **12.3 inch, 8:3, 1920x720**
   - Same size, aspect ratio and active area as Job 1 intent
   - Difference is housing and backlight technology
   - Infotainment Display: **13.2 inch, 3:4 active area, 201.096 x 268.128, 1440x1920**
2. DA analysis is ongoing.
3. Anastasis to action DA analysis by **Friday 29 May 2026**.
4. Scope declared earlier remains the same.
5. Scope shifts from MR0.0.3 to MR0.2.0, which is still under PF2.0.
6. UX/UI teams are expected to work with feature owners to meet VDR G0 and G1 needs.

---

## Timing updates to reflect in Gantt

### MR0.0.3 — existing timing remains relevant

| Gate | Date | Note |
|---|---:|---|
| SW G0 | 20 May 2026 | Already passed; readiness issue identified |
| SW G1 | 10 June 2026 | UX/UI effort discussion depends on screen choice and functional scope |
| SW G2 | 8 July 2026 | NIO work / FDS path |
| SW G3 | 16 September 2026 | NIO output to McLaren |

### MR0.2.0 — updated PF2.0 continuation timing

| Gate | Date | Note |
|---|---:|---|
| SW G0 | 22 July 2026 | VDR G0 needs for shifted scope |
| SW G1 | 12 August 2026 | VDR G1 needs for shifted scope |
| SW G2 | 9 September 2026 | NIO work / implementation continuation |
| SW G3 | 4 November 2026 | NIO output / MR0.2.0 maturity point |

---

## Gantt correction / interpretation

Codex should update the Gantt logic so that:

1. **MR0.0.3 is treated as the immediate clarification and recovery window**.
   - Focus: screen route, cross-domain LabCar needs, functional scope, UX/UI effort sizing, possible new VDRs.
   - Key action date: **29 May 2026**.
   - G1 remains **10 June 2026**, but UX/UI effort cannot be finalised until screen choice and functional scope are aligned.

2. **MR0.2.0 becomes the main shifted PF2.0 delivery window for declared scope**.
   - G0: **22 July 2026**.
   - G1: **12 August 2026**.
   - Same previously declared scope, shifted from MR0.0.3 to MR0.2.0.
   - UX/UI must work with feature owners against VDR G0/G1 needs.

3. **The Gantt should show the dependency chain clearly**:
   - Screen mitigation alignment by 29 May
   - Functional scope + screen choice
   - UX/UI effort sizing
   - Possible new VDRs
   - MR0.2.0 VDR G0 / G1 delivery path

4. **Do not imply UI/DX owns the functional scope or screen hardware choice**.
   - UI/DX supports effort sizing, Figma references, implementation assumptions and handoff readiness.
   - Functional owners and Systems remain accountable for scope / PRD / VDR content.

---

## Recommended new workstreams / markers

Use existing Gantt styling and lanes only.

```json
[
  {
    "id": "mr003-mitigation-screen-alignment",
    "label": "Mitigation screen alignment with NIO",
    "lane": "Rig / mule support",
    "start": "2026-05-26",
    "end": "2026-05-29",
    "owner": "Monisha Raju",
    "support": ["Jymy", "James GT", "NIO"],
    "status": "critical_dependency",
    "tooltip": "Mitigation screens to be discussed and aligned with NIO by 29 May. Dependent on cross-domain LabCar screen needs."
  },
  {
    "id": "mr003-functional-scope-screen-choice",
    "label": "Functional scope + screen choice lock",
    "lane": "Core baseline",
    "start": "2026-05-26",
    "end": "2026-06-10",
    "owner": "Monisha Raju / Systems",
    "support": ["Jymy", "James GT"],
    "status": "at_risk",
    "tooltip": "UX/UI effort discussion follows functional scope and screen choice. UI cannot safely commit until these inputs are stable."
  },
  {
    "id": "mr003-uxui-effort-sizing",
    "label": "UX/UI effort sizing after screen choice",
    "lane": "Core UI definition",
    "start": "2026-05-29",
    "end": "2026-06-10",
    "owner": "Monisha Raju / Jymy",
    "support": ["James GT"],
    "status": "dependent",
    "tooltip": "UX/UI effort to be discussed after functional scope and screen choice are clarified."
  },
  {
    "id": "mr003-new-vdrs-for-uxui-adaptations",
    "label": "Potential new VDRs for UX/UI adaptations",
    "lane": "Core UI definition",
    "start": "2026-06-03",
    "end": "2026-06-10",
    "owner": "Feature Owners / Systems",
    "support": ["Jymy", "James GT"],
    "status": "conditional",
    "tooltip": "New VDRs may be raised based on scope and screen choice to accommodate UX/UI adaptation needs."
  },
  {
    "id": "mr020-da-analysis",
    "label": "DA analysis for mitigation route",
    "lane": "Core baseline",
    "start": "2026-05-26",
    "end": "2026-05-29",
    "owner": "Anastasis",
    "support": ["Monisha Raju", "NIO"],
    "status": "critical_dependency",
    "tooltip": "DA analysis ongoing. Anastasis to action by 29 May."
  },
  {
    "id": "mr020-vdr-g0-g1-prep",
    "label": "MR0.2.0 VDR G0/G1 UX/UI prep",
    "lane": "Core UI definition",
    "start": "2026-06-10",
    "end": "2026-08-12",
    "owner": "Feature Owners / Systems",
    "support": ["Jymy", "James GT", "UI-DX"],
    "status": "planned",
    "tooltip": "UX/UI teams expected to work with feature owners to meet MR0.2.0 VDR G0 on 22 July and G1 on 12 August."
  }
]
```

---

## Updated interpretation for UI-DX

For UI-DX, this update means:

- The immediate MR0.0.3 task is **not full design delivery**.
- The immediate task is to support alignment around mitigation screens, screen choice and functional scope.
- UI/DX effort sizing happens **after** those inputs are clear.
- If adaptations are required, new VDRs may be raised.
- The main PF2.0 delivery activity now appears to move into MR0.2.0, with G0 on **22 July 2026** and G1 on **12 August 2026**.

Use this language in tooltips or planning notes:

> MR0.0.3 is the recovery and clarification window. MR0.2.0 is the shifted PF2.0 delivery window for the declared scope.

---

## Acceptance criteria

- Gantt includes 29 May 2026 as a key screen mitigation / DA analysis action date.
- Gantt reflects MR0.2.0 G0 as 22 July 2026.
- Gantt reflects MR0.2.0 G1 as 12 August 2026.
- MR0.0.3 remains visible but is reframed as clarification/recovery, not full UI delivery.
- Workstreams show dependency on screen choice and functional scope before UX/UI effort sizing.
- Possible new VDRs are represented as conditional.
- Visual styling remains unchanged.
- UI and UX remain separate.
- UI/DX is shown as supporting handoff and effort sizing, not owning functional scope or hardware decisions.
