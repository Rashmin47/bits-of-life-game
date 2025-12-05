import "./globals.css";

export const metadata = {
  title: "Bits of Life 🎉",
  description: "Two boxes. One story. Countless memories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
