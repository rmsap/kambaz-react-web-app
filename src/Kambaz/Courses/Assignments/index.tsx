import AssignmentControls from "./AssignmentControls";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";
import { Link, useParams } from "react-router";
import ProtectedContent from "../../Account/ProtectedContent";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment, setAssignments } from "./reducer";
import { useState, useEffect } from "react";
import AssignmentDeleteModal from "./AssignmentDeleteModal";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const [show, setShow] = useState(false);
  const [assignmentId, setAssignmentId] = useState("");
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(
      cid as string
    );
    dispatch(setAssignments(assignments));
  };

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

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
            <ProtectedContent>
              <BsGripVertical className="me-2 fs-3" />
            </ProtectedContent>
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
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <ListGroup.Item className="wd-assignment p-3 ps-1">
                  <div className="wd-grid-row">
                    <div className="wd-grid-col-7-left">
                      <ProtectedContent>
                        <BsGripVertical className="me-2 fs-3" />
                      </ProtectedContent>
                    </div>
                    <div className="wd-grid-col-7-left">
                      <LuNotebookPen className="me-2 fs-3 wd-icon-green" />
                    </div>
                    <ProtectedContent>
                      <div className="wd-grid-col-7-right">
                        <AssignmentControlButtons
                          assignmentId={assignment._id}
                          setAssignmentId={setAssignmentId}
                          setShow={setShow}
                        />
                      </div>
                    </ProtectedContent>
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
      <AssignmentDeleteModal
        show={show}
        handleClose={handleClose}
        dialogTitle="Delete Assignment"
        assignmentId={assignmentId}
        deleteAssignment={(assignmentId) => {
          removeAssignment(assignmentId);
        }}
      />
    </div>
  );
}
