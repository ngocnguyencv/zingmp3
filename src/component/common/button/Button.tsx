import React, { ButtonHTMLAttributes, useState } from 'react'

interface IButtonCommonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    style: any,

}
export function ButtonCommon({
    text,
    style,
    ...props
}: IButtonCommonProps) {
    // const [isActive, setIsActive] = useState(0)
    // const handleClick = () => {
    //     setIsActive(isActive === 0 ? 1 : 0);
    // };
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
    };
    

    return (
        <button
            type='button'
            className={style ? style :
                `py-1 px-4 h-[30px] w-[120px] rounded-l-full rounded-r-full border bg-transparent items-center
                  justify-center text-16-24 border-gray-400`}
        >
            {text}
        </button>
    )
}

