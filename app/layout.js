import "./globals.css";



export const metadata = {
  title: "Spotify clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black h-screen w-screen" > 
        {children}
      </body>
    </html>
  );
}
