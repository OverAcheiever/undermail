import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/login") !== true) {
    if (cookies().has("publicKey") === false) {
      return NextResponse.redirect("/login");
    }
  }
}
