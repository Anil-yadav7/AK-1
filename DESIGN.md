# AnnexZero — Design System & UI Architecture Contract (DESIGN.md)

> **AGENT DIRECTIVE:** You are building the frontend for **AnnexZero** (Automated EU AI Act & Global Compliance Dossier Compiler). Before creating or modifying any `.tsx`, `.jsx`, or `.css` file, you MUST strictly enforce the tokens, layout geometry, typography scales, and component constraints defined in this document. Never invent arbitrary Tailwind colors, spacing values, or decorative shadows outside this specification.

---

## 1. Visual Direction & Core Philosophy

- **Aesthetic Archetype:** Linear-grade developer observability precision blended with Stripe-grade institutional regulatory clarity.
- **Theme Polarity:** High-contrast Light Mode workspace (`#F8FAFC` canvas, `#FFFFFF` cards) paired with a fixed Dark Obsidian navigation sidebar (`#0F172A`). This ensures effortless legibility for long legal Annex IV clauses, statistical tables, and syntax-highlighted Python AST diffs.
- **Anti-Patterns (STRICTLY BANNED):**
  - NO dark-mode neon gradients, glowing blurs, or glassmorphism (`backdrop-blur` is only permitted on modal overlays).
  - NO heavy drop shadows (`shadow-lg`, `shadow-xl`, `shadow-2xl` are banned on workspace cards).
  - NO more than ONE solid primary Call-To-Action button (`bg-cobalt-600`) per screen viewport.
  - NO horizontal scrollbars inside data tables (strictly cap tables at 6 visible columns maximum).
  - NO unformatted floating numbers in evaluation tables (always apply `font-mono tabular-nums`).

---

## 2. Color Token System

### 2.1 Surfaces & Chrome
| Token Name | Hex Value | Tailwind Class | Usage Rule |
| :--- | :--- | :--- | :--- |
| **Canvas Alabaster** | `#F8FAFC` | `bg-canvas` | Main scrollable application background behind cards |
| **Surface Pure White** | `#FFFFFF` | `bg-surface` | All elevated content cards, tables, header bar, and drawers |
| **Sidebar Obsidian** | `#0F172A` | `bg-obsidian-900` | Fixed 240px left navigation chrome |
| **Sidebar Hover** | `#1E293B` | `bg-obsidian-800` | Inactive navigation item hover background |
| **Code Diff Added** | `#F0FDF4` | `bg-emerald-50/70` | Unified diff line highlight for injected `@eu_ai_act_audit` decorators |

### 2.2 Brand & Interactive Accents
| Token Name | Hex Value | Tailwind Class | Usage Rule |
| :--- | :--- | :--- | :--- |
| **Regulatory Cobalt (Primary)** | `#1D4ED8` | `bg-cobalt-700` / `text-cobalt-700` | Single primary top-right CTA button and focus rings |
| **Cobalt Hover** | `#1E40AF` | `hover:bg-cobalt-800` | Primary button hover state |
| **Active Nav Pill** | `#2563EB` | `bg-cobalt-600` | Active navigation item indicator pill inside dark sidebar |

### 2.3 Typography & Border Hierarchy
| Token Name | Hex Value | Tailwind Class | Usage Rule |
| :--- | :--- | :--- | :--- |
| **Heading Ink** | `#0F172A` | `text-slate-900` | H1, H2, KPI numeric readouts, and active table headers |
| **Body Slate** | `#334155` | `text-slate-700` | Primary body copy, Annex IV narrative clauses, table cells |
| **Muted Metadata** | `#64748B` | `text-slate-500` | Micro uppercase labels, timestamps, breadcrumb prefixes |
| **Sidebar Muted Text** | `#94A3B8` | `text-slate-400` | Inactive sidebar navigation links |
| **Hairline Border** | `#E2E8F0` | `border-border-subtle` | Mandatory `1px solid` border on all cards, headers, and table rows |

### 2.4 Semantic Compliance Status Tokens (EU AI Act Readiness)
Every compliance badge MUST use the exact 3-part recipe: **Background + Text + 1px Border** with `rounded-[4px]` (`rounded-tag`).

1. **Compliant / Verified (Annex IV Ready)**
   - Text: `#10B981` (`text-status-verified-text`)
   - Background: `#ECFDF5` (`bg-status-verified-bg`)
   - Border: `1px solid #A7F3D0` (`border-status-verified-border`)
2. **Partial / Drift Detected (Needs Review)**
   - Text: `#D97706` (`text-status-drift-text`)
   - Background: `#FFFBEB` (`bg-status-drift-bg`)
   - Border: `1px solid #FDE68A` (`border-status-drift-border`)
3. **Non-Compliant / High-Risk Blocker (Article 99 Penalty Risk)**
   - Text: `#E11D48` (`text-status-blocker-text`)
   - Background: `#FFF1F2` (`bg-status-blocker-bg`)
   - Border: `1px solid #FECDD3` (`border-status-blocker-border`)

---

## 3. Typography Scale & Font Pairing

