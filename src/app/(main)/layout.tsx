import SessionProvider from "@/app/(main)/SessionProvider";
import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();
  if (!session.user) redirect("/login");

  return <SessionProvider value={session}>{children}</SessionProvider>;
}
