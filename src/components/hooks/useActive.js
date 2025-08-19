"use client";

import { usePathname } from "next/navigation";

const useIsActive = (href) => {
  const pathname = usePathname();

  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
};

export default useIsActive;
