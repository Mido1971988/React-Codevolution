import React from 'react'

function MemoComp({name}) {
    console.log("Render from Memo Comp")
    return (
        <div>MemoComp {name}</div>
    )
}

export default React.memo(MemoComp)