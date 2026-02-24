import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return ( 
        <Link href="/">
            <div
            className="flex flex-row hover:opacity-75 transition items-center gap-x-2 md:flex
            "
            >
                <div>
                <Image 
                className=""
                 src="/logo_black.png"
                 alt="logo"
                 height={35}
                 width={35}
                
                />
                </div>
                <div>
              <h3 className="hidden md:block ml-1 scroll-m-20 text-base md:text-xl font-semibold tracking-tight  opacity-70">
          WordWeb <sup>ES</sup>
        </h3>
        </div>
            </div>
            
           
        </Link>
     );
}
 
export default Logo;