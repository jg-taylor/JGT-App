# P35/P47 UI-DX Gantt — L2 Feature Family Groupings

## Purpose

This file imports the latest Jama L2 feature family taxonomy from `Feature Library _Jama Import__L2 Feature Families_Grid.csv` so Codex can align the Gantt to the correct feature groupings without James needing to copy/paste the source data.

This is a **data-only input**. Do not alter the existing Gantt visual styling, colours, typography, dark/orange treatment, spacing, expansion width, scroll behaviour, milestone styling or lane hierarchy.

The Gantt should continue to focus on the actual UI-DX workstreams required by **P35 MR0.0.3 / PF2.0 SW G1 — 10 June 2026**. Do not render every L2 feature family as its own bar. Use these groupings as taxonomy metadata for tooltips, detail panels, filtering and accountability.

UX and UI remain separate. Do not populate UX owners; Jymy owns the UX lane separately.

---

## Domain counts

| Domain | L2 families |
|---|---:|
| ADAS | 6 |
| Body | 13 |
| Connected Car | 5 |
| Digital Cockpit | 13 |
| Energy & Thermal | 5 |
| Infrastructure | 11 |
| Motion | 8 |
| **Total excluding N/A** | **61** |

---

## L2 feature families by domain

### ADAS
- MFL-SET-1 — Active Safety
- MFL-SET-2 — Awareness & Smart Assistance
- MFL-SET-3 — Driver Monitoring
- MFL-SET-4 — Driving
- MFL-SET-5 — Parking
- MFL-SET-6 — Towing

### Body
- MFL-SET-7 — All-round visibility
- MFL-SET-8 — Climate
- MFL-SET-9 — Closures
- MFL-SET-10 — Exterior Fixtures
- MFL-SET-11 — Exterior Lighting
- MFL-SET-12 — Interior Lighting
- MFL-SET-13 — Occupant Safety
- MFL-SET-14 — Pedestrian Safety
- MFL-SET-15 — Seating
- MFL-SET-16 — Steering Column
- MFL-SET-17 — Storage & Accessories
- MFL-SET-18 — Windows & Sunroof
- MFL-SET-19 — Wipe & Wash

### Connected Car
- MFL-SET-20 — Call Services
- MFL-SET-21 — Connectivity
- MFL-SET-22 — Connected Security & Access
- MFL-SET-23 — Internet of Things (IoT)
- MFL-SET-24 — Remote App

### Digital Cockpit
- MFL-SET-25 — Application & Services
- MFL-SET-26 — Audio
- MFL-SET-27 — Driver Information
- MFL-SET-28 — Intelligent Voice Assistant (IVA)
- MFL-SET-29 — InCabin Monitoring & Perception Services
- MFL-SET-30 — Media & Entertainment
- MFL-SET-31 — Native System
- MFL-SET-32 — Native Navigation
- MFL-SET-33 — Smartphone Projections
- MFL-SET-34 — Screens & Switches
- MFL-SET-35 — System Languages
- MFL-SET-36 — Telephony
- MFL-SET-37 — Settings

### Energy & Thermal
- MFL-SET-38 — Charging
- MFL-SET-39 — Fuel & Refueling
- MFL-SET-40 — HV Energy Management
- MFL-SET-41 — LV Energy Management
- MFL-SET-42 — Thermal Management

### Infrastructure
- MFL-SET-43 — ADFTP
- MFL-SET-44 — Contextual Modes
- MFL-SET-45 — Data Closed Loop (DCL)
- MFL-SET-46 — Over-the-Air (OTA)
- MFL-SET-47 — Network
- MFL-SET-48 — Security & Access
- MFL-SET-49 — User Accounts & Personalisation
- MFL-SET-50 — Vehicle Modes & Configuration
- MFL-SET-51 — Vehicle States
- MFL-SET-52 — Warnings, Tell-Tales & Indicators
- MFL-SET-53 — Diagnostics

### Motion
- MFL-SET-54 — Aerodynamics
- MFL-SET-55 — Brakes, Traction & Stability
- MFL-SET-56 — Drive Modes
- MFL-SET-57 — Powertrain
- MFL-SET-58 — Steering
- MFL-SET-59 — Suspension
- MFL-SET-61 — Transmission
- MFL-SET-62 — Wheels & Tyres

---

## Codex instruction: use feature families as metadata, not one bar per family

The Gantt should continue to show grouped UI-DX workstreams. These L2 families should sit behind those workstreams as metadata.

Correct approach:
- grouped workstream bar
- visible UI owner
- critical date
- function owners / family list in tooltip or detail panel
- risk/dependency metadata

Incorrect approach:
- 61 separate family bars
- 163 requirement bars
- new colour system
- visual redesign
- UX ownership populated by UI people

---

## UI-DX G1 workstream mapping

### 1. DC scope triage / ticket categorisation

**Lane:** Core UI definition  
**Timing:** 20 May 2026 → 10 June 2026  
**UI owner:** James GT / Jamie  
**UX owner:** TBC by Jymy  
**Purpose:** Use the L2 taxonomy to split DC requirements into deliverable, mitigation, placeholder, blocked or not UI-impacting before G1.

