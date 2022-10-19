import { Card } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "500px", minWidth: "600px" }}
      >
        <Card>
          <Card.Body>
            <Card.Text>
              Welcome to demo on ReactJS (v18) Jwt Authentication with HTTP Only
              cookie
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Home;
