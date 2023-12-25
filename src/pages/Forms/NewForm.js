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
  Label,
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
import Example from "../../Components/FormModal/FormOne";
import SignContext from "../../contextAPI/Context/SignContext";
import { useNavigate } from "react-router-dom";

const NewForm = () => {
  const {
    GetCompany,
    GetCompanybyId,
    GetEmpsbyCompAndLoc,
    GetContactDetailsById,
    getCheckupData,
  } = useContext(SignContext);
  const navigate = useNavigate();
  const [Company, setCompany] = useState([]);
  const [Location, setLocation] = useState([]);
  const [Category, setCategory] = useState([]);
  const [Department, setDepartment] = useState([]);
  const [EmpbyCompandLoc, setEmpbyCompandLoc] = useState([]);
  const [currentEmp, setCurrentEmp] = useState(null);
  const [currentCompanyId, setCurrentCompanyId] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentEmpContactDetails, setCurrentEmpContactDetails] =
    useState(null);

  const getcompanies = async () => {
    const res = await GetCompany();
    console.log(">>> get companies")
    console.log(res);
    setCompany(res.data);
    // setLocation(res.data.companyLocation)
    // setRoles(res);
  };

  console.log(EmpbyCompandLoc);

  const getEmpContactDetails = async (id) => {
    console.log("---id in frontend first---");

    console.log(id);

    const res = await GetContactDetailsById(id);

    console.log(res.data);

    setCurrentEmpContactDetails(res.data);
  };

  const getcompaniesbyId = async (id) => {
    const res = await GetCompanybyId(id);
    setLocation(res.data.companyLocation);
    setCategory(res.data.companyJobCategorys);
    setDepartment(res.data.companyDepartments);
    // setRoles(res);
  };

  const handleSavedCompandLoc = async (Values) => {
    console.log(
      "------------------------ARRAY-------------------------------------------"
    );

    console.log(Values);

    setCurrentCompanyId(Values.companyName);
    setCurrentLocation(Values.companyLocation);
    
    console.log(" >>>>> company ")
    console.log(Values.companyName);

    const res = await GetEmpsbyCompAndLoc(Values);
    console.log(res.data);
    console.log("----empdata----");
    console.log(res.data);
    setEmpbyCompandLoc(res.data);
  };


  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    name: Yup.string().required("Name is required"),
    fathersName: Yup.string().required("Father's Name is required"),
    ecNo: Yup.string().required("E.C No. is required"),
    companyJobCategorys: Yup.string().required("Category is required"),
    companyDepartments: Yup.string().required("Department is required"),
    companyName: Yup.string().required("Company is required"),
    companyLocation: Yup.string().required("Location is required"),
    address: Yup.string().required("Address is required"),
    age: Yup.string().required("age is required"),
    dob: Yup.string().required("dob is required"),
    gender: Yup.string().required("gender is required"),
    height: Yup.string().required("height is required"),
    bloodgroup: Yup.string().required("blood group is required"),
    martialstatus: Yup.string().required("martial status is required"),
    doj: Yup.string().required("date is required"),
    marks: Yup.string().required("marks is required"),
    natureofjob: Yup.string().required("nature of job is required"),
    res: Yup.string().required("res is required"),
    mob: Yup.string().required("mob is required"),
    office: Yup.string().required("office is required"),
    pphash: Yup.string().required("pp# is required"),
    emer: Yup.string().required("emer is required"),
    email: Yup.string().required("email is required"),
  });

  const handleLocationChange = (e) => {
    let selectedCompanyId = e.target.value;

    if (selectedCompanyId) {
      getcompaniesbyId(selectedCompanyId);
    }
  };

  const handleEmpData = async (e) => {
    let data = e.target.value;

    const curremp = EmpbyCompandLoc.filter((emp) => emp._id === data);

    console.log("-----------------------------------");

    console.log(curremp);

    getEmpContactDetails({ id: curremp[0].employeeContactDetailsId });

    //  getEmpContactDetails()

    setCurrentEmp(curremp[0]);
  };

  const handleNavigatetoCheckup = () => {
    navigate('/form');
  };

  useEffect(() => {
    getcompanies();
  }, []);

  useEffect(() => {
    console.log("set  data");
  }, [currentEmp]);

  return (
    <>
      <UiContent />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb grandParent="Setup" parent="Forms" child="Patient-Details" />
          <Row>
            <Col lg={12}>
              <Formik
                initialValues={{
                  companyName: "",
                  companyLocation: "",
                }}
                onSubmit={async (values, { resetForm }) => {
                  handleSavedCompandLoc(values);
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
                                <strong>Company & Location</strong>
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
                                  <option value="">--select--</option>
                                  {Company.map((company) => (
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
                                  <option value="">--select--</option>
                                  {Location && Location.length > 0 ? (
                                    Location.map((location) => (
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
          <Row>
            <Col lg={12}>
              <Formik
                initialValues={{
                  title: "",
                  name: "",
                  fathersName: "",
                  ecNo: "",
                  companyJobCategorys: "",
                  companyDepartments: "",
                  address: "",
                  age: "",
                  dob: "",
                  gender: "",
                  height: "",
                  bloodgroup: "",
                  martialstatus: "",
                  doj: "",
                  marks: "",
                  natureofjob: "",
                  res: "",
                  mob: "",
                  office: "",
                  pphash: "",
                  emer: "",
                  email: "",
                }}
                // validationSchema={validationSchema}
                // onSubmit={async (values, { resetForm }) => {
                //   //   await handleSavedcat(values);
                //   // resetForm();
                //   // togglemodal();
                // }}
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
                  <Form>
                    <Card>
                      <CardHeader>
                        <Row className="g-1 m-1">
                          <Col className="col-sm">
                            <div className="d-flex justify-content-sm-between">
                              <h2 className="card-title mb-0 justify-content-sm-start">
                                <strong>Employees</strong>
                              </h2>
                            </div>
                          </Col>
                        </Row>
                      </CardHeader>
                      <div className="card-body">
                        <div className="live-preview">
                          <Row className="align-items-center g-3">
                            <Row>
                              <Col sm={6}>
                                <label
                                  className="form-label mt-3"
                                  htmlFor="product-orders-input"
                                >
                                  Name
                                </label>
                              </Col>
                              <Col sm={6}>
                                <label
                                  className="form-label mt-3"
                                  htmlFor="product-orders-input"
                                >
                                  Father's Name
                                </label>
                              </Col>
                            </Row>
                            <Col sm={2}>
                              <div className="">
                                <select
                                  className="form-select"
                                  name="title"
                                  onClick={(e) => {
                                    handleChange(e);
                                    handleEmpData(e);
                                  }}
                                  onBlur={handleBlur}
                                  value={values.employeeName}
                                >
                                  <option value="">--select--</option>
                                  {EmpbyCompandLoc.map((i, index) => (
                                    <option value={i._id} key={index}>
                                      {i.employeeName}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <p className="error text-danger">
                                {errors.title && touched.title && errors.title}
                              </p>
                            </Col>
                            <Col sm={4}>
                              <div className="">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="First Name"
                                  name="name"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  disabled
                                  readOnly
                                  value={
                                    currentEmp ? currentEmp.employeeName : ""
                                  }
                                />
                              </div>
                              <p className="error text-danger">
                                {errors.name && touched.name && errors.name}
                              </p>
                            </Col>
                            <Col sm={4}>
                              <div className="">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="Father's Name"
                                  name="fathersName"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    currentEmp
                                      ? currentEmp.employeeFatherName
                                      : ""
                                  }
                                  disabled
                                  readOnly
                                />
                              </div>
                              <p className="error text-danger">
                                {errors.fathersName &&
                                  touched.fathersName &&
                                  errors.fathersName}
                              </p>
                            </Col>
                          </Row>
                          <Row className="align-items-center g-3">
                            <Col sm={2}>
                              <label
                                className="form-label mt-3"
                                htmlFor="product-orders-input"
                              >
                                EC No.
                              </label>
                              <div className="">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="EC No."
                                  name="ecNo"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={currentEmp ? currentEmp.ecNo : ""}
                                  disabled
                                  readOnly
                                />
                                <p className="error text-danger">
                                  {errors.ecNo && touched.ecNo && errors.ecNo}
                                </p>
                              </div>
                            </Col>
                            <Col sm={3}>
                              <label
                                className="form-label mt-3"
                                htmlFor="product-orders-inputrd"
                              >
                                Category
                              </label>
                              <div className="">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="company category"
                                  name="companyJobCategorys"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    currentEmp
                                      ? currentEmp.companyJobCategorys
                                      : ""
                                  }
                                  disabled
                                  readOnly
                                />

                                <p className="error text-danger">
                                  {errors.companyJobCategorys &&
                                    touched.companyJobCategorys &&
                                    errors.companyJobCategorys}
                                </p>
                              </div>
                            </Col>
                            <Col sm={3}>
                              <label
                                className="form-label mt-3"
                                htmlFor="product-orders-input"
                              >
                                Department
                              </label>
                              <div className="">
                                {/* <select
                                  className="form-select"
                                  name="companyDepartments"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.companyDepartments}
                                >
                                  <option value="">Select</option>
                                  {Department && Department.length > 0 ? (
                                    Department.map((department) => (
                                      <option key={department} value={department}>
                                        {department}
                                      </option>
                                    ))
                                  ) : (
                                    <option value="" disabled>
                                      No Department available
                                    </option>
                                  )}
                                </select> */}

                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="company Departments"
                                  name="companyDepartments"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    currentEmp
                                      ? currentEmp.companyDepartments
                                      : ""
                                  }
                                  disabled
                                  readOnly
                                />

                                <p className="error text-danger">
                                  {errors.companyDepartments &&
                                    touched.companyDepartments &&
                                    errors.companyDepartments}
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                      <Example
                        
                        companyId={currentCompanyId}
                        location={currentLocation}
                        allcompany={Company}
                      />
                    </Card>
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
                              Contact Details
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </CardHeader>

                      <CardBody>
                        <TabContent activeTab={customActiveTab}>
                          <TabPane id="addproduct-general-info" tabId="1">
                            <Row>
                              <Col lg={8}>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="manufacturer-name-input"
                                  >
                                    Address
                                  </label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="manufacturer-name-input"
                                    name="address"
                                    placeholder="address"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={
                                      currentEmpContactDetails
                                        ? currentEmpContactDetails.address
                                        : ""
                                    }
                                    disabled
                                  readOnly
                                  />
                                  <p className="error text-danger">
                                    {errors.address &&
                                      touched.address &&
                                      errors.address}
                                  </p>
                                </div>
                              </Col>
                              {/* <Col lg={6}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="manufacturer-brand-input"
                            >
                              Manufacturer Brand
                            </label>
                            <Input
                              type="text"
                              className="form-control"
                              id="manufacturer-brand-input"
                              name="manufacturer_brand"
                              placeholder="Enter manufacturer brand"
                             
                            />
                            
                          </div>
                        </Col> */}
                            </Row>
                            <Row>
                              <Col sm={2}>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-stock-input"
                                  >
                                    Age
                                  </label>
                                  <div className="input-group mb-3">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-stock-input"
                                      placeholder="age"
                                      name="age"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={
                                        currentEmpContactDetails
                                          ? currentEmpContactDetails.age
                                          : ""
                                      }
                                      disabled
                                      readOnly
                                    />
                                  </div>
                                  <p className="error text-danger">
                                    {errors.age && touched.age && errors.age}
                                  </p>
                                </div>
                              </Col>

                              <Col sm={2}>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-price-input"
                                  >
                                    Date of Birth
                                  </label>
                                  <div className="input-group mb-3">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-price-input"
                                      placeholder="DD/MM/YYYY"
                                      name="dob"
                                      aria-label="Price"
                                      aria-describedby="product-price-addon"
                                      onChange={handleChange}
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
                                      disabled
                                      readOnly
                                    />
                                  </div>
                                  <p className="error text-danger">
                                    {errors.dob && touched.dob && errors.dob}
                                  </p>
                                </div>
                              </Col>

                              <Col sm={2}>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-Discount-input"
                                  >
                                    Gender
                                  </label>
                                  <div className="input-group mb-3">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-price-input"
                                      placeholder="gendet"
                                      name="gender"
                                      aria-label="Price"
                                      aria-describedby="product-price-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={
                                        currentEmpContactDetails
                                          ? currentEmpContactDetails.gender
                                          : ""
                                      }
                                      disabled
                                      readOnly
                                    />
                                  </div>
                                  <p className="error text-danger">
                                    {errors.gender &&
                                      touched.gender &&
                                      errors.gender}
                                  </p>
                                </div>
                              </Col>

                              <Col sm={2}>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-orders-input"
                                  >
                                    Height
                                  </label>
                                  <div className="input-group mb-3">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-orders-input"
                                      placeholder="height"
                                      name="height"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={
                                        currentEmpContactDetails
                                          ? currentEmpContactDetails.height
                                          : ""
                                      }
                                      disabled
                                      readOnly
                                    />
                                  </div>
                                  <p className="error text-danger">
                                    {errors.height &&
                                      touched.height &&
                                      errors.height}
                                  </p>
                                </div>
                              </Col>
                              <Col sm={2}>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-orders-input"
                                  >
                                    Blood Group
                                  </label>
                                  <div className="input-group mb-3">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-orders-input"
                                      placeholder="blood group"
                                      name="bloodgroup"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={
                                        currentEmpContactDetails
                                          ? currentEmpContactDetails.bloodGroup
                                          : ""
                                      } // bloodGroup
                                      disabled
                                  readOnly
                                    />
                                  </div>
                                  <p className="error text-danger">
                                    {errors.bloodgroup &&
                                      touched.bloodgroup &&
                                      errors.bloodgroup}
                                  </p>
                                </div>
                              </Col>
                              <Col sm={2}>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-orders-input"
                                  >
                                    Martial Status
                                  </label>
                                  <div className="input-group mb-3">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-orders-input"
                                      placeholder="martial status"
                                      name="martialstatus"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={
                                        currentEmpContactDetails
                                          ? currentEmpContactDetails.mentalStatus
                                          : ""
                                      } // mentalStatus
                                      disabled
                                     readOnly
                                    />
                                  </div>
                                  <p className="error text-danger">
                                    {errors.martialstatus &&
                                      touched.martialstatus &&
                                      errors.martialstatus}
                                  </p>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col sm={2}>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-stock-input"
                                  >
                                    Res
                                  </label>
                                  <div className="input-group mb-3">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-stock-input"
                                      placeholder="res"
                                      name="res"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={
                                        currentEmpContactDetails
                                          ? currentEmpContactDetails.res
                                          : ""
                                      } // res
                                      disabled
                                  readOnly
                                    />
                                  </div>
                                  <p className="error text-danger">
                                    {errors.res && touched.res && errors.res}
                                  </p>
                                </div>
                              </Col>

                              <Col sm={2}>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-price-input"
                                  >
                                    MOB
                                  </label>
                                  <div className="input-group mb-3">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-price-input"
                                      placeholder="MOB"
                                      name="mob"
                                      aria-label="Price"
                                      aria-describedby="product-price-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={
                                        currentEmpContactDetails
                                          ? currentEmpContactDetails.mobileNumber
                                          : ""
                                      } //mobileNumber
                                      disabled
                                  readOnly
                                    />
                                  </div>
                                  <p className="error text-danger">
                                    {errors.mob && touched.mob && errors.mob}
                                  </p>
                                </div>
                              </Col>

                              <Col sm={2}>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-orders-input"
                                  >
                                    Office
                                  </label>
                                  <div className="input-group mb-3">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-orders-input"
                                      placeholder="Office"
                                      name="office"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={
                                        currentEmpContactDetails
                                          ? currentEmpContactDetails.office
                                          : ""
                                      } //office
                                      disabled
                                  readOnly
                                    />
                                  </div>
                                  <p className="error text-danger">
                                    {errors.office &&
                                      touched.office &&
                                      errors.office}
                                  </p>
                                </div>
                              </Col>

                              <Col sm={2}>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-orders-input"
                                  >
                                    PP #
                                  </label>
                                  <div className="input-group mb-3">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-orders-input"
                                      placeholder="PP #"
                                      name="pphash"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={
                                        currentEmpContactDetails
                                          ? currentEmpContactDetails.pp
                                          : ""
                                      } //pp
                                      disabled
                                  readOnly
                                    />
                                  </div>
                                  <p className="error text-danger">
                                    {errors.pphash &&
                                      touched.pphash &&
                                      errors.pphash}
                                  </p>
                                </div>
                              </Col>
                              <Col sm={2}>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-orders-input"
                                  >
                                    Emer
                                  </label>
                                  <div className="input-group mb-3">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-orders-input"
                                      placeholder="emer"
                                      name="emer"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={
                                        currentEmpContactDetails
                                          ? currentEmpContactDetails.emer
                                          : ""
                                      } // emer
                                      disabled
                                  readOnly
                                    />
                                  </div>
                                  <p className="error text-danger">
                                    {errors.emer && touched.emer && errors.emer}
                                  </p>
                                </div>
                              </Col>
                              <Col sm={2}>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-orders-input"
                                  >
                                    Email
                                  </label>
                                  <div className="input-group mb-3">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-orders-input"
                                      placeholder="email"
                                      name="email"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={
                                        currentEmpContactDetails
                                          ? currentEmpContactDetails.email
                                          : ""
                                      } //email
                                      disabled
                                  readOnly
                                    />
                                  </div>
                                  <p className="error text-danger">
                                    {errors.email &&
                                      touched.email &&
                                      errors.email}
                                  </p>
                                </div>
                              </Col>
                            </Row>

                            <Row>
                              <Col sm={3}>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-price-input"
                                  >
                                    Date of Joining
                                  </label>
                                  <div className="input-group mb-3">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-price-input"
                                      placeholder="DD/MM/YYYY"
                                      name="doj"
                                      aria-label="Price"
                                      aria-describedby="product-price-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={
                                        currentEmpContactDetails
                                          ? currentEmpContactDetails.dateOfJoin
                                              .slice(0, 10)
                                              .split("-")
                                              .reverse()
                                              .join("-")
                                          : ""
                                      } //dateOfJoin
                                      disabled
                                  readOnly
                                    />
                                  </div>
                                  <p className="error text-danger">
                                    {errors.doj && touched.doj && errors.doj}
                                  </p>
                                </div>
                              </Col>
                              <Col sm={3}>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-price-input"
                                  >
                                    ID Marks
                                  </label>
                                  <div className="input-group mb-3">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-price-input"
                                      placeholder="Marks on body"
                                      name="marks"
                                      aria-label="Price"
                                      aria-describedby="product-price-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={
                                        currentEmpContactDetails
                                          ? currentEmpContactDetails.idMark
                                          : ""
                                      } // idMark
                                      disabled
                                  readOnly
                                    />
                                  </div>
                                  <p className="error text-danger">
                                    {errors.marks &&
                                      touched.marks &&
                                      errors.marks}
                                  </p>
                                </div>
                              </Col>
                            </Row>

                            <Row>
                              <Col sm={6}>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-price-input"
                                  >
                                    Nature of Job
                                  </label>
                                  <div className="input-group mb-3">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-price-input"
                                      placeholder="nature of job"
                                      name="natureofjob"
                                      aria-label="Price"
                                      aria-describedby="product-price-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={
                                        currentEmpContactDetails
                                          ? currentEmpContactDetails.natureOfJob
                                          : ""
                                      } // "no"
                                      disabled
                                  readOnly
                                    />
                                  </div>
                                  <p className="error text-danger">
                                    {errors.natureofjob &&
                                      touched.natureofjob &&
                                      errors.natureofjob}
                                  </p>
                                </div>
                              </Col>
                            </Row>
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                    <div className="text-end mb-3">
                      <button
                        type="submit"
                        className="btn btn-success w-sm"
                        onClick={handleNavigatetoCheckup}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NewForm;
