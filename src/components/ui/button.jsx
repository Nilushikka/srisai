

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2";

    const variants = {
        primary: "bg-secondary text-white hover:bg-opacity-90 shadow-lg shadow-secondary/20",
        secondary: "bg-white text-primary border border-gray-200 hover:border-gray-300 hover:shadow-md",
        outline: "bg-transparent text-white border border-white/30 hover:bg-white/10",
        dark: "bg-primary text-white hover:bg-opacity-90"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
