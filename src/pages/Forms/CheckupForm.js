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

  const { GetCompany, GetCompanybyId, setNewCheckupName, getCheckupType } = useContext(SignContext);

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

  const [checkupName, setCheckupName] = useState(null)

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

  const handleSaveCompanyAndLocation = async (val) => {
    console.log(val);

    setComapny(val.companyName);


    console.log(val.companyName)
    console.log(company);

    setLocation(val.companyLocation);
  };

  // Creating schema
  const schema = Yup.object().shape({
    checkupName: Yup.string().required("checkupName is a required "),
    checkupNumber: Yup.string().required("Number  is a required "),
    checkupDate: Yup.string().required("Date is a required "),
    checkupType: Yup.string().required("checkupType is a required "),
  });



  const addCheckupDetails = async (val) => {

    console.log(val)

    setCheckupType(val.checkupType)

    const response = await setNewCheckupName({ val, company, location });

    console.log(response);

    setCheckupName(response._id);

    console.log(response.data._id);





  }


  const getAllCheckupType = async () => {

    const responce = await getCheckupType();

    console.log(responce);

    setAllCheckupType(responce.data);


  }

  const validationSchema = Yup.object().shape({
    checkupName: Yup.string().required("Checkup Name is required"),

    checkupNumber: Yup.string().required("Number is required"),
    checkupDate: Yup.string().required("Date is required"),
    checkupType: Yup.string().required("checkupType is a required "),

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
    getAllCheckupType();
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

          {/* check up details start */}

          <Row>

            <Col lg={12}>
              <Formik
                validationSchema={schema}
                initialValues={{
                  checkupName: "",
                  checkupNumber: "",
                  checkupDate: "",
                  checkupType: "",
                }}
                onSubmit={(values) => {
                  addCheckupDetails(values)
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
                                    {errors.checkupNumber && touched.checkupNumber && errors.checkupNumber}
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
                                    {errors.checkupDate && touched.checkupDate && errors.checkupDate}
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
                                      {allCheckupType && allCheckupType.length > 0 ? (
                                        allCheckupType.map((type) => (
                                          <option
                                            key={type}
                                            value={type._id}
                                          >
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

{/* 
          <Row>

            <Col lg={12}>
              <Formik
                validationSchema={schema}
                initialValues={{
                  emplyeeName: "",
                  gender: "",
                  age: "",
                  dateOfBirth: "",
                  bloodGroup: ""
                }}
                onSubmit={(values) => {
                  addCheckupDetails(values)
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
                    
                      <form noValidate onSubmit={handleSubmit}>
                

                        <Card>
                          <CardHeader>
                            <Row className="g-1 m-1">
                              <Col className="col-sm">
                                <div className="d-flex justify-content-sm-between">
                                  <h2 className="card-title mb-0 justify-content-sm-start">
                                    <strong>Employee details</strong>
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
                                    Employee name
                                  </label>
                                  <div className="">
                                    <select
                                      className="form-select"
                                      name="emplyeeName"
                                      onBlur={handleBlur}
                                      value={values.emplyeeName}
                                      onChange={handleChange}
                                    >
                                      <option value=""> Name </option>
                                      {allCheckupType && allCheckupType.length > 0 ? (
                                        allCheckupType.map((type) => (
                                          <option
                                            key={type}
                                            value={type._id}
                                          >
                                            {type.checkupType}
                                          </option>
                                        ))
                                      ) : (
                                        <option value="" disabled>
                                          No employee available
                                        </option>
                                      )}
                                    </select>
                                  </div>
                                  <p className="error text-danger">
                                    {errors.emplyeeName &&
                                      touched.emplyeeName &&
                                      errors.emplyeeName}
                                  </p>
                                </Col>

                                <Col sm={3}>
                                  <label
                                    className="form-label mt-3"
                                    htmlFor="product-orders-input"
                                  >
                                    gender
                                  </label>
                                  <div className="">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-orders-input"
                                      name="gender"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.gender}
                                    />
                                  </div>

                                  <p className="error text-danger">
                                    {errors.gender &&
                                      touched.gender &&
                                      errors.gender}
                                  </p>
                                </Col>
                                <Col sm={3}>
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
                                      name="age"
                                      aria-label="orders"
                                      ar
                                      ia-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.age}
                                    />
                                  </div>

                                  <p className="error text-danger">
                                    {errors.age && touched.age && errors.age}
                                  </p>
                                </Col>
                                <Col sm={3}>
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
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.dateOfBirth}
                                    />
                                  </div>

                                  <p className="error text-danger">
                                    {errors.dateOfBirth && touched.dateOfBirth && errors.dateOfBirth}
                                  </p>
                                </Col>

                                <Col sm={3}>
                                  <label
                                    className="form-label mt-3"
                                    htmlFor="product-orders-input"
                                  >
                                    Blood group
                                  </label>
                                  <div className="">
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="product-orders-input"
                                      name="bloodGroup"
                                      aria-label="orders"
                                      aria-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.bloodGroup}
                                    />
                                  </div>

                                  <p className="error text-danger">
                                    {errors.bloodGroup && touched.bloodGroup && errors.bloodGroup}
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

 */}          

          
          <Row>
            <Col lg={12}>
              <Formik
                validationSchema={validationSchema}
                initialValues={{
                  name: "",
                  gender: "",
                  dob: "",
                  age: "",
                  bloodgroup: "",
                }}
                onSubmit={(values) => {
                  // Alert the input values of the form that we filled
                  console.log( values )
                  alert(JSON.stringify(values));
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
                      <form  onSubmit={handleSubmit}>
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
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.name}
                                    >
                                      <option value="">Select</option>
                                      <option value="Mr.">Mr.</option>
                                      <option value="Mrs.">Mrs.</option>
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
                                      type="date"
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






          {/* company employee over */}



          <Row>
            <Col lg={12}>
              <Formik
                validationSchema={validationSchema}
                initialValues={{
                  name: "",
                  gender: "",
                  dob: "",
                  age: "",
                  bloodgroup: "",
                }}
                onSubmit={(values) => {
                  // Alert the input values of the form that we filled
                  alert(JSON.stringify(values));
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
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.name}
                                    >
                                      <option value="">Select</option>
                                      <option value="Mr.">Mr.</option>
                                      <option value="Mrs.">Mrs.</option>
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
                                      type="date"
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

                          <TabPane id="addproduct-general-info" tabId="4">
                            <Investigation />
                          </TabPane>
                          <TabPane id="addproduct-general-info" tabId="5">
                            <OtherDetails />
                          </TabPane>
                          <TabPane id="addproduct-general-info" tabId="6">
                            <Form33 />
                          </TabPane>
                   
                    <div className="text-end mb-3">
                      <button
                        type="submit"
                        className="btn btn-success w-sm"
                      //   onClick={togglesuccessmodal}
                      >
                        Submit
                      </button>
                    </div>
                 

            </Col>
          </Row>
        </Container>
      </div>
    </>

  );
};

export default CheckupForm;
