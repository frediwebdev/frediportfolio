import React from "react";
import image from "../IT-background1.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Monstera Leaves"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-end min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Web Developer with I.T. Support Background
        </h1>
      </section>
    </main>
  );
}
