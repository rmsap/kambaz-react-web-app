import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiCalendar } from "react-icons/bi";

export default function Profile() {
  return (
    <Container id="wd-profile-screen">
      <h3>Profile</h3>
      <Form>
        <FormControl type="text" value={"alice"} className="mb-2" />
        <FormControl type="text" value={"123"} className="mb-2" />
        <FormControl type="text" value={"Alice"} className="mb-2" />
        <FormControl type="text" value={"Wonderland"} className="mb-2" />
        <InputGroup>
          <FormControl type="text" value={"mm/dd/yyyy"} className="mb-2" />
          <InputGroup.Text>
            <BiCalendar />
          </InputGroup.Text>
        </InputGroup>

        <FormControl
          type="text"
          value={"alice@wonderland.com"}
          className="mb-2"
        />
        <FormControl type="text" value={"User"} className="mb-2" />
      </Form>
      <Button variant="danger" className="me-1" id="wd-signout-btn">
        <Link
          to="/Kambaz/Account/Signin"
          className="wd-no-decoration text-dark"
        >
          Sign out
        </Link>
      </Button>
      {/* <input
        defaultValue="alice"
        placeholder="username"
        className="wd-username"
      />
      <br />
      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password"
      />
      <br />
      <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" />
      <br />
      <input
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
      />
      <br />
      <input defaultValue="2000-01-01" type="date" id="wd-dob" />
      <br />
      <input defaultValue="alice@wonderland" type="email" id="wd-email" />
      <br />
      <select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option> <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>{" "}
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <Link to="/Kambaz/Account/Signin">Sign out</Link> */}
    </Container>
  );
}
