interface ButtonProps {
    label: string;
    type?:"button" | "submit";
    variant?: "primary" | "outline";
    isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    label, 
    type = "button",
    variant = "primary",
    isLoading = false,
}) => {
    const base = "px-4 py-2 rounded font-medium";
    const styles ={
        primary:"bg-[#8B2F4A] text-white hover:bg-rose-800 disabled:bg-[#8B2F4A]",
        outline:"border border-[#8B2F4A] text-red-900 hover:bg-rose-100 disabled:bg-[#8B2F4A]"
    };

return (
    <button 
        type={type}
        disabled={isLoading}
        className={`${base} ${styles[variant]}`}>
            {isLoading ? "Loading..." :label}
            </button>
);
};

export default Button;