import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export const SpaceParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.3,
              },
            },
          },
        },
        particles: {
          color: {
            value: ["#ffffff", "#e4e4e7", "#d4d4d8"],
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.1,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 200,
          },
          opacity: {
            value: { min: 0.1, max: 0.8 },
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
            },
          },
          shape: {
            type: ["circle", "star"],
          },
          size: {
            value: { min: 0.5, max: 2.5 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.3,
            },
          },
        },
        detectRetina: true,
        // Comets effect
        emitters: [
          {
            direction: "top-right",
            rate: {
              quantity: 1,
              delay: 3,
            },
            size: {
              width: 0,
              height: 0,
            },
            position: {
              x: 0,
              y: 100,
            },
            particles: {
              move: {
                speed: 10,
                outModes: {
                  default: "destroy",
                  left: "destroy",
                },
                straight: true,
              },
              size: {
                value: { min: 2, max: 4 },
              },
              opacity: {
                value: { min: 0.1, max: 1 },
                animation: {
                  enable: true,
                  speed: 5,
                  minimumValue: 0,
                  startValue: "max",
                  destroy: "min",
                },
              },
              color: {
                value: ["#ffffff", "#a1a1aa", "#e4e4e7"],
              },
              life: {
                duration: {
                  value: 2,
                },
              },
            },
          },
          {
            direction: "bottom-right",
            rate: {
              quantity: 1,
              delay: 5,
            },
            size: {
              width: 0,
              height: 0,
            },
            position: {
              x: 0,
              y: 0,
            },
            particles: {
              move: {
                speed: 8,
                outModes: {
                  default: "destroy",
                },
                straight: true,
              },
              size: {
                value: { min: 1.5, max: 3 },
              },
              opacity: {
                value: { min: 0.1, max: 0.8 },
                animation: {
                  enable: true,
                  speed: 4,
                  minimumValue: 0,
                  startValue: "max",
                  destroy: "min",
                },
              },
              color: {
                value: ["#ffffff", "#d4d4d8"],
              },
              life: {
                duration: {
                  value: 2.5,
                },
              },
            },
          },
        ],
      }}
      className="absolute inset-0 z-0"
    />
  );
};
