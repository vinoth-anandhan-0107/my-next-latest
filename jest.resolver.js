/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = (path, options) => {
  // Call the defaultResolver, so we leverage its cache, error handling, etc.
  return options.defaultResolver(path, {
    ...options,
    // Use packageFilter to process parsed `package.json` before the resolution (see https://www.npmjs.com/package/resolve#resolveid-opts-cb)
    packageFilter: (pkg) => {
      // This is a workaround for https://github.com/uuidjs/uuid/pull/616
      //
      // jest-environment-jsdom 28+ tries to use browser exports instead of default exports,
      // but string-width only offers an ESM browser export and not a CommonJS one. Jest fails
      // because it doesn't know how to handle this export.
      //
      // This workaround prevents Jest from considering string-width's module-based exports at all;
      // it will fall back to string-width's CommonJS+node "main" property.
      if (pkg.name === "string-width") {
        delete pkg.exports;
        delete pkg.module;
      }
      return pkg;
    },
  });
};
