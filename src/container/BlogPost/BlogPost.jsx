import React, {Component, Fragment} from 'react'
import './BlogPost.css'
import Post from '../../component/Post/Post';
import axios from 'axios'

class BlogPost extends Component {
    state = {
        post: []
    }
    getPostAPI = () => {
        axios.get('http://localhost:3004/posts')
        .then((res)=>{
            this.setState({
                post: res.data
            })
        })
    }
    handleRemove = (id) => {
        axios.delete(`http://localhost:3004/posts/${id}`).then((res)=>{
            alert("Hapus Data Berhasil")
            this.getPostAPI()
        })
    }
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(res => res.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })
        this.getPostAPI()
    }
    render() {
        return(
            <Fragment>
                <div className="container">
                    <p>Blog</p>
                    {
                        this.state.post.map(post => {
                            return <Post key={post.id} data={post} remove={this.handleRemove} />
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

export default BlogPost
