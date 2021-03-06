import React from 'react'

const Post = (props) => {
    return (
        <div className="card">
            <div className="img-thumb">
                <img src="https://placeimg.com/200/150/tech" alt=""/>
            </div>
            <div className="card-body">
                <p className="title">{props.data.title}</p>
                <p className="content">{props.data.body}</p>
                <button className="btn" onClick={() => props.remove(props.data.id)}>Remove</button>
            </div>
        </div>
    )
}

export default Post