import React, { useState, useEffect, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./../../Pages/PrintForm/printForm.css";
import SignContext from "../../../contextAPI/Context/SignContext";
import { useParams } from "react-router-dom";

const MediclaCheckUp = () => {
  const { id } = useParams();
  const { getCheckupDatabyId } = useContext(SignContext);
  const [CheckupData, setCheckupData] = useState([]);

  const GetCheckupDatabyId = async () => {
    try {
      // Call the API using the id from useParams
      const data = await getCheckupDatabyId(id);
      setCheckupData(data);
      console.log("new>>>> data");

      console.log(">>name data final");

      // console.log(data.employeeData.employeeName)
      // Update the state with the retrieved data
      // setCheckupData(data);
    } catch (error) {
      console.error("Error fetching checkup data:", error);
      // Handle errors if needed
    }
  };
  useEffect(() => {
    GetCheckupDatabyId(id);
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
          <table className="mainTable">
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
              <td>DATE: {CheckupData?.checkupname?.checkupDate || "N/A"}</td>
              <td>
                MOB:{" "}
                {CheckupData?.employeecontactdetails?.mobileNumber || "N/A"}
              </td>
              <td>
                SEX: {CheckupData?.employeecontactdetails?.gender || "N/A"}
              </td>
            </tr>
            <tr>
              <td>
                NAME:{" "}
                {CheckupData?.employeeData?.employeeNameAbbrevation || "N/A"}{" "}
                {CheckupData?.employeeData?.employeeName || "N/A"}{" "}
                {CheckupData?.employeeData?.employeeFatherName || "N/A"}
              </td>
              <td colspan="2">
                DOB: {CheckupData?.employeecontactdetails?.dateOfBirth || "N/A"}
              </td>
            </tr>
            <tr>
              <td>COMPANY : {CheckupData?.compani?.companyName || "N/A"}</td>
              <td colspan="2">
                AGE:{CheckupData?.employeecontactdetails?.age || "N/A"}
              </td>
            </tr>
            <tr>
              <td>
                NATURE OF JOB:{" "}
                {CheckupData?.employeecontactdetails?.natureOfJob || "N/A"}
              </td>
              <td colspan="2">
                HT: {CheckupData?.employeeVitalAndHistory?.height || "N/A"} CMS
              </td>
            </tr>
            <tr>
              <td>
                IDENTIFICATION:{" "}
                {CheckupData?.employeecontactdetails?.idMark || "N/A"}{" "}
              </td>
              <td colspan="2">
                WT: {CheckupData?.employeeVitalAndHistory?.weight || "N/A"} KG
              </td>
            </tr>
          </table>
          <table className="mainTable">
            <tr>
              <td
                style={{
                  width: "5%",
                }}
                rowspan="6"
              >
                <div className="sideTitle"> HISTORY</div>
              </td>
            </tr>
            <tr>
              <td>
                COMPLANINTS:{" "}
                {CheckupData?.employeeVitalAndHistory?.complaints || "N/A"}
              </td>
            </tr>
            <tr>
              <td>
                PAST HISTROY:{" "}
                {CheckupData?.employeeVitalAndHistory?.pastHistory || "N/A"}
              </td>
            </tr>
            <tr>
              <td>
                PERSONAL HISTORY :{" "}
                {CheckupData?.employeeVitalAndHistory?.personalHistory || "N/A"}
              </td>
            </tr>
            <tr>
              <td>
                FAMILY HISTORY:{" "}
                {CheckupData?.employeeVitalAndHistory?.familyHistory || "N/A"}
              </td>
            </tr>
          </table>
          <table className="mainTable">
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
              <td>
                <div className="tdData">
                  TEM:{" "}
                  {CheckupData?.employeeVitalAndHistory?.temperature || "N/A"}
                  <span>
                    <sup>0</sup>f
                  </span>
                </div>
              </td>
              <td>
                <div className="tdData">
                  BP: {CheckupData?.employeeVitalAndHistory?.bp || "N/A"}
                  <span>mm of Hg</span>
                </div>
              </td>
              <td>
                <div className="tdData">
                  PULSE: {CheckupData?.employeeVitalAndHistory?.pulse || "N/A"}
                  <span>per Min.</span>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                General Examination:{" "}
                {CheckupData?.employeegeneralexamination?.generalExam || "N/A"}
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                Cardio Vascular Syastem :{" "}
                {CheckupData?.employeegeneralexamination?.cvs || "N/A"}
              </td>
              <td>
                Respiratory System :{" "}
                {CheckupData?.employeegeneralexamination?.rs || "N/A"}
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                Alimentry System :{" "}
                {CheckupData?.employeegeneralexamination?.abdomenAS || "N/A"}
              </td>
              <td>
                Central Nervous System :{" "}
                {CheckupData?.employeegeneralexamination?.cns || "N/A"}
              </td>
            </tr>
            <tr>
              <td colSpan={2}>Loco-motor System :</td>
              <td>
                Skin :{" "}
                {CheckupData?.employeegeneralexamination?.skinAndGenitals ||
                  "N/A"}
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                ENT : {CheckupData?.employeegeneralexamination?.ent || "N/A"}
              </td>
              <td>
                Genitals / Other :{" "}
                {CheckupData?.employeegeneralexamination?.other || "N/A"}
              </td>
            </tr>
            <tr>
              <td colSpan={3}>Eye Examination (External) :</td>
            </tr>
            <tr>
              <td>Acuity od Vision:</td>
              <td>RT EYE:</td>
              <td>LT EYE:</td>
            </tr>
            <tr>
              <td>
                <div className="titleDiv">
                  Distant Vision <input type="checkBox" />
                  With Glass <input type="checkBox" />
                  Without Glass <input type="checkBox" />
                </div>
              </td>
              <td> 6/</td>
              <td>6/</td>
            </tr>

            <tr>
              <td>
                <div className="titleDiv">
                  Near Vision <input type="checkBox" />
                  With Glass <input type="checkBox" />
                  Without Glass <input type="checkBox" />
                </div>
              </td>
              <td> N/</td>
              <td>N/</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <div className="inputDiv">
                  Colour Vision: <input type="checkBox" />
                  Normal <input type="checkBox" />
                  colour vision deficiency
                </div>
              </td>
            </tr>
          </table>
          <table className="mainTable">
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
              <td colSpan={3}>
                Remark: {CheckupData?.employeeeyeinformation?.remark || "N/A"}
              </td>
            </tr>
            <tr>
              <td>
                <h5 className="drTitle">CERTIFICATE OF FITNESS:</h5>
                <p>
                  i certify that i have personally examined him / her and as per
                  my opinion
                </p>
                <p>
                  <input type="checkBox" />{" "}
                  <span>He/She is fit the employment</span>
                </p>
                <p>
                  <input type="checkBox" />{" "}
                  <span>
                    He/She not fit the employment (Temporary/Permanent)
                  </span>
                </p>
                <p className="reasonTitle">
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
      </div>
      </Container>
      </div>
    </React.Fragment>
  );
};

export default MediclaCheckUp;
