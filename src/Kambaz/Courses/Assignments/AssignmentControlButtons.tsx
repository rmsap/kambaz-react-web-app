import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
export default function AssignmentControlButtons({
  assignmentId,
  setAssignmentId,
  setShow,
}: {
  assignmentId: string;
  setAssignmentId: (assignmentId: string) => void;
  setShow: (show: boolean) => void;
}) {
  return (
    <div className="float-end">
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={() => {
          setShow(true);
          setAssignmentId(assignmentId);
        }}
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
