const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require("path");

// https://cli.vuejs.org/zh/config
module.exports = {
    publicPath: "/",
    outputDir: "dist",
    assetsDir: "asseets",
    filenameHashing: true,
    // 在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件
    pages: {
        index: {
            // page 的入口
            entry: "src/main.js",
            // 模板来源
            template: "public/index.html",
            // 在 dist/index.html 的输出
            filename: "index.html",
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: "Red_lnn",
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ["chunk-vendors", "chunk-common", "index"]
        }
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        // subpage: 'src/subpage/main.js'
    },
    // eslint-loader 是否在保存的时候检查
    // lintOnSave: true,
    // 是否使用包含运行时编译器的 Vue 构建版本。
    // 设置为 true 后你就可以在 Vue 组件中使用 template 选项了
    // 但是这会让你的应用额外增加 10kb 左右。
    runtimeCompiler: false,
    // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
    // transpileDependencies: [],
    // 生产环境 sourceMap
    productionSourceMap: false,
    integrity: true,
    // crossorigin: ""
    // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
    // corsUseCredentials: false,
    // webpack 配置，键值对象时会合并配置，为方法时会改写配置
    // https://cli.vuejs.org/guide/webpack.html#simple-configuration
    configureWebpack: () => {
        if (process.env.NODE_ENV !== "production") return;
        return {
            plugins: [
                new PrerenderSPAPlugin({
                    // 生成文件的路径，也可以与webpakc打包的一致
                    // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动
                    staticDir: path.join(__dirname, "dist"),
                    // outputDir: path.join(__dirname, '../prerendered'),
                    indexPath: path.join(__dirname, "dist", "index.html"),
                    // 对应自己的路由文件，比如index有参数，就需要写成 /index/param1
                    routes: ["/", "/about", "/mcmod"],
                    //压缩html
                    minify: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        decodeEntities: true,
                        keepClosingSlash: true,
                        sortAttributes: true
                    },
                    renderer: new Renderer({
                        inject: {
                            foo: "bar"
                        },
                        headless: false,
                        // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上
                        renderAfterDocumentEvent: "render-active",
                        // renderAfterElementExists: '.container',
                        renderAfterTime: 5000
                    })
                })
            ]
        };
    },
    // webpack 链接 API，用于生成和修改 webapck 配置
    // https://github.com/mozilla-neutrino/webpack-chain
    // chainWebpack: (config) => {
    //     // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
    //     config.optimization.splitChunks({
    //         cacheGroups: {},
    //     });
    //     // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
    //     config.module
    //         .rule("eslint")
    //         .exclude.add(
    //             "/Users/maybexia/Downloads/FE/community_built-in/src/lib"
    //         )
    //         .end();
    // },
    // 配置高于chainWebpack中关于 css loader 的配置
    css: {
        // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。
        // 设置为 false 后你就可以去掉文件名中的 .module 并将
        // 所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
        // requireModuleExtension: true,
        // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
        extract: true,
        // 是否构建样式地图，false 将提高构建速度
        sourceMap: false
        // css预设器配置项
        // loaderOptions: {
        //     css: {
        //         // options here will be passed to css-loader
        //     },
        //     postcss: {
        //         // options here will be passed to postcss-loader
        //     },
        // },
    },
    // // All options for webpack-dev-server are supported
    // // https://webpack.js.org/configuration/dev-server/
    devServer: {
        open: true,
        host: "127.0.0.1",
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null,
        before: () => {}
    },
    // 构建时开启多进程处理 babel 编译
    parallel: require("os").cpus().length > 1,
    // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    // 第三方插件配置
    pluginOptions: {}
};
