import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Label,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { saveAs } from "file-saver";

const ITEMS_PER_PAGE = 10;

const CustomersByDate = () => {
  const url = `${process.env.REACT_APP_BASE_URL}`;
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [customerData, setCustomerData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = customerData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const exportReport = (data, filename) => {
    const csvData = arrayToCSV(data);

    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });

    saveAs(blob, filename);
  };

  const arrayToCSV = (data) => {
    const header = Object.keys(data[0]);
    const csv = [header.join(",")];
    data.forEach((row) => {
      const rowValues = header.map((field) => row[field]);
      csv.push(rowValues.join(","));
    });
    return csv.join("\n");
  };

  const fetchCustomerData = async () => {
    try {
      setLoading(true);

      const formattedStartDate = startDate
        .toLocaleDateString("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .replace(/(\d+)\/(\d+)\/(\d+)/, "$2/$1/$3");
      const formattedEndDate = endDate
        .toLocaleDateString("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .replace(/(\d+)\/(\d+)\/(\d+)/, "$2/$1/$3");

      const fullUrl = `${url}/checkup/get-all-checkup-data?startDate=${formattedStartDate}&endDate=${formattedEndDate}`;
      console.log(fullUrl);

      const response = await Axios.get(fullUrl);
      console.log(response);
      // setCustomerData(response.data); // Assuming the data is in the response's data property
    } catch (error) {
      console.error("Error fetching customer data", error);
      // Handle error state or display an error message
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (date, field) => {
    if (field === "start") {
      setStartDate(date);
    } else if (field === "end") {
      setEndDate(date);
    }
  };

  document.title = "Report by Date";

  return (
    <>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            grandParent="Setup"
            parent="Reports"
            child="Date Wise Reports"
          />
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader className="d-flex justify-content-between align-items-center">
                  <h4 className="card-title mb-0">Reports by Date Range</h4>
                  <Row className="align-items-center">
                    <Col className="lg-auto">
                      
                    </Col>
                    <Col className="lg-auto">
                      <DatePicker
                        className="form-control"
                        selected={endDate}
                        onChange={(date) => handleDateChange(date, "end")}
                        dateFormat="dd/MM/yyyy" // Set the desired date format
                        placeholderText="Select End Date"
                      />
                    </Col>

                    <Col className="lg-auto">
                      <Link
                        className="btn btn-primary add-btn me-1"
                        onClick={fetchCustomerData}
                        id="create-btn"
                      >
                        Apply
                      </Link>
                    </Col>
                    <Col className="lg-auto">
                      <Link
                        className="btn btn-primary add-btn me-1"
                        onClick={() =>
                          exportReport(currentItems, "customer_report.csv")
                        }
                        id="create-btn"
                      >
                        Export Report
                      </Link>
                    </Col>
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
                            <th className="name">Name</th>
                            <th className="name">Form 32</th>
                            <th className="name">Form 33 Health</th>
                            <th className="name">Health Card.</th>
                            <th className="name">Medical Check Up</th>
                          </tr>
                        </thead>

                        <tbody className="list form-check-all">
                          {currentItems
                            ? currentItems.map((customer, index) => (
                                <tr key={customer.id}>
                                  <td>{index + 1}</td>
                                  <td>{customer.username}</td>
                                  <td>{customer.email}</td>
                                  <td>{customer.phone}</td>
                                  <td>
                                    {new Date(
                                      customer.createdAt
                                    ).toLocaleDateString("en-US", {
                                      year: "numeric",
                                      month: "short",
                                      day: "numeric",
                                    })}
                                  </td>
                                  <td>
                                    {customer.active ? "Active" : "Inactive"}
                                  </td>
                                </tr>
                              ))
                            : null}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <Pagination>
                    <PaginationItem>
                      <PaginationLink
                        previous
                        onClick={() =>
                          setCurrentPage((prev) =>
                            prev === 1 ? prev : prev - 1
                          )
                        }
                      />
                    </PaginationItem>
                    {Array.from({
                      length: Math.ceil(customerData.length / ITEMS_PER_PAGE),
                    }).map((_, index) => (
                      <PaginationItem
                        key={index + 1}
                        active={index + 1 === currentPage}
                      >
                        <PaginationLink onClick={() => paginate(index + 1)}>
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationLink
                        next
                        onClick={() =>
                          setCurrentPage((prev) =>
                            prev ===
                            Math.ceil(customerData.length / ITEMS_PER_PAGE)
                              ? prev
                              : prev + 1
                          )
                        }
                      />
                    </PaginationItem>
                  </Pagination>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CustomersByDate;
