import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: "Ov23liT9doipw77pcH46",
      clientSecret: "1ad88848658e535f508d8c307993a91f4af80da7",
    }),
  ],
});

export { handler as GET, handler as POST };
