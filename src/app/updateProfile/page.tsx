"use client";

import Link from "next/link";

export default function updateProfile() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <h1>A página ainda será feita! Aguarde!</h1>
      <p>Enquanto isso, assista isso aqui:</p>
      <Link
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
        style={{ color: "blue", textDecoration: "underline blue" }}
        target="_blank"
      >
        Clique aqui
      </Link>
    </div>
  );
}
