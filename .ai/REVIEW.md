# Code Review Guidelines — kpi-ua

How AI reviewers (and people using them) review pull requests in the `kpi-ua` repositories. The general rules
in [AGENTS.md](AGENTS.md) apply too. Each repository receives them as a synced copy, wherever its review
tools read review rules; it adds its own review rules next to that copy, and for a subproject in
`<dir>/REVIEW.md`.

## Scope

- Review the change and its immediate blast radius: callers, callees, the data it reads and writes. Do not
  review or rewrite unrelated code.
- Read the PR description and the linked Jira ticket (`KBX-…`) to know what the change is meant to do; judge
  it against that intent and the repository's `AGENTS.md`.
- If no diff is given, find it yourself against the repository's default branch (`main`).
- A huge, unfocused diff (roughly 800+ changed lines mixing several concerns) cannot be reviewed well — say
  so and ask for it to be split instead of skimming it.
- You review; you do not edit, push, approve or merge unless the person asks.

## What to look for, in priority order

1. **Correctness and regressions.** Wrong results, broken edge cases (empty, null, boundaries, time zones —
   the runtime zone is Europe/Kyiv), changed behaviour the PR does not mention, broken API contracts between
   backend and frontend.
2. **Security.**
   - Authentication and authorization on every new endpoint and action; role checks match who may call it.
   - IDOR: an ID taken from the path, query or body is checked against what the caller may access.
   - Injection: SQL is parameterized (Dapper/EF/ActiveRecord parameters, never string concatenation);
     no unescaped output in HTML; no path traversal in file or S3 keys.
   - Secrets and personal data: none committed, logged, returned in errors or copied into fixtures.
   - Debug or test-only paths stay disabled outside development.
3. **Data safety.** Migrations and SQL that can lose data or lock large tables; irreversible operations;
   transactions that leave partial state on failure; writes that bypass the domain's workflow or validation;
   cross-database work done anywhere other than where the repository says it belongs.
4. **Concurrency and reliability.** Unawaited or blocking async calls, missing cancellation propagation, race
   conditions on shared rows, retries or queue consumers that are not idempotent, missing timeouts on
   external calls (EDBO, Vchasno, Diia, Bravo, KPI ID).
5. **Tests.** New behaviour and fixed bugs are covered, including the failure path; no test deleted, skipped
   or weakened to get green.
6. **Conventions of the repository.** Layering, existing patterns and helpers, naming, translation files
   (user-facing strings never hard-coded), the Jira key in the branch, commits and PR description.
7. **Documentation drift.** If the change alters what `AGENTS.md`, `README.md` or the `docs/`
   index describes, those files are updated in the same PR.

## What not to flag

- Style the linter or formatter already enforces, or personal preferences.
- Refactors, renames or "while you're here" improvements outside the change.
- Pre-existing problems the change does not touch — mention one only if it is serious, and label it
  pre-existing and non-blocking.
- Speculation. Every finding must be verified against the code: trace a realistic path from a real caller or
  input to the failure. If you cannot, leave it out or mark it clearly as a question.

## Writing findings

- One finding per comment, anchored to `path:line`.
- State what is wrong, the concrete scenario that triggers it, why it matters, and a specific fix.
  "Consider validation" is not a finding; "`ContractsController.cs:84` takes `applicantId` from the body but
  never compares it with the JWT subject — any applicant can read another's contract" is.
- Mark severity:
  - **Blocking** — a bug, security issue, data risk or broken contract; the PR should not merge as is.
  - **Non-blocking** — worth fixing, but the PR can merge without it.
  - **Nit** — minor and optional.
- Keep it short and in English. Do not repeat a finding already raised on the PR.

## Summary report

When asked for a written review rather than inline comments, use this shape and omit empty sections:

```markdown
## Review summary

<2–4 sentences: verdict, biggest risks, merge / hold recommendation>

## Blocking issues

1. `path:line` — what is wrong, when it happens, why it matters, the fix.

## Non-blocking suggestions

1. ...

## Nits

- ...

## Verified OK

- Short list of what was actively checked and is fine.
```

## Answering a review

- Fix what is asked, or reply on the thread with a short reason why not (already fixed, does not reproduce,
  outside the PR, not worth the code it adds).
- Push the fixes as new commits with the same `KBX-…` key; do not rewrite the branch history under review.
