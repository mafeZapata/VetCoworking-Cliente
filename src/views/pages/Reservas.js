
import React from "react";
import axios from "axios";


import {
  Card,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Table,
  Container,
  Row,
} from "reactstrap";


import ReservasHeader from "../../components/Headers/Reservas.js";
import Reservas from "../../components/Headers/Reservas.js";
export default class Terneras extends React.Component {


  state = {
    listaReservas: [],
    Reservas: {
      id_Reservas: "",
      fechaInicio: "",
      fechaFin: "",

    }
  }
  
  componentDidMount() {
    this.listarReservas();
    localStorage.setItem("edit", "");
  }
  
  
  listarReservas= () => {
    axios
        .get("http://vetcoworking.azurewebsites.net​/api​/bookings​/get​/all")
        .then(response => {
            console.log(response)
            this.setState({
              listaReservas: response.data.info
            });
            console.log("ver reservas")
            console.log(this.state.control);
        })
        .catch(error => {
            console.log(error);
        });
  }
  
  eliminarReservas= async (id_Reservas) => {
  const res = await axios.delete('http://vetcoworking.azurewebsites.net/api/bookings/delete/' + id_Reservas);
  console.log(res);
  this.listarReservas();
  };
  
  cargarInformacion = (Reservas) => {
    console.log("ESTE ES"+Reservas);
     localStorage.setItem("id_Reservas",Reservas.id_Reservas);
     localStorage.setItem("fechaInicio",Reservas.fechaInicio);
     localStorage.setItem("fechaFin",Reservas.fechaFin);
     localStorage.setItem("edit","si");
  }
  
  render() {
    var Reserva = "";
    return (
      <>
        <ReservasHeader />
        <Container className="mt--7" fluid>
        <Row>
            <div className="col">
              <Card className="shadow">
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Reserva</th>
                      <th scope="col">Fecha inicio</th>
                      <th scope="col">Fecha finalización</th>
                
                    </tr>
                  </thead>
                  <tbody>
            return (
              <tr>
                <td>{Reservas.id_Reservas}</td>
                <td>Reserva</td>
                <td>{Reservas.fechaInicio}</td>
                <td>{Reservas.fechaFin}</td>
    
                <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(i) => i.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                        
                            <DropdownItem
                              onClick={() => this.eliminarReservas(Reservas.id_Reservas)}
                            >
                                <i className="ni ni-fat-remove" />
                             Eliminar
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
              </tr>
            );         
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  };
  
  }
  