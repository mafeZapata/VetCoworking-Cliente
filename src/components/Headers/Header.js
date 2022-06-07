import React from "react";
import { Link } from 'react-router-dom'
import imagenes from './imagenes'


import * as SimpleIcons from 'react-icons/si'

import { Button, Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";



const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-9 pt-5 pt-md-8">
        <Container fluid>
        <Col lg="7" md="10">
              <h1 className="display-2 text-white">Opciones</h1>
              <br></br>
            </Col>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-8 mb-xl-0">
                  <Button>
                    <Link to={'/admin/terneraslevante'}>
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Reserva de consultorios
                        </CardTitle>
                        <img src={imagenes.reserva} alt="Reservas" style = {{ height:150, width: 150,}}/>
                        </div>
                      </Row>
                    </CardBody>
                    </Link>
                  </Button>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                <Button>
                    <Link to={'/admin/ternerasdestetadas'}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Listado de pacientes
                        </CardTitle>
                        <img src={imagenes.clientes} alt="Clientes" style = {{ height:150, width: 150,}}/>
                      </div>
                    </Row>
                  </CardBody>
                  </Link>
                  </Button>
                </Card>
              </Col>
            </Row>
          </div>
          <br/>
          <br/>
        </Container>
      </div>
    </>
  );
};

export default Header;