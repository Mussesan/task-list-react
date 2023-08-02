export default function ComomBtn(props: any){

    return (<>
        <button className={`w-[8rem] h-[2rem]
           bg-cyan-500 rounded-lg text-black font-medium
           shadow-lg shadow-black/75
        `}>{props.children}</button>
    </>)
}