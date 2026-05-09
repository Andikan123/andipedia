import { useEffect, useState } from "react";

export default function FloatingMed() {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const interval = setInterval(() => {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 100);

      setPosition({ x, y });
    }, 3000); // moves every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed text-3xl cursor-pointer transition-all duration-[2000ms] ease-in-out z-50"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      title="I'm studying too 😄"
    >
      🧠
    </div>
  );
}