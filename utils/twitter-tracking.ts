declare global {
  interface Window {
    twq: any;
  }
}

export const trackTwitterConversion = () => {
  if (typeof window !== 'undefined' && window.twq) {
    console.log('Twitter conversion event firing...');
    window.twq('event', 'tw-pi3z1-pi3z1', {});
  } else {
    console.warn('Twitter pixel not loaded properly');
  }
};
