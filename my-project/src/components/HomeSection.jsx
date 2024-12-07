import Logo from "../assets/verification.png";
import { useContext } from "react";
import { useToggle } from "./ToogleProvider";
export default function HomeSection() {
    const Toogle=useToggle();
    console.log(Toogle.toggle);
    return <>
        <section className="w-full lg:h-[80vh]  flex flex-wrap px-12 py-10">
            <div className="w-full lg:w-1/2 h-full flex flex-col justify-center gap-5 text-start px-5">
            <h1 className="lg:w-5/6 text-4xl lg:text-[50px] lg:leading-[50px] font-semibold">
            {Toogle.toggle==='fr'?" Bienvenue sur notre Plateforme" :"Welcome to our Platform"}
 
</h1>
<p className="lg:w-5/6 text-lg lg:text-2xl text-gray-600 font-semibold">
  Nous proposons des services innovants de création d'applications web et mobiles. 
  Que ce soit pour une startup, une entreprise ou un projet personnel, 
  nous transformons vos idées en solutions digitales performantes. 
  Rejoignez-nous pour donner vie à vos projets technologiques !
</p>

                <div className="flex justify-between lg:justify-start lg:gap-5 lg:text-xl mt-5">
                    <button className="px-4 py-2 border border-gray-300">
                        Rejoignez-nous
                    </button>
                    <button className="px-4 py-2 bg-[#009B72] text-white">
                        Trouver des freelancers
                    </button>
                </div>
            </div>
            <div className="w-full lg:w-1/2 h-full">
                <div className="w-full h-1/2 flex justify-center items-center flex-wrap py-8 gap-8">
                    <div className="w-full sm:w-[45%] xl:w-[40%] h-[40vh] lg:h-full   flex items-end rounded-xl Background-Size" id="TeamPictures-1">
                        <div className="w-[60%] flex flex-col px-5 lg:px-2 py-3 lg:py-2 lg:text-[12px] gap-[3px] bg-white" style={{ borderRadius: '0px 12px 0px 12px' }}>
                            <div className="flex justify-between items-center">
                                <h1 className="font-bold">Youssef Farhat</h1>
                                <img src={Logo} alt="Picture" className="w-[10%] h-[70%] " />
                            </div>
                            <h1 className="text-start">Front end developer</h1>
                        </div>
                    </div>
                    <div className="w-full sm:w-[45%] xl:w-[40%] h-[40vh]  lg:h-full  flex items-end rounded-xl Background-Size" id="TeamPictures-2">
                        <div className="w-[60%] flex flex-col px-5 lg:px-2 py-3 lg:py-2 lg:text-[12px] gap-[3px] bg-white" style={{ borderRadius: '0px 12px 0px 12px' }}>
                            <div className="flex justify-between items-center">
                                <h1 className="font-bold">Abdrahim</h1>
                                <img src={Logo} alt="Picture" className="w-[10%] h-[70%] scale-100" />
                            </div>
                            <h1 className="text-start">Back end developer</h1>
                        </div>
                    </div>
                </div>
                <div className="w-full h-1/2 flex justify-center items-center py-1">
                    <div className="w-full sm:w-[45%] xl:w-[45%] h-[40vh] lg:h-full 2 flex items-end rounded-xl lg:scale-90 Background-Size" id="TeamPictures-3">
                        <div className="w-[60%] flex flex-col px-5 lg:px-2 py-3 lg:py-2 lg:text-[12px] gap-[3px] bg-white" style={{ borderRadius: '0px 12px 0px 12px' }}>
                            <div className="flex justify-between items-center">
                                <h1 className="font-bold">Aymane rachid</h1>
                                <img src={Logo} alt="Picture" className="w-[10%] h-[70%] scale-100" />
                            </div>
                            <h1 className="text-start">Full stack developer</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}