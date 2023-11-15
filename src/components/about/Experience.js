const experiencesData = [
  {
    date: "Nov 2023 - Current⠀",
    designation: "Founder",
    company: "Digital Defined",
  },
  {
    date: "Jan 2022 - Nov 2023",
    designation: "Head of Engineering",
    company: "NN Bank",
  },
  {
    date: "Mar 2018 - Jan 2022",
    designation: "Head of Catapult - Engineering & Design Agency",
    company: "NN Group",
  },
  {
    date: "Mar 2014 - Nov 2018",
    designation: "Enterprise Architect & API Community Lead",
    company: "ING Bank",
  },
  {
    date: "Jan 2011 - Mar 2014",
    designation: "Technology Evangelist & Consultant",
    company: "Wincor-Nixdorf International",
  },
  {
    date: "Oct 2007 - Jan 2011",
    designation: "Tech Lead & Team Lead",
    company: "Mirabeau",
  },
  {
    date: "Oct 2002 - Nov 2007",
    designation: "Tech Lead & Engineer",
    company: "Auxilium",
  },
];

const Experience = () => {
  return (
    <div className="tokyo_tm_resumebox w-full h-auto clear-both float-left py-[93px] px-0">
      <div className="container">
        <div className="in w-full h-auto clear-both float-left flex">
          <div className="left w-8/12 pr-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Experience</h3>
            </div>
            <div className="tokyo_tm_resume_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none relative inline-block pt-[10px]">
                {experiencesData.map((exp, idx) => (
                  <li
                    className={`m-0 w-full float-left relative pl-[20px] ${
                      idx == experiencesData.length - 1 ? "" : "pb-[45px]"
                    }`}
                    key={idx}
                  >
                    <div className="list_inner w-full h-auto clear-both float-left relative flex">
                      <div className="time w-3/12 pr-[20px]">
                        <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          {exp.date}
                        </span>
                      </div>
                      <div className="place w-5/12 pl-[20px]">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          {exp.designation}
                        </h3>
                        <span className="text-[14px]">{exp.company}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
