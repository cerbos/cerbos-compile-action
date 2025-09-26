// Copyright 2021-2025 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

import * as core from '@actions/core'
import * as common from 'cerbos-actions-common'

async function run(): Promise<void> {
  const policiesDir = core.getInput('policyDir')
  const testsDir = core.getInput('testDir')

  common.compile({
    policiesDir: policiesDir,
    testsDir: testsDir
  })
}

run()
