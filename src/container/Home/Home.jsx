import React, {Component} from 'react'
import BlogPost from '../BlogPost/BlogPost';
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp'
// import Product from '../Product/Product'
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';

class Home extends Component {
    state = {
        showComponent: true
    }
    componentDidMount() {
        // setTimeout(()=>{
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 10000)
    }
    render() {
        return (
            <div>
                {/* <p>YouTube Component</p>
                <hr/>
                <YouTubeComp 
                    time="5.22" 
                    title="asd"
                    desc="10x ditonton, 1 hari yang lalu"/>
                <YouTubeComp 
                    time="4.54" 
                    title="qwe"
                    desc="50x ditonton, 3 hari yang lalu"/>
                <YouTubeComp 
                    time="6.17" 
                    title="zxc"
                    desc="20x ditonton, 2 hari yang lalu"/>
                <YouTubeComp 
                    time="9.05" 
                    title="qaz"
                    desc="60x ditonton, 8 hari yang lalu"/>
                <YouTubeComp/>   */}
                {/* <p>Counter</p>
                <hr/>
                <Product/> */}
                {/* <p>LifeCycle Component</p>
                <hr/>
                {
                    this.state.showComponent ? <LifeCycleComp/> : null
                } */}
                <p>BlogPost</p>
                <hr/>
                <BlogPost/>
            </div>
        )
    }
}

export default Home