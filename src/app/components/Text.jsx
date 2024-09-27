"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = ` Keys to Musical Brilliance`;

export function Text() {
  return (
    <TextGenerateEffect
      className="text-4xl font-bold  relative  cursor-pointer group  text-sky-500 uppercase pl-4 pt-6"
      words={words}
    />
  );
}

// The piano, with its graceful keys and wide tonal range, has long been a
//         symbol of musical mastery. From classical compositions to contemporary
//         hits, the instrument brings depth, emotion, and texture to any piece of
//         music. Its ability to blend melody and harmony allows pianists to create
//         rich, dynamic soundscapes that leave a lasting impression on listeners.
