"use client"

import React from 'react';

class ComomBtn extends React.Component<{
  children?:string; type?: "button" | "submit" | "reset" | undefined
}>{
    
  render() {

    const {type ="button"} = this.props;
    
    return (
      <>
        <button
        type={type}
          className={`w-[8rem] h-[2rem] font-rob
             bg-cyan-500 rounded-lg text-black font-extralight
              shadow-md shadow-black/75 active:shadow-inner active:shadow-black
              hover:bg-cyan-400 hover:shadow-sm hover:shadow-gray-100/80
              active:bg-gradient-to-r active:from-indigo-600/50  active:via-sky-600/70  active:to-emerald-600/50
              active:transition-all
          `}>
            {this.props.children}
        </button>
      </>
    );

  }

}

export default ComomBtn
