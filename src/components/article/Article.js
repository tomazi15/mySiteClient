import React, { Component } from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
`
class Article extends Component {
    render() {
        const { title, text } = this.props;
        return (
            <Styles>
                <hr />
                <h1>{ title }</h1>
                <p>{ text }</p>
                <hr />
            </Styles>
        )
    }
}
export default Article;