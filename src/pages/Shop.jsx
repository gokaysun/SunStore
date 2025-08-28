import React from "react";
import ShopPageLine from "../components/ShopPageLine";
import ShopCloths from "../components/ShopCloths";
import ShopShowing from "../components/ShopShowing";
import ShopGraphic from "../components/ShopGraphic";
import ShopClient from "../components/ShopClient";

export default function Shop() {
  return (
    <main className="w-full bg-white">
      {/* Always show ShopPageLine (component handles responsive) */}
      <ShopPageLine />

      {/* Render each section once; components handle mobile vs desktop internally */}
      <ShopCloths />
      <ShopShowing />
      <ShopGraphic />
      <ShopClient />
    </main>
  );
}
