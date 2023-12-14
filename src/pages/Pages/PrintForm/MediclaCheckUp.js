import React from "react";
import "./../../Pages/PrintForm/printForm.css";

const MediclaCheckUp = () => {
  return (
    <React.Fragment>
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
              <td>DATE:</td>
              <td>MOB:</td>
              <td>SEX:</td>
            </tr>
            <tr>
              <td>NAME:</td>
              <td colspan="2">DOB:</td>
            </tr>
            <tr>
              <td>COMPANY</td>
              <td colspan="2">AGE:</td>
            </tr>
            <tr>
              <td>NATURE OF JOB: </td>
              <td colspan="2">HT:</td>
            </tr>
            <tr>
              <td>IDENTIFICATION</td>
              <td colspan="2">WT:</td>
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
              <td>COMPLANINTS:</td>
            </tr>
            <tr>
              <td>PAST HISTROY:</td>
            </tr>
            <tr>
              <td>PERSONAL HISTORY :</td>
            </tr>
            <tr>
              <td>FAMILY HISTORY: </td>
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
                  <span>
                    <sup>0</sup>f
                  </span>
                </div>
              </td>
              <td>
                <div className="tdData">
                  BP: <span>mm of Hg</span>
                </div>
              </td>
              <td>
                <div className="tdData">
                  PULSE: <span>per Min.</span>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>General Examination:</td>
            </tr>
            <tr>
              <td colSpan={2}>Cardio Vascular Syastem :</td>
              <td>Respiratory System :</td>
            </tr>
            <tr>
              <td colSpan={2}>Alimentry System :</td>
              <td>Central Nervous System :</td>
            </tr>
            <tr>
              <td colSpan={2}>Loco-motor System :</td>
              <td>Skin :</td>
            </tr>
            <tr>
              <td colSpan={2}>ENT :</td>
              <td>Genitals / Other :</td>
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
              <td colSpan={3}>Remark:</td>
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
                  Reason for unfit :
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
    </React.Fragment>
  );
};

export default MediclaCheckUp;
