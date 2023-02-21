import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

function createMarkup(value) {
  return {
    __html: value,
  };
}

const Description = () => {
  const params = useParams();
  const data = useSelector((state) => state.favourite.content);

  return (
    <div>
      {
        <>
          <div className="d-flex justify-content-center align-items-center m-3 ">
            <Link to={"/favourites"}>
              <ArrowLeft></ArrowLeft>
            </Link>

            <h2 className="ml-5">Job description</h2>
          </div>

          <p
            className="m-4"
            dangerouslySetInnerHTML={createMarkup(data[params.i].description)}
          ></p>
        </>
      }
    </div>
  );
};
export default Description;
