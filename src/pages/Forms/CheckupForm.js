import classnames from "classnames";
import { Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Input,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import * as Yup from "yup";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import UiContent from "../../Components/Common/UiContent";
import SignContext from "../../contextAPI/Context/SignContext";
import Eye from "./Eye";
import Form33 from "./Form33";
import GeneralExam from "./GeneralExam";
import Investigation from "./Investigation";
import OtherDetails from "./OtherDetails";
import VitalsandHistory from "./VitalsandHistory";
import BloodInvestigation from "./BloodInvestigation";

const CheckupForm = () => {
  const [customActiveTab, setcustomActiveTab] = useState("1");

  const {
    GetCompany,
    GetCompanybyId,
    setNewCheckupName,
    GetEmpsbyCompAndLoc,
    getCheckupData,
    getCheckupType,
    GetContactDetailsById,
  } = useContext(SignContext);

  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };

  const getEmpContactDetails = async (id) => {
    console.log("------id in frontend first---");

    // console.log(id);

    const res = await GetContactDetailsById(id);
    // console.log("shalin id>>>>>")
    // console.log(res.data.employeeId)
    setShalin(res.data.employeeId);

    setCurrentEmpContactDetails(res.data);
  };

  const [company, setComapny] = useState(null);

  const [allCompany, setAllCompany] = useState([]);

  const [allLocation, setAllLocation] = useState([]);

  const [location, setLocation] = useState(null);

  const [checkupType, setCheckupType] = useState(null);

  const [allCheckupType, setAllCheckupType] = useState([]);

  const [EmpbyCompandLoc, setEmpbyCompandLoc] = useState([]);

  const [currentEmp, setCurrentEmp] = useState(null);

  const [currentUser, setCurrentUser] = useState(null);

  const [checkupName, setCheckupName] = useState(null);

  const [checkupDataId, setCheckupDataId] = useState(null);

  const [currentEmpContactDetails, setCurrentEmpContactDetails] =
    useState(null);

  const [shalin, setShalin] = useState(null);

  // const [ allCategory , setAllCategory ] = useState( [] );

  // const [ allDepartment , setAllDepartment ] = useState( [] );

  // const [ category , setCategory ] = useState( null );

  // const [ department , setDepartment ] = useState( null );

  const getcompanies = async () => {
    const res = await GetCompany();
    console.log(res);
    setAllCompany(res.data);
    
  };

  const handleLocationChange = (e) => {
    let selectedCompanyId = e.target.value;
    // console.log( selectedCompanyId );

    if (selectedCompanyId) {
      getcompaniesbyId(selectedCompanyId);
    }
  };

  const getcompaniesbyId = async (id) => {
    const res = await GetCompanybyId(id);
    setAllLocation(res.data.companyLocation);
    // (res.data.companyJobCategorys);
    // setDepartment(res.data.companyDepartments);
    // setRoles(res);
  };

  const handleSaveCompanyAndLocation = async (val) => {
    console.log(val);

    setComapny(val.companyName);

    setLocation(val.companyLocation);

    const res = await GetEmpsbyCompAndLoc(val);

    console.log(res.data);

    setEmpbyCompandLoc(res.data);
  };

  const addCheckupDetails = async (val) => {
    console.log(val);

    setCheckupType(val.checkupType);

    const response = await setNewCheckupName({ val, company, location });

    console.log(response);

    setCheckupName(response.data._id);

    console.log(response.data._id);
  };

  // const handleSavedCompandLoc = async (Values) => {

  //   console.log( "----------------------------------------------------------------------------" );
  //   console.log( Values )

  //   const res = await GetEmpsbyCompAndLoc(Values);
  //   console.log(res.data)
  //   setEmpbyCompandLoc(res.data)

  // };

  const getAllCheckupType = async () => {
    const responce = await getCheckupType();

    console.log(responce);

    setAllCheckupType(responce.data);
  };

  const handleEmpData = (e) => {
    let data = e.target.value;

    const curremp = EmpbyCompandLoc.filter((emp) => emp._id === data);

    console.log("-----------------------------------");

    getEmpContactDetails({ id: curremp[0].employeeContactDetailsId });

    //  getEmpContactDetails()

    setCurrentEmp(curremp[0]);
  };

  console.log(location);

  const handleSubmitForEmp = async () => {
    const chaeckupData = await getCheckupData({
      employeeId: currentEmp._id,
      companyId: company,
      location: location,
      checkupNameId: checkupName,
      checkupTypeId: checkupType,
      employeeContactDetailsId: currentEmpContactDetails._id,
    });

    console.log("dddddaaaatttttaaaaa");
    console.log(chaeckupData.data);

    setCheckupDataId(chaeckupData.data._id);

    console.log("|||||||||||||||||data|||||||||||||");
    console.log(company);
    console.log(location);
    console.log(checkupName);
    console.log(checkupType);
    console.log(checkupDataId);
    console.log("|||||||||||||||||data|||||||||||||");
  };

  useEffect(() => {
    getcompanies();
    getAllCheckupType();
  }, []);

  function formatDate(inputDate) {
    const dateObject = new Date(inputDate);

    // Extract day, month, and year components
    const day = dateObject.getUTCDate().toString().padStart(2, "0");
    const month = (dateObject.getUTCMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = dateObject.getUTCFullYear();

    // Assemble the formatted date string
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
  }

  return (
    <>
      <UiContent />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb grandParent="Setup" parent="Forms" child="Form-2" />

          {/* company componemnt we get companyid and location name */}

          <Row>
            <Col lg={12}>
              <Formik
                initialValues={{
                  companyName: "",
                  companyLocation: "",
                }}
                //validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                  handleSaveCompanyAndLocation(values);
                  resetForm();
                  // Additional actions after form submission
                  // togglemodal();
                }}
              >
                {({
                  isSubmitting,
                  handleChange,
                  handleSubmit,
                  errors,
                  touched,
                  values,
                  handleBlur,
                  setFieldValue,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    {/* Your form fields and components */}
                    <Card>
                      <CardHeader>
                        <Row className="g-1 m-1">
                          <Col className="col-sm">
                            <div className="d-flex justify-content-sm-between">
                              <h2 className="card-title mb-0 justify-content-sm-start">
                                <strong>COMPANY DETAILS</strong>
                              </h2>
                            </div>
                          </Col>
                        </Row>
                      </CardHeader>
                      <div className="card-body">
                        <div className="live-preview">
                          <Row className="align-items-center g-3">
                            <Col sm={6}>
                              <label
                                className="form-label mt-3"
                                htmlFor="product-orders-input"
                              >
                                Company
                              </label>
                              <div className="">
                                <select
                                  className="form-select"
                                  name="companyName"
                                  onChange={(e) => {
                                    handleChange(e);
                                    handleLocationChange(e);
                                  }}
                                  onBlur={handleBlur}
                                  value={values.companyName}
                                >
                                  <option value="">Company Name</option>
                                  {allCompany.map((company) => (
                                    <option
                                      key={company._id}
                                      value={company._id}
                                    >
                                      {company.companyName}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <p className="error text-danger">
                                {errors.companyName &&
                                  touched.companyName &&
                                  errors.companyName}
                              </p>
                            </Col>
                            <Col sm={6}>
                              <label
                                className="form-label mt-3"
                                htmlFor="product-orders-input"
                              >
                                Location
                              </label>
                              <div className="">
                                <select
                                  className="form-select"
                                  name="companyLocation"
                                  onBlur={handleBlur}
                                  value={values.companyLocation}
                                  onChange={handleChange}
                                >
                                  <option value=""> Location</option>
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
                              </div>
                              <p className="error text-danger">
                                {errors.companyLocation &&
                                  touched.companyLocation &&
                                  errors.companyLocation}
                              </p>
                            </Col>
                          </Row>
                        </div>
                      </div>
                      <div className="text-end mb-3 me-3">
                        <button className="btn btn-success w-sm" type="submit">
                          Submit
                        </button>
                      </div>
                    </Card>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>

          {/* company component   all ok geting a company id and location name -> done and come */}

          {/* check up details start */}

          <Row>
            <Col lg={12}>
              <Formik
                // validationSchema={schema}
                initialValues={{
                  checkupName: "",
                  checkupNumber: "",
                  checkupDate: "",
                  checkupType: "",
                }}
                onSubmit={(values) => {
                  addCheckupDetails(values);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <div className="login">
                    <div className="form">
                      {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                      <form noValidate onSubmit={handleSubmit}>
                        {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}

                        <Card>
                          <CardHeader>
                            <Row className="g-1 m-1">
                              <Col className="col-sm">
                                <div className="d-flex justify-content-sm-between">
                                  <h2 className="card-title mb-0 justify-content-sm-start">
                                    <strong>CHECK UP DETAILS</strong>
                                  </h2>
                                </div>
                              </Col>
                            </Row>
                          </CardHeader>
                          <div className="card-body">
                            <div className="live-preview">
                              <Row className="align-items-center g-3">
                                <Col sm={3}>
                                  <label
                                    className="form-label mt-3"
                                    htmlFor="product-orders-input"
                                  >
                                    checkup name
                                  </label>
                                  <div className="">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-orders-input"
                                      name="checkupName"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.checkupName}
                                    />
                                  </div>

                                  <p className="error text-danger">
                                    {errors.checkupName &&
                                      touched.checkupName &&
                                      errors.checkupName}
                                  </p>
                                </Col>
                                <Col sm={3}>
                                  <label
                                    className="form-label mt-3"
                                    htmlFor="product-orders-input"
                                  >
                                    checkup Number
                                  </label>
                                  <div className="">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-orders-input"
                                      name="checkupNumber"
                                      aria-label="orders"
                                      ar
                                      ia-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.checkupNumber}
                                    />
                                  </div>

                                  <p className="error text-danger">
                                    {errors.checkupNumber &&
                                      touched.checkupNumber &&
                                      errors.checkupNumber}
                                  </p>
                                </Col>
                                <Col sm={3}>
                                  <label
                                    className="form-label mt-3"
                                    htmlFor="product-orders-input"
                                  >
                                    Date
                                  </label>
                                  <div className="">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-orders-input"
                                      name="checkupDate"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.checkupDate}
                                    />
                                  </div>

                                  <p className="error text-danger">
                                    {errors.checkupDate &&
                                      touched.checkupDate &&
                                      errors.checkupDate}
                                  </p>
                                </Col>
                                <Col sm={3}>
                                  <label
                                    className="form-label mt-3"
                                    htmlFor="product-orders-input"
                                  >
                                    Check-up Type
                                  </label>
                                  <div className="">
                                    <select
                                      className="form-select"
                                      name="checkupType"
                                      onBlur={handleBlur}
                                      value={values.checkupType}
                                      onChange={handleChange}
                                    >
                                      <option value=""> checkup Type</option>
                                      {allCheckupType &&
                                      allCheckupType.length > 0 ? (
                                        allCheckupType.map((type) => (
                                          <option key={type} value={type._id}>
                                            {type.checkupType}
                                          </option>
                                        ))
                                      ) : (
                                        <option value="" disabled>
                                          No locations available
                                        </option>
                                      )}
                                    </select>
                                  </div>
                                  <p className="error text-danger">
                                    {errors.checkupType &&
                                      touched.checkupType &&
                                      errors.checkupType}
                                  </p>
                                </Col>
                              </Row>
                            </div>
                          </div>
                          <div className="text-end mb-3 me-3">
                            <button
                              className="btn btn-success w-sm"
                              type="submit"
                            >
                              Submit
                            </button>
                          </div>
                        </Card>
                      </form>
                    </div>
                  </div>
                )}
              </Formik>
            </Col>
          </Row>

          {/* check up over */}

          {/* company employee */}

          {/* company employee over */}

          <Row>
            <Col lg={12}>
              <Formik
                // validationSchema={validationSchema}
                initialValues={{
                  name: "",
                  gender: "",
                  dateOfBirth: "",
                  age: "",
                  bloodGroup: "",
                }}
                onSubmit={(values) => {
                  // Alert the input values of the form that we filled

                  handleSubmitForEmp();

                  //
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  setFieldValue,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <div className="login">
                    <div className="form">
                      {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                      <form noValidate onSubmit={handleSubmit}>
                        {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}

                        <Card>
                          <CardHeader>
                            <Row className="g-1 m-1">
                              <Col className="col-sm">
                                <div className="d-flex justify-content-sm-between">
                                  <h2 className="card-title mb-0 justify-content-sm-start">
                                    <strong>Title</strong>
                                  </h2>
                                </div>
                              </Col>
                            </Row>
                          </CardHeader>
                          <div className="card-body">
                            <div className="live-preview">
                              <Row className="align-items-center g-3">
                                <Col sm={3}>
                                  <label
                                    className="form-label mt-3"
                                    htmlFor="product-orders-input"
                                  >
                                    Name
                                  </label>
                                  <div className="">
                                    <select
                                      className="form-select"
                                      name="name"
                                      onClick={(e) => {
                                        handleChange(e);
                                        handleEmpData(e);
                                      }}
                                      onBlur={handleBlur}
                                      value={values.employeeName}
                                    >
                                      {EmpbyCompandLoc &&
                                        EmpbyCompandLoc.length > 0 &&
                                        EmpbyCompandLoc.map((emp, index) => (
                                          <option value={emp._id} key={index}>
                                            {" "}
                                            {emp.employeeName}{" "}
                                          </option>
                                        ))}
                                    </select>
                                    <p className="error text-danger">
                                      {errors.name &&
                                        touched.name &&
                                        errors.name}
                                    </p>
                                  </div>
                                </Col>
                                <Col sm={2}>
                                  <label
                                    className="form-label mt-3"
                                    htmlFor="product-orders-input"
                                  >
                                    Gender
                                  </label>
                                  <div className="">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-orders-input"
                                      //   placeholder="EC No."
                                      name="gender"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={
                                        currentEmpContactDetails
                                          ? currentEmpContactDetails.gender
                                          : ""
                                      }
                                    />
                                    <p className="error text-danger">
                                      {errors.gender &&
                                        touched.gender &&
                                        errors.gender}
                                    </p>
                                  </div>
                                </Col>
                                <Col sm={2}>
                                  <label
                                    className="form-label mt-3"
                                    htmlFor="product-orders-input"
                                  >
                                    Age
                                  </label>
                                  <div className="">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-orders-input"
                                      //   placeholder="EC No."
                                      name="age"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={
                                        currentEmpContactDetails
                                          ? currentEmpContactDetails.age
                                          : ""
                                      }
                                    />
                                    <p className="error text-danger">
                                      {errors.age && touched.age && errors.age}
                                    </p>
                                  </div>
                                </Col>
                                <Col sm={2}>
                                  <label
                                    className="form-label mt-3"
                                    htmlFor="product-orders-input"
                                  >
                                    Date of Birth
                                  </label>
                                  <div className="">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-orders-input"
                                      name="dateOfBirth"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                      onChange={(e) => {
                                        handleChange(e);
                                        // Format and set the value using setFieldValue
                                        setFieldValue(
                                          "dateOfBirth",
                                          e.target.value
                                            .slice(0, 10)
                                            .split("")
                                            .reverse()
                                            .join("")
                                        );
                                      }}
                                      onBlur={handleBlur}
                                      value={
                                        currentEmpContactDetails
                                          ? currentEmpContactDetails.dateOfBirth
                                              .slice(0, 10)
                                              .split("-")
                                              .reverse()
                                              .join("-")
                                          : ""
                                      }
                                    />
                                    <p className="error text-danger">
                                      {errors.dob && touched.dob && errors.dob}
                                    </p>
                                  </div>
                                </Col>
                                <Col sm={2}>
                                  <label
                                    className="form-label mt-3"
                                    htmlFor="product-orders-input"
                                  >
                                    Blood Group
                                  </label>
                                  <div className="">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-orders-input"
                                      //   placeholder="EC No."
                                      name="bloodGroup"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={
                                        currentEmpContactDetails
                                          ? currentEmpContactDetails.bloodGroup
                                          : ""
                                      }
                                    />
                                    <p className="error text-danger">
                                      {errors.bloodgroup &&
                                        touched.bloodgroup &&
                                        errors.bloodgroup}
                                    </p>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </div>
                          <div className="text-end mb-3 me-3">
                            <button
                              className="btn btn-success w-sm"
                              type="submit"
                            >
                              Submit
                            </button>
                          </div>
                        </Card>
                      </form>
                    </div>
                  </div>
                )}
              </Formik>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-custom card-header-tabs border-bottom-0">
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: customActiveTab === "1",
                        })}
                        onClick={() => {
                          toggleCustom("1");
                        }}
                      >
                        Vitals
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: customActiveTab === "2",
                        })}
                        onClick={() => {
                          toggleCustom("2");
                        }}
                      >
                        History & Examination
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: customActiveTab === "3",
                        })}
                        onClick={() => {
                          toggleCustom("3");
                        }}
                      >
                        Eye
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: customActiveTab === "4",
                        })}
                        onClick={() => {
                          toggleCustom("4");
                        }}
                      >
                        Blood Investigation
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: customActiveTab === "5",
                        })}
                        onClick={() => {
                          toggleCustom("5");
                        }}
                      >
                        Investigation
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: customActiveTab === "6",
                        })}
                        onClick={() => {
                          toggleCustom("6");
                        }}
                      >
                        Form-32
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: customActiveTab === "7",
                        })}
                        onClick={() => {
                          toggleCustom("7");
                        }}
                      >
                        Form-33
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>

                {/* console.log( company );
    console.log( location );
    console.log( checkupName );
    console.log( checkupType); */}

                <CardBody>
                  <TabContent activeTab={customActiveTab}>
                    <TabPane id="addproduct-general-info" tabId="1">
                      <VitalsandHistory
                        companyId={company}
                        location={location}
                        chackupNameId={checkupName}
                        checkupTypeId={checkupType}
                        checkupDataId={checkupDataId}
                        employeeId={shalin}
                      />
                    </TabPane>

                    <TabPane id="addproduct-metadata" tabId="2">
                      <GeneralExam
                        companyId={company}
                        location={location}
                        chackupNameId={checkupName}
                        checkupTypeId={checkupType}
                        checkupDataId={checkupDataId}
                        employeeId={shalin}
                      />
                    </TabPane>

                    <TabPane id="addproduct-general-info" tabId="3">
                      <Eye
                        companyId={company}
                        location={location}
                        chackupNameId={checkupName}
                        checkupTypeId={checkupType}
                        checkupDataId={checkupDataId}
                        employeeId={shalin}
                      />
                    </TabPane>

                    <TabPane id="addproduct-general-info" tabId="4">
                      <BloodInvestigation
                        companyId={company}
                        location={location}
                        chackupNameId={checkupName}
                        checkupTypeId={checkupType}
                        checkupDataId={checkupDataId}
                        employeeId={shalin}
                      />
                    </TabPane>

                    <TabPane id="addproduct-general-info" tabId="5">
                      <Investigation
                        companyId={company}
                        location={location}
                        chackupNameId={checkupName}
                        checkupTypeId={checkupType}
                        checkupDataId={checkupDataId}
                        employeeId={shalin}
                      />
                    </TabPane>

                    <TabPane id="addproduct-general-info" tabId="6">
                      <OtherDetails
                        companyId={company}
                        location={location}
                        chackupNameId={checkupName}
                        checkupTypeId={checkupType}
                        checkupDataId={checkupDataId}
                        employeeId={shalin}
                      />
                    </TabPane>

                    <TabPane id="addproduct-general-info" tabId="7">
                      <Form33
                        companyId={company}
                        location={location}
                        chackupNameId={checkupName}
                        checkupTypeId={checkupType}
                        checkupDataId={checkupDataId}
                        employeeId={shalin}
                      />
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CheckupForm;
