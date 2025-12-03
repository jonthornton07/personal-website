// PostHog configuration utility for client-side analytics
// Similar pattern to Firebase setup - SSR-safe initialization

export interface PostHogConfig {
  apiKey: string;
  apiHost: string;
  defaultsVersion?: string;
}

const DEFAULT_HOST = "https://us.i.posthog.com";

export const posthogConfig: PostHogConfig = {
  apiKey: import.meta.env.PUBLIC_POSTHOG_KEY || "",
  apiHost: import.meta.env.PUBLIC_POSTHOG_HOST || DEFAULT_HOST,
  defaultsVersion: "2025-05-24",
};

export const isPostHogEnabled = (): boolean => {
  return !!posthogConfig.apiKey && typeof window !== "undefined";
};
