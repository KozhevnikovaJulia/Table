import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const HomePage = () => {
    return <>
        <Container style={{ "backgroundColor": "#40E0D0" }}>
            <Row>
                <Col>1 of 1</Col>
            </Row>
        </Container>

        <Container fluid style={{ "backgroundColor": "#7FFFD4" }}>
            <Row>
                <Col>1 of 1</Col>
            </Row>
        </Container>

        <Container fluid="xl" style={{ "backgroundColor": "#00CED1" }}>
            <Row>
                <Col>1 of 1</Col>
            </Row>
        </Container>
        
        <Container >
            <Row>
                <Col style={{ "backgroundColor": "#8FBC8F" }}>1 of 2</Col>
                <Col style={{ "backgroundColor": "#6B8E23" }}>2 of 2</Col>
            </Row>
            <Row>
                <Col style={{ "backgroundColor": "#AFEEEE" }}>1 of 3</Col>
                <Col style={{ "backgroundColor": "#87CEEB" }}>2 of 3</Col>
                <Col style={{ "backgroundColor": "#00BFFF" }}>3 of 3</Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col style={{ "backgroundColor": "#D8BFD8" }}>1 of 3</Col>
                <Col style={{ "backgroundColor": "#DDA0DD" }} xs={6}>2 of 3 (wider)</Col>
                <Col style={{ "backgroundColor": "#EE82EE" }}>3 of 3</Col>
            </Row>
            <Row>
                <Col style={{ "backgroundColor": "" }}>1 of 3</Col>
                <Col style={{ "backgroundColor": "#D8BFD8" }} xs={5}>2 of 3 (wider)</Col>
                <Col style={{ "backgroundColor": "#AFEEEE" }} >3 of 3</Col>
            </Row>
            <Row>
                <Col style={{ "backgroundColor": "#AFEEEE" }}>1 of 3</Col>
                <Col style={{ "backgroundColor": "#DDA0DD", "padding": "15px" }} xs={10}>2 of 3 (wider)</Col>
                <Col style={{ "backgroundColor": "#EE82EE" }} >3 of 3</Col>
            </Row>
        </Container>

        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="2"  style={{ "backgroundColor": "#FFA07A" }}>
                    1 of 3
    </Col>
                <Col  style={{ "backgroundColor": "#FF7F50" }} md="auto">Variable width content</Col>
                <Col  style={{ "backgroundColor": "#FF6347" }} xs lg="2">
                    3 of 3
    </Col>
            </Row>
            <Row>
                <Col  style={{ "backgroundColor": "#D8BFD8" }}>1 of 3</Col>
                <Col   style={{ "backgroundColor": "#DDA0DD" }} md="auto">Variable width content</Col>
                <Col  style={{ "backgroundColor": "#EE82EE" }} xs lg="2">
                    3 of 3
    </Col>
            </Row>
        </Container>

        <Container>
            <Row className="justify-content-md-center">
                <Col style={{ "backgroundColor": "#EEE8AA" }}>1 of 2</Col>
                <Col style={{ "backgroundColor": "#F0E68C" }}>2 of 2</Col>
            </Row>

            <Row className="md">
                <Col style={{ "backgroundColor": "#E6E6FA" }}>1 of 2</Col>
                <Col style={{ "backgroundColor": "#D8BFD8" }}>2 of 2</Col>
            </Row>

            <Row className="justify-content-xl-center">
                <Col style={{ "backgroundColor": "#DDA0DD" }}>1 of 2</Col>
                <Col style={{ "backgroundColor": "#EE82EE" }}>2 of 2</Col>
            </Row>

            <Row className="justify-content-xs-center">
                <Col style={{ "backgroundColor": "#FF00FF" }}>1 of 2</Col>
                <Col style={{ "backgroundColor": "#BA55D3" }}>2 of 2</Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col sm={8} style={{ "backgroundColor": "#7B68EE" }}>sm=8</Col>
                <Col sm={4} style={{ "backgroundColor": "#FF00FF" }}>sm=4</Col>
            </Row>
            <Row>
                <Col sm style={{ "backgroundColor": "#FF00FF" }}>sm=true</Col>
                <Col sm style={{ "backgroundColor": "#FF00FF" }}>sm=true</Col>
                <Col sm style={{ "backgroundColor": "#FF00FF" }}>sm=true</Col>
            </Row>
        </Container>

        <Container>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row>
    <Col xs={12} md={8} style={{ "backgroundColor": "#FF00FF" }}>
      xs=12 md=8
    </Col>
    <Col xs={6} md={4} style={{ "backgroundColor": "#FF00FF" }}>
      xs=6 md=4
    </Col>
  </Row>

  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  <Row>
    <Col xs={6} md={4} style={{ "backgroundColor": "#FF00FF" }}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4} style={{ "backgroundColor": "#FF00FF" }}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4} style={{ "backgroundColor": "#FF00FF" }}>
      xs=6 md=4
    </Col>
  </Row>

  {/* Columns are always 50% wide, on mobile and desktop */}
  <Row>
    <Col xs={6} style={{ "backgroundColor": "#FF00FF" }}>xs=6</Col>
    <Col xs={6} style={{ "backgroundColor": "#FF00FF" }}>xs=6</Col>
  </Row>
</Container>
    </>
}

