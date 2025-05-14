import "@testing-library/jest-dom";

// Mock the next/router
const mockRouter = {
  route: "/",
  pathname: "",
  query: "",
  asPath: "",
  push: jest.fn(),
  replace: jest.fn(),
  back: jest.fn(),
};

jest.mock("next/router", () => ({
  useRouter: () => mockRouter,
}));

// Mock next/navigation
const mockNavigation = {
  push: jest.fn(),
  replace: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
};

jest.mock("next/navigation", () => ({
  useRouter: () => mockNavigation,
  usePathname: () => "",
  useSearchParams: () => new URLSearchParams(),
}));

// Mock for antd components and other UI libraries that use matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock for ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};
