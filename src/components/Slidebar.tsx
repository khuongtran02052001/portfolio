import React from "react";
import avatar from '../../public/image/avatar.jpeg'
import Image from "next/legacy/image";
import { AiFillGithub } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { IoMdSunny } from "react-icons/io";
import { GiTie } from "react-icons/gi";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { useTheme } from "next-themes";
import { BsMoonStarsFill, } from "react-icons/bs";
import { useTypingText } from "@/hooks/TypingText";
export default function Slidebar() {

  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = React.useState<boolean>(false);
  const { word } = useTypingText(
    ["Trần Duy Khương"],
    130
  );

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const changedTheme = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <IoMdSunny
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsMoonStarsFill
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div>
      <Image
        className="mx-auto border rounded-full"
        width={150}
        height={150}
        layout="intrinsic"
        objectFit="cover"
        src={avatar}
        alt="user avatar"
        quality="100"
      />
      <p className="my-4 font-medium tracking-wider ">
        <span className="mx-2 text-indigo-700 dark:text-violet-50 text-[22px]">{word}</span>
      </p>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-500 "
        href="/image/mycv.pdf"
        download={'TranDuyKhuong-Resume'}
        aria-label="down load resume"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-indigo-700 dark:text-violet-300 md:w-full">
        <a
          href="https://www.facebook.com/khuonggggggggg/"
          aria-label="Facebook"
        >
          <BsFacebook className="w-8 h-8 cursor-pointer" />
        </a>

        <a href="https://mail.google.com/mail/u/0/#inbox" aria-label="Gmail">
          <SiGmail className="w-8 h-8 cursor-pointer" />
        </a>

        <a href="https://github.com/khuongtran02052001" aria-label="Github">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-100"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Ho Chi Minh city</span>
        </div>
        <p className="my2">khuongtran227@gmail.com</p>
        <p className="my2">0702972026</p>
      </div>

      {/* button */}
      <button
        onClick={() => window.open("mailto:khuongtran227@gmail.com")}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400 focus:outline-none"
      >
        Email me
      </button>
      <button
        className="w-8/12 px-5 py-2 my-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400 dark:text-red-400 text-dark-500"
        aria-label="Change theme"
      >
        <p className="flex justify-center">{changedTheme()}</p>
      </button>
    </div >
  );
}
