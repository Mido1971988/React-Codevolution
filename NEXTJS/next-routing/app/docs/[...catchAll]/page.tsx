type paramsProp = {
    params : {
        catchAll : string[]
    }
}
export default function ProductDetails({params}: paramsProp) {
    if( params.catchAll.length === 1 ){
        return <h1>Docs {params.catchAll[0]}</h1>
    }else if(params.catchAll.length === 2 ){
        return <h1>Docs {params.catchAll[0]} and {params.catchAll[1]}</h1>
    }
    return <h1>CatchAll Pages</h1>
}