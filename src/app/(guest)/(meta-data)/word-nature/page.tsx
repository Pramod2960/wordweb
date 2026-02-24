import Image from "next/image";

const ProjectRational = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
        
        <div className="relative w-full mx-auto">
          <div className="space-y-6 text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 animate-slidein [--slidein-delay:300ms] opacity-0">
              Nature of New English Words
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slidein [--slidein-delay:500ms] opacity-0">
              Exploring the linguistic composition and distribution of new terminology
            </p>
          </div>

          {/* Main Content Cards */}
          <div className="space-y-8 animate-slidein [--slidein-delay:700ms] opacity-0">
            
            {/* Overview Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden p-8">
                <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-to-b from-blue-500 to-transparent" />
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pl-4">
                  Word Classification Overview
                </h2>
                <p className="text-gray-700 leading-relaxed pl-4">
                  The nature of newly added 3000 words from the above sources were found to be mainly of five types as shown in the following pie chart. This comprehensive analysis categorizes modern English terminology based on their origin, usage patterns, and linguistic characteristics.
                </p>
              </div>
            </div>

            {/* Chart Section */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden p-8">
                <div className="flex justify-center py-8">
                  <Image
                    height={500}
                    width={500}
                    alt="word_nature"
                    src="/person/word_nature.jpg"
                    className="rounded-lg shadow-md max-w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Field Distribution Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden p-8">
                <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-to-b from-purple-500 to-transparent" />
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pl-4">
                  Field Distribution
                </h2>
                <p className="text-gray-700 leading-relaxed pl-4">
                  The identified 3000 new English words were found to be from 12 major fields namely: scientific innovation, social media, culture, information technology (IT), health, gaming, entertainment, law, workplace, and emerging digital domains. This diverse distribution reflects the dynamic nature of contemporary English and its adaptation to modern technological and social developments.
                </p>
              </div>
            </div>
          </div>

          {/* Stats/Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-slidein [--slidein-delay:900ms] opacity-0">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
              <p className="text-gray-700">Word Types Identified</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">12</div>
              <p className="text-gray-700">Major Field Categories</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border border-pink-200">
              <div className="text-4xl font-bold text-pink-600 mb-2">3000+</div>
              <p className="text-gray-700">Words Analyzed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectRational;