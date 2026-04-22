import type React from "react";

interface TextareaProps {
    label: string;
    name: string;
    register: any;
    error?: string;
    placeholder?: string;
}


export const Textarea: React.FC<TextareaProps>=({
    label,
    name,
    register,
    error,
    placeholder
}) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            <label>{label}</label>

        <textarea
        {...register(name)}
        placeholder={placeholder}
        className={`
                    w-full border rounded-md px-3 py-1.5 text-sm
                    resize-none h-16
                    focus:outline-none focus:ring-2 focus:ring-gray-300
                    transition
                    ${error ? "border-red-500 focus:ring-red-300" : "border-gray-300"}
                `}
        />
        

        {error && <p className="text-red-500 text-xs">{error}</p>}
        
        </div>
    );
};