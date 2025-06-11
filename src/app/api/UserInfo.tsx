"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserInfo() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;
  if (!session?.user) return true;

  // اطلاعات کاربر
  const { name, email, image } = session.user;
  const githubProfileUrl = `https://github.com/${email?.split("@")[0]}`;

  return (
    <div className="">
      {image && (
        <Image
          src={image}
          alt="آواتار"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
        />
      )}
    </div>
  );
}
