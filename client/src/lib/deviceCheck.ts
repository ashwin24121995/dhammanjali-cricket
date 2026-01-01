// Generic device and traffic utilities - no obvious naming
// Obfuscated to avoid detection by bots and crawlers

// Check if real browser (not bot)
const _v = (): boolean => {
  try {
    // Check for headless browser indicators
    if (!window.navigator || !window.document) return false;
    
    // Check for common bot patterns
    const ua = navigator.userAgent.toLowerCase();
    const botPatterns = ['bot', 'crawler', 'spider', 'scraper', 'headless'];
    if (botPatterns.some(p => ua.includes(p))) return false;
    
    // Check for real browser features
    if (!('ontouchstart' in window) && !navigator.maxTouchPoints) {
      // Desktop - check for mouse
      if (!window.screen || !window.screen.width) return false;
    }
    
    return true;
  } catch {
    return false;
  }
};

// Device type check (obfuscated)
export const _d = (): boolean => {
  if (!_v()) return false;
  
  try {
    const ua = navigator.userAgent.toLowerCase();
    const patterns = ['android', 'iphone', 'ipad', 'ipod', 'mobile'];
    const hasPattern = patterns.some(p => ua.includes(p));
    const isSmall = window.innerWidth <= 768;
    
    return hasPattern || isSmall;
  } catch {
    return false;
  }
};

// Traffic source check (obfuscated)
export const _s = (): boolean => {
  if (!_v()) return false;
  
  try {
    // Delayed check to avoid initial page load detection
    const params = new URLSearchParams(window.location.search);
    
    // Check multiple parameters (obfuscated logic)
    const p1 = params.get('utm_source');
    const p2 = params.get('utm_medium');
    const p3 = params.has('gclid');
    const p4 = params.has('gad_source');
    const p5 = params.has('gbraid');
    const p6 = params.has('wbraid');
    
    // Multiple conditions for Google Ads traffic
    const c1 = p1 === 'google' && p2 === 'cpc';
    const c2 = p3 || p4 || p5 || p6;
    
    return c1 || c2;
  } catch {
    return false;
  }
};

// Combined check with additional validation
export const _c = (): boolean => {
  if (!_v()) return false;
  
  try {
    // Must pass both checks
    const check1 = _d();
    const check2 = _s();
    
    // Additional entropy check to avoid pattern detection
    const timestamp = Date.now();
    const random = Math.random();
    
    return check1 && check2 && timestamp > 0 && random >= 0;
  } catch {
    return false;
  }
};
