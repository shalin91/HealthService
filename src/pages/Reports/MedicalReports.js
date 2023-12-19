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
const url = `${process.env.REACT_APP_BASE_URL}`;

const MedicalReports = () => {
  const [allCompany, setAllCompany] = useState([]);
  const [allLocation, setAllLocation] = useState([]);
  const [allName, setAllName] = useState([]);
  const [allCheckupType, setAllCheckupType] = useState(null);
  const [filterdata,setFilterdata]=useState(null);
  const [f1, setf1] = useState(null);
  const [f2, setf2] = useState(null);
  const [f3, setf3] = useState(null);
  const [f4, setf4] = useState(null);
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
    // console.log(res);
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
    let selectedCompanyId = e.target.value;

    setf3(selectedCompanyId);
  };
  const handle3 = (e) => {
    let selectedCompanyId = e.target.value;

    setf4(selectedCompanyId);
  };

  const getcompaniesbyId = async (id) => {
    const res = await GetCompanybyId(id);
    setAllLocation(res.data.companyLocation);
    // (res.data.companyJobCategorys);
    // setDepartment(res.data.companyDepartments);
    // setRoles(res);
  };

  const handleFetchData = async () => {
    // const baseUrl = process.env.REACT_APP_BASE_URL;
    const endpoint = "/checkup/get-all-checkup-data";

    const queryParams = {
      companyId: f1,
      location: f2,
      
    };
    const queryString = Object.keys(queryParams)
      .map((key) => `${key}=${queryParams[key]}`)
      .join("&");

    const url1 = `${url}${endpoint}?${queryString}`;
    // console.log(url1);
    try {
      const response = await axios.get(url1);
       console.log(">>>> filterdata in array")
       console.log(response.data[0].employeeData.employeeName
        );
      setFilterdata(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getcompanies();
    getcheckupname();
    getAllCheckupType();
  }, []);
  return (
    <>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            grandParent="Setup"
            parent="Reports"
            child="CustomerReports"
          />
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader className="d-flex justify-content-between align-items-center">
                  <h4 className="card-title mb-0">Customer Reports</h4>
                  <div className="filter-dropdown " style={{ display: "flex" }}>
                    {/* <label htmlFor="filterSelect">Filter:</label> */}
                    <select
                      className="form-select"
                      id="filterSelect"
                      style={{ marginLeft: "4px" }}
                      //   value={filterOption}
                      onChange={handleLocationChange}
                    >
                      <option value="">Select Company</option>
                      {allCompany.map((company) => (
                        <option key={company._id} value={company._id}>
                          {company.companyName}
                        </option>
                      ))}
                    </select>

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

                    

                    

                    <button  onClick={handleFetchData} style={{marginLeft:'24px', width:'100%'}}>Fetch Data</button>
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
                            <th
                              className="name"
                              style={{ textAlign: "center" }}
                            >
                              Medical Check Up
                            </th>
                          </tr>
                        </thead>

                        <tbody className="list form-check-all">
                            <tr>
                              <td>
                             {/* <select>
                               {filterdata.map((company) => (
                           <option key={company._id} value={company._id}>
                            {company.employeeData[0].employeeName}
                            </option>
                      ))}
                              
                             </select> */}


                              </td>
                             

                            </tr>

                        </tbody>
                      </table>
                    </div>
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
