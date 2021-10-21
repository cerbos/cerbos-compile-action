// Copyright 2021 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface Error {
  message: string
}

// If the given object is type of Error, returns true
export function isError(object: any): boolean {
  return (object as Error).message !== undefined
}

export function asError(object: any): Error {
  return object as Error
}

export default Error
