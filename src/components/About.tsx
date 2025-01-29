import React from 'react';
import photo1 from '../image/photo1.png';
import { Briefcase, GraduationCap, UserCheck, Code, Layers, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-64 h-64 mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-spin-slow"></div>
              <img
                src={photo1}
                alt="Profile"
                className="absolute inset-2 w-full h-full rounded-full object-cover"
              />

              {/* <img
                src="/images/personal.jpg"//https://github.com/harisivams/image/blob/main/image.png?raw=true
                // src="https://raw.githubusercontent.com/harisivams/image/refs/heads/main/fotor-20241220163932.png"
                alt="Profile"
                className="absolute inset-2 rounded-full object-cover"
              /> */}
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              💥Hi, I'm Harisivam S., a dedicated IT graduate with a B.Tech in Information Technology. I specialize in Flutter, Java, HTML, CSS, and CCNA, focusing on creating innovative applications.
              <br /><br />
              💥I'm passionate about learning and tackling new challenges. Whether working on personal projects or collaborating with a team, I aim to deliver high-quality work and make a positive impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SkillCard
                icon={<Code className="w-8 h-8 text-purple-600" />}
                title="Internship"
                description="Cyber Security in Cyber Crime Police Station, Coimbatore City.
"
              />
              <SkillCard
                icon={<Briefcase className="w-8 h-8 text-purple-600" />}
                title="Experience"
                description="Present - Flutter Developer at Lead Integrated Business Services Pvt Ltd."
              />
              <SkillCard
                icon={<Rocket className="w-8 h-8 text-purple-600" />}
                title="Personal Projects"
                description="Developed 4 apps using Flutter."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-6 bg-gray-50 rounded-lg transform hover:scale-105 transition-all duration-300">
    <div className="flex flex-col items-center text-center">
      {icon}
      <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default About;


// import React from 'react';
// import { Code, Palette, Terminal, ShieldCheck } from 'lucide-react';

// // Define valid keys as a union type
// type SkillTitle = 'Internship' | 'Experience' | 'Personal Projects';

// // Map titles to icons
// const icons: Record<SkillTitle, JSX.Element> = {
//   Internship: <ShieldCheck className="w-8 h-8 text-purple-600" />,
//   Experience: <code className="w-8 h-8 text-purple-600" />,
//   'Personal Projects': <Palette className="w-8 h-8 text-purple-600" />,
// };

// // Skill data
// const skills: { title: SkillTitle; description: string }[] = [
//   {
//     title: 'Internship',
//     description: 'Cyber Security in Cyber Crime Police Station, Coimbatore City.',
//   },
//   {
//     title: 'Experience',
//     description: 'Flutter Developer',
//   },
//   {
//     title: 'Personal Projects',
//     description: 'Published 3 apps on Google Play Store.',
//   },
// ];

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
//           <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="relative">
//             <div className="w-64 h-64 mx-auto relative">
//               <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-spin-slow"></div>
//               <img
//                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300"
//                 alt="Profile"
//                 className="absolute inset-2 rounded-full object-cover"
//               />
//             </div>
//           </div>

//           <div className="space-y-6">
//             <p className="text-lg text-gray-700 leading-relaxed">
//               💥Hi, I'm Harisivam S., a dedicated IT graduate with a B.Tech in Information Technology. I specialize in Flutter, Java, HTML, CSS, and CCNA, focusing on creating innovative applications.
//               <br />
//               <br />
//               💥I'm passionate about learning and tackling new challenges. Whether working on personal projects or collaborating with a team, I aim to deliver high-quality work and make a positive impact.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {skills.map((skill) => (
//                 <SkillCard
//                   key={skill.title}
//                   icon={icons[skill.title]}
//                   title={skill.title}
//                   description={skill.description}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const SkillCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
//   <div className="p-6 bg-gray-50 rounded-lg transform hover:scale-105 transition-all duration-300">
//     <div className="flex flex-col items-center text-center">
//       {icon}
//       <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
//       <p className="mt-2 text-sm text-gray-600">{description}</p>
//     </div>
//   </div>
// );

// export default About;
