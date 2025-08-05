"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default function SidebarLayout({ children }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Produtos" },
    { href: "/products/create", label: "Novo Produto" },
    { href: "/login", label: "Sair" },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out z-50`}
      >
        <h2 className="text-2xl font-semibold text-center">FakeStore</h2>
        <nav className="mt-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-2.5 px-4 rounded transition duration-200 ${
                pathname === item.href
                  ? "bg-gray-700"
                  : "hover:bg-gray-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md p-4 flex items-center justify-between md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-600 focus:outline-none"
          >
            ☰
          </button>
          <h1 className="text-xl font-semibold">FakeStore</h1>
        </header>
        <main className="flex-1 bg-gray-100 p-4">{children}</main>
      </div>
    </div>
  );
}
