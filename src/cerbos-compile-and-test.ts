// Copyright 2021 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

import * as child from 'child_process'
import * as core from '@actions/core'

const workspaceEnvKey = 'GITHUB_WORKSPACE'

async function cerbosCompileAndTest(
  binaryPath: string,
  policyDir: string,
  testDir: string,
  enableTests: boolean
): Promise<void> {
  const workspaceDir = process.env[workspaceEnvKey]

  let command = `${binaryPath} compile ${workspaceDir}${policyDir}`

  if (enableTests) {
    command += ` --tests ${workspaceDir}${testDir}`
  }

  try {
    child.execSync(command)
  } catch (error) {
    core.setFailed(`Compilation errors detected: ${error}`)
  }
}

export default cerbosCompileAndTest