- **Primary UI Font (`font-sans`):** `Inter` or `Geist Sans`, sans-serif.
- **Technical & Audit Font (`font-mono`):** `JetBrains Mono`, monospace.
  - **MANDATORY MONOSPACE RULE:** You MUST apply `font-mono` to all Git commit SHA hashes (`8f92a1c`), repository file paths (`src/inference/ranker.py`), Python decorator snippets (`@eu_ai_act_audit`), dataset filenames (`eval_subgroups.parquet`), SHA-256 dossier signatures (`0x9f84...3b2e`), and numeric metric readouts.

| Role | Size | Weight | Tracking | Line Height | Tailwind Utility |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **KPI Metric Display** | `32px` | SemiBold (`600`) | `-0.02em` | `1.15` | `text-kpi font-semibold tracking-tight font-mono tabular-nums` |
| **H1 Page Title** | `24px` | SemiBold (`600`) | `-0.02em` | `1.25` | `text-h1 font-semibold tracking-tight text-slate-900` |
| **H2 Card / Section Header** | `18px` | SemiBold (`600`) | `-0.01em` | `1.35` | `text-h2 font-semibold text-slate-900` |
| **Body Primary** | `14px` | Regular (`400`) | `0em` | `1.5` | `text-body text-slate-700` |
| **Monospace Code / Path** | `13px` | Regular (`400`) | `0em` | `1.5` | `text-mono font-mono` |
| **Micro Section Label** | `11px` | SemiBold (`600`) | `+0.05em` | `1.2` | `text-micro uppercase font-semibold tracking-wider text-slate-500` |

---

## 4. Viewport Geometry & Layout Architecture

- **Reference Desktop Frame:** `1440px × 900px` (`min-h-screen flex bg-canvas`).
- **Fixed Left Navigation Sidebar:**
  - Width: `240px` (`w-[240px] shrink-0 fixed inset-y-0 left-0 z-30 bg-obsidian-900 text-slate-400 flex flex-col justify-between`).
  - Contains: Brand Header (`AnnexZero`), Workspace/Repo Switcher dropdown, 6 Primary Navigation Links (`1. Command Center`, `2. AST & AI-BOM Scanner`, `3. Article 12 Telemetry Logs`, `4. Section 4 Fairness Studio`, `5. Lifecycle Diff Log`, `6. Buyer Trust Portal`), and a pinned footer **EU AI Act Risk Tier Card** (`Classified: High-Risk Annex III Point 4`).
- **Sticky Top Header Bar:**
  - Height: `64px` (`h-16 sticky top-0 z-20 bg-surface border-b border-border-subtle px-8 flex items-center justify-between`).
  - Left side: Monospace repo breadcrumb (`Repositories / hr-candidate-ranker / main @ 8f92a1c`) + live GitHub webhook sync badge (`Synced 2m ago via GitHub Actions`).
  - Right side: Secondary ghost/outline action button (`border border-border-subtle bg-surface hover:bg-slate-50 text-slate-700`) + **ONE Primary Solid Cobalt CTA Button** (`bg-cobalt-700 hover:bg-cobalt-800 text-white`).
- **Main Content Grid:**
  - Offset by `240px` left sidebar (`pl-[240px] flex-1`).
  - Outer Workspace Padding: `32px` (`p-8`).
  - Internal Grid: 12-column CSS Grid (`grid grid-cols-12 gap-6`).

---

## 5. Core Screen Layout Blueprints

### Screen 1: Annex IV Command Center & Readiness Dashboard
- **Row 1 (4 KPI Cards — `col-span-3` each):**
  - Card padding: `20px` (`p-5`), `bg-surface border border-border-subtle rounded-card`.
  - Card 1: `Annex IV Completion Score` (`84%`, circular SVG ring, `+12% since commit #8f92a1c`).
  - Card 2: `Detected AI Components (AI-BOM)` (`7 Models & SDKs`, pill badges for `PyTorch`, `Gemini 2.5 Flash`, `HuggingFace`, `Pinecone`).
  - Card 3: `Article 12 Telemetry Coverage` (`99.4% Logged`, `142,850 immutable inference hashes`).
  - Card 4: `Enterprise Deal Readiness` (Amber status badge `1 Blocker Remaining`, pointing to `Section 4: Subgroup Metric Justification`).
- **Row 2 Left (`col-span-8` — 9-Section Annex IV Readiness Matrix):**
  - Vertical accordion list containing all 9 mandatory EU AI Act Annex IV headings.
  - Each row renders: Section ID (`01` to `09`), Heading Title, Automated Source Artifact Chip in `font-mono` (`README.md + openapi.yaml`), Last Verified timestamp, and Semantic Status Tag (`7 Verified`, `1 Drift Detected`, `1 Missing Justification`).
  - **Expanded Row Requirement:** Section 4 must render expanded by default with a rose-tinted alert banner (`bg-status-blocker-bg border border-status-blocker-border text-status-blocker-text p-4 rounded-btn`) displaying: *"Regulator Rejection Risk: Raw AUC (0.91) detected without subgroup calibration justification. Click 'Auto-Draft Statistical Justification' to resolve."*
- **Row 2 Right (`col-span-4` — Live CI/CD Lifecycle Audit Feed):**
  - Vertical timeline of Git commits affecting model weights, prompts, or datasets, with commit SHA, author, diff summary, and Section 6 auto-verification receipt.

