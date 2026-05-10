import { FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { IoIosGitBranch } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { DiJavascript } from "react-icons/di";

function SkillStack() {
  return (
    <div className="p-4">
      {/* Responsive Grid:
          - grid-cols-2: 2 columns on small mobile
          - sm:grid-cols-3: 3 columns on small tablets
          - md:grid-cols-4: 4 columns on tablets/small laptops
          - lg:grid-cols-auto: or just use gap-6 with flex for natural flow
      */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap gap-4 md:gap-7  p-5 rounded-lg justify-center items-center">
        
        {/* Reusable Skill Item Styling */}
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <FaHtml5 color="orange" className="size-6 md:size-8" />
          <span className="font-mono text-lg md:text-xl">HTML</span>
        </div>

        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <FaCss3Alt color="blue" className="size-6 md:size-8" />
          <span className="font-mono text-lg md:text-xl">CSS</span>
        </div>

        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <DiJavascript color="#F0DB4F" className="size-6 md:size-8" />
          <span className="font-mono text-lg md:text-xl">JS</span>
        </div>

        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <RiReactjsLine color="blue" className="size-6 md:size-8" />
          <span className="font-mono text-lg md:text-xl">React</span>
        </div>

        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <RiTailwindCssFill color="blue" className="size-6 md:size-8" />
          <span className="font-mono text-lg md:text-xl text-nowrap">Tailwind</span>
        </div>

        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <FaNodeJs color="green" className="size-6 md:size-8" />
          <span className="font-mono text-lg md:text-xl">NodeJs</span>
        </div>

        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <SiMongodb color="green" className="size-6 md:size-8" />
          <span className="font-mono text-lg md:text-xl">MongoDB</span>
        </div>

        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <IoIosGitBranch color="#F1502F" className="size-6 md:size-8" />
          <span className="font-mono text-lg md:text-xl">Git</span>
        </div>

      </div>
    </div>
  );
}

export default SkillStack;