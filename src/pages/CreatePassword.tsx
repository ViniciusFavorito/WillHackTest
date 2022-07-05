import { IconBar } from "../layouts/IconBar";

export function CreatePassword() {
    return (
        <div className="flex flex-row">
            <div className="text-white  shadow-slate-300 mb-auto ml-auto mt-auto w-3/6 flex h-screen justify-center items-center">
                <div className="flex flex-col  border-4 border-gray-500 rounded-2xl w-1/2 p-10">
                    <div className=" flex justify-between">
                        <div className=" box-content p-16 h-auto ">
                            <p className="text-[11px] text-white">PASSO 2 DE 5</p>
                            <p className="font-bold text-white mb-4">Sua Senha</p>
                        </div>
                        <a href="/login" className="p-16  h-min border-gray-500">
                            X
                        </a>
                    </div>
                    <div className=" box-content pl-16 pr-16 mb-5 h-auto">
                        <p className="font-bold text-white">Sua senha</p>
                        <input type="password" className="w-full  " placeholder="Insira sua senha" />
                    </div>
                    <div className=" box-content  pl-16 pr-16 mb-5 h-auto">
                        <p className="font-bold text-white">Confirme sua senha</p>
                        <input type="password" className="w-full " placeholder=" Confirme sua senha" />
                    </div>
                    <div className="box-content  pl-16 pr-16 mb-5 h-auto text-[12px] ">
                        <p className="text-white">
                            Ao se registrarm você concoda com o processamento de seus dados pessoalmente pelo Wll.Hack conforme descrito na Politica de Privacidade
                        </p>
                    </div>
                    <div className="flex box-content  pl-16 pr-16 mb-5  h-auto text-[12px]">
                        <input type="checkbox" />
                        <p className="ml-6 text-white">Li e concordo com a <a className="text-[12px] underline underline-offset-2">Política de Privacidade</a></p>

                    </div>
                    <a href="/briefing">
                        <div className="bg-white  hover:bg-neutral-800 mt-[227px]  rounded ml-16 mr-16 mb-8 cursor-pointer">
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