"use client"

import React, { Dispatch, FormEvent } from "react";
import { InterfaceEstudo } from "@/types/estudo";
import ComomBtn from "../ComomBtn";

class Form extends React.Component<{
    setEstudos: React.Dispatch<React.
    SetStateAction<InterfaceEstudo[]>>}
    >{
    
    state = {
        titulo: "",
        tempo: "00:00:00"
    }

    adicionarEstudo(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        this.props.setEstudos(EstudosAtuais => [...EstudosAtuais, {...this.state}])
        console.log("titulo: "+this.state," tempo: "+this.state) 
    }

    render(){
        return(
        <>
            <form
                className={`md:w-[27rem] xs:w-72 h-48 md:h-32 bg-slate-500 rounded-lg
                border-gray-400 border-2 px-3 py-2 mx-auto md:mt-[3rem]`}
                onSubmit={this.adicionarEstudo.bind(this)}
                >
                <div className="md:flex justify-around font-medium">
                    <label htmlFor="tarefa">
                        <h3 className="">Estudo</h3>
                        <input
                            type="text"
                            
                            className={`
                                rounded-md border-2 border-gray-600 shadow-slate-900 shadow-inner
                                bg-gray-700/95 text-gray-100/95 font-light w-64 md:w-48 h-8
                                mb-3 p-1
                            `}
                            id="estudo"
                            name="estudo"
                            placeholder="Qual será o estudo de hoje?"
                            value={this.state.titulo}
                            onChange={event => this.setState({...this.state, titulo: event.target.value})}
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
                            placeholder="Qual será o estudo de hoje?"
                            id="tempo"
                            name="tempo"
                            step="2"
                            value={this.state.tempo}
                            onChange={event => this.setState({...this.state, tempo: event.target.value})}
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
        </>
        )
    }    
}

export default Form