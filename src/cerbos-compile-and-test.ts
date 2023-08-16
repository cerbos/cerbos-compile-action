// Copyright 2021-2023 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

import * as child from 'child_process'
import * as core from '@actions/core'
import * as path from 'path'
import * as styles from 'ansi-styles'

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

  core.info(`Configured policy directory: ${policyDirAbs}`)
  core.info(`Configured test directory: ${testDirAbs}`)

  let command = `${binaryPath} compile ${policyDirAbs}`
  if (enableTests) {
    command += ` --tests ${testDirAbs}`
    core.info('Added --tests flag to the command as tests are enabled')
  }

  core.info(`Command to run: ${command}`)
  core.startGroup('cerbos compile results')
  child.exec(command, (err, stdout, stderr) => {
    if (err || stderr) {
      core.setFailed(`Error(s) occurred`)
      if (err) {
        core.error(err.message)
      }
      if (stderr) {
        core.error(stderr)
      }
      if (stdout) {
        core.info(
          `${styles.default.color.ansi16m(
            ...styles.default.hexToRgb('#00ff00')
          )}${stdout}${styles.default.color.close}`
        )
      }
      core.endGroup()
      return
    }

    core.info(
      `${styles.default.color.ansi16m(
        ...styles.default.hexToRgb('#00ff00')
      )}${stdout}${styles.default.color.close}`
    )

    core.endGroup()
  })
}

export default cerbosCompileAndTest
