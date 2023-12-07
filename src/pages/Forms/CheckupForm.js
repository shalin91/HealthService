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

const CheckupForm = () => {
  const [customActiveTab, setcustomActiveTab] = useState("1");

  const { GetCompany, GetCompanybyId } = useContext(SignContext);

  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };

  const [company, setComapny] = useState(null);

  const [allCompany, setAllCompany] = useState([]);

  const [allLocation, setAllLocation] = useState([]);

  const [location, setLocation] = useState(null);

  const [checkupType, setCheckupType] = useState(null);

  const [allCheckupType, setAllCheckupType] = useState([]);

  const [empbyCompandLoc, setEmpbyCompandLoc] = useState([]);

  const [currentEmp, setCurrentEmp] = useState(null);

  const [currentUser, setCurrentUser] = useState(null);

  // const [ allCategory , setAllCategory ] = useState( [] );

  // const [ allDepartment , setAllDepartment ] = useState( [] );

  // const [ category , setCategory ] = useState( null );

  // const [ department , setDepartment ] = useState( null );

  const getcompanies = async () => {
    const res = await GetCompany();
    console.log(res);
    setAllCompany(res.data);
    // setLocation(res.data.companyLocation)
    // setRoles(res);
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

  const handleSaveCompanyAndLocation = async (val) =>{
    
    console.log( val )

    setComapny( val.companyName );

    setLocation( val.companyLocation )

  }

  const validationSchema = Yup.object().shape({
    checkupName: Yup.string().required("Checkup Name is required"),
    no: Yup.string().required("Number is required"),
    date: Yup.string().required("Date is required"),
    type: Yup.string().required("Type is required"),
    name: Yup.string().required("name is required"),
    gender: Yup.string().required("gender is required"),
    age: Yup.string().required("age is required"),
    company: Yup.string().required("Company is required"),
    location: Yup.string().required("Location is required"),
    ecNo: Yup.string().required("EC NO is required"),
    dob: Yup.string().required("dob is required"),
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

  useEffect(() => {
    getcompanies();
  }, []);

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

         
          <Row>

            <Col lg={12}>
              <Formik
                initialValues={{
                  company: "",
                  no: "",
                  date:""
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
                                Company
                              </label>
                              <div className="">
                              <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  name="company"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.company}
                                />
                              </div>
                             
                        
                              <p className="error text-danger">
                                {errors.company &&
                                  touched.company &&
                                  errors.company}
                              </p>
                            </Col>
                            <Col sm={3}>
                              <label
                                className="form-label mt-3"
                                htmlFor="product-orders-input"
                              >
                               No.
                              </label>
                              <div className="">
                              <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  name="no"
                                  aria-label="orders"
                                  ar
                                  ia-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.no}
                                />
                              </div>
                             
                        
                              <p className="error text-danger">
                                {errors.no &&
                                  touched.no &&
                                  errors.no}
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
                                  name="date"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.date}
                                />
                              </div>
                             
                        
                              <p className="error text-danger">
                                {errors.date &&
                                  touched.date &&
                                  errors.date}
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
                                  name="companyLocation"
                                  onBlur={handleBlur}
                                  value={values.type}
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
                                {errors.type &&
                                  touched.type &&
                                  errors.type}
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
                  checkupName: "",
                  no: "",
                  date: "",
                  type: "",
                  name: "",
                  gender: "",
                  age: "",
                  company: "",
                  location: "",
                  ecNo: "",
                  address: "",
                  dob: "",
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
                            <Col sm={4}>
                              <label
                                className="form-label mt-3"
                                htmlFor="product-orders-input"
                              >
                                Check-up Name
                              </label>
                              <div className="">
                                <select
                                  className="form-select"
                                  name="checkupName"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.checkupName}
                                >
                                  <option value="">Select</option>
                                  <option value="Mr.">Mr.</option>
                                  <option value="Mrs.">Mrs.</option>
                                </select>
                              </div>
                              <p className="error text-danger">
                                {errors.checkupName &&
                                  touched.checkupName &&
                                  errors.checkupName}
                              </p>
                            </Col>
                            <Col sm={2}>
                              <label
                                className="form-label mt-3"
                                htmlFor="product-orders-input"
                              >
                                No.
                              </label>
                              <div className="">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  name="no"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.no}
                                />
                              </div>
                              <p className="error text-danger">
                                {errors.no && touched.no && errors.no}
                              </p>
                            </Col>
                            <Col sm={2}>
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
                                  name="date"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.date}
                                />
                              </div>
                              <p className="error text-danger">
                                {errors.date && touched.date && errors.date}
                              </p>
                            </Col>
                            <Col sm={3}>
                              <label
                                className="form-label mt-3"
                                htmlFor="product-orders-input"
                              >
                                Type
                              </label>
                              <div className="">
                                <select
                                  className="form-select"
                                  name="type"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.type}
                                >
                                  <option value="">Select</option>
                                  <option value="Mr.">Mr.</option>
                                  <option value="Mrs.">Mrs.</option>
                                </select>
                              </div>
                              <p className="error text-danger">
                                {errors.type && touched.type && errors.type}
                              </p>
                            </Col>
                          </Row>
                          <Row className="align-items-center g-3">
                            <Col sm={3}>
                              <label
                                className="form-label mt-3"
                                htmlFor="product-orders-input"
                              >
                                Name
                              </label>
                              <div className="">
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="product-orders-input"
                                  //   placeholder="EC No."
                                  name="name"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.name}
                                />
                                <p className="error text-danger">
                                  {errors.name && touched.name && errors.name}
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
                                  value={values.gender}
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
                                  value={values.age}
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
                                  //   placeholder="EC No."
                                  name="dob"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.dob}
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
                                  name="bloodgroup"
                                  aria-label="orders"
                                  aria-describedby="product-orders-addon"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.bloodgroup}
                                />
                                <p className="error text-danger">
                                  {errors.bloodgroup &&
                                    touched.bloodgroup &&
                                    errors.bloodgroup}
                                </p>
                              </div>
                            </Col>
                            <Row className="align-items-center g-3">
                              <Row className="g-1 m-1">
                                <Col className="col-sm">
                                  <div className="d-flex justify-content-sm-between">
                                    <h2 className="card-title mb-0 justify-content-sm-start">
                                      <strong>Job Profile</strong>
                                    </h2>
                                  </div>
                                </Col>
                              </Row>
                              <Col sm={3}>
                                <label
                                  className="form-label mt-3"
                                  htmlFor="product-orders-input"
                                >
                                  Company
                                </label>
                                <div className="">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    name="company"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.company}
                                  />
                                  <p className="error text-danger">
                                    {errors.company &&
                                      touched.company &&
                                      errors.company}
                                  </p>
                                </div>
                              </Col>
                              <Col sm={3}>
                                <label
                                  className="form-label mt-3"
                                  htmlFor="product-orders-input"
                                >
                                  Location
                                </label>
                                <div className="">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
                                    name="location"
                                    aria-label="orders"
                                    aria-describedby="product-orders-addon"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.location}
                                  />
                                  <p className="error text-danger">
                                    {errors.location &&
                                      touched.location &&
                                      errors.location}
                                  </p>
                                </div>
                              </Col>
                              <Col sm={3}>
                                <label
                                  className="form-label mt-3"
                                  htmlFor="product-orders-input"
                                >
                                  EC NO.
                                </label>
                                <div className="">
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-orders-input"
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
                            </Row>
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
                              Vitals & History
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
                              General Exam
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
                              Investigation
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
                              Form-32
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
                              Form-33
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </CardHeader>

                      <CardBody>
                        <TabContent activeTab={customActiveTab}>
                          <TabPane id="addproduct-general-info" tabId="1">
                            <VitalsandHistory />
                          </TabPane>

                          <TabPane id="addproduct-metadata" tabId="2">
                            <GeneralExam />
                          </TabPane>

                          <TabPane id="addproduct-general-info" tabId="3">
                            <Eye />
                          </TabPane>

                          <TabPane id="addproduct-general-info" tabId="4">
                            <Investigation />
                          </TabPane>
                          <TabPane id="addproduct-general-info" tabId="5">
                            <OtherDetails />
                          </TabPane>
                          <TabPane id="addproduct-general-info" tabId="6">
                            <Form33 />
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

export default CheckupForm;
