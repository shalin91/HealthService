import React, { useState, useEffect, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./../../Pages/PrintForm/printForm.css";
import SignContext from "../../../contextAPI/Context/SignContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const HelthCard = () => {
  const { id } = useParams();
  const { getCheckupDatabyId } = useContext(SignContext);
  const [CheckupData, setCheckupData] = useState([]);
  const [company,setcompany]=useState([]);
  const [location,setlocation]=useState([]);
  const GetCheckupDatabyId = async () => {
    try {
      
      const data = await getCheckupDatabyId(id);
      setCheckupData(data);
      console.log(" >>>>>>final company name")
      console.log(data.location
        );
        setcompany(data.compani.companyName)
        setlocation(data.location)
      
    } catch (error) {
      console.error("Error fetching checkup data:", error);
      
    }
  };
  const handlePrint = () => {
    window.print();
  };
  useEffect(() => {
    GetCheckupDatabyId(id);
  }, [id]);
  return (
    <React.Fragment>
    <div className="page-content">
    <Container fluid>
      <div className="mainDivMediclaForm">
        <Row>
          <Col lg="6">
            <div>
              <table className="mainTable">
                <tr>
                  <td style={{ backgroundColor: "#d2d2d2" }}>
                    <div style={{ textAlign: "center",fontWeight: "bold"}}>
                      {company} <br />
                      {location}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="cardtitle">
                      Name: {CheckupData?.employeeData?.employeeName || "N/A"}
                    </h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="cardDataDiv">
                      <h5 className="cardtitle">Check Up Date: </h5>
                      <span style={{ fontSize: "13px" }}>
                        {" "}
                        {CheckupData?.checkupname?.checkupDate.slice(0, 10)
                                              .split("-")
                                              .reverse()
                                              .join("-") || "N/A"}
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <div className="cardDataDiv">
                      <h5 className="cardtitle">Sr.No: </h5>
                      <span style={{ fontSize: "13px" }}> </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="cardDataDiv">
                      <h5 className="cardtitle">E.C.No: </h5>
                      <span style={{ fontSize: "13px" }}>
                        {CheckupData?.employeeData?.ecNo || "N/A"}
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="cardDataDiv">
                      <h5 className="cardtitle">Birth Date: </h5>
                      <span style={{ fontSize: "13px" }}>
                        {CheckupData?.employeecontactdetails?.dateOfBirth.slice(0, 10)
                                              .split("-")
                                              .reverse()
                                              .join("-") ||
                          "N/A"}
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="cardDataDiv">
                      <h5 className="cardtitle">Drug Allergy </h5>
                      <span style={{ fontSize: "13px" }}>NIL</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="cardDataDiv">
                      <h5 className="cardtitle">Medical Problem </h5>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: "#d2d2d2" }}>
                    <div className="cardDataDiv">
                      <h5 className="cardtitle">Blood Group: </h5>
                      <span style={{ fontSize: "13px" }}>
                        {CheckupData?.employeecontactdetails?.bloodGroup ||
                          "N/A"}
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: "#d2d2d2" }}>
                    <div style={{ textAlign: "center" }}>
                      <h5 className="cardtitle">
                        Viraj Occupational Health Services{" "}
                      </h5>
                      <span style={{ fontSize: "13px" }}>
                        Virai Mata Lane, Rajmahal Road, VADODARA-39001
                      </span>
                      <span style={{ fontSize: "13px" }}>
                        pHONE : 0265 2420746
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="cardDataDiv">
                      <h5 className="cardtitle" style={{ textAlign: "center" }}>
                        Dr.YATISH SHAH (M.B.B.S){" "}
                      </h5>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </Col>
          <Col lg="6">
            {" "}
            <table className="mainTable">
              <tr>
                <td style={{ backgroundColor: "#d2d2d2" }}>
                  <h5 className="cardtitle" style={{ textAlign: "center" }}>
                    PERSONAL HEALTH CARD
                  </h5>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">Height</h5>
                    <span style={{ fontSize: "13px" }}>
                      {CheckupData?.employeeVitalAndHistory?.height || "N/A"}{" "}
                    </span>
                    <span style={{ fontSize: "13px" ,fontWeight:'bold'}}>cms </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">Weight </h5>
                    <span style={{ fontSize: "13px"}}>
                      {" "}
                      {CheckupData?.employeeVitalAndHistory?.weight || "N/A"}
                    </span>
                    <span style={{ fontSize: "13px" ,fontWeight:'bold'}}> kg</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">BMI </h5>
                    <span style={{ fontSize: "13px" }}>
                      {CheckupData?.employeeVitalAndHistory?.bmi || "N/A"}{" "}
                    </span>
                    <span style={{ fontSize: "13px",fontWeight:'bold'}}>(N:18-25) </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">Bp</h5>
                    <span style={{ fontSize: "13px" }}>
                      {CheckupData?.employeeVitalAndHistory?.bp || "N/A"}
                    </span>
                    <span style={{ fontSize: "13px",fontWeight:'bold' }}>mm of Hg</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">Vision </h5>
                    <span style={{ fontSize: "13px" }}>
                      {CheckupData?.employeeeyeinformation?.colourVision ||
                        "N/A"}
                    </span>
                  </div>
                </td>   
              </tr>
              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">Colour Blindness </h5>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">Haemoglobin </h5>
                    <span style={{ fontSize: "13px" }}>{CheckupData?.employeebloodinformation?.hb
 ||
                        "N/A"}</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">Blood Sugar </h5>
                    <span style={{ fontSize: "13px" }}>{CheckupData?.employeebloodinformation?.blSugarPP2BS
 ||
                        "N/A"}</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">S. Cholesterol</h5>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">S.Ceratinine</h5>
                    <span style={{ fontSize: "13px" }}>{CheckupData?.employeebloodinformation?.sCreatinine
 ||
                        "N/A"}</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">S.G.P.T</h5>
                    <span style={{ fontSize: "13px" }}>{CheckupData?.employeebloodinformation?.sgpt
 ||
                        "N/A"}</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">Urine Analysis</h5>
                    <span style={{ fontSize: "13px" }}></span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">Audiometry</h5>
                    <span style={{ fontSize: "13px" }}>
                      {CheckupData?.employeeinvestigationinformation
                        ?.audiometry || "N/A"}
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">PFT</h5>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">E.C.G</h5>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">X-Ray Chest</h5>
                    <span style={{ fontSize: "13px" }}></span>
                  </div>
                </td>
              </tr>
            </table>
          </Col>
        </Row>

        <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                      <Link
                        to="#"
                        onClick={handlePrint}
                        className="btn btn-success"
                      >
                        <i className="ri-printer-line align-bottom me-1"></i>{" "}
                        Print
                      </Link>
           </div>
      </div>
      </Container>
      </div>
    </React.Fragment>
  );
};

export default HelthCard;
