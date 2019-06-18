import React, { Component } from 'react';
import Tile from '../../components/tile/Tile';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Article from '../../components/article/Article';

class Home extends Component {
    render () {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Article 
                                title='Home'
                                text='Boy favourable day can introduced sentiments entreaties. Noisier carried of in warrant because. So mr plate seems cause chief widen first. Two differed husbands met screened his. Bed was form wife out ask draw. Wholly coming at we no enable. Offending sir delivered questions now new met. Acceptance she interested new boisterous day discretion celebrated. 
                                Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable. Trees delay fancy noise manor do as an small. Felicity now law securing breeding likewise extended and. Roused either who favour why ham.'
                            />
                        </Col>
                    </Row>
                </Container>
                <Tile />
            </div>
        );
    }
}
export default Home;