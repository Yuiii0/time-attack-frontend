import React from "react";
import Header from "./_components/Header";

//auth provider
function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="root">
      <Header />
      {children}
    </div>
  );
}

export default RootLayout;
