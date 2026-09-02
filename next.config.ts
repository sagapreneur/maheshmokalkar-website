import type { NextConfig } from "next";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

export default (phase: string): NextConfig => {
  const isExport = phase === PHASE_PRODUCTION_BUILD;
  return {
    output: isExport ? "export" : undefined,
    images: {
      unoptimized: true,
    },
    typescript: {
      ignoreBuildErrors: false,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
};
