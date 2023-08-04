import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/login") !== true) {
    if (!request.cookies.has("publicKey")) {
      const url = request.nextUrl.clone();
      url.pathname = "/login";

      return NextResponse.rewrite(url);
    }
  }
}
