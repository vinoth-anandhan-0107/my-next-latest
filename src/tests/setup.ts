import '@testing-library/jest-dom'
// We need to use namespace here for jest types augmentation
/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveStyle(style: Record<string, unknown>): R;
      toBeVisible(): R;
      toBeInvalid(): R;
      toHaveValue(value?: unknown): R;
    }
  }
}

export {}
