"use client";
//@ts-ignore

import React, { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispApp = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Crisp.configure(`91525ed5-034b-479d-9d57-791635921f3d`);
    }
  }, []);

  return null;
};

export default CrispApp;
