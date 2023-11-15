import { TokyoContext } from "../Context";
import { useContext } from "react";

const CompanyName = () => {
    const { navChange } = useContext(TokyoContext);
    
    return (
        <div className="logo" data-type="text">
          <a href="#" onClick={() => navChange("home")} >
            <h3 className={`font-black text-[31px] tracking-[5px]`}>
              Let's build
            </h3>
          </a>
    </div>

    );
};

export default CompanyName;
