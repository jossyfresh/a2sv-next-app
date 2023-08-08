import "./globals.css";
import Navbar from "./component/Navbar";

export const metadata = {
  title: "JO News Page",
  description: "JO News Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-100">
        <Navbar />
        <div className="flex justify-center text-3xl  mt-10 p-10 bg-blue-300 opacity-25 font-bold">
          <h1>JO News Page</h1>
        </div>
        {children}
      </body>
    </html>
  );
}
