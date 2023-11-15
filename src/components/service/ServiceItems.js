
const services = [
  {
    name: "Engineering Leadership",
    text: "Building strategies and organizing teams that resonate with your business objectives, ensuring readiness to meet current and future technological challenges."
  },
  {
    name: "Interim Engineering Management",
    text: "Providing temporary, high-impact leadership to steer engineering teams through transitions, and maintain continuity during critical periods or until a permanent lead is established."
  },
  {
    name: "Improving Developer Experience",
    text: "Creating a frictionless environment for developers that enhances retention, fosters innovation, and boosts job satisfaction and creativity."
  },
  {
    name: "Digital Transformation Coaching",
    text: "Identifying the core values of your organization and guiding your management team to develop digital capabilities that pave the way to a future-ready stance."
  },
  {
    name: "Business Model Validation",
    text: "Quickly crafting and delivering products that users love, to test market assumptions and validate the business model with real-world feedback.",
  },  
  {
    name: "Talent Acquisition and Integration",
    text: "Refining the hiring process to draw in top engineering talent, coupled with smooth onboarding practices and growth opportunities within the company."
  },
  {
    name: "Solution Architecture",
    text: "Restructuring your company’s technical landscape into a composable, modular setup, enhancing flexibility and responsiveness to change."
  },
  {
    name: "Technical Product Owner",
    text: "Filling the role of Technical Product Owner to navigate product development, ensuring alignment with both user needs and business directives for successful market adoption.",
  },
  {
    name: "Engineering",
    text: "Delivering expert software engineering solutions that align with your business's strategic goals. I cover the entire range of software development, from web to mobile applications, and from client-side to server-side technologies.",
  },

];
const ServiceItems = () => {
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {services.map((service, idx) => (
          <li className="mb-[20px] w-1/3 pl-[40px]" key={idx}>
            <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                {service.name}
              </h3>
              <p className="text">{service.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceItems;
