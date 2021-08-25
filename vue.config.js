module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Vue Template";
      return args;
    });
  },
  transpileDependencies: ["vuetify"],
};
// css: {
//   loaderOptions: {
//     sass: {
//       prependData: `@import "@/style/styleAsset.scss";`,
//     },
//   },
// },
