// Copyright 2021-2023 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

import * as child from 'child_process'
import * as core from '@actions/core'
import * as path from 'path'

const compileFailureErrorCode = 3
const testFailureErrorCode = 4
const workspaceEnvKey = 'GITHUB_WORKSPACE'

async function cerbosCompileAndTest(
  binaryPath: string,
  policyDir: string,
  testDir: string
): Promise<void> {
  const workspaceDir = process.env[workspaceEnvKey]
  const policyDirAbs = path.join(workspaceDir as string, policyDir)
  const testDirAbs = path.join(workspaceDir as string, testDir)

  core.info(`Configured policy directory: ${policyDirAbs}`)
  core.info(`Configured test directory: ${testDirAbs}`)

  let command = `${binaryPath} compile ${policyDirAbs}`
  if (testDir !== '') {
    command += ` --tests ${testDirAbs}`
    core.info('Added --tests flag to the command as tests are enabled')
  }

  core.info(`Command to run: ${command}`)
  core.startGroup(`cerbos compile results`)
  child.exec(command, (err, stdout, stderr) => {
    if (err || stderr) {
      if (err) {
        switch (err.code) {
          case compileFailureErrorCode:
            core.setFailed(`Compilation failed`)
            break
          case testFailureErrorCode:
            core.setFailed(`Tests failed`)
            break
          default:
            core.setFailed(`Failed to launch Cerbos`)
            break
        }
        core.error(err.message)
      }

      if (stderr) {
        core.error(stderr)
      }

      if (stdout) {
        core.info(stdout)
      }

      core.endGroup()
      return
    }

    core.info(stdout)
    core.endGroup()
  })
}

export default cerbosCompileAndTest
