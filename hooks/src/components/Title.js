import react from 'react'

function Title() {
    console.log('Rendering Title')
    return (
        <h2>
            useCallback Hook
        </h2>
    )
}

export default react.memo(Title)