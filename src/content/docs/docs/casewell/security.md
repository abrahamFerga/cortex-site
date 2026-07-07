---
title: Security model
description: Why the assistant can be trusted with a practice.
sidebar:
  order: 3
---

## Permission-checked before the model

The platform filters tools by the signed-in user's permissions **before** building the AI
request, so the model never even sees an action its user may not take. Role baselines are
runtime-editable by your admins; nothing is hardcoded.

## Human-in-the-loop writes

Every action that changes the record is held for explicit approval (time logging is the one
deliberate exception — capturing hours must be frictionless). Approvals are per-action and
audited.

## Ethical walls

Restricting a matter removes it everywhere at once: chat tools, list views, document search,
and its knowledge index — for everyone outside the wall, regardless of their other permissions.
The wall's attestation history is tamper-evident (hash-chained).

## Tenancy and data

Every row of your data carries your tenant id, enforced by the database layer on every query.
Dedicated plans go further: your own database and compute, in your region, with secrets in your
own Key Vault. AI keys you bring are stored write-only — the platform can use them, but no
screen or API ever shows them back.

## The audit trail

Tool calls, sign-ins, permission changes, seat refusals, token usage per user and per model —
append-only, readable by your admins under **Admin → Audit Log**.
