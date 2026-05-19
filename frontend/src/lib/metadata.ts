import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "%s",
  },
  description: siteConfig.description,
};

export function createPageMetadata(title: string, description?: string): Metadata {
  return {
    title,
    ...(description ? { description } : {}),
  };
}
