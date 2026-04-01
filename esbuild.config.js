const esbuild = require("esbuild")
const vuePlugin = require("esbuild-plugin-vue").default

const isWatch = process.argv.includes("--watch")

const config = {
  entryPoints: ["app/javascript/application.js"],
  bundle: true,
  outfile: "app/assets/builds/application.js",
  plugins: [vuePlugin()],
  sourcemap: true,
  define: {
    __VUE_OPTIONS_API__: "true",
    __VUE_PROD_DEVTOOLS__: "false"
  }
}

if (isWatch) {
  esbuild.context(config).then(ctx => {
    ctx.watch()
    console.log("Watching for changes...")
  })
} else {
  esbuild.build(config).catch(() => process.exit(1))
}
