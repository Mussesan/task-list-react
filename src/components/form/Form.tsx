"use client"

import { useState } from "react";
import { InterfaceEstudo } from "@/types/estudo";
import { v4 as uuidv4 } from 'uuid'
import ComomBtn from "../ComomBtn";

interface Props {
    setEstudos: React.Dispatch<React.SetStateAction<InterfaceEstudo[]>>
}

export default function Form({ setEstudos }: Props) {
    const [titulo, setEstudo] = useState('')
    const [tempo, setTempo] = useState('00:00:00')

    function adicionarEstudo(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setEstudos(estudosAntigos => [...estudosAntigos,
        {
            titulo,
            tempo,
            selecionado: false,
            completado: false,
            ativo: false,
            id: uuidv4()
        }
        ]
        );
        setEstudo('')
        setTempo('00:00:00')
    }

    return (<>
        <form
            className={`md:w-[27rem] xs:w-72 h-48 md:h-32 bg-slate-500 rounded-lg
                border-gray-400 border-2 px-3 py-2 mx-auto md:mt-[3rem]`}
            onSubmit={adicionarEstudo}
        >
            <div className="md:flex justify-around font-medium">
                <label htmlFor="tarefa">
                    <h3 className="">Estudo</h3>
                    <input
                        type="text"

                        className={`
                                rounded-md border-2 border-gray-600 shadow-slate-900 shadow-inner
                                bg-gray-700/95 text-gray-100/95 font-light w-64 md:w-48 h-8
                                mb-3 p-1 md:text-[0.86rem]
                            `}
                        id="estudo"
                        name="estudo"
                        placeholder="Qual será o estudo de hoje?"
                        value={titulo}
                        onChange={event => setEstudo(event.target.value)}
                        required
                    />
                </label>

                <label htmlFor="tempo" className="">
                    <h3 className="">Tempo</h3>
                    <input
                        type="time"

                        className={`
                                rounded-md border-2 border-gray-600 shadow-slate-900 shadow-inner
                                bg-gray-700/95 text-gray-100/95 font-light w-64 md:w-48 h-8
                                mb-3 p-1
                            `}
                        id="tempo"
                        name="tempo"
                        step="2"
                        value={tempo}
                        onChange={event => setTempo(event.target.value)}
                        required
                    />
                </label>
            </div>
            <div
                className={`mx-auto xs:h-auto md:h-auto
                flex justify-center items-center 
              `}
            >
                <ComomBtn type="submit">Adicionar</ComomBtn>
            </div>
        </form>
    </>)
}