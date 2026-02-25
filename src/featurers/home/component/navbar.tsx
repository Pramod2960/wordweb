import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SheetDemo } from "./navbar-sheet";
import Logo from "./logo";
import SearchWord from "./search-word";

export const Navbar = () => {
  const apiURL = process.env.API_URL;

  return (
    <div className="bg-slate-50 z-10 fixed top-0 w-full h-14 px-4 border-b border-blue-100 shadow-sm py-2">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between gap-0  md:gap-2 h-full py-2">
        
        {/* Logo and Mobile Menu */}
        <div className="flex items-center gap-0 md:gap-3">
          <Logo />
          <SheetDemo />
        </div>

        {/* Main Search Bar - Central Focus */}
        <div className="flex-1 max-w-xl md:max-w-2xl mx-2 md:mx-4">
          <SearchWord />
        </div>

        {/* Navigation Links - Desktop Only */}
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
      </div>
    </div>
  );
};
