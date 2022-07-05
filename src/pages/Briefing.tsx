import { IconBar } from "../layouts/IconBar";

export function Briefing() {
    return (
        <div className="grid grid-cols-12 h-full w-full gap-4">
            <div className="grid col-span-3 bg-blue-900 ">
                <div className="grid grid-rows-6 h-screen">
                    <div className="grid row-span-1" >
                        <div className="mr-auto p-60" >
                            <img src={"/public/assets/logo3.png"} />
                        </div>
                    </div>
                    <div className="grid row-span-5 p-60">
                        <div className="flex flex-col">
                            <p className="text-[11px] text-white">PASSO 3 DE 5</p>
                            <p className="font-bold text-white mb-4">Briefing do Projeto</p>
                            <p className="text-[11px]"> Agradecemos seu contato! Por favor responda nosso Briefing e ao recebermos suas respostas entraremos em contato para agendar uma vídeo call.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid col-span-9 bg-yellow-600 h-full">
                <div className="grid grid-rows-6 h-full bg-green-800">
                    <div className="grid row-span-1 p-60 ">
                        <div className="ml-auto my-auto">
                            X
                        </div>
                    </div>
                    <div className="grid row-span-5 border-1 bg-black">
                        <div>
                            teste
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}