const chickenpoxPrecautions = {
  badge: "🦠 Infection Control",

  title: "Chickenpox Isolation",

  description:
    "You're supervising a staff nurse caring for a client with chickenpox. Identify the action that requires immediate intervention.",

  timer: 45,

  media: {
    type: "image",
    src: "/images/chickenpox-isolation.jpg",
  },

  question:
    "The nurse is observing a staff member caring for a client who has chickenpox (varicella). Which action by the staff member requires the nurse to intervene?",

  options: [
    {
      id: "A",
      text: "Place the client in a private room with monitored negative air pressure.",
    },
    {
      id: "B",
      text: "Place a box of disposable face shields outside the client's room.",
    },
    {
      id: "C",
      text: "Place an alcohol-based hand rub in the client's room for hand hygiene.",
    },
    {
      id: "D",
      text: "Place a surgical mask on the client during transport outside the room.",
    },
  ],

  answer: "B",

  explanation:
    "The correct answer is B. Clients with chickenpox require Airborne and Contact Precautions. Healthcare personnel should wear a fit-tested N95 respirator (or higher-level respirator) when entering the room. A face shield alone does not provide protection against airborne transmission. A negative-pressure room is appropriate, alcohol-based hand rub is acceptable for routine hand hygiene when hands are not visibly soiled, and the client should wear a surgical mask during necessary transport outside the room.",
};

export default chickenpoxPrecautions;