import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SheetDemo } from "./navbar-sheet";
import Logo from "./logo";
import SearchWord from "./search-word";

export const Navbar = () => {
  const apiURL = process.env.API_URL;

  return (
    <div className="bg-slate-50 z-10 fixed top-0 w-full h-14 px-4 border-b border-blue-100 shadow-sm py-2">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between gap-2 h-full py-2">
        
        {/* Logo and Mobile Menu */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Logo />
          </div>
          <div className="">
            <SheetDemo />
          </div>
        </div>

        {/* Main Search Bar - Central Focus */}
        <div className="flex-1 max-w-2xl mx-4">
          <div className="w-full">
            <SearchWord />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          <Link href={`/`}>
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600">
              Home
            </Button>
          </Link>

          <Link href={`${apiURL}/alphabet/A`}>
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600">
              Word List
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <SheetDemo />
        </div>
      </div>
    </div>
  );
};
