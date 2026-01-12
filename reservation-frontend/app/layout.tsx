// app/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata = {
  title: "Reservation App",
  description: "Next.js + Bootstrap example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">
              Reservations
            </a>
          </div>
        </nav>

        <main className="container mt-4">{children}</main>
      </body>
    </html>
  );
}
