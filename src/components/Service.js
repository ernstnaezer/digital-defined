import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import ServiceItems from "./service/ServiceItems";

import { TokyoContext } from "../Context";
import { useContext } from "react";
import Skills from "./service/Skills";

const Service = () => {
  const { navChange } = useContext(TokyoContext);
  return (
    <SectionContainer name={"service"}>
      <div className="container">
        <div className="tokyo_tm_services w-full h-auto clear-both float-left py-[100px] px-0">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle pageName={"Services"} title={"What I Do"} />
            </div>
          </div>

          <div className="about_text tokyo_tm_call_to_action w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
              <p className="mb-[11px]">I have a deep understanding of both the challenges and opportunities that come with digital transformation, building digital products and platforms, and growing an engineering organization to scale.</p>
              <p className="mb-[11px]">Below you'll find a selection of the services I can offer to your company, feel free to reach out via <a href="tel:+31 6 30 65 77 08">+31 6 30 65 77 08</a> or <a onClick={() => navChange("contact")} href="#contact">send me a message.</a></p>
          </div>

          <ServiceItems />
          <Skills/>
        </div>
      </div>
      {/* <Partners /> */}
    </SectionContainer>
  );
};
export default Service;
