import React, { Children } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { FiSun } from "react-icons/fi";

function Header({ children, className }: HeaderProps) {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className=" md:flex-1">
        <Image
          src="/assets/icons/logo.svg"
          alt="logo"
          width={120}
          height={32}
          className="hidden md:block"
        />
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>
      <Button className=" rounded-full">
        <FiSun />
      </Button>
      {children}
    </div>
  );
}

export default Header;
