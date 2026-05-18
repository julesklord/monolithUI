---
name: apply-jules-standard
description: Apply the Jules Dev Standard to any repository, creating complete documentation, applying the FMG template, and customizing at professional industrial-grade quality.
origin: local
---

# Apply Jules Dev Standard

Complete a new or existing repository to the **Jules Dev v1.0 / FMG Standard**: documentation, config, agent SOPs, git hygiene, and professional polish.

## When to Activate

- "Set up this repo with the standard"
- "Apply the Jules/FMG standard"
- "Initialize repo professionally"
- "Create complete docs for this project"
- "Set up agent SOP files"
- User asks about initializing a repo with full structure

## Workflow

### 1. Analyze the Target Repository

Understand what the project is before templating:

- Read `go.mod`, `package.json`, `Cargo.toml`, `pyproject.toml`, or equivalent to detect language & stack
- Read existing source files to determine entrypoints, architecture, and purpose
- Check if any docs already exist (README, CHANGELOG, AGENT docs)
- Identify the **project type** from the PROJECT-TYPES-GUIDE: CLI Tool, Web App, Library/SDK, API, Mobile App, Desktop App
- Identify the **author/owner** from existing config or ask the user

### 2. Copy the Template

The template source is at:

```
K:\source\repos\jules_dev_standard\template\
```

Copy its full directory tree into the target repository root. Existing files are **not overwritten** unless they are placeholders (empty or template defaults).

**Template structure:**

```
template/
├── README.md           ← Placeholder-based template (customized per project type)
├── CHANGELOG.md        ← Initialized with [Unreleased]
├── LICENSE             ← MIT by default (changeable)
├── .gitignore          ← Hardened universal gitignore
├── VERSION             ← 0.1.0
├── src/
│   └── index.js        ← Placeholder (replace with real entrypoint)
├── docs/
│   ├── AGENT.md        ← Agent SOP entrypoint
│   ├── GEMINI.md       ← Gemini-specific rules (if applicable)
│   ├── SOUL.md         ← Project's "romantic" vision & principles
│   ├── IDENTITY.md     ← System role & tone of voice
│   ├── MEMORY.md       ← Persistent session memory
│   └── wiki/
│       ├── index.md    ← Wiki home / TOC
│       ├── architecture.md  ← ADRs and design decisions
│       ├── development.md   ← Local setup and contribution flow
│       ├── agent-sop.md     ← Agent laws of operation
│       └── hygiene.md       ← Git standards and branch workflow
```

### 3. Fill In Template Placeholders

The `README.md` uses `{{PLACEHOLDER}}` tokens. Use the **PROJECT-TYPES-GUIDE.md** (`template/PROJECT-TYPES-GUIDE.md`) to configure section names based on project type, then fill all remaining tokens based on analysis.

**Project type presets:**

| Type | Section Title | Lifecycle Section | Usage Section |
|------|--------------|-------------------|---------------|
| CLI | `Using as a CLI Tool` | `Core Lifecycle` | `Command Reference` |
| Web App | `Getting Started` | `Application Workflow` | `API Reference` |
| Library/SDK | `Using as a Library` | `Core Lifecycle` | `API Reference` |
| API | `API Overview` | `Request Lifecycle` | `API Endpoints` |
| Mobile | `Getting Started` | `App Flow` | `User Guide` |
| Desktop | `Getting Started` | `Application Flow` | `User Guide` |

**All README placeholders to fill:**

````
{{PROJECT_NAME}}      — Repo name, human-readable
{{TAGLINE}}           — One-line: what it does, who it's for
{{SHORT_DESCRIPTION}} — 1-2 sentence elevator pitch
{{LICENSE}}           — MIT, Apache 2.0, Proprietary, etc.
{{LANGUAGE}}          — Primary language (Go, Rust, TypeScript, Python...)
{{LANGUAGE_BADGE_COLOR}} — Hex color for language badge
{{CURRENT_VERSION}}   — From VERSION file (0.1.0)
{{GITHUB_USER}}       — GitHub owner
{{REPO_NAME}}         — GitHub repo name
{{AUTHOR_NAME}}       — Author/org name
{{PRIMARY_INSTALL_METHOD}} — "go install", "npm install", "pip install", "cargo install", etc.
{{PRIMARY_INSTALL_COMMAND}} — Exact install command
{{SHELL_SLUG}}        — "bash", "powershell", "sh"
{{BUILD_COMMAND}}     — "go build -o binary .", "npm run build", etc.
{{BINARY_OUTPUT_PATH}} — "./binary-name"
{{CORE_PACKAGE_NAME}} — Main module/package name
{{CORE_DESCRIPTION}}  — What the core does
{{CORE_DEPENDENCY_1}} — Primary dependency/framework
{{CORE_DEPENDENCY_2}} — Secondary dependency/framework
{{CORE_API_DESCRIPTION}} — Brief API surface summary

