export default function TimeInput(){

    return (<>
            <input type="time" className={`
            rounded-md border-2 border-gray-600 shadow-slate-900 shadow-inner
            bg-gray-700/95 text-gray-100/95 font-light w-56
            mb-3 p-1
        `} placeholder="Qual será o estudo de hoje?" />
    </>)
}