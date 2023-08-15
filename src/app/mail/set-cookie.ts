"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const setCookie = (publicKey: string) => {
  cookies().set("publicKey", publicKey, {
    priority: "high",
  });

  redirect("/");
};
