import { checkuser } from "@/utils/checkuser";
import React from "react";

export default function NavBar() {
  const user = checkuser();
  return <div>NabBar</div>;
}
