import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <main className="mx-auto px-4 sm:px-5 lg:px-5 py-5">
        {children}
      </main>
    </div>
  );
}
