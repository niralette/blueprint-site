// @ts-check

/**
 * @template {import('prettier').Config} T
 * @param {T} config
 */
function defineConfig(config) {
  return config;
}

export default defineConfig({
  arrowParens: 'avoid',
  singleQuote: true,
});
