import TimeInput from "@/components/TimeInput"
import Inputlabel from "@/components/Inputlabel"
import ComomBtn from "@/components/ComomBtn"

export default function Home() {

  let systemTime = new Date()
  let userTime:number = 600
  let systemHours = userTime /60

  return (<>
  
    <div className="pt-4 bg-[#131313]">
      <div className={`sm:w-[50%] xs:w-64 h-50 md:h-32 bg-slate-500 rounded-lg
      border-gray-400 border-2 
        px-3 py-2 mx-auto
      `}>
        <div className="md:flex justify-around font-medium md:t-1">
          <div>
            <h3 className="">Tarefa</h3>
            <Inputlabel />
          </div>

          <div className="">
            <h3 className="">Tempo</h3>
            <TimeInput />
          </div>
        </div>
        <div className={`mx-auto xs:h-auto md:h-auto
          flex justify-center items-center 
        `}>
          <ComomBtn>Adicionar</ComomBtn>
        </div>
        
      </div>
    </div>
    {/* teste */}

    <div className="pt-4 bg-[#131313]">
      <div className={`sm:w-[50%] xs:w-64 h-50 md:h-32 bg-slate-500 rounded-lg
      border-gray-400 border-2 
        px-3 py-2 mx-auto
      `}>

      </div>
    </div>

  </>
  )
}
