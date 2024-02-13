import { PropsWithChildren } from "react";

interface PageProps {
  title?: string;
}

function Page({ title, children }: PropsWithChildren<PageProps>) {
  return (
    <main className="max-w-screen-xl mx-auto flex flex-col px-5 py-8 ">
      {title && (
        <h2 className="font-bold text-3xl text-center my-12">{title}</h2>
      )}
      {children}
    </main>
  );
}

export default Page;
