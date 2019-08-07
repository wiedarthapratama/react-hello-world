import React from 'react'

const Post = (props) => {
    return (
        <div className="card">
            <div className="img-thumb">
                <img src="https://placeimg.com/200/150/tech" alt=""/>
            </div>
            <div className="card-body">
                <p className="title">{props.title}</p>
                <p className="content">{props.desc}</p>
            </div>
        </div>
    )
}

export default Post