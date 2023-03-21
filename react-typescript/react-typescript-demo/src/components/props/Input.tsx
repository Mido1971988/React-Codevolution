type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ value, handleChange }: InputProps) => {
    // [1] you can create function here inside the component
    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   console.log(event)
    // }

    // [2] or you can take it from props
    return <input type='text' value={value} onChange={handleChange} />
}