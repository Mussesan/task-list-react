"use client"
//requisito do NextJS para que o componente
// seja renderizado no navegador
//pois por padrão, os componentes 
//são renderizados em um component server

import { useState } from "react";

import List from "@/components/List/Lista";
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

  function finalizaEstudo(){
    if(selecionado){
      setSelecionado(undefined)
      setEstudos(estudosAnteriores =>
        estudosAnteriores.map(estudo => {
          if (estudo.id === selecionado.id){
            return {
              ...estudo,
              selecionado: false,
              completado: true
            }
          }
          return estudo
        })
        )
    }
  }

  return (
    <>
      <main className="pt-4 bg-[#242424] md:flex h-auto pb-10 container justify-around mx-auto scroll-smooth w-screen">
        <section>
            <Form setEstudos={setEstudos} />
            <div
             
            className="my-4 font-cav text-center">
              Selecione um card <br /> e clique em começar.
            </div>

          <div className="text-center">
            <Cronometro 
            selecionado={selecionado}
            finalizaEstudo={finalizaEstudo} 
            />
            <div className="-mt-4">
              
            </div>            
          </div>
        </section>
        <section className="md:flex-row text-center justify-center md:w-1/2 h-auto text-gray-200/95 my-5">
          <span className="">
            <span className="md:text-[2em] my-8">
              {estudos.length == 0 && (
                <p className={`w-fit mx-auto md:text-[1.3rem] pt-5 md`}>Não há estudos ainda...</p>
              )}
              {estudos.length > 0 && (
                <span className="flex justify- w-full mt-16 md:my-0">
                  <span className={` flex justify-around items-center w-[65%] mx-auto rounded-2xl mb-3 md:text-[1.3rem]
                   `}>
                    Estudos:
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
