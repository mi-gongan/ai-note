import { Providers } from "@/components/layout/Providers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "personal ai note",
  description:
    "Our service aims to analyze and summarize audio files, providing various modules such as chatbots, note-taking, and question generation based on the content. Users will have the ability to customize these modules to suit their needs. Additionally, we're building a platform where users can create and share their own modules, fostering a collaborative environment where people can provide and access the specific tools they require.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <div id="modal-root" />
        </Providers>
      </body>
    </html>
  );
}
