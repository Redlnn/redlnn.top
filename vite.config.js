import { defineConfig } from 'vite'
// import path from 'path';
import { resolve } from 'path'
import vuePlugin from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import { minifyHtml } from 'vite-plugin-html'
// import components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver as elementPlusResolver } from 'unplugin-vue-components/resolvers'
import ViteRadar from 'vite-plugin-radar'
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      resolve: {
        alias: [
          {
            // /@/xxxx => src/xxxx
            find: /\/@\//,
            replacement: resolve(process.cwd(), './src/') + '/',
          },
        ],
      },
      server: {
        host: 'localhost',
        port: 3000,
        open: true,
        fs: {
          strict: true,
        },
      },
      build: {
        sourcemap: false,
      },
      plugins: [
        vuePlugin(),
        // components({
        //   /* options */
        //   resolvers: [elementPlusResolver()],
        // }),
        importToCDN({
          modules: [
            autoComplete('vue'),
            {
              name: 'element-plus',
              var: 'ElementPlus',
              path: `//cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.19/dist/index.full.min.js`,
              css: `//cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.19/dist/index.min.css`,
            },
          ],
        }),
      ],
    }
  } else {
    return {
      resolve: {
        alias: [
          // /@/xxxx => src/xxxx
          {
            find: /\/@\//,
            replacement: resolve(process.cwd(), './src/') + '/',
          },
        ],
      },
      build: {
        // outDir: "dist",
        // assetsDir: "assets",
        // cssCodeSplit: true,
        // sourcemap: false,
        brotliSize: true,
        chunkSizeWarningLimit: 2000,
        rollupOptions: {
          output: {
            entryFileNames: 'assets/js/[name]-[hash].js',
            chunkFileNames: 'assets/js/[name]-[hash].js',
            assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          },
        },
        minify: 'terser',
        terserOptions: {
          compress: {
            // compress options
            drop_console: true,
            keep_infinity: true,
          },
          keep_classnames: false,
          keep_fnames: false,
          ie8: false,
          safari10: false,
        },
      },
      plugins: [
        vuePlugin(),
        // components({
        //   /* options */
        //   resolvers: [elementPlusResolver()],
        // }),
        importToCDN({
          modules: [
            autoComplete('vue'),
            {
              name: 'element-plus',
              var: 'ElementPlus',
              path: `//cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.19/dist/index.full.min.js`,
              css: `//cdn.jsdelivr.net/npm/element-plus@1.1.0-beta.19/dist/index.min.css`,
            },
          ],
        }),
        // eslint-disable-next-line new-cap
        ViteRadar({
          /**
           * enable or disable scripts injection in development
           * default: false
           */
          enableDev: true,

          // Google Analytics (multiple tag can be set with an array)
          analytics: [
            {
              /**
               * Measurement id
               */
              id: 'G-YVFXD0HB4W',

              /**
               * disable tracking for this measurement
               *   window['ga-disable-MEASUREMENT_ID'] = true
               * @see https://developers.google.com/analytics/devguides/collection/ga4/disable-analytics
               */
              disable: false,

              /**
               * You can configure all settings provided by analytics here
               * @see https://developers.google.com/analytics/devguides/collection/ga4/cookies-user-id
               * @see https://developers.google.com/analytics/devguides/collection/ga4/disable-page-view
               * @see https://developers.google.com/analytics/devguides/collection/ga4/display-features
               * @see
               */
              // config: {
              //   cookie_domain: 'auto',
              //   cookie_expires: 63072000,
              //   cookie_prefix: 'none',
              //   cookie_update: true,
              //   cookie_flags: '',
              //   send_page_view: true,
              //   allow_google_signals: true,
              //   allow_ad_personalization_signals: true,
              // },
            },
          ],

          // Baidu Tongji (multiple tag can be set with an array)
          tongji: [
            {
              id: '445bc422573781c9aeae7886793d0f0e',
            },
          ],
        }),
        minifyHtml({
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          minifyURLs: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          html5: true,
          keepClosingSlash: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        }),
        viteCompression({
          verbose: true,
          filter: /\.(txt|html|xml|md|js|mjs|json|css|ttf|otf|woff|woff2|svg|jpg|png|tiff|ico)$/i,
          algorithm: 'gzip',
          ext: '.gz',
        }),
        viteCompression({
          verbose: true,
          filter: /\.(txt|html|xml|md|js|mjs|json|css|ttf|otf|woff|woff2|svg|jpg|png|tiff|ico)$/i,
          algorithm: 'brotliCompress',
          ext: '.br',
        }),
      ],
    }
  }
})
