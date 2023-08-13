"use client"
//requisito do NextJS para que o componente
// seja renderizado no navegador
//pois por padrão, os componentes 
//são renderizados em um component server

import { useState } from "react";

import ComomBtn from "@/components/ComomBtn";
import List from "@/components/List/Lista";
import Item from "@/components/List/Item";
import Cronometro from "@/components/Cronometro";
import Form from "@/components/form/Form";
import { InterfaceEstudo } from "@/types/estudo";


export default function Home() {

  const [estudos, setEstudos] = useState<InterfaceEstudo[]> ([]);
  const [selecionado, setSelecionado] = useState<InterfaceEstudo>();

  function selecionaEstudo(estudoSelecionado: InterfaceEstudo){
    setSelecionado(estudoSelecionado)
    setEstudos(prevEstudo => prevEstudo.map(estudo =>({...estudo,
    selecionado: estudo.id === estudoSelecionado.id ? true : false

    })))
  }

  return (
    <>
      <main className="pt-4 bg-[#242424] md:flex h-auto px-8 pb-10 container justify-between mx-auto scroll-smooth">
        <section>
            <Form setEstudos={setEstudos} />
            <div
             
            className="my-4 font-cav text-center">
              Selecione um card <br /> e clique em começar.
            </div>

          <div className="text-center">
            <Cronometro selecionado={selecionado} />
            <div className="-mt-4">
              <ComomBtn>Começar</ComomBtn>
            </div>            
          </div>
        </section>
        <section className="md:flex-row text-center justify-center md:w-1/2 h-auto text-gray-200/95 my-5">
          <span className="">
            <span className="md:text-[2em] my-4">
              {estudos.length == 0 && (
                <p className={`w-fit mx-auto md:text-[1.3rem]`}>Não há estudos ainda...</p>
              )}
              {estudos.length > 0 && (
                <span className="flex justify-around w-full">
                  <span className={` flex justify-around items-center w-[65%] mx-auto rounded-2xl
                    shadow-inner mb-3 md:text-[1.3rem]`}>
                    Estudos pendentes: 
                      <span className={`ml-1 text-[1rem] rounded-full border-4 border-black p-4
                      bg-gray-200/90 text-black font-bold w-[1.75rem] h-[1.75rem] flex justify-center items-center`}>
                        {estudos.length}
                      </span>
                  </span>
                </span>
              )}
            </span>
            <List 
              estudos={estudos} 
              selecionaEstudo={selecionaEstudo}
            />
          </span>
        </section>
      </main>
    </>
  );
}
