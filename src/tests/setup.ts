import '@testing-library/jest-dom'
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveStyle(style: Record<string, any>): R;
      toBeVisible(): R;
      toBeInvalid(): R;
      toHaveValue(value?: any): R;
    }
  }
}

export {}
