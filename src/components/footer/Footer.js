import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import react from '../../assets/react.png'
import aws from '../../assets/aws.png';
import docker from '../../assets/docker.png';
import styledComponent from '../../assets/styled-components.png';

const Style = styled.div`
    .footer {
        bottom: 0;
        width: 100%;
        height: 140px;   /* Height of the footer */
        text-align: center;
        padding-top: 27px;
        font-family: Montserrat Alternates;

    }
    .wedge {
        height: 50px;
        width: 100%;
        background-color: #212121;
        margin-top: -1px;
        -webkit-clip-path: polygon(100% 0, 0 0, 100% 50%);
        clip-path: polygon(100% 0, 0 0, 100% 50%);
    }
    .logos {
        margin: -20px;
    }
    .logos, span {
        margin: -20px;
    }
    .wrap {
        list-style-type: none;
    }
    .wrap, li {
        display: inline;
    }
    .wrap, img {
        margin-right: 20px;
        width: 40px;
        height: 40px;
    }
`;

class Footer extends Component {
    render () {
        return (
            <Style>
                <div className='wedge'>
                </div>  
                <Row>
                    <Col>
                        <footer className="footer">
                            <p>Copyright &copy; { new Date().getFullYear() } Tomazi</p>
                            <div div='logos'>
                                <span>Powered by: </span>
                                <ul className='wrap'>
                                    <li><img src={ react } alt='react logo'></img></li>
                                    <li><img src={ aws } alt='aws logo'></img></li>
                                    <li><img src={ docker } alt='docker logo'></img></li>
                                    <li><img src={ styledComponent } alt='styled components logo'></img></li>
                                </ul>
                            </div>
                        </footer>
                    </Col>
                </Row>
            </Style>
        );
    }
}

export default Footer;