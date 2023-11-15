import SectionContainer from "./SectionContainer";
import { TokyoContext } from "../Context";
import { useContext } from "react";

const socialIcon = [
  {
    iconName: "icon-linkedin-squared",
    link: "http://linkedin.com/in/ernstnaezer/",
  },
  {
    iconName: "icon-github-squared",
    link: "http://github.com/ernstnaezer",
  }
];
const Home = () => {
  const { navChange } = useContext(TokyoContext);
  return (
    <SectionContainer name={"home"}>
      <div className="container">
        <div className="tokyo_tm_home w-full min-h-[100vh] clear-both flex items-center justify-center relative">
          <div className="home_content flex items-center">
            <div className="min-w-[300px] min-h-[300px] relative"> 
            <div
                className="image absolute inset-0 bg-no-repeat bg-center bg-cover rounded-full"
                data-img-url="assets/img/slider/ernst.jpg"
              />
            </div>
            <div className="details ml-[80px]">
              <h3 className="name text-[55px] font-extrabold uppercase mb-[14px]">
                Ernst Naezer
              </h3>
              <p className="job font-montserrat font-medium max-w-[450px] mb-[25px]">
                I offer a unique combination of knowledge and experience in software engineering, innovation, digital strategy & technology management. I'm an expert in integrating tech into business processes and a leader in building strong tech teams.
              </p>
              <p className="job font-montserrat font-medium max-w-[450px] mb-[25px] tokyo_tm_call_to_action">
                With +20 years of experience, I'm available for freelance assignments that require designing and delivering technical solutions that drive business outcomes. Whether it's kickstarting your new project, guiding your company through a digital transformation, or growing a strong tech organization, my expertise ensures success in these critical areas.
              </p>
              <p className="job font-montserrat font-medium max-w-[450px] mb-[25px] tokyo_tm_call_to_action">
                Reach out via <a href="tel:+31 6 30 65 77 08">+31 6 30 65 77 08</a> or <a onClick={() => navChange("contact")} href="#contact">send me a message.</a>
              </p>
              <div className="social w-full float-left">
                <ul className="m-0 list-none">
                  {socialIcon.map((item, idx) => (
                    <li className="mr-[8px] inline-block" key={idx}>
                      <a
                        className="text-black text-[20px] transition-all duration-300 hover:text-black"
                        href={item.link}
                        target="_blank"
                      >
                        <i className={item.iconName} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Home;
