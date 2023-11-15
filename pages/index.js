import Layout from "@/src/layout/Layout";
import About from "components/About";
import Contact from "components/Contact";
import Home from "components/Home";
import Service from "components/Service";
import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import("components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Service />
      <div className="tokyo_tm_portfolio_titles" />
      <Portfolio />
      <Contact />
    </Layout>
  );
};
export default Index;
