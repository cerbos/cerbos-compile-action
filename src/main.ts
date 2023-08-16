// Copyright 2021-2023 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

import * as core from '@actions/core'
import {asError, isError} from './error'
import cerbosCompileAndTest from './cerbos-compile-and-test'
import getPathToBinary from './get-path-to-binary'

async function run(): Promise<void> {
  core.info('Getting path to the cerbos binary')

  const pathToBinary = await getPathToBinary()

  if (isError(pathToBinary)) {
    core.setFailed(
      `Error occurred during getting path to the cerbos binary. ${
        asError(pathToBinary).message
      }`
    )
  }

  core.info(`Successfully got path to the cerbos binary: ${pathToBinary}`)

  // Directory to policies folder
  const policyDir = core.getInput('policyDir')
  // Directory to tests folder
  const testDir = core.getInput('testDir')

  if (testDir === '') {
    core.info('testDir not provided')
  }

  core.info('Running cerbos compile process.')

  await cerbosCompileAndTest(pathToBinary as string, policyDir, testDir)

  core.info('Cerbos compile process is done.')
}

run()
