import Isotope from "isotope-layout";
import { useContext, useEffect, useRef, useState } from "react";
import { TokyoContext } from "../Context";
import { tokyo } from "../utils";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const portfolioData = [
  {
    title:"Interview: on the Digital Transfrmation of NN",
    date: "March 2023",
    category:"Download",
    thumbnail:"/assets/img/portfolio/NNBank_2022_AnnualReportExcerpt.jpg",
    link:"assets/downloads/NN Bank_2022_Annual Report Excerpt.pdf",
    text:[]
  },
  {
    title:"Code: ANWB Energy Watch",
    date: "January 2023",
    category:"Code",
    thumbnail:"/assets/img/portfolio/ANWBEnergyWatch.jpg",
    link:"http://github.com/ernstnaezer/anwb-price-watcher",
    text:[]
  },
  {
    title:"Talk: API Thinking - How We’re Shifting Our APIs Left",
    date: "2018",
    category:"Video",
    thumbnail:"/assets/img/portfolio/WeAreDevelopers2018-API-Thinking.jpg",
    link:"https://www.youtube.com/watch?v=loplIgGhDzw",
    text:[]
  },
  {
    title:"Talk: API Design is not to be left to Techies",
    date: "March 2017",
    category:"Video",
    thumbnail:"/assets/img/portfolio/APICon2017-API-Design-is-best-not-left-to-techies.jpg",
    link:"https://www.youtube.com/watch?v=-I2HP_sfoK8",
    text:[]
  },
  {
    title:"Code: Aevi SDK",
    date: "March 2014",
    category:"Software",
    thumbnail:"/assets/img/portfolio/AeviSDK.jpg",
    link:"#",
    text:[
      "Albert is a portalable device that combines the openness of an app-based platform with the same stringent security standards as current card payment (EFTPOS) terminals.",
      "From the outset, it was recognised that the ultimate success of this platform dependents on the support of the developer community. Therefore, the release of the Aevi Software Development Kit (SDK) was prioritized.",
      "The SDK provides a combination of Guides, Reference Documentation, Libraries, Simulators and Samples that enable developers to build, or port, an Android app to run on the Albert Device. This includes the ability for your app to take payments and to print receipts, as well as other tickets, using the built-in printer."
    ],
    bigImage: "assets/img/portfolio/AeviSDK-big.jpg",
    images:[]
  },
  {
    title:"Code: Just some innocent fun with Microsoft Excel",
    date: "April 2009",
    category:"Video",
    thumbnail:"/assets/img/portfolio/MicrosoftExcel.jpg",
    link:"https://www.youtube.com/watch?v=HZ6Q224UPkc",
    text:[]
  },

]


const Portfolio = () => {
  // const isotope = useRef();
  // const [filterKey, setFilterKey] = useState("*");
  // useEffect(() => {
  //   const data = document.querySelector(".item__");
  //   if (data.length !== 0) {
  //     setTimeout(() => {
  //       isotope.current = new Isotope(".gallery_zoom", {
  //         itemSelector: ".item__",
  //       });
  //     }, 3000);
  //   }
  // }, []);
  // useEffect(() => {
  //   if (isotope.current) {
  //     filterKey === "*"
  //       ? isotope.current.arrange({ filter: `*` })
  //       : isotope.current.arrange({ filter: `.${filterKey}` });
  //   }
  // }, [filterKey]);

  useEffect(() => {
    tokyo.portfolioHover();
    tokyo.dataImage();
  });
  const { setPortfolioDetailsModal, modalToggle } = useContext(TokyoContext);

  const handlePortfolioClick = (item) => {
        if(item.text.length === 0)
      return;

    setPortfolioDetailsModal(item);
    modalToggle(true);
  }

  return (
    <SectionContainer name={"portfolio"}>
      <div className="container">
        <div className="tokyo_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[100px] pb-[40px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle
                pageName={"Portfolio"}
                title={"Work Portfolio"}
              />
              </div>
          </div>

          <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
              <p className="mb-[11px]">
              Here, you'll find a selection of my work, both what is publicly available as recorded talks and interviews as well as a few of the projects I've initiated and contributed to. I've also included some personal side projects just for good fun.              
              </p>
          </div>


          <div className="list_wrapper w-full h-auto clear-both float-left">

            <ul className="portfolio_list gallery_zoom ml-[-40px] list-none">

              {portfolioData.map((item, idx) => (
                <li className="mb-[40px] float-left w-1/3 pl-[40px] item__" key={idx}>
                  <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                    <div
                      className="entry tokyo_tm_portfolio_animation_wrap"
                      data-title={item.title}
                      data-category={item.category}
                    >
                      <a
                        className="popup"
                        href={item.link}
                        download={item.link.includes(".pdf")}
                        onClick={() => handlePortfolioClick(item) }
                      >
                        <img
                          className="opacity-0 min-w-full"
                          src={item.thumbnail}
                          alt="image"
                        />
                        <div
                          className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                          data-img-url={item.thumbnail}
                        />
                      </a>
                    </div>
                  </div>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
