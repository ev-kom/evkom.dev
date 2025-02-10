"use client";

import React from "react";

import { memo } from "react";
import { useClippy } from "@react95/clippy";
import { Cursor } from "@react95/core";
import { useEffect } from "react";

const talks = [
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
    }, 30_000);

    return () => clearInterval(interval);
  }, [clippy]);

  return <div className={Cursor.Pointer} />;
});

Clippy.displayName = "Clippy";

export default Clippy;
