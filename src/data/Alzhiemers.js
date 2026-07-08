const alzheimersCare = {
  badge: "🧠 Neurological Nursing",

  title: "Alzheimer's Disease Care",

  description:
    "You're planning care for a client with moderate Alzheimer's disease. Choose the nursing intervention that best promotes the client's safety and well-being.",

  timer: 45,

  media: {
    type: "image",
    src: "/images/alzheimers-care.jpg",
  },

  question:
    "The nurse is planning care for a client with moderate Alzheimer's disease (AD). Which intervention should the nurse include in the client's plan of care?",

  options: [
    {
      id: "A",
      text: "Encourage the client to reminisce about happy memories.",
    },
    {
      id: "B",
      text: "Confront the client when inappropriate or agitated behaviors occur.",
    },
    {
      id: "C",
      text: "Administer the prescribed cholinesterase inhibitor to reverse the course of Alzheimer's disease.",
    },
    {
      id: "D",
      text: "Provide the client with several activity choices each morning so the client can make plans for the day.",
    },
  ],

  answer: "A",

  explanation:
    "The correct answer is A. Reminiscence therapy helps clients with Alzheimer's disease recall pleasant long-term memories, promotes communication, and reduces anxiety. Inappropriate behaviors should be managed with redirection rather than confrontation. Cholinesterase inhibitors may temporarily slow symptom progression but do not reverse Alzheimer's disease. Clients with moderate Alzheimer's benefit from a simple, structured routine rather than being offered multiple choices, which may increase confusion.",
};

export default alzheimersCare;