# Branching Guidelines & PR Review Workflow

> Version 1.0
> Last updated: June 2026
> Git / Trunk-Based + GitFlow Hybrid

---

## 1. Branching Strategy

We use a trunk-based development model with short-lived feature branches, blending GitFlow discipline with trunk-based speed.

Goal: keep `main` always shippable, reduce merge pain, and make every PR reviewable in one sitting.

| Branch | Purpose | Rules |
| --- | --- | --- |
| `main` | Production-ready code at all times | Protected: no direct commits. Merges via PR only. Always deployable. |
| `develop` | Integration branch for completed features | Protected: no direct commits. All feature PRs target here. |
| `feature/*` | Short-lived feature branches | Max 2-3 calendar days lifespan. Branch from `develop`; merge back via PR. |
| `fix/*` | Short-lived bug-fix branches | Max 2-3 calendar days lifespan. Branch from `develop`; merge back via PR. |
| `chore/*` | Short-lived maintenance/refactor branches | Max 2-3 calendar days lifespan. Branch from `develop`; merge back via PR. |
| `hotfix/*` | Urgent production patches | Branch from `main`. Must be back-merged into `develop` by the PR author within the same business day. |
| `release/*` | Release stabilization | Branched from `develop` when feature-complete. Only bugfixes committed here. |

## 2. Branch Naming Conventions

| Type | Prefix | Example |
| --- | --- | --- |
| Feature | `feature/` | `feature/user-auth-flow` |
| Bug Fix | `fix/` | `fix/login-null-pointer` |
| Hotfix (prod) | `hotfix/` | `hotfix/payment-timeout` |
| Release | `release/` | `release/2.4.0` |
| Chore / Refactor | `chore/` | `chore/update-dependencies` |
| Documentation | `docs/` | `docs/api-readme-update` |

- Use lowercase and hyphens for descriptive words: no underscores, no spaces, no camelCase.
- If included, ticket segment may keep tracker case: `feature/PROJ-123-user-auth`. Though, Ticket number is optional for now, and may be omitted until we have a consistent ticketing system in place.
- Keep names concise and descriptive: 50 characters maximum.

## 3. PR Review Workflow

1. AUTHOR: Open PR against `develop` (or `main` for hotfixes). Complete the PR template: description, testing steps, and screenshots for any UI change.
2. AUTHOR: Self-review the full diff before adding reviewers. Run local equivalents of CI checks (lint, unit tests, build). Do not open a PR with known failures.
3. SYSTEM: CI/CD pipeline runs automatically (lint, unit tests, build checks). PR is blocked from merging until all checks are green.
4. REVIEWER: Minimum of 1 approval required; 2 approvals for changes touching critical paths (authentication, payments, production infra, shared libraries, or security-sensitive code). SLA: review within 24 business hours of request.
5. REVIEWER: Use structured feedback labels on all comments: `[must-fix]`, `[suggestion]`, `[question]`, `[nit]`.
6. AUTHOR: Resolve all `[must-fix]` comments. Respond to or acknowledge all others. Re-request review once changes are pushed.
7. AUTHOR: Squash and merge (preferred). Delete feature branch immediately after merge.
8. TEAM: Hotfixes merged to `main` must be back-merged into `develop` by the PR author within the same business day to prevent drift.

## 4. PR Checklist

Pre-merge checklist (author is responsible for all items before requesting review):

- [ ] Branch name follows naming convention.
- [ ] PR is linked to the relevant ticket/issue in the tracker.
- [ ] Self-review of diff completed before requesting reviewers.
- [ ] All CI checks passing (lint, unit tests, build).
- [ ] No debug code, `console.log`, or commented-out blocks left in.
- [ ] Tests added or updated to cover all changed logic.
- [ ] PR description clearly explains the why, not just the what.
- [ ] Breaking changes documented and communicated to the team.

## 5. Golden Rules

Non-negotiable standards: apply to every branch, every PR, every day.

- Keep PRs small. Aim for fewer than 400 changed lines total (additions + deletions in the PR diff, excluding generated files). Large PRs slow reviews, hide bugs, and block teammates.
- Review fast. Stale PRs block the entire team. A 24 business-hour turnaround is team standard, not a suggestion.
- Write for your reviewer. A good PR description is a gift to your team. Include context, a test plan, and screenshots where relevant.
- Never force-push to shared branches. Rewriting history on `main` or `develop` is strictly prohibited. Rebase only on your own local branches.