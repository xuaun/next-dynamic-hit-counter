import React from "react";

import "./styles.css";

export const dynamic = "force-dynamic";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
