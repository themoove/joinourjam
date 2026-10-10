/**
 * Intake links. Pat pastes a published Perspective URL over each PASTE_ value.
 * Until then the button opens an on-site holding page. Nothing is posted.
 *
 * Decided 10 Oct 2026:
 * Perspective is the first layer of intake.
 * Consumer signups go Perspective → Nutshell.
 * Magazine signups go Perspective → HubSpot (portal 52101795).
 * The Maestro waitlist goes to both Nutshell and HubSpot.
 * INDUSTRY.AIFF stays in its own lane. No AIFF fields on consumer funnels.
 *
 * UTM tags are added when a URL is live:
 * utm_source=joinourjam & utm_medium=site & utm_campaign=<page> & utm_content=<cta>
 *
 * Phone numbers are not collected on this site. Perspective asks for what it needs.
 */

export type FunnelKey =
  | 'magFreeMember'
  | 'circleWaitlist'
  | 'musicSubmission'
  | 'creatorLabs'
  | 'musicAmbassador'
  | 'bookRequest'
  | 'foundersSeat'
  | 'maestroTeachers'
  | 'maestroWaitlist'
  | 'syncBrief'
  | 'certifiedStudio'
  | 'brandPartner'
  | 'bookerWaitlist'
  | 'businessEnquiry'
  | 'careers'
  | 'arPressRecruiting'
  | 'industryTalkToPat';

export type Funnel = {
  /** What Pat sees in this file. */
  name: string;
  /** Draft id in Perspective, when one exists. Not shown to visitors. */
  draftId: string;
  /** Replace the PASTE_ string with the published https URL. */
  url: string;
  /** consumer signups → Nutshell. magazine → HubSpot. maestro → both. aiff stays separate. */
  lane: 'consumer' | 'magazine' | 'maestro' | 'aiff' | 'undecided';
  note: string;
};