# Features (fill each)
{{FEATURE_1_TITLE}} through {{FEATURE_7_TITLE}}
{{FEATURE_1_DESCRIPTION}} through {{FEATURE_7_DESCRIPTION}}

# Benefits (fill each)
{{BENEFIT_1_TITLE}} through {{BENEFIT_4_TITLE}}
{{BENEFIT_1_DESCRIPTION}} through {{BENEFIT_4_DESCRIPTION}}

# Architecture
{{ARCHITECTURE_INTRO}}
{{USER_ACTOR}}, {{USER_INTERACTION}}, {{FRONTEND_LABEL}}
{{INTERNAL_INTERACTION}}, {{CORE_LABEL}}
{{COMPONENT_1}} through {{COMPONENT_2}}
{{IO_LABEL}}, {{EXTERNAL_1}}, {{EXTERNAL_2}}
{{OPTIONAL_LINK_LABEL}}, {{SDK_LABEL}}
{{EXT1_ACTION}}, {{EXT2_ACTION}}
{{DEPENDENCY_1}}, {{DEPENDENCY_2}}
{{CORE_COMPONENT_DESCRIPTION}}
{{ADDITIONAL_COMPONENTS_BLOCK}} (multi-line, per project type)

# State machine / lifecycle
{{STATE_1}} through {{STATE_3}}, {{SUBSTATE_1}}, {{SUBSTATE_2}}
{{TRIGGER_1}}, {{TRANSITION_1}}, {{TRANSITION_2}}
{{ERROR_CONDITION}}, {{SUCCESS_CONDITION}}, {{FAILURE_CONDITION}}
{{PAUSE_TRIGGER}}, {{RESUME_TRIGGER}}, {{RETRY_LOGIC}}
{{LIFECYCLE_INTRO}}

# Engineering decisions
{{DECISION_1_TITLE}} through {{DECISION_3_TITLE}}
{{DECISION_1_DESCRIPTION}} through {{DECISION_3_DESCRIPTION}}

# Roadmap milestones
{{V1}} through {{V6}}
{{MILESTONE_1}} through {{MILESTONE_6}}

# Acknowledgments
{{ACK_1_NAME}}, {{ACK_1_URL}}, {{ACK_1_DESCRIPTION}}
{{ACK_2_NAME}}, {{ACK_2_URL}}, {{ACK_2_DESCRIPTION}}

# Project-type-specific (from PROJECT-TYPES-GUIDE)
{{PROJECT_TYPE_SECTION}}
{{project_type_section_slug}}
{{PROJECT_TYPE_INTRO}}
{{PROJECT_TYPE_SPECIFIC_INTRO}}
{{PROJECT_TYPE_SECTION_INTRO}}
{{EMBEDDABLE_OR_STANDALONE_INTRO}}
{{DEPENDENCY_INSTALLATION_BLOCK}}
{{LIFECYCLE_OR_WORKFLOW_SECTION}}
{{lifecycle_or_workflow_section_slug}}
{{LIFECYCLE_OR_WORKFLOW_INTRO}}
{{USAGE_OR_API_SECTION}}
{{usage_or_api_section_slug}}
{{DOCUMENTATION_LINKS_BLOCK}}
{{USAGE_OR_API_CONTENT_BLOCK}}
{{ADDITIONAL_COMPONENTS_BLOCK}}
````

**For the template docs/ files, fill these placeholders:**

