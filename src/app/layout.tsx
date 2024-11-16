import { QueryProvider } from "@/providers/QueryProvider";
import { Hydration } from "@/providers/Hydration";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProvider>
        <Hydration>
          <body className="min-h-screen bg-white">{children}</body>
        </Hydration>
      </QueryProvider>
    </html>
  );
}
