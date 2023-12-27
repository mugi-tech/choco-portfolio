/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   optimizeFonts: true,
  // },
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io"],
  },
  compiler: (() => {
    let compilerConfig = {
      // styledComponentsの有効化
      styledComponents: true,
    };

    if (process.env.NODE_ENV === "production") {
      compilerConfig = {
        ...compilerConfig,
        // 本番環境ではReact Testing Libraryで使用するdata-testid属性を削除
        reactRemoveProperties: { properties: ["^data-testid$"] },
      };
    }

    return compilerConfig;
  })(),
};

module.exports = nextConfig;
