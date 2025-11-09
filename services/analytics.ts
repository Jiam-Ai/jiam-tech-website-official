// Add gtag to the window interface
declare global {
  interface Window {
    gtag?: (command: 'config' | 'event' | 'js', ...args: any[]) => void;
  }
}

// TODO: Replace with your actual Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

let isInitialized = false;

export const init = () => {
  if (isInitialized || typeof window === 'undefined') {
    return;
  }

  // Avoid initializing if script already exists
  if (document.getElementById('ga-script')) {
      isInitialized = true;
      return;
  }

  console.log("Initializing Google Analytics...");

  const script = document.createElement('script');
  script.id = 'ga-script';
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  const inlineScript = document.createElement('script');
  inlineScript.id = 'ga-inline-script';
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', { 'anonymize_ip': true });
  `;
  document.head.appendChild(inlineScript);

  isInitialized = true;
  console.log("Google Analytics initialized.");
};

export const pageview = (path: string) => {
    if (!isInitialized || !window.gtag) {
        return;
    }
    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: path,
    });
};

export const event = (name: string, params: Record<string, any>) => {
    if (!isInitialized || !window.gtag) {
        return;
    }
    window.gtag('event', name, params);
};
