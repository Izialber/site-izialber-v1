export type Locale = 'pt' | 'en';

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    publications: string;
    trajectory: string;
    contact: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subhead: string;
    intro: string;
    ctaPrimary: string;
    ctaSecondary: string;
    photoAlt: string;
    role: string;
  };
  publications: {
    kicker: string;
    title: string;
    intro: string;
    statusPublished: string;
    statusInProgress: string;
    statusAccepted: string;
    statusThesis: string;
    viewLink: string;
    linkPending: string;
  };
  timeline: {
    kicker: string;
    title: string;
    intro: string;
    trackProfessional: string;
    trackAcademic: string;
    present: string;
    toBeDefined: string;
    periodTbd: string;
  };
  contact: {
    kicker: string;
    title: string;
    intro: string;
    emailLabel: string;
    linkedinLabel: string;
    lattesLabel: string;
    orcidLabel: string;
  };
  footer: {
    rights: string;
    location: string;
  };
}
