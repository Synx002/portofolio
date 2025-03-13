import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const Stack: React.FC = () => {
  return (
    <section id="stack" className="py-20">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-normal text-center mb-12">Tech Stack</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* MongoDB */}
          <div className="flex flex-col items-center border-none p-5 rounded-xl bg-gray-100">
            <SiMongodb className="text-green-500 text-6xl hover:scale-110 transition-transform" />
          </div>
          
          {/* Express.js */}
          <div className="flex flex-col items-center border-none p-5 rounded-xl bg-gray-100 drop-shadow-xs">
            <SiExpress className="text-gray-800 text-6xl hover:scale-110 transition-transform" />
          </div>

          {/* React.js */}
          <div className="flex flex-col items-center border-none p-5 rounded-xl bg-gray-100">
            <FaReact className="text-blue-500 text-6xl hover:scale-110 transition-transform" />
          </div>

          {/* Node.js */}
          <div className="flex flex-col items-center border-none p-5 rounded-xl bg-gray-100">
            <FaNodeJs className="text-green-600 text-6xl hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;