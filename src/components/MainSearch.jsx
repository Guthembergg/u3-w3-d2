import { useState } from "react";
import { Container, Row, Col, Form, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
import { getJobAction } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const numberSelect = useSelector((state) => state.favourite.content.length);
  const realJobs = useSelector((state) => state.data.array);
  const dispatch = useDispatch();

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(getJobAction(baseEndpoint, query));
  };

  return (
    <Container>
      <Row>
        <Col
          xs={10}
          className="mx-auto my-3 d-flex justify-content-between align-items-center"
        >
          <h1>Remote Jobs Search</h1>
          <Link to={"/favourites"}>
            <HeartFill></HeartFill>
            <Badge variant="primary">{numberSelect}</Badge>
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {realJobs.map((jobData, i) => (
            <Job key={jobData._id} data={jobData} i={i} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
