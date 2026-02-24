import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image";
const Methodology = () => {
  return (
    <>
    <ScrollArea className=" h-screen md:h-[525px]  rounded-md border mx-0 px-5">

    <div className="mt-5 mb-10 w-fit">
      <h1 className=" text-2xl animate-slidein [--slidein-delay:300ms] opacity-0">Methodology</h1>
      <br />
      <p className=" animate-slidein [--slidein-delay:500ms] opacity-0 text-justify mb-2">
        The methodologies adopted in Wordweb project are alligned with the
        lexicographic framework governed by appropriate principled approaches.
        The Wordweb project has adopted a nine-layered approach to enlist close
        equivalents of 3000 selected new English words in the following manner
      </p>

      <div>

      <Image
              height={1000}
              width={1000}
              alt="Methodlogy"
              src="/methodlogy.png"
              className="mx-auto mb-8 animate-slidein [--slidein-delay:500ms] opacity-0"
             
            />
      </div>

      <ol className="list-decimal pl-6 space-y-2 text-justify animate-slidein
  [--slidein-delay:700ms] opacity-0">
        <li>
          The first layer is the serial number of new English words sorted in
          alphabetical order as seen in the above table.
        </li>

        <li>
          The second layer provides new English words using convenience sampling
          technique in which the required data were retrieved from the following
          nine e-resources. The data of 3000 new words were prepared on the
          basis of new words added in the official websites of four authentic
          English dictionaries and five authentic web references as mentioned
          hereunder. All the raw data have been compiled in excel format.
        </li>

        <li>
          The third layer provides word class or parts of speech of the selected
          new English words.
        </li>

        <li>
          The fourth layer provides gloss or description of the selected new
          words in terms of their meaning or paraphrase.
        </li>

        <li>
          The fifth layer of the lexicon provides contextual examples for the
          selected new words.
        </li>

        <li>
          The sixth layer provides Sanskrit equivalent of the selected new
          English words, phrases, abbreviations, and acronyms. The adequate care
          has been taken to coin socially accepted and linguistically credible
          words in Sanskrit. However, all the coined words in Sanskrit are
          subject to modifications as per the experts’ remarks in Wordweb’s
          online homepage.
        </li>

        <li>
          The seventh layer provides Sanskrit usage of the newly coined Sanskrit
          word for easier understanding and usage of the newly coined words.
        </li>

        <li>
          The eighth layer called remarks gives value added information of the
          Sanskrit word in terms of its word formation, context, and other
          information.
        </li>

        <li>
          The ninth layer provides the URL reference of the new English words
          wherefrom they have been taken.
        </li>
      </ol>
    </div>
    </ScrollArea>
    </>
  );
};

export default Methodology;
