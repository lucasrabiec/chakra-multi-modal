const { BABEL_ENV } = process.env;
const isCjs = BABEL_ENV !== undefined && BABEL_ENV === 'cjs';

module.exports = {
  plugins: [],
  presets: [
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }],
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        modules: isCjs ? 'commonjs' : false,
        loose: true,
      },
    ],
  ],
  ignore: ['./**/*.stories.tsx'],
};
