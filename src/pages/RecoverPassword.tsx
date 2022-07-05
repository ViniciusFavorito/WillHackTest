import { IconBar } from "../layouts/IconBar";
import { useNavigate } from 'react-router-dom';

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
                        <input type="email" className="w-full " placeholder="Insira seu e-mail" />
                    </div>

                    <div className="bg-white mt-6 rounded ml-16 mr-16 cursor-pointer" onClick={() => handleAlert()}>
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

