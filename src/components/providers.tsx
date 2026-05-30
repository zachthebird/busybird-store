"use client";

import { CartDrawer } from "./cart-drawer";
import { ToastContainer } from "./toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CartDrawer />
      <ToastContainer />
    </>
  );
}
