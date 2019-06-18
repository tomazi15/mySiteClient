import React, { Component } from 'react';
import Article from '../../components/article/Article';

class About extends Component {
    render () {
        return (
            <div>
                <Article title='About' text='This is all about You'/>
            </div>
        );
    }
}

export default About;