| File | Placeholder | Action |
|------|------------|--------|
| `docs/AGENT.md` | `[YOUR-ORG]` | Replace with "Jules" or user's org |
| `docs/GEMINI.md` | `[Your Organization]` | Replace with org name |
| `docs/SOUL.md` | All brackets | Replace with actual project soul/principles |
| `docs/IDENTITY.md` | All brackets | Replace with actual role/voice |
| `docs/MEMORY.md` | All brackets | Replace with project status |
| `docs/MEMORY.md` | `[Date]` | Today's date |
| `docs/wiki/index.md` | `[Project Name]` | Replace with project name |
| `docs/wiki/agent-sop.md` | `[Project Name]` | Replace with project name |
| `docs/wiki/agent-sop.md` | `[e.g. ...]` | Replace with actual stack |
| `docs/wiki/development.md` | All `[Tool 1]` etc | Replace with actual tools/commands |
| `docs/wiki/hygiene.md` | `[Your Organization]` | Replace with org name |
| `CHANGELOG.md` | `[Your Organization]` | Replace with org name |
| `src/index.js` | `[Your Organization]` | Replace with org name |
| `LICENSE` | `[Tu Nombre/Empresa]` | Replace with author/org |
| `VERSION` | Already `0.1.0` — leave | |
| `.gitignore` | `[Your Organization]` header | Replace with org name |

### 4. Customize Documentation Content

Based on the codebase analysis, write meaningful content for:

- **README.md**: Real feature descriptions, real install commands, real architecture that matches the codebase (not hypothetical)
- **docs/SOUL.md**: A genuine project vision (e.g., "Terminal-first access to Gentoo documentation for system administrators")
- **docs/IDENTITY.md**: A precise system role (e.g., "TUI viewer for the Gentoo Linux installation handbook")
- **docs/wiki/architecture.md**: At least one meaningful ADR capturing an actual architectural decision visible in the codebase
- **docs/wiki/development.md**: Exact commands, not generic placeholders
- **docs/wiki/hygiene.md**: Match repo's actual workflow (single package, no monorepo, etc.)

**Industrial-grade rules:**

- Every placeholder must be resolved — zero `{{...}}` left in the final files
- No placeholder text like "Coming soon" or "TBD"
- File contents must match the actual codebase (verified commands, real dependencies)
- Documentation tone: absolute technical authority (see Bible §3 — no "maybe", "try to", "it is recommended")
- One ADR in `architecture.md` that reflects a real decision

### 5. .gitignore

Replace the template `.gitignore` header comment with `# Jules Dev Standard Gitignore - Hardened` (or user's org). Ensure it covers:

```gitignore
# Logs and temporals
*.log; *.tmp; *.bak
# Environment and Secrets
.env; .env.*; *.local; .manifests/
# Build artifacts
target/; dist/; build/; bin/; __pycache__/; *.pyc; .pytest_cache/; node_modules/; .next/; .serverless/
# IDE and System
.vscode/; .idea/; *.suo; *.user; *.userosscache; *.sln.docstates; .DS_Store; Thumbs.db; desktop.ini
```

### 6. License

Use MIT by default. Change only if:

- The project extends an existing project with a different license → match parent license
- User explicitly requests a different license
- Internal/private → Proprietary / All Rights Reserved

### 7. Verify

Confirm the final state:

- [ ] `README.md` has no remaining `{{...}}` placeholders
- [ ] `VERSION` is `0.1.0` with matching `CHANGELOG.md` `[Unreleased]`
- [ ] All docs files have real content (no brackets, no `[e.g. ...]`)
- [ ] `.gitignore` covers the project's actual stack build artifacts
- [ ] `LICENSE` has correct year and owner
- [ ] `docs/AGENT.md` references valid paths in the project
- [ ] ADR in `architecture.md` is real (not hypothetical)

### 8. Post-Setup

If the user wants git initialized:

- `git init` if no `.git` directory
- `git add . && git commit -m "chore(init): initialize repo with Jules Dev Standard"`
- `git tag -a v0.1.0 -m "Initial release v0.1.0"`

## Reference

- **Template source**: `K:\source\repos\jules_dev_standard\template\`
- **Bible / full standard**: `K:\source\repos\jules_dev_standard\FMG-REPO-BIBLE.md`
- **Project types guide**: `K:\source\repos\jules_dev_standard\template\PROJECT-TYPES-GUIDE.md`