### Screen 2: AST Codebase Scanner & Article 12 Telemetry Injector
- **3-Column Split Workspace (`grid-cols-12 gap-6`):**
  - **Left Pane (`col-span-3`):** Searchable AST File Tree highlighting flagged files (`src/inference/ranker.py [2 LLM Calls]`, `src/models/densenet_loader.py [PyTorch Weights]`, `prompts/system_v3.yaml [Unversioned Prompt]`).
  - **Center Pane (`col-span-5`):** Syntax-highlighted code viewer with line numbers and a unified green diff inserting `@eu_ai_act_audit(risk_tier="high_annex_iii", retention_days=180)` above `async def score_candidate_resume()`.
  - **Right Pane (`col-span-4`):** Extracted AI Bill of Materials (AI-BOM) metadata inspector and Article 12 mandatory field checklist (`Execution Timestamp`, `Input SHA-256 Hash`, `Reference DB Version`, `Human Override Flag ID`).

### Screen 3: Section 4 Subgroup Fairness & Metric Justification Studio
- **Top Control Ribbon (`col-span-12`):** Dataset selector (`validation_holdout_2026_Q4.parquet - 12,400 rows`), Subgroup Dimension pills (`Age Bracket`, `Gender`, `Geographic Region`, `Language Dialect`), and Primary Metric toggle (`F1-Score`, `False Negative Rate`, `ECE Calibration`).
- **Left Pane (`col-span-6`):**
  - Top card: Horizontal grouped bar chart with confidence interval whiskers and a dashed vertical line at the `5.0%` maximum permissible disparity threshold.
  - Bottom card: 5-column high-density table (`Subgroup Slice`, `Sample Size n`, `Precision`, `False Negative Rate`, `Parity Status Badge`) with zebra striping (`even:bg-slate-50/60`).
- **Right Pane (`col-span-6`):** Rich narrative compiler for **Annex IV Heading 4** featuring interactive variable chips (`[FNR Disparity: 1.8%]`, `[Confidence Interval: 95% Bootstrap]`) that highlight corresponding table rows on hover, plus a bottom emerald lock button (`Cryptographically Lock Section 4`).

### Screen 4: Enterprise Buyer Trust Portal & Annex IV Dossier Exporter
- **Top Assurance Strip (`col-span-12`):** Full-width emerald verification banner displaying `EU AI Act Regulation (EU) 2024/1689 & 2026/1744 SME Simplified Pathway Verified`, `SHA-256 Dossier Hash: 0x9f84...3b2e`, and `10-Year Article 18 Retention Vault: Active until Nov 2036`.
- **Left Pane (`col-span-7`):** Paper-styled A4 document preview canvas of the compiled 9-section Annex IV Technical File with an eIDAS-ready digital signature block.
- **Right Pane (`col-span-5`):** Radio-card export selector (`Full Annex IV Technical File PDF/A + JSON`, `Article 50 Transparency Bundle`, `ISO/IEC 42001 Crosswalk Matrix`) and an **Article 72 Post-Market Drift Webhook** toggle card.

---

## 6. Interactive Micro-States & Drawer Specification

1. **Slide-Over JSON Schema Inspector Drawer:**
   - Clicking any row in the 9-Section Annex IV Readiness Matrix opens a right-aligned slide-over drawer (`w-[420px] fixed inset-y-0 right-0 z-40 bg-surface border-l border-border-subtle shadow-drawer`) displaying the raw machine-readable JSON schema output for that Annex IV heading.
2. **Elevation & Border Radii:**
   - Outer Cards: `rounded-card` (`8px`), `border border-border-subtle`, default shadow `none`, interactive hover `hover:shadow-card-hover`.
   - Buttons & Inputs: `rounded-btn` (`6px`).
   - Status Pill Tags: `rounded-tag` (`4px`), `px-2 py-0.5 text-micro`.
3. **Accessibility & Contrast:**
   - Maintain WCAG AA (`4.5:1` minimum contrast ratio) on all text and semantic status pills.
   - All interactive rows, tabs, and buttons must exhibit a visible focus ring (`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-700 focus-visible:ring-offset-1`).

---

## 7. Antigravity Agent Browser Verification Checklist

Before marking any UI task complete in Google Antigravity, the agent must launch the preview server and verify:
- [ ] Sidebar is fixed at `240px` (`#0F172A`) and header is sticky at `64px` (`#FFFFFF`).
- [ ] Only ONE solid Cobalt CTA button (`#1D4ED8`) exists in the top-right header per view.
- [ ] All 4 KPI cards use `32px` SemiBold monospace numbers (`tabular-nums`) and `20px` (`p-5`) padding.
- [ ] All 9 EU AI Act Annex IV sections are rendered with monospace artifact source tags and semantic status pills (`Verified`, `Drift Detected`, `Missing Justification`).
- [ ] Section 4 displays the inline Crimson/Rose regulator rejection alert banner and interactive resolution action.
- [ ] Clicking an Annex IV row opens the `420px` slide-over JSON schema inspector drawer smoothly.
