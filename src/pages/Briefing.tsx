import { IconBar } from "../layouts/IconBar";

export function Briefing() {
    return (
        <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-3 bg-blue-900" style={{ height: "1000px", borderRight: "1px solid white" }}>
                <div className="flex flex-row w-full justify-between" >
                    <div className="col-start-1 col-end-3 p-60 " >
                        <img src={"/public/assets/logo3.png"} />
                    </div>
                </div>
                <div className=" box-content  h-auto w-[300px] p-60">
                    <p className="text-[11px] text-white">PASSO 3 DE 5</p>
                    <p className="font-bold text-white mb-4">Briefing do Projeto</p>
                    <p className="text-[11px]"> Agradecemos seu contato! Por favor responda nosso Briefing e ao recebermos suas respostas entraremos em contato para agendar uma vídeo call.</p>
                </div>
            </div>
            <div className="flex flex-row col-span-2  justify-end bg-yellow-600">
                <div className=" p-60 h-min bg-green-800 ">
                    X
                </div>
            </div>
            <div className="row-span-2 col-span-2 bg-red-800">
                03
            </div>
        </div>
    )
}