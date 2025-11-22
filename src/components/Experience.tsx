import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Volunteer Teacher – Computer Science & Digital Literacy",
      company: "APSRWS Tribal Welfare School",
      duration: "June – July 2024",
      responsibilities: [
        "Taught programming basics and problem-solving skills to 80+ tribal welfare students from classes 6–10.",
        "Conducted 30+ hands-on sessions covering HTML, CSS basics, logic building, and an introduction to JavaScript.",
        "Designed simplified worksheets and practical exercises to improve understanding for first-generation learners.",
        "Introduced students to digital tools, typing skills, safe internet practices, and real-world computer usage.",
        "Increased student engagement by 60% through activity-based learning, group games, and interactive demos.",
        "Mentored students individually to build confidence in using computers for academic and personal growth.",
        "Collaborated with school faculty to structure a 4-week learning roadmap suitable for rural classrooms.",
        "Organized a mini “Tech Day” where students showcased small projects like basic web pages and patterns."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white mr-4">
                  <FaChalkboardTeacher className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-3">{exp.duration}</p>

                  <ul className="list-disc pl-5 space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
