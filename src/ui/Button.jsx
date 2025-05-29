function Button({children , onclick , style}) {
    return (
        <button onClick={onclick} className={`${style}`}>
            {children}
        </button>
    )
}

export default Button
