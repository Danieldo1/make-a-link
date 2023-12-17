import clientPromise from "@/libs/mongoClient";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const optionsAuth = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
      ],
      adapter: MongoDBAdapter(clientPromise),
      secret: process.env.NEXTAUTH_SECRET

}
const handler = NextAuth(optionsAuth)

export { handler as GET, handler as POST }