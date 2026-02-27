export type EventRecord = {
  id: string;
  slug: string;
  name: string;
  city: string;
  dateISO: string;
  venue: string;
  ticketsAvailable: boolean;
  heroCopy: string;
  charityPartner: string;
  faq: Array<{ question: string; answer: string }>;
};
