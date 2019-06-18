import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import ProgressBar  from 'react-bootstrap/ProgressBar';
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import redux from '../../assets/redux.png';
import angular from '../../assets/angular.png';
import stencil from '../../assets/stenciljs.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import boostrap from '../../assets/boostrap.png';
import styledComponents from '../../assets/styled-components.png';
import nodejs from '../../assets/nodejs.png';
import aws from '../../assets/aws.png';
import azure from '../../assets/azure.png';
import docker from '../../assets/docker.png';
import php from '../../assets/php.png';
import symfony from '../../assets/symfony.png';
import mongodb from '../../assets/mongodb.png';
import { tileDataConstant } from './TileDataConstant';

const Style = styled.div`
    .intro {
        height: 100px;
        text-align: center;
        padding: 30px;
        background-color: #212121;
        color: white;
        font-family: Montserrat Alternates;
    }
    .wrap {
        text-align: center;
        background-color: #212121;
    }
    .tile {
        position: relative;
        width: 200px;
        height: 200px;
        display: inline-block;
        margin: 10px;
        font-family: Montserrat Alternates;
    }
    .image {
        // background: linear-gradient(to right,  #f47442, #41f477);
        background-color: #f44188;
        display: block;
        width: 200px;
        height: 200px;
        padding: 20px;
    }
    .overlay {
        position: absolute;
        transition: all .3s ease;
        opacity: 0;
    }
    .tile:hover .overlay {
        opacity: 1;
    }
    .overlayFade {
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background-color: #7941f4;
    }
    .tile:hover .overlayFade {
        width: 100%;
    }
    .text {
        color: white
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, 50%);
    }
    .test {
        height: 100px;
        width: 100%;
        background-color: #212121;
        margin-top: -1px;
        -webkit-clip-path: polygon(100% 0, 0 0, 100% 50%);
        clip-path: polygon(100% 0, 0 0, 100% 50%);
    }
    .extras {
        padding-top: 80px;
        width: 90%;
        text-align: center;
        padding-left: 20px;
    }
    .extras, Button {
        margin-bottom: 10px;
    }
    .extras, p {
        color: white;
        margin: 0px;
    }
`;

const logosList = [
    {logo: js}, {logo: react}, {logo: redux}, {logo: angular}, {logo: stencil},
    {logo: html}, {logo: css}, {logo: boostrap}, {logo: styledComponents}, {logo: nodejs}, 
    {logo: aws}, {logo: azure}, {logo: docker}, {logo: php}, {logo: symfony}, {logo: mongodb}
];

class Tile extends Component {

    mergeData (logos, tileData) {
        let combiner = logos.map((item, index) => {
            return {
                ...item,
                ...tileData[index]
            }
        });
        return combiner;
    }

    renderTile (data) {
        let dataPack = [];
        data.map((item, index) => {
            return dataPack.push(
                <div key={ index }className='tile'>
                    <img src={item.logo} alt={item.title} className='image'></img>
                        <div className='overlay overlayFade'>
                            <b><div className='text'>{item.title}</div></b>
                            <div className='extras'>
                                <Button variant="dark">{item.visitTitle}</Button>
                                <p>Skill Level:</p>
                                <ProgressBar variant="success" now={item.skill} />
                            </div>
                        </div>
                </div>
            );
        });
        return dataPack;
    }

    render () {
        return (
            <Style>
                <div className='intro'>
                    <h1>My Skills</h1>
                </div>
                <div className='wrap'>
                    {  this.renderTile(this.mergeData(logosList, tileDataConstant)) }
                </div>
                <div className='test'>
                </div>  
            </Style>
        );
    }
}
export default Tile;