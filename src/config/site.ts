export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
    robloxGroup?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Build and Conquer Wiki",
  shortName: "Build and Conquer",
  logoText: "B",
  tagline: "Roblox City-Building & Modern Warfare Strategy",
  description: "Build and Conquer Wiki covers the Roblox strategy game by The Slop Company: city levels, resources, research, missiles, drones, and beginner guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://build-and-conquer.top",
  supportEmail: "support@build-and-conquer.top",
  gameUrl: "https://www.roblox.com/games/103767961452227/Build-and-Conquer",
  heroVideoId: "pUT4j8zuK-w",
  social: {
    discord: "https://discord.gg/slopcompany",
    tiktok: "https://www.tiktok.com/@the.slop.company",
    robloxGroup: "https://www.roblox.com/groups/52990522",
  },
  locales: ["en", "pt", "es", "de"],
  defaultLocale: "en",
};
