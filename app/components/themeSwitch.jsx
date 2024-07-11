"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <span className='w-[64px] h-[32px] bg-borderColor animate-pulse rounded-lg'></span>
    );

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className='bg-borderColor sm:px-6 px-5 py-2 rounded-lg hover:bg-hoverBorderColor duration-200'
      title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"}`}
    >
      {resolvedTheme === "dark" ? (
        <FiSun className='text-textColor text-base' />
      ) : (
        <FiMoon className='text-textColor text-base' />
      )}
    </button>
  );
}