**Relevant L2 families:**
- Digital Cockpit / Application & Services
- Digital Cockpit / Audio
- Digital Cockpit / Driver Information
- Digital Cockpit / Intelligent Voice Assistant (IVA)
- Digital Cockpit / Media & Entertainment
- Digital Cockpit / Native System
- Digital Cockpit / Native Navigation
- Digital Cockpit / Smartphone Projections
- Digital Cockpit / Screens & Switches
- Digital Cockpit / System Languages
- Digital Cockpit / Telephony
- Digital Cockpit / Settings

**Rendering instruction:** one grouped bar only. Add the family list to tooltip/detail panel.

---

### 2. Cluster / driver display G1 UI pack

**Lane:** Core UI definition  
**Timing:** 20 May 2026 → 10 June 2026  
**UI owner:** New UI Lead  
**UX owner:** TBC by Jymy  
**Purpose:** Keep all cluster, driver information, tell-tale, speed/tacho/gear/powertrain/energy/status surfaces together.

**Relevant L2 families:**
- Digital Cockpit / Driver Information
- Digital Cockpit / Screens & Switches
- Infrastructure / Warnings, Tell-Tales & Indicators
- Infrastructure / Vehicle States
- Motion / Drive Modes
- Motion / Powertrain
- Motion / Transmission
- Motion / Wheels & Tyres
- Motion / Brakes, Traction & Stability
- Energy & Thermal / HV Energy Management
- Energy & Thermal / LV Energy Management

**Rendering instruction:** one grouped G1 bar. Do not split odometer, tacho, gear, power, TPMS and warnings into unrelated workstreams.

---

### 3. ICS / centre display G1 UI pack

**Lane:** Core UI definition  
**Timing:** 20 May 2026 → 10 June 2026  
**UI owner:** Oli  
**UX owner:** TBC by Jymy  
**Purpose:** Group central display, infotainment, system, media, phone, projection, app/service and settings surfaces into one centre-display UI package.

**Relevant L2 families:**
- Digital Cockpit / Application & Services
- Digital Cockpit / Native System
- Digital Cockpit / Settings
- Digital Cockpit / System Languages
- Digital Cockpit / Smartphone Projections
- Digital Cockpit / Telephony
- Digital Cockpit / Media & Entertainment
- Digital Cockpit / Audio
- Digital Cockpit / Native Navigation
- Infrastructure / User Accounts & Personalisation

**Rendering instruction:** one grouped G1 bar. Media-related UI stays with Oli.

---

### 4. Controls / hard switch state mapping

**Lane:** Core UI definition  
**Timing:** 20 May 2026 → 10 June 2026  
**UI owner:** Jamie  
**UX owner:** TBC by Jymy  
**Purpose:** Group hard switch, stalk, steering, body-control, seat, door, frunk/tailgate, lighting and screen feedback states together.

**Relevant L2 families:**
- Digital Cockpit / Screens & Switches
- Body / Climate
- Body / Closures
- Body / Exterior Fixtures
- Body / Exterior Lighting
- Body / Interior Lighting
- Body / Occupant Safety
- Body / Seating
- Body / Steering Column
- Body / Windows & Sunroof
- Body / Wipe & Wash
- Infrastructure / Vehicle Modes & Configuration
- Infrastructure / Vehicle States

**Rendering instruction:** one grouped bar. Do not create separate bars for every body-control family.

---

### 5. HVAC / Auto climate UI check

**Lane:** Core UI definition  
**Timing:** 20 May 2026 → 10 June 2026  
**UI owner:** Oli / Jamie  
**UX owner:** TBC by Jymy  
**Purpose:** Confirm whether Auto HVAC is only an exposed hidden control/state or whether it changes HVAC logic, fail states or reuse into PF2.0.

**Relevant L2 families:**
- Body / Climate
- Energy & Thermal / Thermal Management
- Energy & Thermal / LV Energy Management

**Rendering instruction:** focused G1 decision/check workstream.

---

### 6. Energy / range / charging UI surfaces

**Lane:** Core UI definition  
**Timing:** 20 May 2026 → 10 June 2026  
**UI owner:** New UI Lead / Laura  
**UX owner:** TBC by Jymy  
**Purpose:** Capture visible charging, energy, range, battery and status surfaces without implying UI-DX owns functional energy/thermal software.

**Relevant L2 families:**
- Energy & Thermal / Charging
- Energy & Thermal / Fuel & Refueling
- Energy & Thermal / HV Energy Management
- Energy & Thermal / LV Energy Management
- Energy & Thermal / Thermal Management
- Digital Cockpit / Driver Information

**Rendering instruction:** one grouped G1 bar. Mark hidden/non-visual energy/thermal function as no UI impact where applicable.

---

### 7. Voice assistant / SDK dependency UI

