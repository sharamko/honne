import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  images: {
    // remotePatterns: [
    //   {
    //     hostname: 'localhost',
    //   },
    // ],
    deviceSizes: [1920],
    imageSizes: [],
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'src/app/(frontend)/_assets/styles'),
      path.join(__dirname, 'src/app/(frontend)/_assets/mixins'),
    ],
    additionalData: `
      @import "vars";
      @import "index"; 
    `,
  },
};

export default nextConfig;
