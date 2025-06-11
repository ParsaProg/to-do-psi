import Link from "next/link";
import Button from "./button";

export default function Navbar({ loggedIn }: { loggedIn?: boolean }) {
  return (
    <div className="fixed top-0 right-0 w-full h-[70px] text-[#4d6bfe] flex items-center  dark:bg-[#09090B] border-b-[0.5px] dark:border-slate-800">
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
            />
            <div className="rounded-full cursor-pointer w-10 h-10 bg-[url(https://quera.org/media/CACHE/images/public/avatars/5b5d6e303d614937b5539e30ce425fd1/baa30572cb80be55e6229d37f113540e.jpg)] bg-cover bg-center"></div>
          </div>
        ) : (
          <Button
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
                className="lucide lucide-log-in-icon lucide-log-in"
              >
                <path d="m10 17 5-5-5-5" />
                <path d="M15 12H3" />
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              </svg>
            }
            text="Sign in"
            bgColor="#4d6bfe"
            ForColor="white"
            hoverBgColor="#4d5cfe"
          />
        )}
      </div>
    </div>
  );
}
