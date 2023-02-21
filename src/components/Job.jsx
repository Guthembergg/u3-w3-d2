import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { HouseFill, X } from "react-bootstrap-icons";

const Job = ({ data, i }) => {
  const dispatch = useDispatch();
  const array = useSelector((state) => state.favourite.id);
  console.log(array);
  console.log(data);
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9} className="d-flex justify-content-between align-items-center">
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
        {array.includes(data._id) && (
          <HeartFill
            type="submit"
            onClick={() => {
              dispatch({
                type: "REMOVE",
                payload: data,
              });
              dispatch({
                type: "REMOVE_ID",
                payload: data._id,
              });
            }}
          ></HeartFill>
        )}
        {!array.includes(data._id) && (
          <Heart
            type="submit"
            onClick={() => {
              dispatch({ type: "ADD", payload: data });
              dispatch({ type: "ADD_ID", payload: data._id });
            }}
          ></Heart>
        )}
      </Col>
    </Row>
  );
};

export default Job;
