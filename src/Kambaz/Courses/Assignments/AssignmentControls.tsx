import { FaPlus } from "react-icons/fa6";
import { Button, FormControl, FormGroup, InputGroup } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import ProtectedContent from "../../Account/ProtectedContent";

export default function AssignmentControls() {
  const navigate = useNavigate();
  const { cid } = useParams();
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <div className="wd-grid-row">
        <div className="wd-grid-col-60">
          <InputGroup>
            <BiSearch className="h2" />
            <FormGroup
              className="mb-3 float-start"
              controlId="wd-search-assignment"
            >
              <FormControl type="text" placeholder="Search..." />
            </FormGroup>
          </InputGroup>
        </div>
        <ProtectedContent>
          <div className="wd-grid-col-40">
            <Button
              variant="danger"
              size="lg"
              className="me-1 float-end"
              id="wd-new-assignment"
              onClick={() =>
                navigate(`/Kambaz/Courses/${cid}/Assignments/Editor`)
              }
            >
              <FaPlus
                className="position-relative me-2"
                style={{ bottom: "1px" }}
              />
              Assignment
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="me-1 float-end"
              id="wd-add-group"
            >
              <FaPlus
                className="position-relative me-2"
                style={{ bottom: "1px" }}
              />
              Group
            </Button>
          </div>
        </ProtectedContent>
      </div>
    </div>
  );
}
