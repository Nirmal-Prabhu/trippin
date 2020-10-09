import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col
} from 'reactstrap';
import { SalesSummary, Projects, Feeds } from 'components/dashboard-components';

import img1 from '../../assets/images/big/img1.jpg';
import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';

const Starter = () => {
    return (
        <div>
            <Row>
                <Col sm={6} lg={8}>
                    <SalesSummary />
                </Col>
                <Col sm={6} lg={4}>
                    <Feeds />
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Projects />
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="4">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src={img1} />
                        <CardBody>
                            <CardTitle>Madeira, Portugal</CardTitle>
                            <CardSubtitle>Amit Sehgal</CardSubtitle>
                            <CardText>My life changing experience in Madiera, the hidden gems, great food and amazing people. A cheapsters guide.</CardText>
                            <Button>Visit</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src={img2} />
                        <CardBody>
                            <CardTitle>Amsterdam, Netherlands</CardTitle>
                            <CardSubtitle>Ronit Mukherjee</CardSubtitle>
                            <CardText>I’ve visited Amsterdam more times than I can count getting under its skin. So here's me giving you a complete guide to this heavenly city.</CardText>
                            <Button>Visit</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src={img3} />
                        <CardBody>
                            <CardTitle>Iceland</CardTitle>
                            <CardSubtitle>Pranjal Tiwari</CardSubtitle>
                            <CardText>Iceland is a photographer's paradise.My journey to wild and free Iceland, how you can go there, guides and tips.</CardText>
                            <Button>Visit</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Starter;
