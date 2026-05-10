import { GiSchoolBag } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";
import { FaSchool } from "react-icons/fa";

const Education = () => {
  const eduSteps = [
    {
      icon: <IoSchoolSharp />,
      name: "Lumbini ICT Campus",
      level: "Bachelor",
      study: "BSC.CSIT",
      time: "2022 - Present", // Added sample dates
    },
    {
      icon: <FaSchool />,
      name: "SOS Hermann Gmeiner School Bharatpur",
      level: "High School",
      study: "Science",
      time: "2020 - 2022",
    },
    {
      icon: <GiSchoolBag />,
      name: "Polar Star Secondary English Boarding School",
      level: "Middle School",
      study: "Science",
      time: "Graduated 2020",
    },
  ];

  return (
    <div className=" mx-auto p-6 bg-white rounded-xl    ">
      <h2 className="text-center font-bold text-3xl mb-8 text-gray-800">Education</h2>
      
      <div className="relative border-l-2 border-gray-500 ml-4 md:ml-8">
        {eduSteps.map((step, index) => (
          <div key={index} className="mb-10 ml-6 last:mb-0">
            {/* Timeline Dot & Icon */}
            <span className="absolute -left-[13px] flex items-center justify-center w-6 h-6 bg-gray-500 rounded-full text-white text-sm shadow-md">
              {step.icon}
            </span>
            
            {/* Content */}
            <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-wrap justify-between items-center mb-1">
                <h3 className="text-xl font-semibold text-gray-900">{step.name}</h3>
                <span className="text-sm font-medium text-gray-600 bg-blue-50 px-2 py-1 rounded">
                  {step.time}
                </span>
              </div>
              
              <div className="flex gap-3 text-gray-600 font-medium">
                <p>{step.level}</p>
                <span className="text-gray-300">|</span>
                <p className="text-gray-500">{step.study}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
