import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("auth_token")?.value;

  // ✅ Protect /user routes
  if (pathname.startsWith("/user")) {
    if (pathname === "/user/cart") {
      return NextResponse.next();
    }

    if (!token) {
      return NextResponse.redirect(new URL("/auth/signin", request.url));
    }
  }

  // ✅ Prevent logged-in users from visiting /auth pages
  if (pathname.startsWith("/auth") && token) {
    return NextResponse.redirect(
      new URL("/user/profile", request.url)
    );
  }

  // ✅ Allow everything else (including /)
  return NextResponse.next();
}

export const config = {
  matcher: ["/user/:path*", "/auth/:path*"],
};
