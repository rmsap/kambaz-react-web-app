import * as db from "../../Database";
import AssignmentControls from "./AssignmentControls";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";
import { Link, useParams } from "react-router";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <br />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <MdOutlineArrowDropDown className="me-2 fs-3" /> ASSIGNMENTS
            <div className="float-end">
              <div className="wd-grid-col-15">
                <IoEllipsisVertical className="fs-4" />
              </div>
              <div className="wd-grid-col-15">
                <BsPlus className="h3" />
              </div>
              <div className="wd-rounded-corners-all-around wd-border-thin wd-border-grey wd-border-solid wd-grid-col-70">
                40% of total
              </div>
            </div>
          </div>
          <ListGroup className="wd-assignments rounded-0">
            {assignments
              .filter((assignment) => assignment.course === cid)
              .map((assignment) => (
                <ListGroup.Item className="wd-assignment p-3 ps-1">
                  <div className="wd-grid-row">
                    <div className="wd-grid-col-7-left">
                      <BsGripVertical className="me-2 fs-3" />
                    </div>
                    <div className="wd-grid-col-7-left">
                      <LuNotebookPen className="me-2 fs-3 wd-icon-green" />
                    </div>
                    <div className="wd-grid-col-7-right">
                      <AssignmentControlButtons />
                    </div>
                    <div className="wd-grid-col-79">
                      <Link
                        to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                        id="wd-assignment-link"
                        className="text-dark wd-no-decoration"
                      >
                        <strong>{assignment.title}</strong>
                      </Link>
                      <br />
                      <small className="text-secondary">
                        <small className="text-danger">
                          {assignment.modules}
                        </small>{" "}
                        | <strong>Not available until</strong>{" "}
                        {assignment.available} | <br />
                        <strong>Due</strong> {assignment.due} |{" "}
                        {assignment.points} points
                      </small>
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
