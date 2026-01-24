

const Button = ({btnText , className}) => {
    return (
        <button className={`py-2.5 px-5 bg-[#D9832E] text-white border border-[#D9832E] hover:bg-black hover:border-black hover:text-white text-sm font-medium duration-500 cursor-pointer ${className}`}>{btnText}</button>
    )
}

export default Button