
const AboutUS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
        
        <div className="relative mx-auto">
          <div className="space-y-6 text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 animate-slidein [--slidein-delay:300ms] opacity-0">
              About Wordweb
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slidein [--slidein-delay:500ms] opacity-0">
              Bridging ancient wisdom with modern language through collaborative innovation
            </p>
          </div>

          {/* Main Content Cards */}
          <div className="space-y-8 animate-slidein [--slidein-delay:700ms] opacity-0">
            
            {/* Card 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden p-8">
                <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-to-b from-blue-500 to-transparent" />
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pl-4">
                  Our Mission
                </h2>
                <p className="text-gray-700 leading-relaxed pl-4">
                  We are a joint entity representing Central Sanskrit University and Amity University Haryana to carry out the present project called Shabdshala (Wordweb) at Amity Centre for Sanskrit and Indic Studies, Amity School of Liberal Arts under the aegis of Amity University Haryana. The present Wordweb project, a pivotal component of the Ashtaadashi scheme sponsored by Central Sanskrit University, strives to bring new life to the ancient Sanskrit language by creating an electronic lexicon lexical database of 3000 new English words and their corresponding Sanskrit equivalents.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden p-8">
                <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-to-b from-purple-500 to-transparent" />
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pl-4">
                  Our Vision
                </h2>
                <p className="text-gray-700 leading-relaxed pl-4">
                  Language is an ever-evolving living entity, and English, being one of the world's most widely spoken languages, constantly adapts to changes in society, technology, and culture. New words are regularly introduced to describe emerging concepts, innovations, and developments in various fields. As the Sanskrit language carries with it a rich history and tradition, the idea of creating Sanskrit usages for new English words introduced since 2013 is an innovative and transformative undertaking.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden p-8">
                <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-to-b from-blue-500 to-transparent" />
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pl-4">
                  Project Goals
                </h2>
                <p className="text-gray-700 leading-relaxed pl-4">
                  For the purpose of preserving Sanskrit language at par with English and making it more accessible in the modern world in terms of lexical equivalents, this dictionary project (nicknamed as Wordweb) aims to incorporate contemporary new English words added under official websites of Oxford English Dictionary, Cambridge Dictionary, Merriam Webster English Dictionary, Dictionary.com, and three authentic web sources. This report presents an overview of the ongoing three years project called Wordweb under five headings: project rationale, objectives, methodology, outcome, and wayforward.
                </p>
              </div>
            </div>
          </div>

          {/* Stats/Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-slidein [--slidein-delay:900ms] opacity-0">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">3000+</div>
              <p className="text-gray-700">New English Words</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">3</div>
              <p className="text-gray-700">Year Project Duration</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border border-pink-200">
              <div className="text-4xl font-bold text-pink-600 mb-2">2</div>
              <p className="text-gray-700">Leading Universities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;