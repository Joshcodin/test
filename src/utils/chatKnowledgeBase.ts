interface KnowledgeEntry {
  keywords: string[];
  response: string;
}

export const knowledgeBase: KnowledgeEntry[] = [
  {
    keywords: ["divorce", "separation", "custody"],
    response:
      "Our family law team handles divorce cases with sensitivity and professionalism. We can assist with custody arrangements, asset division, and spousal support. Would you like to schedule a consultation with our family law expert?",
  },
  {
    keywords: ["criminal", "arrest", "charged", "defense"],
    response:
      "If you're facing criminal charges, it's crucial to seek legal representation immediately. Our criminal defense team can protect your rights and build a strong defense strategy. Would you like to discuss your case confidentially?",
  },
  {
    keywords: ["business", "corporate", "contract", "company"],
    response:
      "Our corporate law team can assist with business formation, contract negotiations, compliance, and litigation. How can we help your business today?",
  },
  {
    keywords: ["real estate", "property", "lease", "tenant", "landlord"],
    response:
      "Whether you're dealing with property transactions, lease agreements, or disputes, our real estate attorneys can help protect your interests. Would you like to discuss your property matter?",
  },
  {
    keywords: ["will", "trust", "estate", "inheritance"],
    response:
      "Our estate planning services help secure your family's future through wills, trusts, and comprehensive estate plans. Would you like to learn more about protecting your assets?",
  },
  {
    keywords: ["consultation", "appointment", "meet", "schedule"],
    response:
      "We offer free initial consultations. You can schedule one by calling (555) 123-4567 or filling out our contact form above. When would you like to meet with our team?",
  },
  {
    keywords: ["cost", "fee", "price", "payment"],
    response:
      "Being an Act to provide for the management of petroleum operations, to regulate and promote petroleum exploration, development and production; to regulate the licensing and participation of commercial entities in petroleum operations; to provide for proper supervision of petroleum operations, to promote the participation of Sierra Leoneans in the petroleum industry; to provide for efficient and safe petroleum operations; to provide for an open, transparent and competitive process of licensing and for other related matters. Amended by the Petroleum (Exploration and Production) (Amendment) Act, 2014.Being an Act to provide for the management of petroleum operations, to regulate and promote petroleum exploration, development and production; to regulate the licensing and participation of commercial entities in petroleum operations; to provide for proper supervision of petroleum operations, to promote the participation of Sierra Leoneans in the petroleum industry; to provide for efficient and safe petroleum operations; to provide for an open, transparent and competitive process of licensing and for other related matters. Amended by the Petroleum (Exploration and Production) (Amendment) Act, 2014.",
  },
  {
    keywords: ["driving", "stop", "police", ""],
    response:
      "But you MUST still follow all relevant laws You MUST be fit to drive (for example, you must be within the drink-drive legal limits and not be under the influence of drugs). See Rules 90 to 96. ● The vehicle MUST be road legal (for example, it must have anMOT certificate, if applicable, and it must be taxed and insured). The vehicle must be roadworthy (see Rules 89 and 97; and Annexes 3 and 6). You will also still be responsible for your passengers and anything else you are carrying (see Rules 98 to 102). ● You MUST NOT do anything illegal like using a handheld ",
  },
];

export function findResponse(input: string): string {
  const lowercaseInput = input.toLowerCase();

  // Check for greetings
  if (
    /^(hi|hello|hey|good\s*(morning|afternoon|evening))$/i.test(lowercaseInput)
  ) {
    return "Hello! I'm the Justice 4 All legal assistant. How can I help you today?";
  }

  // Find matching knowledge base entry
  const matchingEntry = knowledgeBase.find((entry) =>
    entry.keywords.some((keyword) => lowercaseInput.includes(keyword))
  );

  if (matchingEntry) {
    return matchingEntry.response;
  }

  return "I understand you have a legal question. For the most accurate assistance, I recommend scheduling a consultation with one of our Team lead Moses. Would you like me to help you schedule one?";
}
