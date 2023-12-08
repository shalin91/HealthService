import React, { useContext, useEffect, useState } from "react";
import UiContent from "../../Components/Common/UiContent";
import BreadCrumb from "../../Components/Common/BreadCrumb";
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
import { Formik, useFormik, useFormikContext } from "formik";
import classnames from "classnames";
import * as Yup from "yup";
import SignContext from "../../contextAPI/Context/SignContext";

const NewForm = () => {
  const { GetCompany, GetCompanybyId , GetEmpsbyCompAndLoc } = useContext(SignContext);
  const [Company, setCompany] = useState([]);
  const [Location, setLocation] = useState([]);
  const [Category, setCategory] = useState([]);
  const [Department, setDepartment] = useState([]);
  const [EmpbyCompandLoc, setEmpbyCompandLoc] = useState([]);

  const getcompanies = async () => {
    const res = await GetCompany();
    console.log(res);
    setCompany(res.data);
    // setLocation(res.data.companyLocation)
    // setRoles(res);
  };

  const getcompaniesbyId = async (id) => {
    const res = await GetCompanybyId(id);
    console.log(id);
    setLocation(res.data.companyLocation);
    setCategory(res.data.companyJobCategorys);
    setDepartment(res.data.companyDepartments);
    // setRoles(res);
  };

  const handleSavedCompandLoc =  async (Values) => {
    const res = await GetEmpsbyCompAndLoc(Values);
    console.log(res);
    
  };

  // console.log(Company);
  // console.log(Location);

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

  useEffect(() => {
    getcompanies();
  }, []);

  return (
    <>
      <UiContent />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb grandParent="Setup" parent="Forms" child="Form-1" />
          <Row>
            <Col lg={12}>
              <Formik
                initialValues={{
                  companyName: "",
                  companyLocation: "",
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                    await handleSavedCompandLoc(values);
                    // console.log(values)
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
                  <Form onSubmit={handleSubmit}>
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
                                  <option value=""> Location</option>
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
                        <button
                          onSubmit={handleSubmit}
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
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                  //   await handleSavedcat(values);
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
                  <Form onSubmit={handleSubmit}>
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
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.title}
                                >
                                  <option value="">Select</option>
                                  <option value="Mr.">Mr.</option>
                                  <option value="Mrs.">Mrs.</option>
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
                                  value={values.name}
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
                                  value={values.fathersName}
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
                                  value={values.ecNo}
                                />
                                <p className="error text-danger">
                                  {errors.ecNo && touched.ecNo && errors.ecNo}
                                </p>
                              </div>
                            </Col>
                            <Col sm={3}>
                              <label
                                className="form-label mt-3"
                                htmlFor="product-orders-input"
                              >
                                Category
                              </label>
                              <div className="">
                                <select
                                  className="form-select"
                                  name="companyJobCategorys"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.companyJobCategorys}
                                >
                                <option value=""> Select</option>
                                  {Category && Category.length > 0 ? (
                                    Category.map((category) => (
                                      <option key={category} value={category}>
                                        {category}
                                      </option>
                                    ))
                                  ) : (
                                    <option value="" disabled>
                                      No Categories available
                                    </option>
                                  )}
                                </select>
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
                                <select
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
                                </select>
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
                              Patient Details
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
                                      value={values.age}
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
                                      value={values.dob}
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
                                    <select
                                      className="form-select"
                                      name="gender"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.gender}
                                    >
                                      <option value="">Select</option>
                                      <option value="Mr.">Male</option>
                                      <option value="Mrs.">Female</option>
                                    </select>
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
                                      value={values.height}
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
                                      value={values.bloodgroup}
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
                                      value={values.martialstatus}
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
                                      value={values.res}
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
                                      value={values.mob}
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
                                      value={values.office}
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
                                      value={values.pphash}
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
                                      value={values.emer}
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
                                      value={values.email}
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
                                      value={values.doj}
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
                                      value={values.marks}
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
                                      value={values.natureofjob}
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

                          <TabPane id="addproduct-metadata" tabId="2">
                            <Row>
                              <Col lg={6}>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="meta-title-input"
                                  >
                                    Meta title
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter meta title"
                                    id="meta-title-input"
                                    name="meta_title"
                                  />
                                </div>
                              </Col>

                              <Col lg={6}>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    htmlFor="meta-keywords-input"
                                  >
                                    Meta Keywords
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter meta keywords"
                                    id="meta-keywords-input"
                                    name="meta_keyword"
                                  />
                                </div>
                              </Col>
                            </Row>

                            <div>
                              <Label
                                className="form-label"
                                htmlFor="meta-description-input"
                              >
                                Meta Description
                              </Label>
                              <textarea
                                className="form-control"
                                id="meta-description-input"
                                placeholder="Enter meta description"
                                name="meta_description"
                                rows="3"
                              ></textarea>
                            </div>
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                    <div className="text-end mb-3">
                      <button
                        type="submit"
                        className="btn btn-success w-sm"
                        //   onClick={togglesuccessmodal}
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
