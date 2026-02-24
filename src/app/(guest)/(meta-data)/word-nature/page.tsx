import Image from "next/image";

const ProjectRational = () => {
    return ( 
        <div   className="mx-10 mt-10 mb-10"
        >
        <h1
        className=" text-2xl animate-slidein [--slidein-delay:300ms] opacity-0"
        >Nature of New English Words</h1>
        <br/>
         <p
         className="text-justify animate-slidein [--slidein-delay:500ms] opacity-0"
         >The nature of newly added 3000 words from the above sources were found to be mainly of five types as shown in the following pie chart. </p>
         <br/>
  
         <Image
              height={500}
              width={500}
              alt="word_nature"
              src="/person/word_nature.jpg"
              className="mx-auto mb-8 animate-slidein [--slidein-delay:500ms] opacity-0"
             
            />


         <p
          className="text-justify animate-slidein
          [--slidein-delay:700ms]  opacity-0"
          >
        It is also imperative to mention that the identified 3000 new English words were found to be from 12 major fields namely, scientific innovation, social media, culture, information technology (IT), health, gaming, entertainment, law, workplace, etc.
         </p>

        </div>
     );
}
 
export default ProjectRational;