import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="site-shell">
      <Header />
      <div className="py-5">
      {children}
      </div>
      <Footer />
    </div>
  );
}
