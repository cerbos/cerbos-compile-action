// Copyright 2021 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

import * as child from 'child_process'
import * as core from '@actions/core'

const workspaceEnvKey = 'GITHUB_WORKSPACE'

async function cerbosCompile(
  binaryPath: string,
  directoryToPolicies: string
): Promise<void> {
  const workspaceDir = process.env[workspaceEnvKey]

  try {
    child.execSync(
      `${binaryPath} compile ${workspaceDir}${directoryToPolicies}`
    )
  } catch (error) {
    core.setFailed(`Compilation errors detected: ${error}`)
  }
}

export default cerbosCompile
