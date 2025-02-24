import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  astro: true,
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
}, {
  rules:
  {
    'no-console': 'error',
  },
})
