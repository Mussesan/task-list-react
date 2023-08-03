
"use client"

import { useState } from "react"

export default function List(){

    const [estudos, setEstudos] = useState([
        {
            titulo: "javascript",
            tempo: "1:00:00",
        },
        {
            titulo: "react",
            tempo: "3:00:00"
        },
        {
            titulo: "estudar Java",
            tempo: "2:00:00",
        }]
    );

    let taskList = [
        {
            titulo: "javascript",
            tempo: "1:00:00",
        },
        {
            titulo: "react",
            tempo: "3:00:00"
        },
        {
            titulo: "estudar Java",
            tempo: "2:00:00",
        }
    ]

    // retorno do componente
    return(<> 

        <h1 className={`border-2 hover:bg-white/10 active:bg-green-500/80 select-none	`}>
            Olá State
        </h1>

        {taskList.map((item, index)=>{
            //retorno do map
            return( 
                <li key={index} className="border-[1px] border-dotted rounded-lg px-8 py-2 flex justify-between text-xs md:text-lg mb-2 mx-2">
                    <h3>
                        <span className="ml-1 font-sans">{item.titulo.charAt(0).toLocaleUpperCase() + item.titulo.slice(1)}</span>
                    </h3>
                    <span className="flex justify-around md:w-56 ">
                        <p className="mr-1"></p> 
                        <span>{item.tempo}</span>
                    </span>
                </li>
            )                            
        })}        
    </>)
}