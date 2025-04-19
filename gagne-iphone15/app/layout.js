export const metadata = {
  title: 'Gagne un iPhone 15 Pro !',
  description: 'Participe au concours et tente de remporter un iPhone 15 Pro',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-white text-black font-sans">{children}</body>
    </html>
  );
}