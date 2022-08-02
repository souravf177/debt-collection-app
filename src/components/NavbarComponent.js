import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import "./NavbarComponent.css";

function NavbarComponent() {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  if (!user) {
    return null;
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Receeve</Navbar.Brand>
          <Nav className="me-auto">
            <Nav style={{ margin: "1rem" }}>
              <Link to="/dashboard">Dashboard</Link>{" "}
            </Nav>
            <Nav style={{ margin: "1rem" }}>
              <Link to="/accounts">Accounts</Link>
            </Nav>
          </Nav>
          <div className="p-4 box mt-3 text-center">
            Welcome {(user && user.displayName) || user.email}
          </div>
          <div className="d-grid gap-2">
            <button onClick={handleLogout}>Log out</button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
