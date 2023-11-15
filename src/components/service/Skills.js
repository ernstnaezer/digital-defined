const leadership = [
  { name: "Digital Transformation", value: 95 },
  { name: "Engineering Management", value: 90 },
  { name: "Engineering Recruitement", value: 95 },
  { name: "Technical Roadmapping", value: 90 },
  { name: "Design Thinking", value: 90 },
  { name: "Innovation", value: 85 },
  ];

const engineering = [
  { name: "Full Stack Engineer", value: 95 },
  { name: "Domain Driven Design", value: 90 },
  { name: "API Integration", value: 90 },
  { name: "AWS Cloud Architecture", value: 80 },
  { name: "Enterprise Architecture", value: 80 },
  { name: "Software Architecture", value: 90 },
];

const Skills = () => {
  return (
    <div className="tokyo_tm_progressbox w-full h-auto clear-both float-left bg-white pt-[93px] pr-[0px] pb-[100px] pl-[0px]">
      <div className="container">
        <div className="in w-full h-auto clear-both float-left flex">
          <div className="left w-1/2 pr-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Leadership Skills</h3>
            </div>
            <div className="tokyo_progress">
              {leadership.map((skill, idx) => (
                <div className="progress_inner" key={idx}>
                  <span>
                    <span className="label">{skill.name}</span>
                    <span className="number">{skill.value}%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div
                        className="bar_in"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="right w-1/2 pl-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Engineer Skills</h3>
            </div>
            <div className="tokyo_progress">
              {engineering.map((skill, idx) => (
                <div className="progress_inner" key={idx}>
                  <span>
                    <span className="label">{skill.name}</span>
                    <span className="number">{skill.value}%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div
                        className="bar_in"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      </div>
  );
};
export default Skills;
