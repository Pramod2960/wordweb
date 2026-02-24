import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SheetDemo } from "./navbar-sheet";
import Logo from "./logo";
import SearchWord from "./search-word";

export const Navbar = () => {
  const apiURL = process.env.API_URL;

  return (
    <div className="bg-white z-10 fixed top-0 w-full h-14 px-4 border-b shadow-sm  flex items-center justify-center">
      <div className=" md:max-w-screen-2xl mx-auto flex items-center w-full justify-center">
        <div>
          <Logo />
        </div>

        <div className="">
          <SheetDemo />
        </div>

        <div className="flex flex-row  m-auto  w-auto items-center justify-center">
          <div className="  ml-auto  space-x-4 md:block w-auto flex items-center justify-between">
            <Link href={`/`}>
              <Button variant="ghost">Home</Button>
            </Link>
          </div>

          <div className="  ml-auto  space-x-4 md:block w-auto flex items-center justify-between">
            <Link href={`${apiURL}/alphabet/A`}>
              <Button variant="ghost">Word List</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" ml-auto  space-x-4 md:block w-auto flex items-center justify-between ">
        <SearchWord />
      </div>
    </div>
  );
};
