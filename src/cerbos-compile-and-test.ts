// Copyright 2021 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

import * as child from 'child_process'
import * as core from '@actions/core'
import * as path from 'path'
import {asExecSyncException} from './error'

const workspaceEnvKey = 'GITHUB_WORKSPACE'

async function cerbosCompileAndTest(
  binaryPath: string,
  policyDir: string,
  testDir: string,
  enableTests: boolean
): Promise<void> {
  const workspaceDir = process.env[workspaceEnvKey]
  const policyDirAbs = path.join(workspaceDir as string, policyDir)
  const testDirAbs = path.join(workspaceDir as string, testDir)

  let command = `${binaryPath} compile ${policyDirAbs}`

  if (enableTests) {
    command += ` --tests ${testDirAbs}`
  }

  try {
    child.execSync(command)
  } catch (error) {
    const execSyncError = asExecSyncException(error)

    switch (execSyncError.status) {
      case 1: // returns 1 if there are compilation errors
        core.setFailed(`Compilation errors detected: ${error}`)
        break
      default:
        core.setFailed(`Failed to launch Cerbos: ${error}`)
        break
    }
  }
}

export default cerbosCompileAndTest
