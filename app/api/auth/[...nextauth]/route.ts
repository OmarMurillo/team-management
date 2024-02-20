import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'
import { redirect } from 'next/navigation'


const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [ GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string

    })],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true;
        }  
    }
})

export { handler as GET, handler as POST}