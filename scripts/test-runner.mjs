// @ts-check
import jest from 'jest';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

const argv = process.argv.slice(2);

// Watch unless on CI or explicitly running all tests
if (!process.env.CI && argv.indexOf('--watchAll=false') === -1) {
  argv.push('--watch');
}

// Run tests
jest.run(argv);