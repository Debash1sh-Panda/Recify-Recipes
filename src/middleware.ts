import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const pathname = req.nextUrl.pathname;

    if (pathname.startsWith("/auth")) {
      if (token) {
        return NextResponse.redirect(new URL("/home", req.url));
      }
      return NextResponse.next();
    }

    if (pathname.startsWith("/home")) {
      if (!token) {
        return NextResponse.redirect(new URL("/auth/login", req.url));
      }
      return NextResponse.next();
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true,
    },
  }
);

export const config = {
  matcher: ["/home/:path*", "/auth/:path*"], 
};
