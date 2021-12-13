import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'browser-localstorage',
  favicon: '/logo.png',
  logo: '/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  base: '/browser-localstorage/',
  publicPath: '/browser-localstorage/',
  // more config: https://d.umijs.org/config
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/wywppkd/browser-localstorage',
    },
  ],
});
