const AFFILIATE_ID = "YOUR_AFFILIATE_ID"; // replace with your topticketshop.nl affiliate ID
const BASE_URL = "https://www.topticketshop.nl";

/**
 * Generate a tracked affiliate URL for a given show or comedian page.
 * @param path - the topticketshop.nl path, e.g. "/artiest/jochem-myjer"
 */
export function getAffiliateUrl(path: string): string {
  const url = new URL(`${BASE_URL}${path}`);
  url.searchParams.set("affiliate", AFFILIATE_ID);
  return url.toString();
}

// Usage example:
// getAffiliateUrl("/artiest/jochem-myjer")
// → "https://www.topticketshop.nl/artiest/jochem-myjer?affiliate=YOUR_AFFILIATE_ID"
