# Backend — Portfolio

Inherits all rules from the root `/CLAUDE.md`.

## Purpose
DevOps and deployment config only — no server code.

## Contents
- `docker-compose.yml` — container orchestration for the frontend
- `.github/workflows/ci.yml` — GitHub Actions CI pipeline (lint, test, build)

## Commands
```bash
docker compose up --build   # run via containers
```
