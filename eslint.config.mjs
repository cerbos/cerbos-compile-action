// Copyright 2021-2026 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

import globals from 'globals'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  {languageOptions: {globals: globals.node}},
  eslint.configs.recommended,
  ...tseslint.configs.recommended
]
