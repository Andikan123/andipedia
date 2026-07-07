const snakebite = {
  badge: "🐍 Emergency Simulation",

  title: "Snake Bite Emergency",

  description:
    "Watch carefully and make your nursing decision before time runs out.",

  timer: 45,

  media: {
    type: "video",
    src: "/images/snakebite.mp4",
  },

  question:
    "A farmer presents to the emergency unit after a snake bite to the lower leg. What is the most immediate nursing intervention?",

  options: [
    {
      id: "A",
      text: "Apply a tight tourniquet above the bite site",
    },
    {
      id: "B",
      text: "Encourage the patient to walk to reduce swelling",
    },
    {
      id: "C",
      text: "Immobilize the limb and keep it at heart level or slightly below",
    },
    {
      id: "D",
      text: "Incise the wound to remove venom",
    },
  ],

  answer: "C",

  explanation:
    "Immobilization slows lymphatic drainage and reduces venom spread. The affected limb should remain at heart level or slightly below. Do not apply a tourniquet, incise the wound, or encourage walking.",
};

export default snakebite;