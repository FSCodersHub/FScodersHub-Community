import Logo from "../assets/verification.png";

export default function HomeSection() {
    return <>
        <section className="w-full lg:h-[80vh] 2xl:h-auto flex flex-wrap">
            <div className="w-full lg:w-1/2 h-full flex flex-col justify-center gap-5 text-start">
                <h1 className="lg:w-5/6 text-4xl lg:text-[50px] lg:leading-[50px] font-[600]">Bienvenue sur notre Plateforme</h1>
                <p className="lg:w-5/6 text-lg lg:text-2xl text-gray-600 font-[600]">
                    Découvrez notre projet innovant dédié à [objectif du projet].
                    Nous nous engageons à fournir des solutions [services clés]
                    pour [public cible].
                    Rejoignez-nous dans cette aventure passionnante !
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
                    <div className="w-full sm:w-[45%] xl:w-[40%] h-[40vh] lg:h-full 2xl:h-[15vh] flex items-end rounded-xl Background-Size" id="TeamPictures-1">
                        <div className="w-[60%] flex flex-col px-5 lg:px-2 py-3 lg:py-2 lg:text-[12px] gap-[3px] bg-white" style={{ borderRadius: '0px 12px 0px 12px' }}>
                            <div className="flex justify-between items-center">
                                <h1 className="font-bold">Youssef Farhat</h1>
                                <img src={Logo} alt="Picture" className="w-[10%] h-[70%] scale-100" />
                            </div>
                            <h1 className="text-start">Front end developer</h1>
                        </div>
                    </div>
                    <div className="w-full sm:w-[45%] xl:w-[40%] h-[40vh] lg:h-full 2xl:h-[15vh] flex items-end rounded-xl Background-Size" id="TeamPictures-2">
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
                    <div className="w-full sm:w-[45%] xl:w-[45%] h-[40vh] lg:h-full 2xl:h-[15vh] flex items-end rounded-xl lg:scale-90 Background-Size" id="TeamPictures-3">
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