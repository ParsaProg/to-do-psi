export default function Footer() {
  return (
    <div className="text-white flex items-center justify-center w-full fixed bottom-0 right-0 border-t border-slate-800 z-[-1]">
      <div className="flex items-center justify-between lg:w-[55%] w-[95%] h-[60px]">
        <h1 className="text-sm">
          <p className="text-slate-300 inline mr-2">Developed By</p>
          <p className="inline underline decoration-wavy underline-offset-4">
            [P]arsa Shaabani
          </p>
        </h1>
        <div className="flex items-center gap-x-2">
          <a href="https://github.com/ParsaProg" target="_blank">
            <div className="active:scale-[0.9] transition-all cursor-pointer p-2 rounded-lg duration-200 hover:bg-slate-800">
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
                className="lucide lucide-github-icon lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </div>
          </a>
          <div className="active:scale-[0.9] transition-all cursor-pointer p-2 rounded-lg duration-200 hover:bg-slate-800">
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
              className="lucide lucide-sun-icon lucide-sun"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
