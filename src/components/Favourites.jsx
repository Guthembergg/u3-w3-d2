import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Row, Col, Badge, Button } from "react-bootstrap";
import { HouseFill, X } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Favourites = () => {
  const content = useSelector((state) => state.favourite.content);
  const dispatch = useDispatch();
  function createMarkup(value) {
    return {
      __html: value,
    };
  }
  return (
    <>
      <Row className="d-flex align-items-center justify-content-center w-100 ">
        <h2 className="m-3 mb-5 mt-5 ml-5 ">Your favourites</h2>
        <Link to="/">
          <HouseFill />
        </Link>
      </Row>

      <ListGroup>
        {content.map((el, i) => {
          return (
            <ListGroup.Item key={`key-${i}`}>
              <Row className="flex-d align-items-center">
                {" "}
                <Badge
                  className="ml-3 first"
                  variant="secondary"
                  style={{ fontWeight: "700", fontSize: "20px" }}
                >
                  {i + 1}
                </Badge>
                <Col className="ml-3 d-flex justify-content-around align-items-center position-relative">
                  <div className="starting">
                    <p className="p-0 m-0" style={{ fontWeight: "700" }}>
                      {el.title}
                    </p>
                    <p>
                      <Link to={`/${el.company_name}`}>{el.company_name}</Link>{" "}
                      - {el.job_type}
                    </p>
                  </div>

                  <div className="middle ">
                    <a href={el.url} alt="link">
                      Webpage
                    </a>
                    <p>
                      <Link to={`/description/${i}`}>Full job description</Link>
                    </p>
                  </div>

                  <div className="ending">
                    <p>{el.candidate_required_location}</p>
                  </div>
                  {/* <p dangerouslySetInnerHTML={createMarkup(el.description)}></p> */}
                </Col>
                <Button
                  className="mr-5"
                  variant="danger"
                  type="submit"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE",
                      payload: el,
                    });
                    dispatch({
                      type: "REMOVE_ID",
                      payload: el._id,
                    });
                  }}
                >
                  X
                </Button>
              </Row>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
};

export default Favourites;
