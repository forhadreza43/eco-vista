import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Eco Vista",
  description:
    "A weather dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="wrapper">{children}</div>;
}
