import classnames from "classnames";
import { Form, Formik } from "formik";

import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
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
import SignContext from "../../contextAPI/Context/SignContext";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    GetCompany,
    GetCompanybyId,
    GetEmpsbyCompAndLoc,
    GetContactDetailsById,
  } = useContext(SignContext);
  const [Company, setCompany] = useState([]);
  const [Location, setLocation] = useState([]);
  const [Category, setCategory] = useState([]);
  const [Department, setDepartment] = useState([]);
  const [EmpbyCompandLoc, setEmpbyCompandLoc] = useState([]);
  const [currentEmp, setCurrentEmp] = useState(null);
  const [currentEmpContactDetails, setCurrentEmpContactDetails] =
    useState(null);

  const getcompanies = async () => {
    const res = await GetCompany();
    console.log(res);
    setCompany(res.data);
    // setLocation(res.data.companyLocation)
    // setRoles(res);
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

  useEffect(() => {
    getcompanies();
  }, []);

  useEffect(() => {
    console.log("set  data");
  }, [currentEmp]);

  return (
    <React.Fragment>
      <div className="text-end mb-3 me-3">
        <Button className="btn btn-success w-sm" onClick={handleShow}>
          Add
        </Button>
      </div>

      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                }}
                validationSchema={validationSchema}
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
                                <strong>Title</strong>
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
                                  <option value="">Employees</option>
                                  {EmpbyCompandLoc.map((i, index) => (
                                    <option value={i._id} key={index}>
                                      {i.employeeName}
                                    </option>
                                  ))}
                                </select>
                              </div>
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
                                  value={
                                    currentEmp ? currentEmp.employeeName : ""
                                  }
                                />
                              </div>
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
                                />
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
                validationSchema={validationSchema}
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
                                  />
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
                                    />
                                  </div>
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
                                          : ""
                                      }
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
                                    />
                                  </div>
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
                                    />
                                  </div>
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
                                          : ""
                                      } //dateOfJoin
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
                          //   onClick={togglesuccessmodal}
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
