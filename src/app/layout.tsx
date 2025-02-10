export const dynamic = 'force-dynamic';

import React from 'react';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head></head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
