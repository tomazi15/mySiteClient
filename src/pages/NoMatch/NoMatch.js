import React, { Component } from 'react';
import Article from '../../components/article/Article';

class NoMatch extends Component {
    render () {
        return (
            <div>
                <Article text='No Match Page!!!!!!!' />
            </div>
        );
    }
}

export default NoMatch;