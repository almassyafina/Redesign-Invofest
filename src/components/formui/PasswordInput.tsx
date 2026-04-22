import { useState } from "react";

interface PasswordInputProps {
    label: string;
    name: string;
    error?: string;
    register: any;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
    label,
    name,
    error,
    register,
}) => {

    const [show, setShow] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-1 w-full"> 
            
           
            <label className="flex flex-col gap-1 w-full">
                {label}
            </label>

            <div className="relative">
                <input
                    type={show ? "text" : "password"}
                    {...register(name)}
                    placeholder={label}
                    className={`
                    w-full border rounded-md px-3 py-2 text-sm
                    resize-none 
                    focus:outline-none focus:ring-2
                    transition
                    ${error ? "border-red-500 focus:ring-red-300" : "border-gray-300"}
                `}
                />

                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500"
                >
                    {show ? "Hide" : "Show"}
                </button>
            </div>

            {error && (
                <p className="text-red-500 text-xs mt-0.5">
                    {error}
                </p>
            )}
        </div>
    );
};