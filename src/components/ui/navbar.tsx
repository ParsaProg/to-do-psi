"use client";
import Link from "next/link";
import Button from "./button";
import Modal from "./showModal";
import { FocusTrap } from "focus-trap-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar({ loggedIn }: { loggedIn?: boolean }) {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  useEffect(() => {
    // Set initial width on mount (client-side)
    setScreenWidth(window.innerWidth);

    // Handler for resize event
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="fixed top-0 right-0 w-full h-[70px] text-[#4d6bfe] flex items-center  dark:bg-[#09090B] border-b-[0.5px] dark:border-slate-800">
      {showModal && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen z-[9999] bg-black/70"
          onClick={() => setShowModal(!showModal)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      <div className="lg:w-[55%] w-[95%] mx-auto bg-transparent flex items-center justify-between">
        <Link href={"/"}>
          <div className="text-[#4d6bfe] font-[600] text-lg flex items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-badge-check-icon lucide-badge-check"
            >
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            TodoNext
          </div>
        </Link>
        {loggedIn ? (
          <div className="flex items-center gap-x-4">
            {" "}
            <Button
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-plus-icon lucide-circle-plus"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
              }
              text="Create Task"
              bgColor="#4d6bfe"
              ForColor="white"
              hoverBgColor="#4d5cfe"
              linkMode="none"
              onPress={() => {
                console.log("q");
              }}
            />
            <div className="rounded-full cursor-pointer w-10 h-10 bg-[url(https://quera.org/media/CACHE/images/public/avatars/5b5d6e303d614937b5539e30ce425fd1/baa30572cb80be55e6229d37f113540e.jpg)] bg-cover bg-center"></div>
          </div>
        ) : (
          <Button
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-log-in-icon lucide-log-in"
              >
                <path d="m10 17 5-5-5-5" />
                <path d="M15 12H3" />
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              </svg>
            }
            linkMode="none"
            text="Sign in"
            bgColor="#4d6bfe"
            ForColor="white"
            hoverBgColor="#4d5cfe"
            onPress={() => {
              setShowModal(true);
            }}
          />
        )}
      </div>
      <FocusTrap
        active={false}
        focusTrapOptions={{
          onDeactivate: () => {},
          clickOutsideDeactivates: true,
          initialFocus: false, // you can customize this or set to modal itself
        }}
      >
        <Modal
          isMobile={screenWidth < 680}
          isShow={showModal}
          onClose={() => {}}
          content={
            <div className="flex flex-col items-center justify-center text-center text-white">
              <h1 className="font-[500] text-xl">Sign In to your account</h1>
              <h1 className="mt-1 font-[400] text-md text-slate-300">
                Sign In to your account to continue the to-do
              </h1>
              <div className="flex items-center justify-center mt-3">
                <div className="w-full h-[0.1px] bg-slate-800 rounded-full mt-1"></div>
                <p className="text-slate-500 w-[400px] text-sm">SIGN IN WITH</p>
                <div className="w-full h-[0.1px] bg-slate-800 rounded-full mt-1"></div>
              </div>
              <section className="flex items-center gap-x-5 mt-6">
                <Button
                  text="Google"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chrome-icon lucide-chrome"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="4" />
                      <line x1="21.17" x2="12" y1="8" y2="8" />
                      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
                      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
                    </svg>
                  }
                  bgColor="#222222"
                  hoverBgColor="#2F2F2F"
                  ForColor="white"
                  linkMode="none"
                />
                <Button
                  text="GitHub"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github-icon lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  }
                  bgColor="#222222"
                  hoverBgColor="#2F2F2F"
                  ForColor="white"
                  linkMode="none"
                />
              </section>
              <div
                onClick={() => {
                  setShowModal(!showModal);
                }}
                className="absolute right-3 top-3 cursor-pointer text-slate-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x-icon lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </div>
            </div>
          }
        />
      </FocusTrap>
    </div>
  );
}
