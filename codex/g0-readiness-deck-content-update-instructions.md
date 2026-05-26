# Codex Instruction — Update G0 Readiness Deck Content

## Objective

Update the content in the CDO presentation / G0 Readiness deck so the narrative is sharper, more senior and less defensive.

The current deck broadly works, but it needs to shift from sounding like UX/UI is defending itself into a controlled **G1 recovery plan**.

Core framing:

> G0 is not a UI failure. It exposed a programme delivery-readiness gap.

The update must protect UI/DX by making it clear that UI cannot safely commit to final implementation design while screen hardware, mitigation route, PRD/VDR ownership, feature ownership and Systems alignment remain unstable.

---

## Non-negotiables

1. **Do not alter the visual styling.**
   - Do not change colours.
   - Do not change layout.
   - Do not change slide structure.
   - Do not change typography styles unless required by the tool because the McLaren font is unavailable.
   - Preserve current deck hierarchy, spacing and visual treatment.

2. **Update copy only.**
   - This is a content refinement task.
   - If additional slides already exist, update the text boxes.
   - If a new slide is required, clone the existing style and reuse its layout.

3. **Use British English.**

4. **Use corporate, objective wording.**
   - Do not blame named individuals.
   - Do not repeatedly use the word “failure”.
   - Prefer “readiness gap”, “delivery-readiness”, “alignment”, “ownership”, “mitigation route” and “G1 recovery”.

5. **Avoid making UI/DX look like the blocker.**
   - The issue is not design quality.
   - The issue is unstable inputs and lack of programme readiness.

---

## Deck-level content changes

### Replace “G0 FAILIURE”

Current typo / wording:

```text
G0 FAILIURE
```

Replace with:

```text
G0 READINESS GAP
```

Reason:
- Fixes typo.
- Avoids inflammatory “failure” framing.
- Positions the topic as a controlled delivery-readiness issue.

---

## Slide: Executive Summary / G0 Readiness

### Title

Use:

```text
G0 READINESS GAP: UI/DX IMPACT
```

### Main issue block

Replace with:

```text
ISSUE

G0 is not a UI failure. It exposed a programme delivery-readiness gap.

• DC scope is not fully aligned
• 39 DC tickets include placeholder content
• PRD / VDR ownership is unclear
• Screen hardware and mitigation route remain unresolved
```

### Root cause block

Current heading may be “WHY G0 MISSED READINESS”. Replace with:

```text
WHY G0 DID NOT REACH DELIVERY READINESS

• Screen hardware was unavailable and the P35 / P47 screen decision landed late
• Job 1 intent screen availability now impacts MRD
• No clear FO / EM-led PRD process was established
• UX involvement before G0 was not clearly mandated within the process
• DFT engagement was incomplete across all required domains
```

Important wording note:
- Do not use “UX was told involvement was not needed at G0”.
- Use “UX involvement before G0 was not clearly mandated within the process”.
- This keeps the point but avoids looking like a personal attack.

### Systems gap block

Replace with:

```text
SYSTEMS GAP

Feature requirements are closely tied to cluster and main infotainment UX/UI. However, the design intent, implementation route and Systems feature ownership were not aligned early enough to support a safe G0 commitment.
```

### UI impact block

Replace with:

```text
UI IMPACT

• Cluster and infotainment cannot be finalised without implementation reality
• NIO may build from ambiguous VDRs or partial Figma references
• Mitigation UI risks becoming throwaway work
• Rework moves into G2 / G3 and compresses validation time
```

### Ask block

Replace with:

```text
ASK BY G1

• Lock IC / ICS mitigation route
• Triage DC tickets into deliverable, mitigation, blocked or placeholder
• Assign FO / EM PRD owners
• Agree Figma + PRD + VDR handoff pack
• Confirm what NIO can realistically implement for PF2.0
```

---

## Slide: Impact

### Header

```text
IMPACT
```

### Kicker

```text
MR0.0.3 / PF2.0 — what this means for UI delivery
```

### Main headline

```text
The risk is not design quality.
It is committing UI against unstable inputs.
```

### Intro

```text
Without locked screen hardware, clear feature ownership and an agreed PRD / VDR handoff, UI is forced to design into uncertainty. That creates rework, supplier ambiguity and avoidable delivery risk before G1.
```

### Impact point 01

```text
01
Scope ambiguity

DC items need triage into deliverable, mitigation, blocked or placeholder.
```

### Impact point 02

```text
02
Hardware dependency

Screen route and Job 1 availability affect cluster and centre display intent.
```

### Impact point 03

```text
03
Supplier risk

NIO may build from incomplete VDRs if Figma, PRD and ownership are not aligned.
```

### Impact point 04

```text
04
Rework risk

Unstable inputs push UI changes into G2 / G3 and compress validation time.
```

### Impact point 05

```text
05
Decision needed

Lock mitigation route and owners before G1 on 10 June 2026.
```

---

## Final slide

If the current final slide says:

```text
CHEERS
```

Replace with one of the following, preferably option 1:

```text
G1 RECOVERY PLAN
```

or:

```text
NEXT STEPS
```

Do not leave the final slide as “CHEERS” for this topic. The subject is a serious escalation / recovery discussion and the sign-off should match that.

---

## Optional “G1 Recovery Plan” slide

If there is a spare final slide or if cloning the final slide is straightforward, create/update a short closing slide.

### Title

```text
G1 RECOVERY PLAN
```

### Body

```text
To protect PF2.0 delivery, the G1 recovery plan must close the inputs that UI/DX requires to commit safely.

1. Confirm screen and mitigation route
2. Triage all DC tickets
3. Assign FO / EM ownership for PRD and VDR
4. Agree the Figma + PRD + VDR handoff format
5. Confirm what NIO can implement, mitigate or defer
```

### Closing line

```text
The aim is not to reopen design. The aim is to make the delivery route safe.
```

---

## Political framing to preserve

Use this logic throughout:

- UI/DX is not blocking delivery.
- UI/DX is identifying what must be stable before it can commit to delivery.
- The programme needs a controlled G1 recovery path.
- The issue is the lack of aligned inputs, not lack of UI design output.
- G1 on 10 June 2026 is the key recovery point.

---

## Facts to retain

- P35 / P47 screen decision landed late.
- Screen hardware was unavailable.
- Job 1 intent screen availability impacts MRD.
- Digital Cockpit has 39 tickets.
- Some DC tickets are placeholders.
- PRD / VDR ownership is unclear.
- Some software-component features are not yet sourced.
- Feature requirements depend on cluster and main infotainment UX/UI.
- Design intent was not aligned early enough with Systems feature owners.
- UX/UI cannot finalise implementation intent without implementation reality.

---

## Acceptance criteria

- Agenda typo is fixed.
- “Failure” framing is softened to “readiness gap” where appropriate.
- Summary slide protects UI/DX and explains the programme readiness issue.
- Impact slide explains consequences clearly.
- Final slide is changed from “Cheers” to “G1 Recovery Plan” or “Next Steps”.
- No visual styling is changed.
- Copy remains concise enough to fit existing text boxes.
- The deck reads as a controlled recovery plan, not a defensive UX/UI explanation.
