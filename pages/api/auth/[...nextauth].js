import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

export default NextAuth({
  debug: true,
  providers: [TwitterProvider],
});
