// import { httpBatchLink, TRPCClientError } from "@trpc/client";
// import { createTRPCNext } from "@trpc/next";
// import superjson from "superjson";

// import type { AppRouter } from "@/server/routers/_app";

// export function isTRPCClientError(
//   cause: unknown,
// ): cause is TRPCClientError<AppRouter> {
//   return cause instanceof TRPCClientError;
// }

// function getBaseUrl() {
//   if (typeof window !== "undefined")
//     // browser should use relative path
//     return "";

//   // assume localhost
//   return `http://localhost:${process.env.PORT ?? 3000}`;
// }

// export const api = createTRPCNext<AppRouter>({
//   config(opts) {
//     return {
//       transformer: superjson,
//       links: [
//         httpBatchLink({
//           /**
//            * If you want to use SSR, you need to use the server's full URL
//            * @link https://trpc.io/docs/ssr
//            **/
//           url: `${getBaseUrl()}/api/trpc`,

//           // You can pass any HTTP headers you wish here
//           async headers() {
//             return {
//               // authorization: getAuthCookie(),
//             };
//           },
//         }),
//       ],
//       queryClientConfig: {
//         defaultOptions: {
//           queries: {
//             retry: false,
//           },
//         },
//       },
//     };
//   },
//   /**
//    * @link https://trpc.io/docs/ssr
//    **/
//   ssr: false,
// });
