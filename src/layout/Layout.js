import { TokyoContext } from "@/src/Context";
import DetailsModal from "@/src/components/popup/DetailsModal";
import Mobile from "@/src/layout/Mobile";
import Sidebar from "@/src/layout/Sidebar";
import ImageView from "components/popup/ImageView";
import MediaPopup from "components/popup/MediaPopup";
import ServiceModal from "components/popup/ServiceModal";
import dynamic from "next/dynamic";
import { Fragment, useContext } from "react";

const Portfolio = dynamic(() => import("components/Portfolio"), {
  ssr: false,
});

const Layout = ({ children }) => {
  const { modal, serviceModal, portfolioDetailsModal } =
    useContext(TokyoContext);
  return (
    <Fragment>
      <MediaPopup />
      <ImageView />
      {modal && serviceModal && <ServiceModal />}
      {modal && portfolioDetailsModal && <DetailsModal />}
      {/* WRAPPER ALL */}
      <div className="tokyo_tm_all_wrap">
        {/* <div id="preloader">
          <div className="loader_line" />
        </div> */}
        <Mobile />
        <Sidebar />
        <div className="rightpart w-full min-h-[100vh] float-left relative bg-[#f8f8f8] pl-[450px]">
          <div className="rightpart_in relative w-full float-left clear-both border-solid border-[#ebebeb] border-l min-h-[100vh]">
            {children}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Layout;
