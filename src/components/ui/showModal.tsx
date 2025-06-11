"use client";

import { useRef, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useDisableBodyTabIndex from "@/function/disableTabIndex";

interface ModalProps {
  isShow: boolean;
  onClose: () => void;
  content: ReactNode;
  isMobile: boolean;
}

export default function Modal({
  isShow,
  onClose,
  content,
  isMobile,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useDisableBodyTabIndex(modalRef, isShow);

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isShow]);

  return (
    <AnimatePresence>
      {isShow && (
        <div className="relative">
          <motion.div
            ref={modalRef}
            className={`overflow-hidden fixed z-[10000] bg-[#09090B] border border-slate-800 rounded-xl p-5 shadow-xl w-[95%] sm:w-[500px]`}
            onClick={(e) => e.stopPropagation()}
            initial={{
              opacity: 0,
              scale: 0.9,
              x: "-50%",
              y: isMobile ? "0" : "-50%",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: "-50%",
              y: isMobile ? "0" : "-50%",
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              x: "-50%",
              y: isMobile ? "0" : "-50%",
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              top: isMobile ? "" : "50%",
              bottom: isMobile ? "0" : "",
              left: "50%",
            }}
            tabIndex={-1}
          >
            {content}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
