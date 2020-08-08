import React from 'react';
import { Col, Container, Row, } from 'react-bootstrap'
import NavMenu from '../NavMenu'

const Layout: React.FC = (props) => {
    return (
        <>
            <Container fluid style={{ padding: 0 }}>
                <Row style={{ maxWidth: "100%", margin: 0 }}>
                    <Col sm={2} xs={2} style={{ padding: 0 }}>
                        <NavMenu />
                    </Col>
                    <Col sm={10} xs={10} style={{ padding: 0, }}>
                        {props.children}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Layout;
