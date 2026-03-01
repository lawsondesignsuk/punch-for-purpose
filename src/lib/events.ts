import { EventRecord } from "@/types/event";

export const events: EventRecord[] = [
  {
    id: "evt_birmingham_nov_2026",
    slug: "birmingham-november-2026",
    name: "Punch For Purpose – Birmingham",
    city: "Birmingham",
    dateISO: "2026-11-21T19:00:00.000Z",
    venue: "Utilita Arena",
    ticketsAvailable: true,
    heroCopy: "Train with champions, raise funds for local causes, and perform under lights in front of your crowd.",
    charityPartner: "Cancer Research UK",
    faq: [
      {
        question: "How are opponents matched?",
        answer: "Matching uses weight class, fitness level, and coach assessment to keep bouts fair.",
      },
      {
        question: "Is medical support provided?",
        answer: "Yes. Ringside medics and event-day medical protocols are included for every bout.",
      },
      {
        question: "Can friends and family attend?",
        answer: "Yes. Ticket sales are central to the event atmosphere and event-day experience.",
      },
    ],
  },
  {
    id: "evt_london_jan_2027",
    slug: "london-january-2027",
    name: "Punch For Purpose – London",
    city: "London",
    dateISO: "2027-01-23T19:00:00.000Z",
    venue: "Copper Box Arena",
    ticketsAvailable: false,
    heroCopy: "Limited fighter spaces. Serious training. Purpose-driven energy. London hosts the next major card.",
    charityPartner: "Great Ormond Street Hospital Charity",
    faq: [
      {
        question: "Can complete beginners join?",
        answer: "Absolutely. The full 8-week programme is structured specifically for beginners.",
      },
      {
        question: "What does the £50 fee include?",
        answer: "Registration, starter gloves and training gear, and access to coached training sessions.",
      },
      {
        question: "What happens after registration?",
        answer: "You receive onboarding, training schedule access, and fundraising setup guidance.",
      },
    ],
  },
];

export const getEventBySlug = (slug: string) => events.find((event) => event.slug === slug);
