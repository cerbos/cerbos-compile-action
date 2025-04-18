# Cerbos Compile Action

A GitHub action to validate Cerbos policies using the compiler and run policy tests if there are any.

Cerbos helps you super-charge your authorization implementation by writing context-aware access control policies for your application resources. Find out more about Cerbos using the following resources:

- [Cerbos website](https://cerbos.dev)
- [Cerbos documentation](https://docs.cerbos.dev)
- [Cerbos GitHub repository](https://github.com/cerbos/cerbos)
- [Cerbos Slack community](http://go.cerbos.io/slack)

## Usage

Use the [cerbos-setup-action](https://github.com/cerbos/cerbos-setup-action) to install Cerbos binaries. Then use this action to validate and test your Cerbos policies. See the [documentation](https://docs.cerbos.dev/cerbos/latest/policies/compile.html) for more information about how to compile policies and author policy tests.

```yaml
- uses: actions/checkout@v2

- name: Setup Cerbos
  uses: cerbos/cerbos-setup-action@v1

- name: Compile with Cerbos
  uses: cerbos/cerbos-compile-action@v1
  with:
    policyDir: policies
```

## Development

### Prerequisites

You'll need to install

- Node.js, matching the version specified in our [.node-version](../.node-version) file

  - A version manager that supports this file is recommended, for example [n](https://github.com/tj/n#readme).
    Note that [nvm](https://github.com/nvm-sh/nvm) [does not](https://github.com/nvm-sh/nvm/issues/794).

- pnpm, matching the version specified in our [package.json](./package.json) file

  - After installing Node.js, you can enable [Corepack](https://nodejs.org/api/corepack.html) to transparently install the correct `pnpm` version:
    ```console
    $ corepack enable
    ```

### Build

```
pnpm run all
```
