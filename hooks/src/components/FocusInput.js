import react, { useRef, useEffect } from 'react'

function FocusInput() {
    // const inputRef = react.createRef()
	const inputRef = useRef(null)
    console.log(inputRef)
	useEffect(() => {
		inputRef.current.focus()
	}, [])
	return (
		<div>
			<input ref={inputRef} type="text" />
		</div>
	)
}

export default FocusInput