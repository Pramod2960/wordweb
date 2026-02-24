"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';


const Letters = () => {
  const pathname = usePathname();
  const letters = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));

  return (
    <>
    <div className='flex mx-auto items-center mt-5 justify-center'>

   <div className="flex space-y-1 space-x-1 mx-2 items-center justify-center flex-wrap">
        {letters.map((letter, index) => (
          <Link  href={`/alphabet/${letter}`} key={index}>
           
            <Button 
            variant="ghost"
            size="icon"
            
                className={pathname === `/alphabet/${letter}` ? ' font-bold text-normal  bg-blue-600 hover:bg-blue-700 hover:text-white ring-white text-white ' : ' hover:bg-gray-500 hover:text-white'} >
               
                {letter}
              
            </Button>
            </Link>
             ))}
    </div>
    </div>
   </>
  );
};

export default Letters;
