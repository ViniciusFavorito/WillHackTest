import { AiOutlineArrowRight } from "react-icons/ai";
import { MdArrowDropDownCircle } from "react-icons/md";

export function Home() {

    var wordSpace = {
        wordSpace: "10px",
    }
    return (
        <>
            <div className="flex text-white w-full h-32 bg-neutral-900 justify-center my-auto text-[10px]">
                <div className="flex my-auto font-semibold">
                    COMECE A JORNADA DE TRANSFORMAÇÃO DIGITAL DO SEU NEGÓCIO
                    <AiOutlineArrowRight className="ml-4 my-auto" />
                </div>
            </div>
            <div className="flex items-center justify-center text-white">
                <div className="flex mt-[50px] ">
                    <div>
                        <img src={"/public/assets/logo3.png"} />
                    </div>
                    <div className="flex items-center ml-2 mr-96">
                        <span className="font-bold">WILL.</span>hack
                    </div>
                    <div className="flex items-center pl-10 pr-10 ">
                        <span className="text-[10px] mr-2">SOLUÇÕES</span>
                        <MdArrowDropDownCircle />
                    </div>
                    <div className="flex items-center pl-10 pr-10 ">
                        <span className="text-[10px] mr-2">ONBORDING</span>
                    </div>
                    <div className="flex items-center pl-10 pr-10 ">
                        <span className="text-[10px] mr-2">BRANDING</span>
                    </div>
                    <div className="flex items-center pl-10 pr-10 ">
                        <span className="text-[10px] mr-2">DEVELOP</span>
                    </div>
                    <div className="flex items-center pl-10 pr-10 ">
                        <span className="text-[10px] mr-2">GO TO MARKET</span>
                    </div>
                    <div className="flex items-center pl-10 pr-10 ">
                        <span className="text-[10px] mr-2">YOUR WAY</span>
                    </div>
                    <div className="flex items-center pl-10 pr-10 ">
                        <span className="text-[10px] mr-2">CONTATO</span>
                    </div>

                    <div className="flex items-center ml-96 mr-11 ">
                        <a href="/login">
                            <span className="text-[10px] mr-2">SIGN IN</span>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <a href="/createAccount">
                            <div className="flex items-center border-4 w-96 h-9 justify-center  pl-10 pr-10 bg-white rounded-sm ">
                                <span className="text-[10px] mr-2 text-black">SIGN UP</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex mt-[300px] items-center justify-center" >
                <div className="text-[80px] text-white font-bold ">
                    <div className="flex justify-center">
                        if there's a<span className="text-blue-600"> Will</span>,<br />
                    </div>
                    <div className="flex justify-center">
                        start <span className="text-green-600"> Building</span> your <span className="text-pink-600">Dream</span><br />
                    </div>
                    <div className="flex justify-center">
                        and <span className="text-red-400"> Hack </span> your <span className="text-yellow-500">Way</span>.
                    </div>
                </div>
            </div>
            <div className="flex flex-row  mt-96">
                <div className=" flex justify-end items-end m-auto w-full mr-10">
                    <div className="border-2 border-gray-500 h-64 w-[250px] rounded-sm bg-white cursor-pointer p-[20px] hover:bg-white/60">
                        <div className="flex items-center justify-center text-[12px]">
                            COMEÇAR AGORA
                        </div>
                    </div>
                </div>
                <div className=" flex justify-start items-start m-auto w-full ml-10">
                    <div className="border-2 border-gray-500 h-64 w-[250px] rounded-sm cursor-pointer p-[20px] text-white hover:bg-white/20">
                        <div className="flex items-center justify-center text-[12px]">
                            FALAR COM UM ESPECIALISTA
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black p-[35px]"></div>
            <div className="flex justify-center items-center bg-black text-[18px] ">
                <div className="opacity-40 text-white">
                    <span>
                        Tenha um squad alta performance trabalhando para você
                    </span>
                </div>
                <div className="text-white opacity-40">
                    descobrir, desenvolver e lançar seu negócio digital.
                </div>
            </div>
            <div className="bg-black p-[45px]"></div>
            <div className="flex justify-center items-center bg-black text-white w-full ">
                <div className="flex justify-center items-center border-2 h-11 w-[400px] rounded-sm  ">
                    EXPLORE A JORNADA WILL.HACK
                </div>
            </div>
        </>
    )
}