import { Fragment, useContext, useState } from "react";
import { TokyoContext } from "../Context";
import CompanyName from "../components/CompanyName";

const Mobile = () => {
  const [toggle, setToggle] = useState(false);
  const { navChange, nav, menus } = useContext(TokyoContext);
  return (
    <Fragment>
      <div className="tokyo_tm_topbar bg-transparent fixed top-0 left-0 right-0 h-[50px] z-[20] hidden">
        <div className="topbar_inner w-full h-full clear-both flex items-center justify-between py-0 px-[20px]">
          <div className="trigger absolute right-[10px] top-[10px]">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
              onClick={() => setToggle(!toggle)}
            >
              <div className="hamburger-box w-[30px]">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`tokyo_tm_mobile_menu fixed right-[-200px] h-[100vh] w-[200px] z-[15] bg-white transition-all duration-300 ${
          toggle ? "opened" : ""
        }`}
      >
        <div className="menu_list w-full h-auto clear-both float-left text-right px-[20px] pt-[100px] pb-[0px]">
          <ul className="transition_link list-none">
            {menus.map((menu, idx) => (
              <li
                className={`active mb-[7px] ${
                  menu.href == nav ? "active" : ""
                }`}
                key={idx}
              >
                <a
                  className="text-black font-montserrat"
                  href={`#${menu.href}`}
                  onClick={() => {
                    navChange(menu.href);
                    setToggle(!toggle);
                  }}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
export default Mobile;
