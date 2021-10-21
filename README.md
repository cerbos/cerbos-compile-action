# Cerbos Compile Action

A GitHub action to validate Cerbos policies using the compiler and run policy tests if there are any. 

Cerbos helps you super-charge your authorization implementation by writing context-aware access control policies for your application resources. Find out more about Cerbos using the following resources:

* [Cerbos website](https://cerbos.dev)
* [Cerbos documentation](https://docs.cerbos.dev)
* [Cerbos GitHub repository](https://github.com/cerbos/cerbos)
* [Cerbos Slack community](http://go.cerbos.io/slack)

## Usage

Use the [cerbos-setup-action](https://github.com/cerbos/cerbos-setup-action) to install Cerbos binaries. Then use this action to validate and test your Cerbos policies.


```
---
- uses: actions/checkout@v2

- name: Setup Cerbos
  uses: cerbos/cerbos-setup-action@v1

- name: Compile with Cerbos
  uses: cerbos/cerbos-compile-action@v1
  with:
    policyDir: policies
    testDir: tests # Omit to skip tests
```
