import React, { Component } from 'react';
import Time from './format_time';

class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status : 'stopped',
            start: 'null',
            elapsed : 0,
        }
        this.update = this.update.bind(this);
    }
    start() {
        debugger;
        this.setState({
            status: 'running',
            start: new Date().getTime(),
        })
        setTimeout(this.update, 10);
    }
    stop() { 
        this.setState({
            status: 'stopped',
        })
    }
    update() {
        const {status, start } = this.state; 
        if (status === 'running') {
             this.setState({
                 elapsed: new Date().getTime() - start,
             })
             setTimeout(this.update, 10);
        }
    }
    reset(){
        this.setState({
            status: 'stopped',
            start: 'null',
            elapsed: 0.
        })
    }
    render() {
        const {elapsed, status} = this.state
    return (<div>
        <h1><Time/></h1>
        <p>{status}</p>
        <button onClick={this.start.bind(this)}>Start</button>
        <button onClick={this.stop.bind(this)}>Stop</button>
        <button onClick={this.reset.bind(this)}>Reset</button>
        </div>);
    }
}

export default Stopwatch;