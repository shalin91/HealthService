import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";
import SignContext from "../../contextAPI/Context/SignContext";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";
const url = `${process.env.REACT_APP_BASE_URL}`;


const MedicalReports = () => {
  const [allCompany, setAllCompany] = useState([]);
  const [allLocation, setAllLocation] = useState([]);
  const [allName, setAllName] = useState([]);
  const [allCheckupType, setAllCheckupType] = useState(null);
  const [filterdata, setFilterdata] = useState(null);
  const [f1, setf1] = useState("");
  const [f2, setf2] = useState("");
  const [f3, setf3] = useState("");
  const [f4, setf4] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { GetCompany, GetCompanybyId, GetCheckUpName, getCheckupType } =
    useContext(SignContext);

  const getcompanies = async () => {
    const res = await GetCompany();
    console.log(res);
    setAllCompany(res.data);
  };

  const getcheckupname = async () => {
    const res = await GetCheckUpName();
    // console.log(">>>> check up names")
    console.log(res);
    setAllName(res.data);
  };
  const getAllCheckupType = async () => {
    const responce = await getCheckupType();
    console.log("c>>>> type");
    console.log(responce);

    setAllCheckupType(responce.data);
  };

  const handleLocationChange = (e) => {
    let selectedCompanyId = e.target.value;
    // console.log( selectedCompanyId );
    setf1(selectedCompanyId);
    // console.log(">>>>f1");
    // console.log(f1);
    if (selectedCompanyId) {
      getcompaniesbyId(selectedCompanyId);
    }
  };

  const handle1 = (e) => {
    let selectedCompanyId = e.target.value;

    setf2(selectedCompanyId);
  };
  const handle2 = (e) => {
    let selectedCheckupNameId = e.target.value;

    setf3(selectedCheckupNameId);
  };

  const handle3 = (e) => {
    let selectedCheckuptypeId = e.target.value;

    setf4(selectedCheckuptypeId);
  };

  const getcompaniesbyId = async (id) => {
    const res = await GetCompanybyId(id);
    setAllLocation(res.data.companyLocation);
    // (res.data.companyJobCategorys);
    // setDepartment(res.data.companyDepartments);
    // setRoles(res);
  };

  const handleDateChange = (date, field) => {
    if (field === "start") {
      setStartDate(date);
    } else if (field === "end") {
      setEndDate(date);
    }
  };

  const handleFetchData = async () => {
    const queryParams = {
      companyId: f1,
      location: f2,
      checkupNameId: f3,
      checkupTypeId: f4,
    };

    if (startDate) {
      const formattedStartDate = new Date(startDate).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      });
      queryParams.startDate = formattedStartDate;
    }
  
    if (endDate) {
      const formattedEndDate = new Date(endDate).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      });
      queryParams.endDate = formattedEndDate;
    }

    const endpoint = "/checkup/get-all-checkup-data";

    const queryString = Object.keys(queryParams)
      .map((key) => `${key}=${queryParams[key]}`)
      .join("&");

    const url1 = `${url}${endpoint}?${queryString}`;
    console.log(url1);
    try {
      const response = await axios.get(url1);
      console.log(">>>> filterdata in array");
      console.log(response.data);
      setFilterdata(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  

  const handleExportReport = () => {
    console.log("excel nai thatu")
    if (filterdata) {
      const headers = ["NAME", "AGE", "SEX", "DATE", "HEIGHT" ,"WEIGHT" , "PRESENT COMPLAINT" , "PAST ILLNESS" , "CURRENT MEDICATION" , "ALLERGY" , "ADDICTION" , "B.P" , "PULSE" , "W/O GLASS DISTANT RIGHT" , "W/O GLASS DISTANT LEFT" , "W/O GLASS NEAR RIGHT" , "W/O GLASS NEAR LEFT" , "WITH GLASS DISTANT RIGHT" , "WITH GLASS DISTANT LEFT" , "WITH GLASS NEAR RIGHT" , "WITH GLASS NEAR LEFT" , "COLOUR BLINDNESS" , "HAEMOGLOBIN" , "W.B.C" , "PLATELET COUNT" , "BLOOD GROUP" , "RANDOM SUGAR" , "SGPT" , "S.CREATINE" , "PROTEIN" , "GLUCOSE" , "KETONE" , "PUS CELLS" , "RED CELLS" , "SPIROMETRY" , "AUDIOMETRY", "X-RAY(CHEST)" , "FINAL REMARK" , "FIT" ,  "CELL NO" , "DOB" , "VACCINE DOSE" , "MC CODE" , "SHOE SIZE"];
      const data =  filterdata.map(item => [
        item.employeeData.employeeName || "NA",
        item.employeecontactdetails.age || "NA",
        item.employeecontactdetails.gender || "NA",
        item.createdAt.slice(0, 10).split("-").reverse().join("-") || "NA",
        item.employeeVitalAndHistory.height || "NA",
        item.employeeVitalAndHistory.weight || "NA",
        item.employeeVitalAndHistory.complaints || "NA",
        item.employeeVitalAndHistory.pastHistory || "NA",
        item.employeeVitalAndHistory.pastHistory || "NA",
        item.employeeVitalAndHistory.pastHistory || "NA",
        item.employeeVitalAndHistory.pastHistory || "NA",
        item.employeeVitalAndHistory.bp || "NA",
        item.employeeVitalAndHistory.pulse || "NA",
        (item.employeeeyeinformation && item.employeeeyeinformation.distandVisionWithoutRightEye) || "NA",
      (item.employeeeyeinformation && item.employeeeyeinformation.distandVisionWithoutLeftEye) || "NA",
        (item.employeeeyeinformation && item.employeeeyeinformation.nearVisionWithoutRightEye) || "NA",
        (item.employeeeyeinformation && item.employeeeyeinformation.nearVisionWithoutLeftEye) || "NA",
        (item.employeeeyeinformation && item.employeeeyeinformation.distandVisionWithRightEye) || "NA",
        (item.employeeeyeinformation && item.employeeeyeinformation.distandVisionWithLeftEye) || "NA",
        (item.employeeeyeinformation && item.employeeeyeinformation.nearVisionWithRightEye) || "NA",
        (item.employeeeyeinformation && item.employeeeyeinformation.nearVisionWithLefttEye) || "NA",
        item.employeeeyeinformation.colourVision || "NA",
        item.employeebloodinformation.hb || "NA",
        item.employeebloodinformation.wbc || "NA",
        item.employeebloodinformation.plateletCount || "NA",
        item.employeecontactdetails.bloodGroup || "NA",
        item.employeebloodinformation.blSugarFastingOrRandom || "NA",
        item.employeebloodinformation.sgpt || "NA",
        item.employeebloodinformation.sCreatinine || "NA",
        item.employeebloodinformation.proein || "NA",
        item.employeebloodinformation.glucose || "NA",
        item.employeebloodinformation.ketone || "NA",
        item.employeebloodinformation.pusCells || "NA",
        item.employeebloodinformation.redCells || "NA",
        item.employeeinvestigationinformation.spirometry || "NA",
        item.employeeinvestigationinformation.audiometry || "NA",
        item.employeeinvestigationinformation.audiometry || "NA",
        item.employeeinvestigationinformation.remarks || "NA",
        item.employeeform33.fitOrUnfit || "NA",
        item.employeecontactdetails.mobileNumber || "NA",
        item.employeecontactdetails.dateOfBirth.slice(0, 10)
          .split("-").reverse().join("-") || "NA",
      ]);

      const headerStyle = {
        alignment: {
          horizontal: "center",
          vertical: "center",
        },
        font: { bold: true },
      };
    
      const dataStyle = {
        alignment: {
          horizontal: "center",
          vertical: "center",
        },
      };
    
      const styles = [headerStyle]; 
      for (let i = 1; i < data.length; i++) {
        styles.push(dataStyle); 
      }
  
      const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data],{ styles });
      const colWidths = [20, 20, 20, 20, 20 , 20 ,20 , 20 , 20, 20 ,20 ,20 , 20 , 20, 20, 20, 20, 20, 20 ,20 , 20 , 20, 20 , 20, 20, 20 , 20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20];
      worksheet["!cols"] = colWidths.map(width => ({ width }));
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "MedicalReports");
  
      // Save the file
      XLSX.writeFile(workbook, "MedicalReports.xlsx");
    } else {
      // Display a message or handle the case where no data is available
      console.log("No data to export");
    }
  };
  

  useEffect(() => {
    getcompanies();
    getcheckupname();
    getAllCheckupType();
  }, []);

  // console.log(allName);
  // console.log(allCheckupType);

  return (
    <>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb grandParent="Setup" parent="Reports" child="Reports" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader className="d-flex justify-content-between align-items-center">
                  
                    {/* <label htmlFor="filterSelect">Filter:</label> */}
                    <Row className="align-items-center">
                    <Col className="lg-2">
                    <select
                      className="form-select"
                      id="filterSelect"
                      style={{ marginLeft: "4px" }}
                      //   value={filterOption}
                      onChange={handleLocationChange}
                    >
                      <option value="">Select Company</option>
                      {allCompany
                        ? allCompany.map((company) => (
                            <option key={company._id} value={company._id}>
                              {company.companyName}
                            </option>
                          ))
                        : null}
                    </select>
                    </Col>
                    <Col className="lg-2">
                    <select
                      className="form-select"
                      id="filterSelect"
                      style={{ marginLeft: "14px" }}
                      onChange={handle1}
                    >
                      <option value="">Select Location</option>
                      {allLocation && allLocation.length > 0 ? (
                        allLocation.map((location) => (
                          <option key={location} value={location}>
                            {location}
                          </option>
                        ))
                      ) : (
                        <option value="" disabled>
                          No locations available
                        </option>
                      )}
                    </select>
                    </Col>
                    <Col className="lg-2">
                    <select
                      className="form-select"
                      id="filterSelect"
                      style={{ marginLeft: "14px" }}
                      onChange={handle2}
                    >
                      <option value="">Select Checkup</option>
                      {allName.length
                        ? allName.map((checkupName) => (
                            <option key={checkupName} value={checkupName._id}>
                              {checkupName.checkupName}
                            </option>
                          ))
                        : null}
                    </select>
                    </Col>
                    <Col className="lg-2">
                    <select
                      className="form-select"
                      id="filterSelect"
                      style={{ marginLeft: "14px" }}
                      onChange={handle3}
                    >
                      <option value="">Select Type</option>
                      {allCheckupType
                        ? allCheckupType.map((checkupType) => (
                            <option key={checkupType} value={checkupType._id}>
                              {checkupType.checkupType}
                            </option>
                          ))
                        : null}
                    </select>
                    </Col>
                    <Col className="lg-2">
                    <DatePicker
                      className="form-control"
                      selected={startDate}
                      onChange={(date) => handleDateChange(date, "start")}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Select Start Date"
                    />
                    </Col>
                    <Col className="lg-2">
                    <DatePicker
                      className="form-control"
                      selected={endDate}
                      onChange={(date) => handleDateChange(date, "end")}
                      dateFormat="dd/MM/yyyy" // Set the desired date format
                      placeholderText="Select End Date"
                    />
                    </Col>
                    </Row>
                    

                    <div className="filter-dropdown " style={{ display: "flex" }}>
                    <button
                      onClick={handleFetchData}
                      style={{ marginLeft: "24px", width: "100%" }}
                    >
                      Apply
                    </button>
                  </div>

                  <Row className="align-items-center">
                    <Col className="col-lg-auto"></Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div id="contentList">
                    <div className="table-responsive table-card mt-1 mb-3">
                      <table
                        className="table align-middle table-nowrap"
                        id="customerTable"
                      >
                        <thead className="table-light">
                          <tr>
                            <th
                              className="name"
                              style={{ width: "250px", textAlign: "center" }}
                            >
                              Name
                            </th>
                            <th
                              className="name"
                              style={{ textAlign: "center" }}
                            >
                              Medical Check Up
                            </th>
                            <th
                              className="name"
                              style={{ textAlign: "center" }}
                            >
                              Form 32
                            </th>
                            <th
                              className="name"
                              style={{ textAlign: "center" }}
                            >
                              Form 33 Health
                            </th>
                            <th
                              className="name"
                              style={{ textAlign: "center" }}
                            >
                              Health Card.
                            </th>
                            
                          </tr>
                        </thead>

                        <tbody className="list form-check-all">
                          {filterdata
                            ? filterdata.map((item, index) => (
                                <tr
                                  key={index}
                                  value={item.employeeData.employeeName}
                                >
                                  <td
                                    className="product-name"
                                    style={{ textAlign: "center" }}
                                  >
                                    {item.employeeData.employeeName}
                                  </td>
                                  <td
                                    className="product-name"
                                    style={{ textAlign: "center" }}
                                  >
                                    <Link to={`/medical-report/${item._id}`}>
                                      Medical Report
                                    </Link>
                                  </td>
                                  <td
                                    className="product-name"
                                    style={{ textAlign: "center" }}
                                  >
                                    <Link to={`/form32/${item._id}`}>
                                      Form 32 Report
                                    </Link>
                                  </td>

                                  <td
                                    className="product-name"
                                    style={{ textAlign: "center" }}
                                  >
                                    <Link to={`/form-helth33/${item._id}`}>
                                      Form-Health33 Report
                                    </Link>
                                  </td>

                                  <td
                                    className="product-name"
                                    style={{ textAlign: "center" }}
                                  >
                                    <Link to={`/helth-card/${item._id}`}>
                                      Health Card
                                    </Link>
                                  </td>

                                  
                                </tr>
                              ))
                            : null}
                        </tbody>

                        {/* <tbody className="list form-check-all">
                          {filterdata
                            ? filterdata.map((item, index) => (
                                <tr
                                  key={index}
                                  value={item.employeeData.employeeName}
                                >
                                  <td
                                    className="product-name"
                                    style={{ textAlign: "center" }}
                                  >
                                    {item.employeeData.employeeName}
                                  </td>
                                </tr>
                              ))
                            : null}
                        </tbody> */}
                      </table>
                    </div>
                  </div>
                  <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                      <Link
                        to="#"
                        onClick={handleExportReport}
                        className="btn btn-success"
                      >
                        <i className="ri-printer-line align-bottom me-1"></i>{" "}
                        Export Report
                      </Link>
           </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MedicalReports;
