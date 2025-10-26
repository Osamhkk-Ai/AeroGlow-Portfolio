import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

export default function FloatingCharacter() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Using a reliable astronaut Lottie animation from LottieFiles
    fetch('https://assets10.lottiefiles.com/packages/lf20_jbrw3hcz.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch(() => {
        // Fallback to another animation
        fetch('https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json')
          .then((response) => response.json())
          .then((data) => setAnimationData(data))
          .catch((error) => console.log('Lottie animation not loaded'));
      });
  }, []);

  if (!animationData) {
    // Fallback: Simple CSS-based floating character
    return (
      <div
        className="fixed pointer-events-none z-5 opacity-30"
        style={{
          width: '120px',
          height: '120px',
          animation: 'floatCharacter 30s ease-in-out infinite',
        }}
      >
        <div className="relative w-full h-full">
          {/* Simple astronaut-like shape using CSS */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* Helmet */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-500/40 border-2 border-cyan-300/50 glow-sm mx-auto" />
            {/* Body */}
            <div className="w-12 h-16 bg-gradient-to-b from-cyan-500/30 to-blue-600/30 border-2 border-cyan-300/40 rounded-lg mx-auto mt-1" />
            {/* Arms */}
            <div className="absolute top-20 left-0 w-6 h-2 bg-cyan-400/40 rounded-full border border-cyan-300/40" />
            <div className="absolute top-20 right-0 w-6 h-2 bg-cyan-400/40 rounded-full border border-cyan-300/40" />
          </div>
        </div>
        <style>{`
          @keyframes floatCharacter {
            0% {
              transform: translate(10vw, 20vh) rotate(0deg);
            }
            25% {
              transform: translate(70vw, 40vh) rotate(5deg);
            }
            50% {
              transform: translate(60vw, 70vh) rotate(-5deg);
            }
            75% {
              transform: translate(30vw, 50vh) rotate(3deg);
            }
            100% {
              transform: translate(10vw, 20vh) rotate(0deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div
      className="fixed pointer-events-none z-5 opacity-40"
      style={{
        width: '180px',
        height: '180px',
        animation: 'floatCharacter 30s ease-in-out infinite',
      }}
    >
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ 
          width: '100%', 
          height: '100%', 
          filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.3))' 
        }}
      />
      <style>{`
        @keyframes floatCharacter {
          0% {
            transform: translate(10vw, 20vh) rotate(0deg);
          }
          25% {
            transform: translate(70vw, 40vh) rotate(5deg);
          }
          50% {
            transform: translate(60vw, 70vh) rotate(-5deg);
          }
          75% {
            transform: translate(30vw, 50vh) rotate(3deg);
          }
          100% {
            transform: translate(10vw, 20vh) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}