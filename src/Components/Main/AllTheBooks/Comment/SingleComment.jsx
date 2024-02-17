const SingleComment = ({author, rate, comment}) => {
    return (
        <div>
            <p>Author:{author}</p>
            <p>{comment}</p>
            <p>Rate:{rate}</p>
        </div>
    )
}

export default SingleComment