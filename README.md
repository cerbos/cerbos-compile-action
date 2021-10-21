# cerbos/cerbos-compile-action

Given Cerbos policies directory, compiles the policies and fails if there are any errors present.

## Prerequisites

- Cerbos binaries must be already in the path. Do either of;

  - Run `cerbos/cerbos-setup-action` before this action.
  - Manually add `cerbos` and `cerbosctl` to path with your workflow.

- Repository must be checked out with `actions/checkout@v2`

## Inputs

Please see action.yaml for inputs.

## How To Use

Please see the following workflow example;

```
---
name: PR Check
on:
  pull_request:
    branches:
      - master
jobs:
  cerbos:
    name: Cerbos
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Setup Cerbos
        uses: cerbos/cerbos-setup-action@v1
        with:
          version: 0.8.0

      - name: Compile with Cerbos
        uses: cerbos/cerbos-compile-action@v1
```

# cerbos/cerbos-compile-action development

After changing the code, execute the following commands;

```
npm run build && npm run format && npm run lint && npm run package && npm test
```

`npm run package` will create or overwrite the `dist/index.js` and `dist/index.js` which is the running part of the GitHub Action.
