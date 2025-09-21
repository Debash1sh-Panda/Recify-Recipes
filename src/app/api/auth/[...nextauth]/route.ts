import NextAuth, { DefaultSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

interface CustomToken {
  accessToken?: string;
  fullname?: string;
  role?: string;
  email?: string;
  dob?: string;
  gender?: string;
  username?: string;
  success: boolean;
  message: string;
}

export interface CustomSession extends DefaultSession {
  accessToken?: string;
  fullname?: string;
  username?: string;
  role?: string;
  dob?: string;
  gender?: string;
  email?: string;
  success: boolean;
  message: string;
}

interface UserType {
  success: boolean;
  message: string;
  accessToken: string;
  user: {
    fullname: string;
    username: string;
    email: string;
    role: string;
    dob: string;
    gender: string;
    isActive: boolean;
  };
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
       
        if (
          !credentials?.email ||
          !credentials?.password
        ) {
          console.error("Missing required fields");
          return null;
        }

        try {
          const res = await axios.post(
            `http://localhost:5050/api/v1/recify/auth/sign-in`,
            {
              email_or_username: credentials.email,
              password: credentials.password,
              
            },
            {
              headers: { "Content-Type": "application/json" },
            }
          );

          if (res.data.success) {
            return res.data;
          }

          throw res.data;
        } catch (err) {
          console.error("Error during signup:", err);

          if (axios.isAxiosError(err)) {
            const message =
              JSON.stringify(err.response?.data) ||
              "Signup failed due to server error";
            throw new Error(message);
          }

          throw new Error("Network error, please try again");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/home`;
    },

    async jwt({ token, user }) {
      if (user) {
        const customUser = (user as unknown) as UserType;
        token.accessToken = customUser?.accessToken;
        token.fullname = customUser?.user?.fullname;
        token.email = customUser?.user?.email;
        token.gender = customUser?.user?.gender;
        token.role = customUser?.user?.role;
        token.dob = customUser?.user?.dob;
        token.username = customUser?.user?.username;
        token.success = customUser?.success;
        token.message = customUser?.message;
      }
      return token;
    },
    async session({ session, token }) {
      const customSession = session as CustomSession;
      const customToken = (token as unknown) as CustomToken;
      customSession.accessToken = customToken.accessToken;
      customSession.fullname = customToken.fullname;
      customSession.username = customToken.username;
      customSession.email = customToken.email;
      customSession.dob = customToken.dob;
      customSession.gender = customToken.gender;
      customSession.role = customToken.role;
      customSession.success = customToken.success;
      customSession.message = customToken.message;
      return customSession;
    },
  },
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/auth/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
