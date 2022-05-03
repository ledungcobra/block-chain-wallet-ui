import React from "react";

type Props = {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
};

const Button = ({ onClick, children, className }: Props) => {
    let baseCss =
        " text-white font-bold py-2 px-4 border-b-4 border-gray-700 rounded w-full self-end ";

    if (className) {
        baseCss += "  hover:border-gray-500  " + className;
    } else {
        baseCss += " bg-gray-500  hover:border-gray-500 ";
    }

    return (
        <button
            style={{ zIndex: 999 }}
            onClick={onClick}
            className={className ? className + baseCss : baseCss}
        >
            {children}
        </button>
    );
};

export default Button;
