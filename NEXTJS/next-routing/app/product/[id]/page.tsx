type paramsProp = {
    params : {
        id : string
    }
}
export default function ProductDetails({params}: paramsProp) {
    return <h1>ProductDetails Page {params.id}</h1>
}