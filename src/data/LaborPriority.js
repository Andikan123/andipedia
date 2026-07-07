const laborPriority = {
  badge: "🤰 NCLEX Prioritization",

  title: "Labor and Delivery Assessment",

  description:
    "You are the charge nurse receiving the change-of-shift report. Decide which client requires immediate assessment.",

  timer: 45,

  media: {
    type: "image",
    src: "/images/labor-priority.jpg",
  },

  question:
    "The charge nurse has received a change-of-shift report on the following clients in labor. Which client should the nurse ask a staff member to assess FIRST?",

  options: [
    {
      id: "A",
      text: "A client in the first stage of labor with an oral temperature of 99.7°F (37.6°C).",
    },
    {
      id: "B",
      text: "A client in the first stage of labor whose contractions are occurring every 30 seconds.",
    },
    {
      id: "C",
      text: "A client in the second stage of labor with respirations of 26 breaths/min.",
    },
    {
      id: "D",
      text: "A client in the second stage of labor whose contractions are lasting 60 seconds.",
    },
  ],

  answer: "B",

  explanation:
    "The correct answer is B. Contractions occurring every 30 seconds are abnormally frequent and may indicate uterine tachysystole, increasing the risk of decreased uteroplacental perfusion and fetal distress. This client requires immediate assessment. An oral temperature of 99.7°F (37.6°C) is within the expected range during labor. Respirations of 26 breaths/min can occur because of pain and exertion. Contractions lasting about 60 seconds are expected during active labor and the second stage of labor.",
};

export default laborPriority;