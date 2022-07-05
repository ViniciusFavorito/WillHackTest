import { IconBar } from "../layouts/IconBar";
import { useNavigate } from 'react-router-dom';
import { MdEmail } from "react-icons/md";

export function RecoverPassword() {

    const navigate = useNavigate();

    function handleAlert() {
        alert("Foi enviado um email para redefinir sua senha.")
        navigate("/login")
    }

    return (
        <div className="flex flex-row">
            <div className="text-white mb-auto ml-auto mt-auto w-3/6 flex h-screen justify-center items-center">
                <div className="flex flex-col border-4 border-gray-500 rounded-2xl w-1/2 p-10">
                    <div className=" box-content p-16 h-auto ">
                        <p className="font-bold text-white mb-4">Recuperar</p>
                        <p className="text-xs text-white">Lembrou a senha? <a href="/login" className="text-white text-xs underline underline-offset-2 ">Entrar</a></p>
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

                    <div className="bg-white mt-6 rounded ml-16 mr-16 mb-5 cursor-pointer" onClick={() => handleAlert()}>
                        <div className="flex items-center justify-center px-6 py-12 text-black">
                            Recuperar
                        </div>
                    </div>
                </div>
            </div>
            <IconBar />
        </div >
    )
}

