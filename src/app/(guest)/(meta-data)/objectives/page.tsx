const Objective = () => {
  return (
    <div className="mx-10   mt-5 mb-10">
      <h1 className=" text-2xl animate-slidein [--slidein-delay:300ms] opacity-0">Objectives</h1>
      <br />
      <p className="text-justify mb-2 animate-slidein [--slidein-delay:500ms] opacity-0">
        In line with the stated objectives (see annexture II) the Wordweb
        Project is moving on attaining five objectives as follows:{" "}
      </p>
     

      <ul className="list-disc ml-4 animate-slidein
  [--slidein-delay:700ms]  opacity-0">
      <li className="mb-2">
        <p
        className="text-justify">
          Creation of a lexical database of new words to bridge the lexical
          awareness gap between Sanskrit and modern languages.
        </p>
      </li>

      <li className="mb-2">
        <p
        className="text-justify">
          Adaptation to modern usage of new words to ensure that Sanskrit is
          also a living language ready to imbibe modern ideas and concepts.
        </p>
      </li>

      <li className="mb-2">
        <p
        className="text-justify"
        >
          Coinage of new Sanskrit words considering morphological accuracy,
          semantic proximity, and natural acceptance with the scope of further
          modifications in an online forum.
        </p>
      </li>

      <li className="mb-2">
        <p 
        className="text-justify">
          Promotion and Encouragement of using newly coined Sanskrit words by
          creating an interest in the younger generation in the language to
          inculcate modernity with antiquity.
        </p>
      </li>

      <li className="mb-2">
        <p 
         className="text-justify">
          Digital Access to Wordweb by creating a user-friendly interface and
          online linguistic forum of experts and users to accept relevant
          suggestions for further enrichment of the newly coined entries. To
          make the dictionary available online, allowing a global audience to
          access Sanskrit vocabulary resources at their fingertips. The digital platform will offer search capabilities.
        </p>
      </li>
    </ul>
    </div>
  );
};

export default Objective;
