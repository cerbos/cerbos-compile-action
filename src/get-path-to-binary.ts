// Copyright 2021-2025 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

import * as io from '@actions/io'

async function getPathToBinary() {
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
