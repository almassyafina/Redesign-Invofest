
import { useState } from "react";

interface InputPasswordProps{
    label: string;
    nama:string;
    error?:string;
    register:any;
}

export const InputPassword: React.FC<InputPasswordProps> = ({
    label,
    nama,
    error,
    register,
}) => {

    const [show, setShow] = useState<boolean>(false);

    return (
         <div className="flex flex-col gap-1 mb-4">
                <label htmlFor="label" className="text-sm font-medium text-slate-600">
                    {label}
                </label>
                <div className="relative">
                <input 
                type={show ? "text" : "password"} 
                {...register(nama)}
                placeholder={label} 
                className="
                w-full px-4 py-3 
                rounded-lg 
                border border-slate-300 
                shadow-inner
                focus:outline-none 
                focus:ring-2 focus:ring-[#8B2F4A]
                transition"
                />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500">
                    {show ? "Hide" : "Show"}
                </button>
                </div>
                
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
    );
};