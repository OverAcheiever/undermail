"use server";
import { cookies } from "next/headers";

export const setCookie = (publicKey: string) => {
  return cookies().set("publicKey", publicKey, {
    priority: "high",
  });
};
