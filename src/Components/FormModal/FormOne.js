import classnames from "classnames";
import { Form, Formik } from "formik";

import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import * as Yup from "yup";

import { companies } from "../../common/data";
import SignContext from "../../contextAPI/Context/SignContext";

function Example({ companyId, location, allcompany }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const {
    GetCompany,
    GetCompanybyId,
    GetEmpsbyCompAndLoc,
    GetContactDetailsById,
    AddEmployee,
    AddContact,
    GetallEmployeee,
  } = useContext(SignContext);

  const [employeelength, setemployeelenght] = useState(null);
  const [Company, setCompany] = useState([]);
  const [Location, setLocation] = useState([]);
  const [Category, setCategory] = useState([]);
  const [Department, setDepartment] = useState([]);
  const [EmpbyCompandLoc, setEmpbyCompandLoc] = useState([]);
  const [currentEmp, setCurrentEmp] = useState(null);
  const [currentEmpContactDetails, setCurrentEmpContactDetails] =
    useState(null);
  const [a1, seta1] = useState([]);
  const [a2, seta2] = useState([]);
  const [empId, setEmpId] = useState(null);

  console.log(">>>all comapny in final page");
  console.log(allcompany);

  console.log("company>>> id in final page");
  console.log(companyId);

  // const res1 = allcompany.find(({ _id }) => _id === companyId);
  // console.log("res",res1)
  // seta1(res1.companyJobCategorys)
  // setDepartment(res1.companyDepartments);

  const getcompanies = async () => {
    const res = await GetCompany();

    setCategory(res.data[0].companyJobCategorys);
    // setCategory(res.data.companyJobCategorys);
    setDepartment(res.data[0].companyDepartments);
  };

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
      "----------------------------------------------------------------------------"
    );
    console.log(Values);

    const res = await GetEmpsbyCompAndLoc(Values);
    console.log(res.data);
    setEmpbyCompandLoc(res.data);
  };

  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };

  const handleSavedEmployee = async (Values) => {
    const data = {
      ...Values,
      companyId,
      companyLocation: location,
      srNo: employeelength,
    };
    console.log("--------------------------------------data");

    const res = await AddEmployee(data);
    console.log("empid>>>>>");
    console.log(res._id);

    setEmpId(res._id);
  };

  //handle save contact detail...
  const handleSavedcat = async (Values) => {
    const data1 = { ...Values, companyId, employeeId: empId };
    const res = await AddContact(data1);
    console.log("--------------data-------");
    console.log(res);
    navigate("/form");
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
    // console.log( selectedCompanyId );

    if (selectedCompanyId) {
      getcompaniesbyId(selectedCompanyId);
    }
  };

  const handleEmpData = (e) => {
    let data = e.target.value;

    const curremp = EmpbyCompandLoc.filter((emp) => emp._id === data);

    console.log("-----------------------------------");

    getEmpContactDetails({ id: curremp[0].employeeContactDetailsId });

    //  getEmpContactDetails()

    setCurrentEmp(curremp[0]);
  };

  const getemployeelenght = async () => {
    const res = await GetallEmployeee();
    console.log(">>>>lenght", res.data.length);
    const aa = res.data.length;
    setemployeelenght(aa + 1);
  };
  useEffect(() => {
    getemployeelenght();
  });
  useEffect(() => {
    getcompanies();
  }, []);

  useEffect(() => {
    console.log("set  data");
  }, [currentEmp]);

  useEffect(() => {
    // Assuming allcompany is already available in your component
    const res1 = allcompany.find(({ _id }) => _id === companyId);

    // Check if a matching company is found
    if (res1) {
      // Set the found company in the state
      seta1(res1.companyDepartments);
      seta2(res1.companyJobCategorys);
      console.log("llllllllllllllllllllll");
      console.log(res1.companyDepartments);
      console.log(res1.companyJobCategorys);
    } else {
      // Handle the case where the company is not found
    }
  }, [allcompany, companyId]);

  return (
    <React.Fragment>
      <div className="text-end mb-3 me-4">
        <Button className="btn btn-success w-sm" onClick={handleShow}>
          Add Employee here
        </Button>
      </div>

      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={12}>
              <Formik
                initialValues={{
                  srNo: "",
                  employeeNameAbbrevation: "",
                  employeeName: "",
                  employeeFatherName: "",
                  employeeSurname: "",
                  ecNo: "",
                  companyJobCategorys: "",
                  companyDepartments: "",
                }}
                // validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                  console.log(employeelength + 1);
                  await handleSavedEmployee(values);
                  resetForm();
                  // togglemodal();
                  // toast.success("Category Added Successfully", {
                  //   autoClose: 3000,
                  // });
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
                    <Card>
                      <CardHeader>
                        <Row className="g-1 m-1">
                          <Col className="col-sm">
                            <div className="d-flex justify-content-sm-between">
                              <h2 className="card-title mb-0 justify-content-sm-start">
                                <strong>Add Employee</strong>
                              </h2>
                            </div>
                          </Col>
                        </Row>
                      </CardHeader>
                      <div className="card-body">
                        <div className="live-preview">
                          <Row className="align-items-center g-3">
                            <Row>
                              <Col sm={2}>
                                <label
                                  className="form-label mt-3"
                                  htmlFor="product-orders-input"
                                >
                                  Sr No.
                                </label>
                              </Col>
                              <Col sm={6}>
                                <label
                                  className="form-label mt-3"
                                  htmlFor="product-orders-input"
                                >
                                  Name
                                </label>
                              </Col>
                              <Col sm={2}>
                                <label
                                  className="form-label mt-3"
                                  htmlFor="product-orders-input"
                                >
                                  Father's Name
                                </label>
                              </Col>
                              <Col sm={2}>
                                <label
                                  className="form-label mt-3"
                                  htmlFor="product-orders-input"
                                >
                                  Surname
                                </label>
                              </Col>
                            </Row>
                            <Col sm={2}>
                              <div className="">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="sr no"
                                  name="srNo"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={employeelength}
                                />
                              </div>
                            </Col>
                            <Col sm={3}>
                              <div className="">
                                <select
                                  className="form-select"
                                  name="employeeNameAbbrevation"
                                  onChange={(e) => {
                                    handleChange(e);
                                    handleEmpData(e);
                                  }}
                                  onBlur={handleBlur}
                                  value={values.employeeNameAbbrevation}
                                >
                                  <option value="">---select---</option>
                                  <option value="Mr.">Mr</option>
                                  <option value="Mr.">Ms</option>
                                  <option value="Mrs.">Mrs</option>
                                </select>
                              </div>
                            </Col>
                            <Col sm={3}>
                              <div className="">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="First Name"
                                  name="employeeName"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.employeeName}
                                />
                              </div>
                            </Col>
                            <Col sm={2}>
                              <div className="">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="Father's Name"
                                  name="employeeFatherName"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.employeeFatherName}
                                />
                              </div>
                            </Col>
                            <Col sm={2}>
                              <div className="">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  placeholder="Surname"
                                  name="employeeSurname"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.employeeSurname}
                                />
                              </div>
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
                                  value={values.ecNo}
                                />
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
                                <select
                                  className="form-select"
                                  name="companyJobCategorys"
                                  onChange={(e) => {
                                    handleChange(e);
                                  }}
                                  onBlur={handleBlur}
                                  value={values.companyJobCategorys}
                                >
                                  <option>--select--</option>
                                  {a2.map((name, index) => (
                                    <option key={index} value={name}>
                                      {name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </Col>

                            {/* setting category by api */}

                            {/* <Col sm={3}>
                              <label
                                className="form-label mt-3"
                                htmlFor="product-orders-input"
                              >
                                Department
                              </label>
                              <div className="">
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
                                      ? currentEmp.companyJobCategorys
                                      : ""
                                  }
                                />
                              </div>
                            </Col> */}

                            {/* //setting Department */}

                            <Col sm={3}>
                              <label
                                className="form-label mt-3"
                                htmlFor="product-orders-inputrd"
                              >
                                Department
                              </label>
                              <div className="">
                                <select
                                  className="form-select"
                                  name="companyDepartments"
                                  onChange={(e) => {
                                    handleChange(e);
                                  }}
                                  onBlur={handleBlur}
                                  value={values.companyDepartments}
                                >
                                  <option>--select--</option>
                                  {a1.map((name, index) => (
                                    <option key={index} value={name}>
                                      {name}
                                    </option>
                                  ))}
                                </select>
                              </div>
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

              <Formik
                initialValues={{
                  address: "",
                  age: "",
                  dateOfBirth: "",
                  gender: "",
                  height: "",
                  bloodGroup: "",
                  mentalStatus: "",
                  dateOfJoin: "",
                  idMark: "",
                  natureOfJob: "",
                  // res: "",
                  mobileNumber: "",
                  office: "",
                  pp: "",
                  emer: "",
                  email: "",
                }}
                // validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                  await handleSavedcat(values);
                  resetForm();
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
                  <Form>
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
                                    value={values.address}
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={8}>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="manufacturer-name-input"
                                  >
                                    Email
                                  </label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="manufacturer-name-input"
                                    name="email"
                                    placeholder="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                  />
                                </div>
                              </Col>
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
                                      type="number"
                                      className="form-control"
                                      id="product-stock-input"
                                      placeholder="age"
                                      name="age"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.age}
                                    />
                                  </div>
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
                                    Date of Birth
                                  </label>
                                  <div className="input-group mb-3">
                                    <Input
                                      type="date"
                                      className="form-control"
                                      id="product-price-input"
                                      placeholder="DD/MM/YYYY"
                                      name="dateOfBirth"
                                      aria-label="Price"
                                      aria-describedby="product-price-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.dateOfBirth}
                                    />
                                  </div>
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
                                    <select
                                      className="form-select"
                                      id="product-gender-input"
                                      name="gender"
                                      aria-label="Gender"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.gender}
                                    >
                                      <option value="" disabled>
                                        Select Gender
                                      </option>
                                      <option value="male">Male</option>
                                      <option value="female">Female</option>
                                      <option value="others">Others</option>
                                    </select>
                                  </div>
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
                                      type="number"
                                      className="form-control"
                                      id="product-orders-input"
                                      placeholder="height"
                                      name="height"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.height}
                                    />
                                  </div>
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
                                      name="bloodGroup"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.bloodGroup}
                                    />
                                  </div>
                                </div>
                              </Col>
                              <Col sm={3}>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-Discount-input"
                                  >
                                    Martial Status
                                  </label>
                                  <div className="input-group mb-3">
                                    <select
                                      className="form-select"
                                      id="product-gender-input"
                                      name="mentalStatus"
                                      aria-label="Gender"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.mentalStatus}
                                    >
                                      <option value="" disabled>
                                        --select--
                                      </option>
                                      <option value="Married">Married</option>
                                      <option value="Unmarried">
                                        Unmarried
                                      </option>
                                      <option value="Others">Others</option>
                                    </select>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              {/* <Col sm={2}>
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
                                      value={values.res} // res
                                    />
                                  </div>
                                </div>
                              </Col> */}

                              <Col sm={3}>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-price-input"
                                  >
                                    MOB
                                  </label>
                                  <div className="input-group mb-3">
                                    <Input
                                      type="number"
                                      className="form-control"
                                      id="product-price-input"
                                      placeholder="MOB"
                                      name="mobileNumber"
                                      aria-label="Price"
                                      aria-describedby="product-price-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.mobileNumber}
                                    />
                                  </div>
                                </div>
                              </Col>

                              <Col sm={3}>
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
                                      value={values.office}
                                    />
                                  </div>
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
                                      name="pp"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.pp}
                                    />
                                  </div>
                                </div>
                              </Col>
                              <Col sm={3}>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-orders-input"
                                  >
                                    Emergency Number
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
                                      value={values.emer} // emer
                                    />
                                  </div>
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
                                      type="date"
                                      className="form-control"
                                      id="product-price-input"
                                      placeholder="DD/MM/YYYY"
                                      name="dateOfJoin"
                                      aria-label="Price"
                                      aria-describedby="product-price-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.dateOfJoin} //dateOfJoin
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
                                      name="idMark"
                                      aria-label="Price"
                                      aria-describedby="product-price-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.idMark} // idMark
                                    />
                                  </div>
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
                                      name="natureOfJob"
                                      aria-label="Price"
                                      aria-describedby="product-price-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.natureOfJob}
                                    />
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </TabPane>
                        </TabContent>
                      </CardBody>
                      <div className="text-end mb-3">
                        <button
                          type="submit"
                          className="btn btn-success w-sm"
                          // onClick={togglesuccessmodal}
                        >
                          Submit
                        </button>
                      </div>
                    </Card>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default Example;
