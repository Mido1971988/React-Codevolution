type paramsProp = {
    params : {
        id : string ,
        reviewId : string
    }
}
export default function ProductDetails({params}: paramsProp) {
    return <h1>Review {params.reviewId} for Product {params.id}</h1>
}