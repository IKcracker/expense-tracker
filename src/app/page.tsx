import Guest from "@/components/guest";
import { checkuser } from "@/lib/checkuser";
import Image from "next/image";

export default async function Home() {
  const user = await checkuser();

  console.log(user);

  if (!user) {
    return <Guest />;
  }

  return <div></div>;
}
