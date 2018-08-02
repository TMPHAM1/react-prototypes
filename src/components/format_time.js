import React, {Component} from 'react';

class FormatTime extends Component {
   constructor(props) {
       super(props);
       this.state = {
           hour: 0,
           min: 0,
           sec: 0,
           ms: 0,
        }
       }
    
    render() {
        const {hour, min, sec, ms} = this.state;
        return (<div> {hour}:{min}:{sec}.{ms}</div>)
    }
}

export default FormatTime;