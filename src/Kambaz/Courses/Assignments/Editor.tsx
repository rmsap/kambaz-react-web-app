import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  InputGroup,
  Row,
} from "react-bootstrap";
import { BiCalendar } from "react-icons/bi";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const assignment = assignments.find(
    (assignment: any) => assignment.course === cid && assignment._id === aid
  );
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [assignmentDescription, setAssignmentDescription] = useState("");
  const [assignmentAvailable, setAssignmentAvailable] = useState("");
  const [assignmentDue, setAssignmentDue] = useState("");
  const [assignmentPoints, setAssignmentPoints] = useState(0);
  const dispatch = useDispatch();

  // const handleUpdateOrAdd = () => {
  //   return edit
  //     ? dispatch(updateAssignment({ ...assignment }))
  //     : dispatch(
  //         addAssignment({
  //           title: assignmentTitle,
  //           description: assignmentDescription,
  //           available: assignmentAvailable,
  //           due: assignmentDue,
  //           points: assignmentPoints,
  //           course: cid,
  //         })
  //       );
  // };

  return (
    <Container id="wd-assignments-editor">
      <Form>
        <FormGroup className="mb-3" controlId="wd-name">
          <FormLabel>Assignment Name</FormLabel>
          <FormControl
            type="text"
            defaultValue={assignment ? assignment.title : ""}
            onChange={(e) => {
              setAssignmentTitle(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="wd-description">
          <FormControl
            as="textarea"
            rows={3}
            defaultValue={assignment ? assignment.description : ""}
            onChange={(e) => {
              setAssignmentDescription(e.target.value);
            }}
          />
        </FormGroup>
        <Form.Group as={Row} className="mb-3" controlId="wd-points">
          <Form.Label column sm={2} className="wd-aligned-right">
            Points
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              defaultValue={assignment ? assignment.points : 100}
              onChange={(e) => {
                setAssignmentPoints(parseInt(e.target.value));
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="wd-group">
          <Form.Label column sm={2} className="wd-aligned-right">
            Assignment Group
          </Form.Label>
          <Col sm={10}>
            <FormSelect>
              <option selected value="ASSIGNMENTS">
                ASSIGNMENTS
              </option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECTS">PROJECTS</option>
            </FormSelect>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="wd-display-grade-as">
          <Form.Label column sm={2} className="wd-aligned-right">
            Display Grade as
          </Form.Label>
          <Col sm={10}>
            <FormSelect>
              <option selected value="PERCENTAGE">
                Percentage
              </option>
              <option value="POINTS">Points</option>
            </FormSelect>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="wd-submission-type">
          <Form.Label column sm={2} className="wd-aligned-right">
            Submission Type
          </Form.Label>
          <Col sm={10}>
            <div className="wd-border-thin wd-border-grey wd-border-solid wd-smoothed-corners-all-around wd-padding-med">
              <FormSelect>
                <option selected value="ONLINE">
                  Online
                </option>
                <option value="PHYSICAL">Physical</option>
              </FormSelect>
              <br />
              <strong>Online Entry Options</strong>
              <br />
              <Form.Check
                type="checkbox"
                label="Text Entry"
                name="onlineEntryOptions"
              />
              <Form.Check
                type="checkbox"
                label="Website URL"
                name="onlineEntryOptions"
              />
              <Form.Check
                type="checkbox"
                label="Media Recordings"
                name="onlineEntryOptions"
              />
              <Form.Check
                type="checkbox"
                label="Student Annotation"
                name="onlineEntryOptions"
              />
              <Form.Check
                type="checkbox"
                label="File Upload"
                name="onlineEntryOptions"
              />
            </div>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="wd-assign-to">
          <Form.Label column sm={2} className="wd-aligned-right">
            Assign
          </Form.Label>
          <Col
            sm={10}
            className="wd-border-thin wd-border-grey wd-border-solid wd-smoothed-corners-all-around wd-padding-med"
          >
            <strong>Assign to</strong>
            <FormControl type="text" defaultValue={"Everyone"} />
            <br />
            <strong>Due</strong>
            <InputGroup>
              <FormControl
                type="text"
                defaultValue={assignment ? assignment.due : ""}
              />
              <InputGroup.Text>
                <BiCalendar />
              </InputGroup.Text>
            </InputGroup>
            <br />
            <Form.Group as={Row} className="mb-3" controlId="wd-available-from">
              <Col sm={5}>
                <strong>Available from</strong>
                <InputGroup>
                  <FormControl
                    type="text"
                    defaultValue={assignment ? assignment.available : ""}
                    onChange={(e) => {
                      setAssignmentAvailable(e.target.value);
                    }}
                  />
                  <InputGroup.Text>
                    <BiCalendar />
                  </InputGroup.Text>
                </InputGroup>
              </Col>
              <Col sm={5}>
                <strong>Until</strong>
                <InputGroup>
                  <FormControl
                    type="text"
                    defaultValue={assignment ? assignment.due : ""}
                    onChange={(e) => {
                      setAssignmentDue(e.target.value);
                    }}
                  />
                  <InputGroup.Text>
                    <BiCalendar />
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Form.Group>
          </Col>
        </Form.Group>
      </Form>
      <Button
        variant="danger"
        size="lg"
        className="me-1 float-end"
        id="wd-save-btn"
        onClick={() => {
          dispatch(
            addAssignment({
              title: assignmentTitle,
              description: assignmentDescription,
              available: assignmentAvailable,
              due: assignmentDue,
              points: assignmentPoints,
              course: cid,
            })
          );
          setAssignmentTitle("");
          setAssignmentDescription("");
          setAssignmentAvailable("");
          setAssignmentDue("");
          setAssignmentPoints(0);
        }}
      >
        <Link
          to={`/Kambaz/Courses/${cid}/Assignments`}
          className="wd-no-decoration text-light"
        >
          Save
        </Link>
      </Button>
      <Button
        variant="secondary"
        size="lg"
        className="me-1 float-end"
        id="wd-save-btn"
      >
        <Link
          to={`/Kambaz/Courses/${cid}/Assignments`}
          className="wd-no-decoration text-dark"
        >
          Cancel
        </Link>
      </Button>
    </Container>
  );
}
