// src/components/RainBackground.jsx
// Decorative background: bulbs, brains and shapes falling slowly.
// Purely visual, ignores the mouse, and stops for users who prefer reduced motion.
import { useMemo } from "react";
import { Lightbulb, Brain } from "lucide-react";

const COUNT = 28;
const COLORS = ["#4169E1", "#FF8C00"]; // royal blue, orange
const KINDS = ["bulb", "brain", "circle", "triangle", "square", "ring"];

const randomBetween = (min, max) => Math.random() * (max - min) + min;

function makeItems() {
  return Array.from({ length: COUNT }, (_, i) => ({
    id: i,
    kind: KINDS[i % KINDS.length],
    left: randomBetween(0, 100),
    size: randomBetween(18, 44),
    duration: randomBetween(12, 26),
    delay: randomBetween(-26, 0),
    drift: randomBetween(-40, 40),
    color: COLORS[i % COLORS.length],
    opacity: randomBetween(0.25, 0.5),
  }));
}

function Shape({ item }) {
  const { kind, size, color } = item;

  switch (kind) {
    case "bulb":
      return <Lightbulb size={size} color={color} strokeWidth={1.5} />;
    case "brain":
      return <Brain size={size} color={color} strokeWidth={1.5} />;
    case "circle":
      return <div style={{ width: size, height: size, borderRadius: "50%", background: color }} />;
    case "square":
      return <div style={{ width: size, height: size, background: color, transform: "rotate(20deg)" }} />;
    case "triangle":
      return (
        <div
          style={{
            width: size,
            height: size,
            background: color,
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
      );
    case "ring":
      return (
        <div style={{ width: size, height: size, borderRadius: "50%", border: `3px solid ${color}` }} />
      );
    default:
      return null;
  }
}

export default function RainBackground() {
  const items = useMemo(makeItems, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    >
      <style>{`
        @keyframes rain-fall {
          0%   { transform: translate3d(0, -10vh, 0) rotate(0deg); }
          100% { transform: translate3d(var(--drift), 110vh, 0) rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .rain-item { animation: none !important; }
        }
      `}</style>

      {items.map((item) => (
        <div
          key={item.id}
          className="rain-item absolute top-0"
          style={{
            left: `${item.left}%`,
            opacity: item.opacity,
            "--drift": `${item.drift}px`,
            animation: `rain-fall ${item.duration}s linear ${item.delay}s infinite`,
          }}
        >
          <Shape item={item} />
        </div>
      ))}
    </div>
  );
}