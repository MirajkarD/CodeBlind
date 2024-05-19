import React, { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const location = useLocation();
  const isLoggedIn =
    location.pathname !== "/signin" && location.pathname !== "/register";

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#0c0c0c",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
      {isLoggedIn && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "white",
              fontFamily: "Arial, sans-serif",
              fontSize: "36px",
              fontWeight: "bold",
              textShadow:
                "0 0 3px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.3), 0 0 7px rgba(255, 255, 255, 0.3)",
            }}
          >
            Welcome to Blind Coding: The Dark Coding Battle
          </h1>
          <div style={{ marginTop: "20px" }}>
            <Link to="/python_ide">
              <Button variant="primary" style={{ width: "200px" }}>
                Start
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default ParticlesBackground;