export const funnels: Record<FunnelKey, Funnel> = {
  magFreeMember: {
    name: 'CITY JAM MAG — Free member join',
    draftId: '6aca216dbce5bf371f19796a',
    url: 'PASTE_PERSPECTIVE_URL_MAG_FREE_MEMBER',
    lane: 'magazine',
    note: 'Magazine signup. Perspective routes this to HubSpot portal 52101795. Not the paid £18 tier.',
  },
  circleWaitlist: {
    name: 'CITY JAM Circle waitlist',
    draftId: '',
    url: 'PASTE_PERSPECTIVE_URL_CIRCLE_WAITLIST',
    lane: 'consumer',
    note: 'App waitlist. No payment on the site (conflict 22). Perspective → Nutshell.',
  },
  musicSubmission: {
    name: 'CITY JAM music submission',
    draftId: '',
    url: 'PASTE_PERSPECTIVE_URL_MUSIC_SUBMISSION',
    lane: 'consumer',
    note: 'Listening pile for the magazine, desks and playlists. Separate from the A&R funnel until question 12 is answered.',
  },
  creatorLabs: {
    name: 'CITY JAM Creator Labs application',
    draftId: '',
    url: 'PASTE_PERSPECTIVE_URL_CREATOR_LABS',
    lane: 'consumer',
    note: 'Application. Deposit amount is conflict 2. Nothing is charged on the site.',
  },
  musicAmbassador: {
    name: 'CITY JAM Music Ambassador application',
    draftId: '',
    url: 'PASTE_PERSPECTIVE_URL_MUSIC_AMBASSADOR',
    lane: 'consumer',
    note: 'One per scene. Commission model is conflict 18. Do not lead the page with earnings.',
  },
  bookRequest: {
    name: 'CITY JAM book request — Nobody’s Looking',
    draftId: '',
    url: 'PASTE_PERSPECTIVE_URL_BOOK_REQUEST',
    lane: 'consumer',
    note: 'Price is conflict 17. Nothing is charged on the site.',
  },
  foundersSeat: {
    name: 'CITY JAM Founders seat',
    draftId: '',
    url: 'PASTE_PERSPECTIVE_URL_FOUNDERS_SEAT',
    lane: 'consumer',
    note: 'Nothing is charged on the site (conflict 22).',
  },
  maestroTeachers: {
    name: 'CITY JAM Maestro application (people who want to teach)',
    draftId: '',
    url: 'PASTE_PERSPECTIVE_URL_MAESTRO_TEACHERS',
    lane: 'consumer',
    note: 'Teacher application for /teach. Not the student waitlist.',
  },
  maestroWaitlist: {
    name: 'CITY JAM Maestro — Waitlist',
    draftId: '6aca3343f884244686648f30',
    url: 'PASTE_PERSPECTIVE_URL_MAESTRO_WAITLIST',
    lane: 'maestro',
    note: 'Student waitlist for /maestros. Perspective routes this to both Nutshell and HubSpot.',
  },
  syncBrief: {
    name: 'CITY JAM Sync brief',
    draftId: '',
    url: 'PASTE_PERSPECTIVE_URL_SYNC_BRIEF',
    lane: 'consumer',
    note: 'Business enquiry for sync. Perspective → Nutshell.',
  },
  certifiedStudio: {
    name: 'CITY JAM Certified Studio application',
    draftId: '',
    url: 'PASTE_PERSPECTIVE_URL_CERTIFIED_STUDIO',
    lane: 'consumer',
    note: 'Application. Nothing is charged on the site.',
  },
  brandPartner: {
    name: 'CITY JAM brand partner / media kit',
    draftId: '',
    url: 'PASTE_PERSPECTIVE_URL_BRAND_PARTNER',
    lane: 'consumer',
    note: 'Partners and the print media kit.',
  },
  bookerWaitlist: {
    name: 'CITY JAM Booker waitlist',
    draftId: '',
    url: 'PASTE_PERSPECTIVE_URL_BOOKER_WAITLIST',
    lane: 'consumer',
    note: 'Booker price is conflict 14. No figure on the page.',
  },
  businessEnquiry: {
    name: 'CITY JAM business enquiry',
    draftId: '',
    url: 'PASTE_PERSPECTIVE_URL_BUSINESS_ENQUIRY',
    lane: 'consumer',
    note: 'For a job that is not one of the five routes on /business.',
  },
  careers: {
    name: 'CITY JAM careers',
    draftId: '',
    url: 'PASTE_PERSPECTIVE_URL_CAREERS',
    lane: 'consumer',
    note: 'All open roles for now. Question 12 may move editor and curator to the A&R funnel.',
  },
  arPressRecruiting: {
    name: 'CITY JAM — A&R & Press Recruiting',
    draftId: '6ac5ac6b9a310db4be676f08',
    url: 'PASTE_PERSPECTIVE_URL_AR_PRESS',
    lane: 'undecided',
    note: 'Draft exists. Not linked from a button until question 12 says whether it is for music or for roles.',
  },
  industryTalkToPat: {
    name: 'INDUSTRY.AIFF — Talk to Pat about one signed artist',
    draftId: '6ac9ed86111cf3d8ae9ba654',
    url: 'PASTE_PERSPECTIVE_URL_INDUSTRY_TALK_TO_PAT',
    lane: 'aiff',
    note: 'Labels and artist-services only. Do not reuse this URL on consumer pages.',
  },
};

/** Live magazine host. Not a Perspective funnel. Paid checkout is still question 6. */
export const magazineUrl = 'https://dispatch.joinourjam.com';

/** Weekday letter. Never link aiff.ai. */
export const industryLetterUrl = 'https://industrydotaiff.substack.com';

export function isPlaceholder(url: string): boolean {
  return !url.startsWith('https://') || url.includes('PASTE_PERSPECTIVE_URL');
}

export function withUtm(url: string, campaign: string, content: string): string {
  const next = new URL(url);
  next.searchParams.set('utm_source', 'joinourjam');
  next.searchParams.set('utm_medium', 'site');
  next.searchParams.set('utm_campaign', campaign);
  next.searchParams.set('utm_content', content);
  return next.toString();
}

export function resolveFunnel(key: FunnelKey, campaign: string, content: string): { href: string; external: boolean } {
  const funnel = funnels[key];
  if (!isPlaceholder(funnel.url)) {
    return { href: withUtm(funnel.url, campaign, content), external: true };
  }
  const params = new URLSearchParams({ campaign, content });
  return { href: `/intake/${key}?${params.toString()}`, external: false };
}

export function resolveMagazine(campaign: string, content: string): string {
  return withUtm(magazineUrl, campaign, content);
}

export function resolveLetter(campaign: string, content: string): string {
  return withUtm(industryLetterUrl, campaign, content);
}
