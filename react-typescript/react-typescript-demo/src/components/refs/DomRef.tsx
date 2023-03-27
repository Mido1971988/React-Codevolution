import { useRef, useEffect } from 'react'

export const DomRef = () => {
    //non-null assertion operator
    const inputRef = useRef<HTMLInputElement>(null!)
    useEffect(() => {
        // inputRef.current?.focus()
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input type='text' ref={inputRef} />
        </div>
    )
}