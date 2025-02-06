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

export default function AssignmentEditor() {
  return (
    <Container id="wd-assignments-editor">
      <Form>
        <FormGroup className="mb-3" controlId="wd-name">
          <FormLabel>Assignment Name</FormLabel>
          <FormControl type="text" value={"A1"} />
        </FormGroup>
        <FormGroup className="mb-3" controlId="wd-description">
          <FormControl as="textarea" rows={3} />
        </FormGroup>
        <Form.Group as={Row} className="mb-3" controlId="wd-points">
          <Form.Label column sm={2} className="wd-aligned-right">
            Points
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" value="100" />
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
            <FormControl type="text" value={"Everyone"} />
            <br />
            <strong>Due</strong>
            <InputGroup>
              <FormControl type="text" value={"February 12, 2024, 11:59 PM"} />
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
                    value={"February 5, 2024, 12:00 AM"}
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
                    value={"February 5, 2024, 12:00 AM"}
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
      >
        Save
      </Button>
      <Button
        variant="secondary"
        size="lg"
        className="me-1 float-end"
        id="wd-save-btn"
      >
        Cancel
      </Button>
    </Container>
  );
}