**Lane:** Core UI definition  
**Timing:** 20 May 2026 → 10 June 2026  
**UI owner:** Laura / Bruno  
**UX owner:** TBC by Jymy  
**Purpose:** Track wake-word, push-to-talk, voice-state and third-party SDK dependency risks. Mark conditional/blocked content clearly for G1.

**Relevant L2 families:**
- Digital Cockpit / Intelligent Voice Assistant (IVA)
- Digital Cockpit / Audio
- Digital Cockpit / Native System

**Rendering instruction:** one high-risk dependency workstream. Include SDK risk in tooltip/details.

---

### 8. Connectivity / vehicle status UI touchpoints

**Lane:** PF2 uplift  
**Timing:** 20 May 2026 → 8 July 2026  
**UI owner:** Oli / Design System Head  
**UX owner:** TBC by Jymy  
**Purpose:** Track visible cloud, connectivity, DCL, IDC, vehicle status, remote app and account/personalisation UI surfaces only.

**Relevant L2 families:**
- Connected Car / Call Services
- Connected Car / Connectivity
- Connected Car / Connected Security & Access
- Connected Car / Internet of Things (IoT)
- Connected Car / Remote App
- Infrastructure / Data Closed Loop (DCL)
- Infrastructure / Network
- Infrastructure / Over-the-Air (OTA)
- Infrastructure / Vehicle States
- Infrastructure / User Accounts & Personalisation

**Rendering instruction:** may run to G2 because some surfaces are dependency/status touchpoints rather than core G1 screen definitions.

---

### 9. Infrastructure / diagnostic / vehicle moding states

**Lane:** PF2 uplift  
**Timing:** 20 May 2026 → 8 July 2026  
**UI owner:** Design System Head / Jamie  
**UX owner:** TBC by Jymy  
**Purpose:** Capture visible diagnostics, network, wake/sleep, warning, tell-tale, vehicle mode and configuration states; mark back-end-only infrastructure as no UI impact.

**Relevant L2 families:**
- Infrastructure / ADFTP
- Infrastructure / Contextual Modes
- Infrastructure / Data Closed Loop (DCL)
- Infrastructure / Diagnostics
- Infrastructure / Over-the-Air (OTA)
- Infrastructure / Network
- Infrastructure / Security & Access
- Infrastructure / Vehicle Modes & Configuration
- Infrastructure / Vehicle States
- Infrastructure / Warnings, Tell-Tales & Indicators

**Rendering instruction:** use as metadata/dependency workstream. Avoid overloading the Gantt with non-visual infrastructure tasks.

---

### 10. ADAS / vehicle visualisation UI dependencies

**Lane:** PF2 uplift  
**Timing:** 20 May 2026 → 8 July 2026  
**UI owner:** Bruno / Jamie  
**UX owner:** TBC by Jymy  
**Purpose:** Include ADAS L2 families as dependency taxonomy only unless specific PF2.0 screens/states are confirmed. Useful for future visualisation/3D/renders, but should not dominate the G1 UI task list.

**Relevant L2 families:**
- ADAS / Active Safety
- ADAS / Awareness & Smart Assistance
- ADAS / Driver Monitoring
- ADAS / Driving
- ADAS / Parking
- ADAS / Towing

**Rendering instruction:** do not render as a core G1 workstream unless scope is explicitly confirmed.

---

### 11. Design system component capture

**Lane:** Design system foundations  
**Timing:** 20 May 2026 → 8 July 2026  
**UI owner:** Design System Head  
**UX owner:** TBC by Jymy  
**Purpose:** Turn G1 screen/control/status needs into reusable components, states, icon/tell-tale requirements, localisation considerations and NIO handoff assets.

**Relevant L2 families:**
- Digital Cockpit / System Languages
- Digital Cockpit / Settings
- Digital Cockpit / Native System
- Infrastructure / Warnings, Tell-Tales & Indicators
- Digital Cockpit / Screens & Switches
- Infrastructure / User Accounts & Personalisation
- Infrastructure / Security & Access

**Rendering instruction:** design-system bar can continue to G2 because component capture and handoff packaging support NIO FDS/dev.

---

## Domains not to render as primary G1 bars unless explicit UI scope is confirmed

| Domain | Rule |
|---|---|
| ADAS | Dependency/future visualisation taxonomy unless specific MR0.0.3/PF2.0 UI scope is confirmed. |
| Connected Car | Only visible cloud/status/remote/account surfaces should become UI tasks. |
| Infrastructure | Only visible diagnostic/status/warnings/modes should become UI tasks; back-end plumbing should be metadata/no UI impact. |
| Energy & Thermal | Only visible range/energy/charging/HVAC states should become UI tasks. |

---

## Acceptance criteria

- Feature-family groupings are available as data/metadata for the Gantt.
- Gantt continues to focus on actual UI-DX workstreams due by G1, not every L2 family.
- Current visual styling remains untouched.
- UX ownership remains separate/unpopulated.
- Media-related UI remains assigned to Oli.
- Cluster-related features remain grouped under a cluster/driver-display package.
- Controls/hardpoints remain grouped under Jamie as UI lead / production authority.
- Design-system families support component capture and handover rather than isolated feature design.
