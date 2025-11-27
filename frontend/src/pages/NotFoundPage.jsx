import "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h1>404 Not Found</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </>
  );
};

export default NotFoundPage;
