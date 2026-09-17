import type { NextConfig } from 'next';
const config: NextConfig = { output: 'export', trailingSlash: true, images: { unoptimized: true }, poweredByHeader: false, experimental: { workerThreads: true, useTypeScriptCli: false, cpus: 2 } };
export default config;
