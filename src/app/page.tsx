import TimeInput from "@/components/TimeInput";
import Inputlabel from "@/components/Inputlabel";
import ComomBtn from "@/components/ComomBtn";
import List from "@/components/List";
import Cronometro from "@/components/Cronometro";

export default function Home() {
  let systemTime = new Date();
  let userTime: number = 600;
  let systemHours = userTime / 60;

  return (
    <>
      <main className="pt-4 bg-[#242424] md:flex h-auto px-8 pb-10 container justify-between mx-auto scroll-smooth">
        <section>
          <div
            className={`md:w-[27rem] xs:w-72 h-48 md:h-32 bg-slate-500 rounded-lg
            border-gray-400 border-2 px-3 py-2 mx-auto md:mt-[9rem]`}>
            <div className="md:flex justify-around font-medium">
              <div>
                <h3 className="">Tarefa</h3>
                <Inputlabel />
              </div>

              <div className="">
                <h3 className="">Tempo</h3>
                <TimeInput />
              </div>
            </div>
            <div
              className={`mx-auto xs:h-auto md:h-auto
            flex justify-center items-center 
          `}
            >
              <ComomBtn>Adicionar</ComomBtn>
            </div>
            <div className="mt-5 md:mt-6 font-cav text-center">
              Selecione um card de tarefa <br /> e clique em começar.
            </div>
          </div>

          <div className="mt-16 text-center">
            <Cronometro />
            <div className="-mt-4">
              <ComomBtn>Começar</ComomBtn>
            </div>            
          </div>
        </section>
        <section className="block md:flex-row text-center justify-center md:w-1/2 h-auto text-gray-200/95">
          <span>
            <h1 className="text-xl md:text-[2em] my-4">
              Estudos:
            </h1>
            <List />
          </span>
        </section>
      </main>
      {/* teste */}
    </>
  );
}
