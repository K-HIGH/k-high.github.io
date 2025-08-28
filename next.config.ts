// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
// }

// export default nextConfig

import type { NextConfig } from 'next'

const repo = 'landing_page' // ← 본인 repo 이름
const isGhPages = process.env.GITHUB_PAGES === 'true' // Actions에서 주입 예정

const config: NextConfig = {
  output: 'export',                 // 정적 산출물 생성
  // user/organization 페이지( username.github.io )라면 아래 두 줄은 불필요
  basePath: isGhPages ? `/${repo}` : undefined,
  assetPrefix: isGhPages ? `/${repo}/` : undefined,

  images: { unoptimized: true },    // Pages에는 이미지 최적화 서버가 없음
  // 필요 시: trailingSlash: true,
}

export default config