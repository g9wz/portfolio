"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 100,
      once: true,
    });
  }, []);

  return null;
}

export default AOSProvider;
