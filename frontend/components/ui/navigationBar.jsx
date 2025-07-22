import Link from 'next/link';
import React from 'react';
import { Home, Plus } from "lucide-react"; // Assuming you want to use these icons

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Add New", href: "/add-new", icon: Plus },
];

export function Navigation() {
  return (
    <nav className="flex space-x-4 p-4 bg-gray-100 justify-end"> {/* Apply your desired styling */}
      {navItems.map((item) => (
        <Link key={item.name} href={item.href} className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
          {item.icon && React.createElement(item.icon, { className: "h-5 w-5" })} {/* Render icon if it exists */}
          <span>{item.name}</span>
        </Link>
      ))}
    </nav>
  );
}