// Copyright 2021 Zenauth Ltd.
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface Error {
  message: string
}

export function isError(object: any): boolean {
  return (object as Error).message !== undefined
}

export function asError(object: any): Error {
  return object as Error
}

interface ExecSyncException {
  status: number
  stdout: Buffer | string
  stderr: Buffer | string
}

export function isExecSyncException(object: any): boolean {
  return (object as ExecSyncException).status !== undefined
}

export function asExecSyncException(object: any): ExecSyncException {
  return object as ExecSyncException
}

export default Error
