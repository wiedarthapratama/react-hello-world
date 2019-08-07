import React, { Component } from 'react'
import './LifeCycleComp.css'

class LifeCycleComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
        console.log('constructor')
    }
    static getDeriveredStateFromProps(props, state) {
        console.log('getDeriveredStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('componentDidMount')
        // setTimeout(()=>{
        //     this.setState({
        //         count: 2
        //     })
        // }, 5000)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.group('shouldComponentUpdate')
        console.log('nextProps: ', nextProps)
        console.log('nextState: ', nextState)
        console.groupEnd()
        if(nextState.count >= 4){
            return false
        }
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('componentWillMount')
    }
    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        console.log('render')
        return (
            <button className="btn" onClick={this.changeCount}>Component Button {this.state.count}</button>
        )
    }
}

export default LifeCycleComp