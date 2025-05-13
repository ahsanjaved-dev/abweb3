import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  env: {
    PROJECT_ID: process.env.PROJECT_ID,
    API_KEY: process.env.API_KEY,
    DATABASE_ID: process.env.DATABASE_ID,
    COLLECTION_ID: process.env.COLLECTION_ID,
    NEXT_PUBLIC_APPWRITE_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
