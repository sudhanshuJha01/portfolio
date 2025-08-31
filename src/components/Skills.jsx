import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiCplusplus} from 'react-icons/si';
import { FaAws } from "react-icons/fa"
const skills = [
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-gray-300" /> },
  { name: 'C++', icon: <SiCplusplus className="text-blue-800" /> },
  { name: 'AWS EC2', icon: <FaAws className="text-orange-600" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-darkAlt">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block text-lightText">
          My Skills
          <span className="block h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mt-2 rounded"></span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card bg-dark p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-5xl mb-4 flex justify-center">{skill.icon}</div>
              <h4 className="text-xl font-semibold text-lightText">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
