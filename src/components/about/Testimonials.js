import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../../sliderProps";
const testimonialData = [
  {
    text: "Can highly recommend Ernst! Of course an extensive background in engineering but above all a visionary and inspirator at NN on tech & data and how NN could successfully do its digital transformation. That spark has led to the development of digital-product visions and implementation of empowered product teams across NN!!",
    authorImage: "assets/img/testimonials/tjeerd.jpg",
    authorName: "Tjeerd Bosklopper",
    authorDesignation: "Management Board member at NN Group",
  },
  {
    text: "Ernst is one of the most amazing people I had the pleasure of working with. He is great at all things digital products. Organization design, coaching MTs, technology trends, empowered product teams, software engineering, you name it. He looks at the context of a company and uses his vision, vast experience and fresh ideas to help transforming a company into the digital era. His background in and passion for engineering is one of his secrets. As a person Ernst is also such a nice person to work with. Every company that gets to work with Ernst should consider themselves very lucky.",
    authorImage: "assets/img/testimonials/vijai.jpg",
    authorName: "Vijai Ramcharan",
    authorDesignation: "Technology Architect at NN Group",
  },
  {
    text: "Ik heb Ernst leren kennen toen ik op zoek was naar hoe ik mijn domein kon transformeren naar een engineering cultuur. Ernst bracht scaling excellence in en samen hebben wij dat naar de praktijk gebracht. Ernst heeft zoveel kennis en ervaring waardoor wij snel konden schakelen, verbeteren en inderdaad de resultaten die ik zocht te realiseren: op cultuurverandering, manier van werken, opleveren van goede digitale producten voor klanten.",
    authorImage: "assets/img/testimonials/leontine.jpg",
    authorName: "Leontine Dekker",
    authorDesignation: "Head of Mortgage Sevices at NN Bank",
  },
  {
    text: "It is my pleasure to recommend Ernst for his exceptional leadership skills as a product leader over the past three years. Ernst has a remarkable ability to solve complex problems and inspire teams to build tools that aid our DevOps teams in solving customer problems. Ernst is an excellent collaborator, always willing to lend a hand and share his expertise to help others succeed. I highly recommend Ernst for any future leadership roles and would be delighted to work with him again in the future.",
    authorImage: "assets/img/testimonials/jeroen.jpg",
    authorName: "Jeroen Kemper",
    authorDesignation: "Head of Advanced Business Analytics at NN Bank",
  },
];
const Testimonials = () => {
  return (
    <div className="tokyo_tm_testimonials bg-white w-full h-auto clear-both float-left py-[100px] px-0">
      <div className="container">
        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
          <h3 className="text-[20px] font-bold">Testimonials</h3>
        </div>
        <div className="list w-full h-auto clear-both float-left overflow-hidden">
          <Swiper
            {...sliderProps.testimonial}
            className="m-0 list-none cursor-e-resize"
          >
            {testimonialData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="list_inner w-full h-auto clear-both float-left relative">
                  <div className="text w-full h-auto clear-both float-left border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px] relative">
                    <p>{item.text}</p>
                  </div>
                  <div className="details w-full h-auto clear-both float-left flex items-center pl-[20px]">
                    <div className="image relative w-[60px] h-[60px]">
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                        data-img-url={item.authorImage}
                        style={{ backgroundImage: `url(${item.authorImage})` }}
                      />
                    </div>
                    <div className="info pl-[20px]">
                      <h3 className="text-[16px] mb-[2px] font-semibold">
                        {item.authorName}
                      </h3>
                      <span className="text-[14px]">
                        {item.authorDesignation}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
