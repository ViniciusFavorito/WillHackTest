import { IconBar } from "../layouts/IconBar";
import { AiOutlineUser } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

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
                    <div className=" box-content p-16 h-auto">
                        <p className="font-bold text-white">Seu Nome</p>
                        <div className="flex flex-row border-2 border-gray-500 bg-neutral-800 p-4 rounded-sm focus:border-gray-0">
                            <div className="w-30 h-24 my-auto opacity-20">
                                <AiOutlineUser className="w-full h-full" />
                            </div>
                            <input type="email" className="w-full bg-transparent border-none focus:outline-none active:border-none" placeholder="Insira seu nome" />
                        </div>
                    </div>
                    <div className=" box-content p-16 h-auto">
                        <p className="font-bold text-white">Seu Sobrenome</p>
                        <div className="flex flex-row border-2 border-gray-500 bg-neutral-800 p-4 rounded-sm focus:border-gray-0">
                            <div className="w-30 h-24 my-auto opacity-20">
                                <AiOutlineUser className="w-full h-full" />
                            </div>
                            <input type="email" className="w-full bg-transparent border-none focus:outline-none active:border-none" placeholder="Insira seu sobrenome" />
                        </div>
                    </div>
                    <div className=" box-content p-16 h-auto">
                        <p className="font-bold text-white">Sua Empresa <span className="text-[10px] opacity-40">("Opicional")</span></p>

                        <div className="flex flex-row border-2 border-gray-500 bg-neutral-800 p-4 rounded-sm focus:border-gray-0">
                            <div className="w-30 h-24 my-auto opacity-20">
                                <AiOutlineUser className="w-full h-full" />
                            </div>
                            <input type="email" className="w-full bg-transparent border-none focus:outline-none active:border-none" placeholder=" Insira o nome da sua empresa" />
                        </div>
                    </div>

                    <div className=" box-content p-16 h-auto">
                        <p className="font-bold text-white">E-mail</p>
                        <div className="flex flex-row border-2 border-gray-500 bg-neutral-800 p-4 rounded-sm focus:border-gray-0">
                            <div className="w-30 h-24 my-auto opacity-20">
                                <MdEmail className="w-full h-full" />
                            </div>
                            <input type="email" className="w-full bg-transparent border-none focus:outline-none active:border-none" placeholder="Insira seu e-mail" />
                        </div>
                    </div>
                    <div className=" box-content p-16 h-auto">
                        <p className="font-bold text-white">Seu WhatsApp </p>
                        <div className="flex flex-row border-2 border-gray-500 bg-neutral-800 p-4 rounded-sm focus:border-gray-0">
                            <div className="w-30 h-24 my-auto opacity-20">
                                <MdEmail className="w-full h-full" />
                            </div>
                            <input type="email" className="w-full bg-transparent border-none focus:outline-none active:border-none" placeholder="Insira seu whatsapp" />

                        </div>
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
                        <div className="  rounded ml-16 mr-16  cursor-pointer mb-5">
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