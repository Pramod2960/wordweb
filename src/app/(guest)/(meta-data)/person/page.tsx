import Image from "next/image";

interface TeamMember {
  name: string;
  title: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Prof. Sanjay K. Jha",
    title: "Principal Investigator",
    role: "Director, Liberal Arts • Amity University, Haryana",
    image: "/person/sanjay.png",
  },
  {
    name: "Dr. Supriya Sanju",
    title: "Co-Principal Investigator",
    role: "Coordinator, ACSIS • Amity University Haryana",
    image: "/person/supriya.png",
  },
  {
    name: "Dr. Pankaj K Mishra",
    title: "Faculty",
    role: "St. Stephens College, University of Delhi",
    image: "/person/pankaj.png",
  },
  {
    name: "Dr. Prasun K Mishra",
    title: "Faculty",
    role: "Sansad TV, Delhi",
    image: "/person/prasun.png",
  },
  {
    name: "Prof. Om Nath Bimli",
    title: "HOD, Sanskrit",
    role: "University of Delhi",
    image: "/person/om.png",
  },
  {
    name: "Dr. Ravi Dutt Sharma",
    title: "Assistant Professor",
    role: "JDMC, University of Delhi",
    image: "/person/ravi.jpg",
  },
  {
    name: "Dr. Sunil Sikka",
    title: "Professor",
    role: "CSE Department • Amity University Haryana",
    image: "/person/sikka.png",
  },
  {
    name: "Mr. Ganesh Bhat",
    title: "Assistant Professor",
    role: "SSSUHE",
    image: "/person/ganesh.png",
  },
  {
    name: "Mr. Pramod Kumar",
    title: "Software Developer",
    role: "MCA • Amity University, Haryana",
    image: "/person/pramod.png",
  },
  {
    name: "Dr. Naveen Bhat",
    title: "HOD, Sanskrit",
    role: "SSSUHE",
    image: "/person/naveen.png",
  },
  {
    name: "Ms. Monalisa Vats",
    title: "Project Fellow",
    role: "Research Team",
    image: "/person/monalisa.png",
  },
  {
    name: "Mr. Dinesh",
    title: "Data Operator",
    role: "ASLA",
    image: "/person/dinesh.png",
  },
];

const ResourcePerson = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-0 m-0">
      {/* Hero Section */}
      <div className="relative pt-1 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 animate-slidein [--slidein-delay:300ms] opacity-0">
              Project Team
            </h1>
            {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slidein [--slidein-delay:500ms] opacity-0">
              Meet the dedicated experts driving innovation and excellence
            </p> */}
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-slidein [--slidein-delay:700ms] opacity-0">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative h-full"
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:border-blue-200">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative p-8 flex flex-col h-full">
                    {/* Image Container */}
                    <div className="mb-6 flex justify-center">
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-blue-200 transition-colors duration-500 shadow-md">
                        <Image
                          height={160}
                          width={160}
                          alt={member.name}
                          src={member.image}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col flex-grow text-center space-y-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-sm font-semibold text-blue-600 mt-1">
                          {member.title}
                        </p>
                      </div>

                      <p className="text-sm text-gray-600 leading-relaxed flex-grow flex items-center justify-center">
                        {member.role}
                      </p>
                    </div>

                    {/* Accent Line */}
                    <div className="mt-6 pt-6 border-t border-gray-100 group-hover:border-blue-200 transition-colors duration-500">
                      <div className="h-1 w-12 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-full transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcePerson;
