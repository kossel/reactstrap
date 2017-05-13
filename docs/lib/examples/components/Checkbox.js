import React, { Component } from 'react';
import { Checkbox } from 'reactstrap';

class Test extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (e) {
        console.log(e.target.checked);
    }

    render(){
        return <Checkbox onChange={this.handleClick} />
    }


};

export default Test;