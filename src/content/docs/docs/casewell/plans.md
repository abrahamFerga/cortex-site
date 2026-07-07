---
title: Plans and billing
description: Solo, Team, and Dedicated — what each buys and how billing works.
sidebar:
  order: 2
---

## The three plans

- **Solo** — your own private workspace (a fully isolated tenant), one user.
- **Team** — the same workspace with seats for the practice. Roles and permissions per member,
  approval workflows, ethical walls, the full audit trail.
- **Dedicated** — your own environment in Azure, created automatically when you subscribe:
  your database, your compute, your Key Vault, your region.

## Seats

Team plans are per seat. The seat limit is enforced at sign-in: when the practice is full, the
next new member is refused (and the refusal shows in your audit log) until you add seats in the
customer portal or deactivate someone — deactivating frees the seat immediately.

## AI usage

Two ways to run the AI, switchable at any time in **Admin → AI Settings**:

- **Metered (default)** — AI usage is included up to your plan's monthly token allowance, with a
  hard cap: admins are alerted at 80%, and the assistant pauses (rather than overspending) at
  100% until the month rolls or you raise the budget.
- **Bring your own key** — enter your own provider key (stored write-only, encrypted). Your
  traffic goes to your provider on your bill; our metering never touches it.

## If a payment fails

Nothing is deleted. The workspace suspends until the payment retries succeed (card updates
happen in the customer portal), then everything resumes exactly where it was. If you cancel,
your data is kept for 30 days before removal — export any time before that.
