import { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "./providers/ReduxProvider";
import AuthProvider from "./providers/auth-providers/AuthProvider";

export const metadata: Metadata = {
  title: {
    default: "lash-store | beauty-shopp",
    template: "",
    absolute: "",
  },
  description: "lashes and more to you work",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <AuthProvider Component={{ isOnlyUser: true }}>
            {children}
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
