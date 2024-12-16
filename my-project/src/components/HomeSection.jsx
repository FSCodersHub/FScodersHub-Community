import Logo from "../assets/verification.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function HomeSection() {
    const Team = [
        [
            { id: 0, FullName: "Ahmed Hariri", Description: "Front-end developer" },
            { id: 2, FullName: "Aymane Rachid", Description: "Full-stack developer" },
            { id: 1, FullName: "Abdrahim", Description: "Back-end developer" },
        
        ],
        [
            { id: 3, FullName: "Sarah Bouzid", Description: "UI/UX designer" },
            { id: 4, FullName: "Omar Lahlou", Description: "DevOps engineer" },
            { id: 5, FullName: "Meryem Tazi", Description: "Data scientist" },
        ]
    ];

    return (
        <section className="w-full lg:h-[80vh] flex flex-wrap px-12 bg-white dark:bg-[#000c00]">
            <div className="w-full lg:w-1/2 h-full flex flex-col justify-center gap-5 text-start px-5 py-10">
                <h1 className="lg:w-5/6 text-4xl lg:text-[50px] lg:leading-[50px] font-semibold">
                    Bienvenue sur notre Plateforme
                </h1>
                <p className="lg:w-5/6 text-lg lg:text-2xl text-gray-600 font-semibold">
                    Nous proposons des services innovants de création d'applications web et mobiles.
                    Que ce soit pour une startup, une entreprise ou un projet personnel,
                    nous transformons vos idées en solutions digitales performantes.
                    Rejoignez-nous pour donner vie à vos projets technologiques !
                </p>
                <div className="flex justify-between lg:justify-start lg:gap-5 lg:text-xl mt-5">
                    <button className="px-4 py-2 border border-gray-300">Rejoignez-nous</button>
                    <button className="px-4 py-2 bg-[#009B72] text-white">Trouver des freelancers</button>
                </div>
            </div>
            <div className="w-full lg:w-1/2 h-full flex flex-wrap">
                <Swiper modules={[Autoplay]} slidesPerView={1} autoplay={{ delay: 3000 }} speed={800}>
                    {Team.map((group, groupIndex) => (
                        <SwiperSlide key={groupIndex}>
                            <div className="w-full lg:h-1/2 flex justify-center items-center flex-wrap gap-7 lg:pt-10 lg:pb-4 px-5 lg:px-0">
                                {group.slice(0, 2).map((Person) => (
                                    <div key={Person.id} className="w-full sm:w-[45%] xl:w-[35%] h-[40vh] lg:h-full flex items-end rounded-xl Background-Size bg-red-500">
                                        <div className="w-[60%] flex flex-col px-5 lg:px-2 py-3 lg:py-2 lg:text-[12px] gap-[3px] bg-white" style={{ borderRadius: "0px 12px 0px 12px" }}>
                                            <div className="flex justify-between items-center">
                                                <h1 className="font-bold">{Person.FullName}</h1>
                                                <img src={Logo} alt="Picture" className="w-[10%] h-[70%] scale-100" />
                                            </div>
                                            <h1 className="text-start">{Person.Description}</h1>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full lg:h-1/2 flex justify-center lg:py-6 px-5 lg:px-0 mt-8 lg:mt-0">
                                {group.slice(2, 3).map((Person) => (
                                    <div key={Person.id} className="w-full sm:w-[45%] xl:w-[35%] h-[40vh] lg:h-full flex items-end rounded-xl Background-Size bg-red-500">
                                        <div className="w-[60%] flex flex-col px-5 lg:px-2 py-3 lg:py-2 lg:text-[12px] gap-[3px] bg-white" style={{ borderRadius: "0px 12px 0px 12px" }}>
                                            <div className="flex justify-between items-center">
                                                <h1 className="font-bold">{Person.FullName}</h1>
                                                <img src={Logo} alt="Picture" className="w-[10%] h-[70%] scale-100" />
                                            </div>
                                            <h1 className="text-start">{Person.Description}</h1>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
