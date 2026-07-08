const crutchAmbulation = {
  badge: "🩼 Mobility & Safety",

  title: "Crutch Walking Education",

  description:
    "You're teaching a client how to safely ambulate with crutches. Select the instruction that demonstrates proper crutch use.",

  timer: 45,

  media: {
    type: "image",
    src: "/images/crutch-training.jpg",
  },

  question:
    "The nurse is teaching a client how to ambulate using crutches. Which instruction should the nurse include?",

  options: [
    {
      id: "A",
      text: "Use your hands and arms to support your body weight.",
    },
    {
      id: "B",
      text: "Wear slippers when ambulating with the crutches in your home.",
    },
    {
      id: "C",
      text: "Maintain the crutches 12 inches (30 cm) in front of your feet while standing.",
    },
    {
      id: "D",
      text: "Adjust the hand grips so that your elbows are fully extended.",
    },
  ],

  answer: "A",

  explanation:
    "The correct answer is A. Clients should support their body weight with their hands and arms while using crutches to avoid pressure on the axillae, which can injure the brachial plexus. Slippers are unsafe because they increase the risk of falls. The crutch tips should be positioned approximately 6 inches (15 cm) to the side and 6 inches (15 cm) in front of each foot. The hand grips should be adjusted so the elbows remain slightly flexed (20–30°), allowing for comfortable and safe weight bearing.",
};

export default crutchAmbulation;