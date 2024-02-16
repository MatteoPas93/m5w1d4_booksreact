const SingleComment = (props) => {
    return (
        <div>
            <p>{props.asin}</p>
            <p>{props.comment}</p>
            <p>{props.rate}</p>
        </div>
    )
}

export default SingleComment