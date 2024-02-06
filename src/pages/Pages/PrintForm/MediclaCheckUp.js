import React, { useState, useEffect, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./../../Pages/PrintForm/printForm.css";
import SignContext from "../../../contextAPI/Context/SignContext";
import { Link, useParams } from "react-router-dom";

const MediclaCheckUp = () => {
  const { id } = useParams();
  const { getCheckupDatabyId } = useContext(SignContext);
  const [CheckupData, setCheckupData] = useState([]);

  const [withGlassChecked, setWithGlassChecked] = useState(false);
  const [withoutGlassChecked, setWithoutGlassChecked] = useState(false);
  const [nearwith, setNearwith] = useState(false);
  const [nearwithout, setNearwithout] = useState(false);
  const [fit, setfit] = useState(false);
  const [unfit, setunfit] = useState(false);
  const handlePrint = () => {
    window.print();
  };
  const GetCheckupDatabyId = async () => {
    try {
      const data = await getCheckupDatabyId(id);
      setCheckupData(data);
      
    } catch (error) {
      console.error("Error fetching checkup data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await GetCheckupDatabyId(id);
      // Once the data is fetched, update the checkbox state
      if (
        CheckupData?.employeeeyeinformation?.distandVisionWithLeftEye !== ""
      ) {
        console.log(">>>",CheckupData?.employeeeyeinformation?.distandVisionWithLeftEye);
        setWithGlassChecked(true);
        setWithoutGlassChecked(false);
      }
      if (
        CheckupData?.employeeeyeinformation?.distandVisionWithoutRightEye !== ""
      ) {
        setWithGlassChecked(false);
        setWithoutGlassChecked(true);
      }
      if (CheckupData?.employeeform33?.fitOrUnfit === "Unfit") {
        setunfit(true);
      }
      if (CheckupData?.employeeform33?.fitOrUnfit === "Fit") {
        setfit(true);
      }
      if (CheckupData?.employeeeyeinformation?.nearVisionWithRightEye !== "") {
        setNearwith(true);
        setNearwithout(false);
      }
      if (
        CheckupData?.employeeeyeinformation?.nearVisionWithoutRightEye !== ""
      ) {
        setNearwithout(true);
        setNearwith(false);
      } else {
        setNearwithout(false);
        setNearwith(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className="mainDivMediclaForm">
            <div className="titleDiv">
              <h3 className="medicalTitle">MEDICAL CHECK UP</h3>
              <h3 className="medicalSubTitle">Sr.No.:</h3>
            </div>
            <div class="table-container">
              <table className="Medical-checkup">
                <tr>
                  <td
                    style={{
                      width: "5%",
                    }}
                    rowspan="6"
                  >
                    <div className="sideTitle">BIO-DATA</div>
                  </td>
                </tr>
                <tr>
                  <td colSpan="6">
                    DATE:{" "}
                    {CheckupData?.createdAt
                      ?.slice(0, 10)
                      .split("-")
                      .reverse()
                      .join("-") || "N/A"}
                  </td>
                  <td colSpan="3">
                    MOB:{" "}
                    {CheckupData?.employeecontactdetails?.mobileNumber || "N/A"}
                  </td>
                  <td colSpan="3">
                    DOB:{" "}
                    {CheckupData?.employeecontactdetails?.dateOfBirth
                      .slice(0, 10)
                      .split("-")
                      .reverse()
                      .join("-") || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td colSpan="9">
                    NAME:{" "}
                    {CheckupData?.employeeData?.employeeNameAbbrevation ||
                      "N/A"}{" "}
                    {CheckupData?.employeeData?.employeeName || "N/A"}{" "}
                    {CheckupData?.employeeData?.employeeFatherName || "N/A"}
                  </td>
                  <td colSpan="3">
                    SEX: {CheckupData?.employeecontactdetails?.gender || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td colSpan="9">
                    COMPANY : {CheckupData?.compani?.companyName || "N/A"}
                  </td>
                  <td colSpan="3">
                    AGE:{CheckupData?.employeecontactdetails?.age || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td colSpan="9">
                    NATURE OF JOB:{" "}
                    {CheckupData?.employeecontactdetails?.natureOfJob || "N/A"}
                  </td>
                  <td colSpan="3">
                    HT: {CheckupData?.employeeVitalAndHistory?.height || "N/A"}{" "}
                    CMS
                  </td>
                </tr>
                <tr>
                  <td colSpan="9">
                    IDENTIFICATION MARK:{" "}
                    {CheckupData?.employeecontactdetails?.idMark || "N/A"}{" "}
                  </td>
                  <td colSpan="3">
                    WT: {CheckupData?.employeeVitalAndHistory?.weight || "N/A"}{" "}
                    KG
                  </td>
                </tr>
                {/* </table>

              <table className="Medical-checkup"> */}
                <tr>
                  <td
                    style={{
                      width: "5%",
                    }}
                    rowspan="6"
                  >
                    <div className="sideTitle">HISTORY</div>
                  </td>
                </tr>
                <tr>
                  <td colSpan="12">
                    COMPLAINTS :{" "}
                    {CheckupData?.employeeVitalAndHistory?.complaints || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td colSpan="12">
                    PAST HISTROY:{" "}
                    {CheckupData?.employeeVitalAndHistory?.pastHistory || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td colSpan="12">
                    PERSONAL HISTORY :{" "}
                    {CheckupData?.employeeVitalAndHistory?.personalHistory ||
                      "N/A"}
                  </td>
                </tr>
                <tr>
                  <td colSpan="12">
                    FAMILY HISTORY:{" "}
                    {CheckupData?.employeeVitalAndHistory?.familyHistory ||
                      "N/A"}
                  </td>
                </tr>
              </table>
              <table className="Medical-checkup">
                <tr>
                  <td
                    style={{
                      width: "5%",
                    }}
                    rowspan="12"
                  >
                    <div className="sideTitle">EXAMINATION</div>
                  </td>
                </tr>
                <tr>
                  <td colSpan="6">
                    BP: {CheckupData?.employeeVitalAndHistory?.bp || "N/A"}
                    <span className="abc">mm of Hg</span>
                  </td>
                  <td colSpan="3">
                    PULSE:{" "}
                    {CheckupData?.employeeVitalAndHistory?.pulse || "N/A"}
                    <span className="abc">per Min.</span>
                  </td>
                  <td colSpan="3">
                    TEM:{" "}
                    {CheckupData?.employeeVitalAndHistory?.temperature || "N/A"}
                    <span>
                      <sup className="abc">0</sup>f
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colSpan="12">
                    General Examination:{" "}
                    {CheckupData?.employeegeneralexamination?.generalExam ||
                      "N/A"}
                  </td>
                </tr>
                <tr>
                  <td colSpan="6">
                    Cardio Vascular Syastem :{" "}
                    {CheckupData?.employeegeneralexamination?.cvs || "N/A"}
                  </td>
                  <td colSpan="6">
                    Respiratory System :{" "}
                    {CheckupData?.employeegeneralexamination?.rs || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td colSpan="6">
                    Alimentry System :{" "}
                    {CheckupData?.employeegeneralexamination?.abdomenAS ||
                      "N/A"}
                  </td>
                  <td colSpan="6">
                    Central Nervous System :{" "}
                    {CheckupData?.employeegeneralexamination?.cns || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td colSpan="6">Loco-motor System :</td>
                  <td colSpan="6">
                    Skin :{" "}
                    {CheckupData?.employeegeneralexamination?.skinAndGenitals ||
                      "N/A"}
                  </td>
                </tr>
                <tr>
                  <td colSpan="6">
                    ENT :{" "}
                    {CheckupData?.employeegeneralexamination?.ent || "N/A"}
                  </td>
                  <td colSpan="6">
                    Genitals / Other :{" "}
                    {CheckupData?.employeegeneralexamination?.other || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td colSpan="12">Eye Examination (External) :</td>
                </tr>
                <tr>
                  <td colSpan="6">Acuity of Vision:</td>
                  <td colSpan="3">RT EYE:</td>
                  <td colSpan="3">LT EYE:</td>
                </tr>
                <tr>
                  <td colSpan="6">
                    <div className="titleDiv">
                      Distant Vision With Glass{" "}
                      <input type="checkBox" checked={withGlassChecked} />
                      Without Glass{" "}
                      <input type="checkBox" checked={withoutGlassChecked} />
                    </div>
                  </td>
                  <td colSpan="3">
                    {" "}
                    6/
                    {CheckupData?.employeeeyeinformation
                      ?.distandVisionWithoutRightEye ||
                      CheckupData?.employeeeyeinformation
                        ?.distandVisionWithRightEye ||
                      "N/A"}
                  </td>
                  <td colSpan="3">
                    6/
                    {CheckupData?.employeeeyeinformation
                      ?.distandVisionWithoutLeftEye ||
                      CheckupData?.employeeeyeinformation
                        ?.distandVisionWithLeftEye ||
                      "N/A"}
                  </td>
                </tr>

                <tr>
                  <td colSpan="6">
                    <div className="titleDiv">
                      Near Vision With Glass{" "}
                      <input
                        type="checkBox"
                        checked={nearwith}
                        style={{ marginLeft: "15px" }}
                      />
                      Without Glass{" "}
                      <input type="checkBox" checked={nearwithout} />
                    </div>
                  </td>
                  <td colSpan="3">
                    {" "}
                    N/
                    {CheckupData?.employeeeyeinformation
                      ?.nearVisionWithoutRightEye ||
                      CheckupData?.employeeeyeinformation
                        ?.nearVisionWithRightEye ||
                      "N/A"}
                  </td>
                  <td colSpan="3">
                    N/
                    {CheckupData?.employeeeyeinformation
                      ?.nearVisionWithoutLeftEye ||
                      CheckupData?.employeeeyeinformation
                        ?.nearVisionWithLeftEye ||
                      "N/A"}
                  </td>
                </tr>
                <tr>
                  <td colSpan="12">
                    <div className="inputDiv">
                      Colour Vision:{" "}
                      <input
                        type="checkBox"
                        checked={
                          CheckupData?.employeeeyeinformation?.colourVision ===
                          "normal"
                        }
                      />
                      Normal{" "}
                      <input
                        type="checkBox"
                        checked={
                          CheckupData?.employeeeyeinformation?.colourVision !==
                          "normal"
                        }
                      />
                      colour deficiency
                    </div>
                  </td>
                </tr>
                {/* </table>
              <table className="Medical-checkup"> */}
                <tr>
                  <td
                    style={{
                      width: "5%",
                    }}
                    rowspan="6"
                  >
                    <div className="sideTitle">CONSULATION</div>
                  </td>
                </tr>
                <tr>
                  <td colSpan="6">
                    Remark:{" "}
                    {CheckupData?.employeeinvestigationinformation?.remarks ||
                      "N/A"}
                  </td>

                  <td colSpan="6">
                    Audiometry:{" "}
                    {CheckupData?.employeeinvestigationinformation
                      ?.audiometry || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td colSpan="6">
                    ECG REPORT:{" "}
                    {CheckupData?.employeeinvestigationinformation?.ecgReport ||
                      "N/A"}
                  </td>

                  <td colSpan="6">
                    LAB REPORTS:{" "}
                    {CheckupData?.employeeinvestigationinformation
                      ?.labReports || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td colSpan="6">
                    XRAY REPORTS:{" "}
                    {CheckupData?.employeeinvestigationinformation
                      ?.xRayReport || "N/A"}
                  </td>

                  <td colSpan="6">
                    SPIROMETRY:{" "}
                    {CheckupData?.employeeinvestigationinformation
                      ?.spirometry || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td colSpan="12">
                    <h5 className="drTitle">CERTIFICATE OF FITNESS:</h5>
                    <p>
                      i certify that i have personally examined him / her and as
                      per my opinion
                    </p>
                    <p>
                      <input
                        type="checkBox"
                        checked={
                          CheckupData?.employeeform33?.unfitReason === ""
                        }
                      />{" "}
                      <span>He/She is fit the employment</span>
                    </p>
                    <p>
                      <input
                        type="checkBox"
                        checked={
                          CheckupData?.employeeform33?.unfitReason !== ""
                        }
                      />{" "}
                      <span>
                        He/She not fit the employment (Temporary/Permanent)
                      </span>
                    </p>
                    <p className="reasonTitle m-0">
                      Reason for unfit :{" "}
                      {CheckupData?.employeeform33?.unfitReason || "N/A"}
                      <h5 className="drTitle">
                        Dr.Yatish Shah
                        <p className="mbbsTitle">M.B.B.S,C.I.H</p>
                      </h5>
                    </p>
                  </td>
                </tr>
              </table>
            </div>
            <div className="adressDiv">
              Verai Mata Lane,Khanderao Market Char Rasta,Raj Mahal Road ,
              Vadodara-390001
              <h5 className="drTitle">
                Mobile:8320370951 -E-mail:vohs2012@gmail.com
              </h5>
            </div>

            <div className="hstack gap-2 justify-content-end d-print-none mt-4">
              <Link to="#" onClick={handlePrint} className="btn btn-success">
                <i className="ri-printer-line align-bottom me-1"></i> Print
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default MediclaCheckUp;
