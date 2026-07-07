import { useEffect, useState } from "react";

export default function ScenarioPlayer({ scenario }) {
  const [timeLeft, setTimeLeft] = useState(scenario.timer);
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const correctAnswer = scenario.answer;
  const options = scenario.options;

  useEffect(() => {
    if (submitted) return;

    if (timeLeft <= 0) {
      setSubmitted(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, submitted]);

  const submitAnswer = () => {
    if (!selected) return;
    setSubmitted(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">

      {/* HERO */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">

        {scenario.media?.type === "video" ? (
          <video
            className="w-full h-[500px] object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={scenario.media.src} type="video/mp4" />
          </video>
        ) : (
          <img
            src={scenario.media.src}
            alt={scenario.title}
            className="w-full h-[500px] object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">

          <span className="bg-red-600 w-fit px-5 py-2 rounded-full font-semibold mb-5">
            {scenario.badge}
          </span>

          <h1 className="text-5xl font-bold">
            {scenario.title}
          </h1>

          <p className="mt-4 text-xl max-w-xl">
            {scenario.description}
          </p>

        </div>

      </div>

      {/* QUESTION */}

      <div className="mt-8 bg-white rounded-2xl shadow p-6">

        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold">
            NCLEX Question
          </h2>

          <div
            className={`text-xl font-bold ${
              timeLeft <= 10 ? "text-red-600" : "text-blue-600"
            }`}
          >
            ⏳ {timeLeft}s
          </div>

        </div>

        <p className="mt-6 text-xl">
          {scenario.question}
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          {options.map((option) => {
            let color = "border-gray-300 hover:bg-gray-100";

            if (submitted) {
              if (option.id === correctAnswer) {
                color = "border-green-600 bg-green-100";
              } else if (option.id === selected) {
                color = "border-red-600 bg-red-100";
              }
            } else if (selected === option.id) {
              color = "border-blue-600 bg-blue-50";
            }

            return (
              <button
                key={option.id}
                disabled={submitted}
                onClick={() => setSelected(option.id)}
                className={`border-2 rounded-2xl p-5 text-left transition ${color}`}
              >
                <strong>{option.id}.</strong> {option.text}
              </button>
            );
          })}
        </div>

        {!submitted && (
          <button
            onClick={submitAnswer}
            className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700"
          >
            Submit Answer
          </button>
        )}

        {submitted && (
          <div className="mt-8">

            <div
              className={`text-xl font-bold ${
                selected === correctAnswer
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {selected === correctAnswer
                ? "✅ Correct!"
                : "❌ Incorrect"}
            </div>

            <div className="mt-5 bg-blue-50 border border-blue-200 rounded-2xl p-6">

              <h3 className="text-xl font-bold text-blue-700">
                Correct Answer
              </h3>

              <p className="mt-2 font-semibold">
                {scenario.answer}.{" "}
                {
                  scenario.options.find(
                    (option) => option.id === scenario.answer
                  )?.text
                }
              </p>

              <p className="mt-4 text-gray-700 leading-7">
                {scenario.explanation}
              </p>

            </div>

          </div>
        )}

      </div>

    </section>
  );
}