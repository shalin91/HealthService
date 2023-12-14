import React from "react";
import { Col, Row } from "react-bootstrap";
import "./../../Pages/PrintForm/printForm.css";

const HelthCard = () => {
  return (
    <React.Fragment>
      <div className="mainDivMediclaForm">
        <Row>
          <Col lg="6">
            <div>
              <table className="mainTable">
                <tr>
                  <td style={{ backgroundColor: "#d2d2d2" }}>
                    <div style={{ textAlign: "center" }}>
                      YCS-APPSIL PUCARO CANTEEN <br />
                      HALOL
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="cardtitle">Name: TAPAS BUDHADV MANDAL</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="cardDataDiv">
                      <h5 className="cardtitle">Check Up Date: </h5>
                      <span style={{ fontSize: "13px" }}> 12/11/2021</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <div className="cardDataDiv">
                      <h5 className="cardtitle">Sr.No: </h5>
                      <span style={{ fontSize: "13px" }}> 2</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="cardDataDiv">
                      <h5 className="cardtitle">E.C.No: </h5>
                      <span style={{ fontSize: "13px" }}> NA</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="cardDataDiv">
                      <h5 className="cardtitle">Birth Date: </h5>
                      <span style={{ fontSize: "13px" }}>15/071985</span>
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
                      <span style={{ fontSize: "13px" }}>O +ve</span>
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
                    <span style={{ fontSize: "13px" }}>148 </span>
                    <span style={{ fontSize: "13px" }}>cms </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">Wight </h5>
                    <span style={{ fontSize: "13px" }}> 35</span>
                    <span style={{ fontSize: "13px" }}> kg</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">BMI </h5>
                    <span style={{ fontSize: "13px" }}>15.98 </span>
                    <span style={{ fontSize: "13px" }}>(N:18-25) </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">Bp</h5>
                    <span style={{ fontSize: "13px" }}>123/75</span>
                    <span style={{ fontSize: "13px" }}>mm of Hg</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">Vision </h5>
                    <span style={{ fontSize: "13px" }}>Normal</span>
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
                    <span style={{ fontSize: "13px" }}>14.3</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">Blood Sugar </h5>
                    <span style={{ fontSize: "13px" }}>88</span>
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
                    <span style={{ fontSize: "13px" }}>0.6</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">S.G.P.T</h5>
                    <span style={{ fontSize: "13px" }}>27</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">Urine Analysis</h5>
                    <span style={{ fontSize: "13px" }}>Normal</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cardDataDiv">
                    <h5 className="cardtitle">Audiometry</h5>
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
                    <span style={{ fontSize: "13px" }}>Normal</span>
                  </div>
                </td>
              </tr>
            </table>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default HelthCard;
