"use client";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";
import { Children } from "react";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}
const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const handleLogout = () => {
    // todo handle logout
  };
  return (
    <div
      className={twMerge(`h-fit bg-gradient-to-b from-cyan-800 p-6`, className)}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className=" rounded-full transition bg-black flex items-center justify-center hover:opacity-75 "
          >
            <RxCaretLeft size={36} className="text-white" />
          </button>
          <button
            onClick={() => router.forward()}
            className=" rounded-full transition bg-black flex items-center justify-center hover:opacity-75 "
          >
            <RxCaretRight size={36} className="text-white" />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flext items-center justify-center hover:opacity-75 transition">
            <HiHome className="text-black" size={24} />
          </button>
          <button className="rounded-full p-2 bg-white flext items-center justify-center hover:opacity-75 transition">
            <BiSearch className="text-black" size={24} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button
                onClick={() => {}}
                className="bg-transparent text-neutral-300 font-medium"
              >
                Sign up
              </Button>
            </div>
            <div>
              <Button
                onClick={() => {}}
                className="bg-white  font-medium px-6 py-2"
              >
                Login
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
