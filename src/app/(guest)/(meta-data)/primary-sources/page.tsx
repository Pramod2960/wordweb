const Objective = () => {
    return (
      <div className="mx-3 mt-5 mb-10">
        <h1 className=" text-2xl animate-slidein [--slidein-delay:300ms] opacity-0">Primary Sources</h1>
        <br />

<table className="animate-slidein [--slidein-delay:500ms] opacity-0 mx-auto border border-gray-300 bg-white">
  <thead>
    <tr className="bg-gray-200">
      <th className="py-2 px-4 border-b text-left">Lexicons Used to Find New Words</th>
      <th className="py-2 px-4 border-b text-left">E-sources Used to Find New Words</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="py-2 px-4 border-b text-left">
        <ol className="list-decimal pl-6">
          <li>New words in Oxford Advanced Learner&apos;s Dictionary</li>
          <li>Time Traveler by Merriam-Webster: Words from 2011</li>
          <li>Merriam-Webster.com Dictionary with 690 New Words</li>
          <li>New Dictionary Words – Summer 2021 | Dictionary.com</li>
        </ol>
      </td>
      <td className="py-2 px-4 border-b text-left">
        <ol className="list-decimal pl-6">
          <li>New words Archives - About Words - Cambridge Dictionary blog</li>
          <li>50 New Words Added to the Dictionary in the 21st Century | Stacker</li>
          <li>53 Modern Words Recently Added to the Dictionary | Mental Floss</li>
          <li>60+ new words in English with meanings! - iSchoolConnect</li>
          <li>10 new words added to the dictionary in the past 10 years - Deseret News</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>




      </div>
    );
  };
  
  export default Objective;
  