import { IconBar } from "../layouts/IconBar";

export function CreateAccount() {
    return (
        <div className="flex flex-row">
            <div className="text-white  shadow-slate-300 mb-auto ml-auto mt-auto w-3/6 flex h-screen justify-center items-center">
                <div className="flex flex-col  border-4 border-gray-500 rounded-2xl w-1/2 p-10">
                    <div className=" flex justify-between">
                        <div className=" box-content p-16 h-auto ">
                            <p className="text-[11px] text-white">PASSO 1 DE 5</p>
                            <p className="font-bold text-white mb-4">Primeiros Passos</p>
                        </div>
                        <a href="/login" className="p-16  h-min border-gray-500">
                            X
                        </a>
                    </div>
                    <div className=" box-content pl-16 pr-16 mb-5 h-auto">
                        <p className="font-bold text-white">Seu Nome</p>
                        <input type="text" className="w-full  " placeholder="Insira seu nome" />
                    </div>
                    <div className=" box-content  pl-16 pr-16 mb-5 h-auto">
                        <p className="font-bold text-white">Seu Sobrenome</p>
                        <input type="text" className="w-full " placeholder=" Insira seu sobrenome" />
                    </div>
                    <div className=" box-content  pl-16 pr-16 mb-5 h-auto">
                        <p className="font-bold text-white">Sua Empresa <span className="text-[10px] opacity-40">("Opicional")</span></p>
                        <input type="text" className="w-full " placeholder=" Insira o nome da sua empresa" />
                    </div>
                    <div className=" box-content  pl-16 pr-16 mb-5  h-auto">
                        <p className="font-bold text-white">Seu E-mail </p>
                        <input type="text" className="w-full " placeholder=" Insira seu e-mail" />
                        <p className="text-[11px] text-white">Não se preocupe. Não vamos fazer SPAM no seu e-mail ;-)</p>
                    </div>
                    <div className=" box-content  pl-16 pr-16 mb-5 h-auto">
                        <p className="font-bold text-white">Seu WhatsApp </p>
                        <input type="text" className="w-full " placeholder=" Insira seu e-mail" />
                        <p className="text-[11px] text-white">Nossa equipe vai entrar em concato com vc pelo WhatsApp.</p>
                    </div>

                    <a href="/createpassword">

                        <div className="bg-white  hover:bg-neutral-800  rounded ml-16 mr-16 mb-8 cursor-pointer">
                            <div className="flex items-center justify-center px-6 py-12 text-black hover:text-white">
                                Continuar
                            </div>
                        </div>
                    </a>
                    <a href="/login">
                        <div className="  rounded ml-16 mr-16  cursor-pointer">
                            <div className="bg-black border-2 hover:bg-stone-700 border-gray-500  flex items-center justify-center px-6 py-12 text-white">
                                Cancelar
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <IconBar />
        </div>
    )
}