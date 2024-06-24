/* Original del video */
/*
import { authMiddleware } from "@clerk/nextjs";

// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
export default authMiddleware({});

export const config = {
  matcher: [
    "/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"
  ],
};
*/

/* Sugerencia de IA */

import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"],
  ignoredRoutes: ["/api(.*)"], // Ignora las rutas que comienzan con /api
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Rutas sin extensiones de archivo
    "/",
    "/(api|trpc)(.*)", // Rutas que comienzan con /api o /trpc
  ],
};
