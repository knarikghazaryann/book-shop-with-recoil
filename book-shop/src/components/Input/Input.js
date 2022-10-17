const Input = (props) => {
    return (
        <input type='text' className={props.className} onChange={props.onChange} ref={props.myRef}/>
    )
}

export default Input;