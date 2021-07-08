import React from "react";
import WelcomeNav from "./app/navigations/WelcomeNav";

import Auth from "./app/auth/Auth";

export default function App() {
  return (
    <Auth>
      <WelcomeNav />
    </Auth>
  );
}
