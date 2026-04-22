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
    const base = "w-full px-4 py-2 rounded-md font-medium transition";
    const styles ={
        primary: "bg-red-700 text-white hover:bg-red-800",
        outline: "border border-red-700 text-red-700"
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