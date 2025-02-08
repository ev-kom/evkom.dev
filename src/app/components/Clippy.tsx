import { memo } from "react";
import { useClippy } from "@react95/clippy";
import { Cursor } from "@react95/core";
import { useEffect } from "react";

import React from "react";

const talks = [
  "How can I help you?",
  "Nice day!",
  "Glad to meet you.",
  "At your service",
  "Helloo",
  "Wie kann ich dir helfen?",
  "Schönen Tag!",
  "Freut mich, dich kennenzulernen.",
  "Zu Ihren Diensten",
  "Hallo",
];

const Clippy = memo(() => {
  const { clippy } = useClippy();

  useEffect(() => {
    const interval = setInterval(() => {
      const randomTalk = talks[Math.floor(Math.random() * talks.length)];

      clippy?.speak(randomTalk, false);
      clippy?.animate();
      clippy?.play("Wave");
    }, 100_000);

    return () => clearInterval(interval);
  }, [clippy]);

  return <div className={Cursor.Pointer} />;
});

Clippy.displayName = "Clippy";

export default Clippy;
