import { InterfaceEstudo } from "@/types/estudo";

export default function Cronometro(){

    return (<>
        <div
              className={`sm:w-80 w-52 h-24 md:h-32 bg-slate-500 rounded-lg
              mx-auto flex justify-center items-center
              `}>
              <div className="flex items-center">
                <span
                  className={`border-2 rounded-md h-12 md:h-24 text-[2em] md:text-[4rem] shadow-inner
                  shadow-black bg-slate-600
                  `}>00
                </span>
                <span className="text-[3rem] md:font-bold">:</span>
                <span
                  className={`border-2 rounded-md h-12 md:h-24 text-[2em] md:text-[4rem] shadow-inner
                  shadow-black bg-slate-600
                  `}>00
                </span>
                <span className="text-[3rem] md:font-bold sm:font-thin">:</span>
                <span
                  className={`border-2 rounded-md h-12 md:h-24 text-[2em] md:text-[4rem] shadow-inner
                  shadow-black bg-slate-600
                  `}> 00
                </span>
              </div>
            </div>
    </>)
}