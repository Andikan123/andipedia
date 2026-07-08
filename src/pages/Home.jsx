import Navbar from "../components/Navbar";
import Scenario from "../components/Scenerio";
import snakebite from "../data/Snakebite";
import laborPriority from "../data/LaborPriority";
import chickenpox from "../data/Chickenpox";
import ecg from "../data/ECG";
import alzheimersCare from "../data/Alzhiemers";
import crutchAmbulation from "../data/CrutchAmbulation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white pt-16">

      <Navbar />

      {/* HERO */}
      <section
        className="relative w-full min-h-[90vh] bg-cover bg-center mt-2"
        style={{
          backgroundImage: "url('/images/blacknursehero.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center min-h-[90vh]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

            <div className="max-w-2xl text-white">

              <p className="uppercase tracking-[0.3em] text-blue-400 text-sm">
                Nurseridge
              </p>

              <h1 className="text-5xl sm:text-6xl font-bold mt-5 leading-tight">
                Learn Nursing
                <br />
                Through Real
                <span className="text-blue-500"> Clinical Scenarios</span>
              </h1>

              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Practice clinical reasoning with interactive patient cases.
                Improve your assessment skills, make nursing decisions,
                and build confidence one scenario at a time.
              </p>

              <a
                href="#scenario"
                className="inline-block mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold transition"
              >
                Start Practicing
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* SCENARIO */}
      <section
        id="scenario"
        className="max-w-7xl mx-auto px-4 py-24"
      >
        <div className="text-center mb-12">

          <p className="uppercase tracking-[0.3em] text-blue-600 text-sm">
            Interactive Case
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Test Your Clinical Judgment
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Read the patient story, assess the situation, make decisions,
            and receive immediate explanations just like an NCLEX-style
            clinical scenario.
          </p>

        </div>

        <Scenario scenario={snakebite} />
        <Scenario scenario={laborPriority} />
        <Scenario scenario={chickenpox} />
        <Scenario scenario={ecg} />
        <Scenario scenario={alzheimersCare} />
        <Scenario scenario={crutchAmbulation} />

      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-12 text-center px-6">

        <h2 className="text-2xl font-bold">
          NurseRidge
        </h2>

        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Helping nursing students strengthen clinical reasoning through
          interactive, evidence-based patient scenarios.
        </p>

        <p className="text-sm text-gray-400 mt-8">
          © {new Date().getFullYear()} NurseRidge. Educational purposes only.
          This platform does not replace professional medical advice,
          diagnosis, or treatment.
        </p>

      </footer>

    </div>
  );
}