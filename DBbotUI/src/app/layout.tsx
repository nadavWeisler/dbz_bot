import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "DBbot",
    description: "Database bot",
};

const RecoilContextProviderNoSSr = dynamic(
    () => import("./store/RecoilContextProvider"),
    { ssr: false }
);

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <RecoilContextProviderNoSSr>
                    {children}
                </RecoilContextProviderNoSSr>
            </body>
        </html>
    );
}
