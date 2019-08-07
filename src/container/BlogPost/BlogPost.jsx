import React, {Component, Fragment} from 'react'
import './BlogPost.css'
import Post from '../../component/Post/Post';
import axios from 'axios'

class BlogPost extends Component {
    state = {
        post: []
    }
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(res => res.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            this.setState({
                post: res.data
            })
        })
    }
    render() {
        return(
            <Fragment>
                <div className="container">
                    <p>Blog</p>
                    {
                        this.state.post.map(post => {
                            return <Post key={post.id} title={post.title} desc={post.body} />
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

export default BlogPost