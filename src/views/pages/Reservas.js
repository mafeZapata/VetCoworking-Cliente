
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
    var raza = "";
    return (
      <>
        <TernerasHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
        <Row>
            <div className="col">
              <Card className="shadow">
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Chapeta</th>
                      <th scope="col">Tipo</th>
                      <th scope="col">Bovino</th>
                      <th scope="col">Raza</th>
                      <th scope="col">Finca</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.listaTerneras.map((Ternera, i) => {
                    if (Ternera.id_raza == 1)
                    raza = "Jersey"
                    else if (Ternera.id_raza == 2)
                    raza = "Holstein"
                    else if (Ternera.id_raza == 3)
                    raza = "Jerhol"
                    else if (Ternera.id_raza == 4)
                    raza = "PardoSuiza"
            return (
              <tr>
                <td>{Ternera.chapeta}</td>
                <td>Ternera</td>
                <td>{Ternera.nombre}</td>
                <td>{raza}</td>
                <td>{Ternera.finca}</td>
                <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                        
                            <DropdownItem
                              href="/admin/actualizarBovino/"
                              key={i} onClick={this.cargarInformacion.bind(this,Ternera)} 
                            >
                                  <i className="ni ni-ui-04" />
                              Actualizar
                            </DropdownItem>
                            <DropdownItem
                              onClick={() => this.eliminarTerneras(Ternera.chapeta)}
                            >
                                <i className="ni ni-fat-remove" />
                             Eliminar
                            </DropdownItem>
                            <DropdownItem
                            href="/admin/verGenealogia/"
                            key={i} onClick={this.cargarInformacion.bind(this, Ternera)}
                            >
                            <i className="ni ni-map-big" />
                             Ver Genealogia 
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
              </tr>
            );
          })}         
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
  