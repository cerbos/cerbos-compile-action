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
      `Error occured during getting path to the cerbos binary. ${
        asError(pathToBinary).message
      }`
    )
  }

  core.info(`Succesfully got path to the cerbos binary: ${pathToBinary}`)

  // Directory to policies folder
  const policyDir = core.getInput('policyDir')
  // Directory to tests folder
  const testDir = core.getInput('testDir')

  let enableTests = true

  if (testDir === '') {
    // testDir not provided
    enableTests = false
    core.info('testDir not provided, skipping tests.')
  }

  core.info('Running cerbos compile process.')

  cerbosCompileAndTest(pathToBinary as string, policyDir, testDir, enableTests)

  core.info('Cerbos compile process is done.')
}

run()
