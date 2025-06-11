import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: "Ov23liT9doipw77pcH46",
      clientSecret: "47d0c432d7c5c15b63965a1a788aec4c9fea2010",
    }),
  ],
});

export { handler as GET, handler as POST };
