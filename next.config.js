/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.plugins.push(
      require("unplugin-icons/webpack").default({
        compiler: "jsx",
        jsx: "react",
      }),
    );
    return config;
  },
};

module.exports = nextConfig;
