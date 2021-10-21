import * as core from '@actions/core'
import {asError, isError} from './error'
import cerbosCompile from './cerbos-compile'
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
  const dir = core.getInput('dir')

  core.info('Running cerbos compile process.')

  cerbosCompile(pathToBinary as string, dir)

  core.info('Cerbos compile process is done.')
}

run()
