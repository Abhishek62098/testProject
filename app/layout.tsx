import '@/app/ui/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme ="cupcake">
      <body>{children}</body>
    </html>
  );
}
