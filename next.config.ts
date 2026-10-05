import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule: { test?: RegExp }) => rule.test?.test?.('.svg'));
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    config.module.rules.push({
      test: /\.svg$/,
      resourceQuery: /react/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
