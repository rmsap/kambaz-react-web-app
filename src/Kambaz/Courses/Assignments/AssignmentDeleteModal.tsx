import { Modal, Button } from "react-bootstrap";
export default function AssignmentDeleteModal({
  show,
  handleClose,
  dialogTitle,
  assignmentId,
  deleteAssignment,
}: {
  show: boolean;
  handleClose: () => void;
  dialogTitle: string;
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            deleteAssignment(assignmentId);
            handleClose();
          }}
        >
          Yes
        </Button>
      </Modal.Body>
    </Modal>
  );
}
