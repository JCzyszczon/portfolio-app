import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import LogoLight from "../img/logo-light.png";
import LogoDark from "../img/logo-dark.png";

function Logo() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const key = theme === "dark" ? "dark" : "light";

  if (!mounted)
    return (
      <span className='w-[18px] h-[18px] bg-borderColor animate-pulse rounded-lg'></span>
    );

  return (
    <Image
      key={key}
      src={theme === "dark" ? LogoLight : LogoDark}
      width={18}
      height={18}
      title='JCzyszczon Logo'
      alt='JCzyszczon Logo'
    />
  );
}

export default Logo;
