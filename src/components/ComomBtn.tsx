import { AppProps } from 'next/app';
import { Dancing_Script } from 'next/font/google'

export default function ComomBtn(props: any) {
  
  return (
    <>

      <button
        className={`w-[8rem] h-[2rem] font-rob
           bg-cyan-500 rounded-lg text-black font-extralight
            shadow-md shadow-black/75 active:shadow-inner active:shadow-black
            hover:bg-cyan-400 hover:shadow-sm hover:shadow-gray-100/80
            active:bg-gradient-to-r active:from-indigo-600/50  active:via-sky-600/70  active:to-emerald-600/50
            active:transition-all
        `}
      >
        {props.children}
      </button>
    </>
  );
}
