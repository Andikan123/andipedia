const ecgScenario = {
  badge: "❤️ Cardiac Emergency",

  title: "ECG Interpretation",

  description:
    "Assess the cardiac rhythm and determine the appropriate nursing interventions.",

  timer: 45,

  media: {
    type: "image",
    src: "/images/ecg-strip.png",
  },

  question:
    "The nurse is caring for a client who reports feeling faint and is experiencing the cardiac rhythm shown on the ECG strip. Which nursing actions are appropriate? Select all that apply.",

  options: [
    {
      id: "A",
      text: "Administer the client's prescribed beta blocker.",
    },
    {
      id: "B",
      text: "Prepare for transcutaneous pacing.",
    },
    {
      id: "C",
      text: "Instruct the client to perform the Valsalva maneuver.",
    },
    {
      id: "D",
      text: "Begin chest compressions.",
    },
    {
      id: "E",
      text: "Assess the client for angina.",
    },
  ],

  answer: [], // Will depend on the ECG rhythm

  explanation: "", // Will explain why each option is correct or incorrect
};

export default ecgScenario;