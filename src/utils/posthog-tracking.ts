// PostHog tracking utility for custom events
// Provides type-safe event tracking functions

declare global {
  interface Window {
    posthog?: {
      capture: (eventName: string, properties?: Record<string, any>) => void;
      identify: (userId: string, properties?: Record<string, any>) => void;
      register: (properties: Record<string, any>) => void;
    };
  }
}

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.posthog) {
    window.posthog.capture(eventName, properties);
  }
};

export const trackLinkClick = (linkType: string, linkText: string, url: string) => {
  trackEvent('link_clicked', {
    link_type: linkType,
    link_text: linkText,
    url: url,
  });
};

export const trackProjectClick = (projectName: string, projectMeta: string) => {
  trackEvent('project_clicked', {
    project_name: projectName,
    project_meta: projectMeta,
  });
};

export const trackNavigationClick = (page: string) => {
  trackEvent('navigation_clicked', {
    destination_page: page,
  });
};

export const trackWorkExperienceView = (companyName: string, position: string) => {
  trackEvent('work_experience_viewed', {
    company_name: companyName,
    position: position,
  });
};

export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    depth_percentage: depth,
  });
};

export const initializeUserProperties = () => {
  if (typeof window !== 'undefined' && window.posthog) {
    const properties = {
      device_type: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
      browser: navigator.userAgent,
      screen_width: window.innerWidth,
      screen_height: window.innerHeight,
    };
    window.posthog.register(properties);
  }
};
