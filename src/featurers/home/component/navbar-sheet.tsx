import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";


const data = [
  { name: "About Us", href: "/aboutus" },
  { name: "Project Rationale", href: "/project-rationale" },
  { name: "Primary Sources", href: "/primary-sources" },
  { name: "Word Nature", href: "/word-nature" },
  { name: "Quality Assurance", href: "/quality" },
  { name: "Methodology", href: "/methodology" },
  { name: "Objectives", href: "/objectives" },
  { name: "Project Team", href: "/person" },
  { name: "Contact us", href: "/contact" },
  { name: "FAQs", href: "/faq" }
];

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="ml-5   rounded-full">
          <AlignJustify height={20} width={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] md:w-[400px]">
        <SheetHeader>
          <SheetTitle>Quick Links</SheetTitle>
          <SheetDescription>Explore more about the WordWeb.</SheetDescription>
        </SheetHeader>

        <div className="my-5">

          <div>
            {data.map((d)=>(
               
            <Link key={d.name} href={d.href}>
            <SheetClose asChild>
              <Button variant="ghost" className="w-full  text-left justify-start items-start">{d.name}</Button>
              </SheetClose>
            </Link>
            ))}
            
          </div>

        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button className="w-full">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
