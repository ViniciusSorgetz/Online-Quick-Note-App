import "@/app/dashboard/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Online Quick Note App</h1>
        {children}
      </body>
    </html>
  );
}
