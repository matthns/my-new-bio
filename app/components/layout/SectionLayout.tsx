import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode | ReactNode[];
};

export const SectionLayout = ({ children }: LayoutProps) => {
  return (
    <section>
      <div className="flex-1 w-full"></div>
      <main className="flex-2 w-full px-3 py-4">{children}</main>
      <div className="flex-1 w-full"></div>
    </section>
  );
};
