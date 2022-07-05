import { IconBar } from "../layouts/IconBar";

export function LoginPage() {



    return (
        <div className="flex flex-row">
            <div className="text-white mb-auto ml-auto mt-auto w-3/6 flex h-screen justify-center items-center">
                <div className="flex flex-col border-4 border-gray-500 rounded-2xl w-1/2 p-10">
                    <div className=" box-content p-16 h-auto ">
                        <p className="font-bold text-white mb-4">Entrar</p>
                        <p className="text-xs text-white">Não tem uma conta? <a href="/createAccount" className="text-white text-xs underline underline-offset-2 ">Crie uma conta</a></p>
                    </div>
                    <div className=" box-content p-16 h-auto">
                        <p className="font-bold text-white">E-mail</p>
                        <input type="email" className="w-full " placeholder="Insira seu e-mail" />
                    </div>
                    <div className=" box-content  pl-16 pr-16 h-auto">
                        <p className="font-bold text-white">Senha</p>
                        <input type="password" className="w-full " placeholder=" Insira seu senha" />

                    </div>
                    <div className=" pb-16 pl-16 pr-16 justify-between h-auto w-full flex text-xs ">
                        <div className="flex">
                            <input type="checkbox" /><p className="ml-3 text-white">Lembrar de mim</p>
                        </div>
                        <div>
                            <a href="/recoverPassword" className="underline text-xs">Esqueceu sua senha?</a>
                        </div>
                    </div>
                    <div className="bg-white rounded ml-16 mr-16 cursor-pointer">
                        <div className="flex items-center justify-center px-6 py-12 text-black">
                            Entrar
                        </div>
                    </div>
                </div>
            </div>
            <IconBar />
        </div>
    )
}