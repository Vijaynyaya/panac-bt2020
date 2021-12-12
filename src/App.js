import { useEffect } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "./styles.css";
import HTML from "./HTML";

const sceneryFrames = [
  { transform: "translateX(100%)" },
  { transform: "translateX(-100%)" }
];
const spriteFrames = [
  { transform: "translateY(0)" },
  { transform: "translateY(-100%)" }
];

const sceneryTimingBackground = {
  duration: 36000,
  iterations: Infinity
};
const sceneryTimingForeground = {
  duration: 12000,
  iterations: Infinity
};
const spriteTiming = {
  easing: "steps(7, end)",
  direction: "reverse",
  duration: 600,
  playbackRate: 1,
  iterations: Infinity
};

export default function App() {
  let background1Movement = useWebAnimations({
    keyframes: sceneryFrames,
    animationOptions: sceneryTimingBackground
  });
  let background2Movement = useWebAnimations({
    keyframes: sceneryFrames,
    animationOptions: sceneryTimingBackground
  });
  let foreground1Movement = useWebAnimations({
    keyframes: sceneryFrames,
    animationOptions: sceneryTimingForeground
  });
  let foreground2Movement = useWebAnimations({
    keyframes: sceneryFrames,
    animationOptions: sceneryTimingForeground
  });
  let sprite = useWebAnimations({
    keyframes: spriteFrames,
    animationOptions: spriteTiming
  });
  let cat = useWebAnimations({
    keyframes: spriteFrames,
    animationOptions: {
      easing: "steps(12, end)",
      duration: 800,
      playbackRate: 1,
      iterations: Infinity
    }
  });
  let sceneries = [
    background1Movement,
    background2Movement,
    foreground1Movement,
    foreground2Movement
  ];
  let refs = {
    background1: background1Movement.ref,
    background2: background2Movement.ref,
    foreground1: foreground1Movement.ref,
    foreground2: foreground2Movement.ref,
    sprite: sprite.ref,
    cat: cat.ref
  };

  function adjustBackgroundPlayback() {
    function updateSceneriesPlaybackRate(num) {
      sceneries.forEach(({ getAnimation }) => {
        getAnimation().updatePlaybackRate(num);
      });
    }
    let a = sprite.getAnimation().playbackRate;
    if (a < 0.8) {
      updateSceneriesPlaybackRate((a / 2) * -1);
    } else if (a > 1.2) {
      updateSceneriesPlaybackRate(a / 2);
    } else {
      updateSceneriesPlaybackRate(0);
    }
  }
  function goFaster() {
    let s = sprite.getAnimation().playbackRate;
    sprite.getAnimation().updatePlaybackRate(s * 1.1);
    cat.getAnimation().updatePlaybackRate(s * 1.1);
    adjustBackgroundPlayback();
  }
  useEffect(() => {
    background1Movement.getAnimation().currentTime =
      background1Movement.getAnimation().effect.getTiming().duration / 2;
    foreground1Movement.getAnimation().currentTime =
      foreground1Movement.getAnimation().effect.getTiming().duration / 2;
    adjustBackgroundPlayback();

    setInterval(() => {
      let b = sprite.getAnimation();
      if (b > 0.4) {
        sprite.getAnimation().updatePlaybackRate(b.playbackRate * 0.9);
        cat.getAnimation().updatePlaybackRate(b.playbackRate * 0.9);
      }
      adjustBackgroundPlayback();
    }, 1000);

    document.addEventListener("click", goFaster);
  });

  return <HTML refs={refs} />;
}
