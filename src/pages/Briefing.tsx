import { IconBar } from "../layouts/IconBar";

export function Briefing() {
    return (
        <div className="grid grid-cols-12 h-full w-full gap-4" >
            <div className="grid col-span-3  " style={{ height: "100%", borderRight: "1px solid white" }}>
                <div className="grid grid-rows-6 h-screen">
                    <div className="grid row-span-1" >
                        <div className="mr-auto p-60" >
                            <img src={"/public/assets/logo3.png"} />
                        </div>
                    </div>
                    <div className="grid row-span-5 p-60">
                        <div className="flex flex-col">
                            <p className="text-[11px] text-white">PASSO 3 DE 5</p>
                            <p className="font-bold text-white mb-4 text-3xl">Briefing do Projeto</p>
                            <p className="text-[11px] text-white"> Agradecemos seu contato! Por favor responda nosso Briefing e ao recebermos suas respostas entraremos em contato para agendar uma vídeo call.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid col-span-9  h-full text-white">
                <div className="grid grid-rows-6 h-full ">
                    <div className="grid row-span-1 p-60 ">
                        <div className="ml-auto my-auto">
                            X
                        </div>
                    </div>
                    <div className="flex flex-row text-white">
                        <div className="flex w-full border-2 bg-black/0 mt-[58px] ml-16 mr-16 rounded-sm">
                            <div>
                                <div className="flex pl-16 pr-16 pt-16 border-b-2 border-b- w-auto ">
                                    <div className="flex flex-row border-4 border-blue-400 rounded-2xl w-1/6 h-3/6 p-16 bg-blue-700">
                                    </div>
                                    <div className=" p-8 text-[11px] w-auto ">
                                        Feature <br /> Onboarding
                                    </div>
                                </div>
                                <div className="flex  items-center justify-center text-[11px] p-16 opacity-50 ">
                                    Descrição de 2 linhas sobre a feature
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full border-2 bg-black/0 mt-[58px] ml-16 mr-16 rounded-sm">
                            <div>
                                <div className="flex pl-16 pr-16 pt-16 border-b-2 border-b- w-auto ">
                                    <div className="flex flex-row border-4 border-green-400 rounded-2xl w-1/6 h-3/6 p-16 bg-green-400">
                                    </div>
                                    <div className=" p-8 text-[11px] w-auto ">
                                        Feature <br /> Product & Design
                                    </div>
                                </div>
                                <div className="flex  items-center justify-center text-[11px] p-16 opacity-50 ">
                                    Descrição de 2 linhas sobre a feature
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full border-2 bg-black/0 mt-[58px] ml-16 mr-16 rounded-sm">
                            <div>
                                <div className="flex pl-16 pr-16 pt-16 border-b-2 border-b- w-auto ">
                                    <div className="flex flex-row border-4 border-pink-400 rounded-2xl w-1/6 h-3/6 p-16 bg-pink-400 ">
                                    </div>
                                    <div className=" p-8 text-[11px] w-auto ">
                                        Feature <br /> Develop
                                    </div>
                                </div>
                                <div className="flex  items-center justify-center text-[11px] p-16 opacity-50 ">
                                    Descrição de 2 linhas sobre a feature
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full border-2 bg-black/0 mt-[58px] ml-16 mr-16 rounded-sm">
                            <div>
                                <div className="flex pl-16 pr-16 pt-16 border-b-2 border-b- w-auto ">
                                    <div className="flex flex-row border-4 border-orange-400 rounded-2xl w-1/6 h-3/6 p-16 bg-orange-400">
                                    </div>
                                    <div className=" p-8 text-[11px] w-auto ">
                                        Feature <br /> Marketing
                                    </div>
                                </div>
                                <div className="flex  items-center justify-center text-[11px] p-16 opacity-50 ">
                                    Descrição de 2 linhas sobre a feature
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}