import React, {Component} from 'react'
import YouTubeComp from '../../component/YouTubeComp/YouTubeComp'
import Product from '../Product/Product'

class Home extends Component {
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
                <p>Counter</p>
                <hr/>
                <Product/>
            </div>
        )
    }
}

export default Home