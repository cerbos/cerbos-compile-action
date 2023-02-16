// Copyright 2021-2023 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

import * as io from '@actions/io'
import Error from './error'

async function getPathToBinary(): Promise<string | Error> {
  const pathToCerbos = await io.which('cerbos', true)

  if (pathToCerbos === '') {
    return {
      message:
        "Couldn't find cerbos binary, please add https://github.com/cerbos/cerbos-setup-action to your workflow."
    }
  }

  return pathToCerbos
}

export default getPathToBinary
