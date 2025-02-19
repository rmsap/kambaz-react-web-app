import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

export default function CourseNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = [
    { label: "Home", path: `/Kambaz/Courses/${cid}/Home` },
    { label: "Modules", path: `/Kambaz/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Kambaz/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Kambaz/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Kambaz/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Kambaz/Courses/${cid}/Quizzes` },
    { label: "Grades", path: `/Kambaz/Courses/${cid}/Grades` },
    { label: "People", path: `/Kambaz/Courses/${cid}/People` },
  ];
  return (
    <ListGroup
      id="wd-courses-navigation"
      className="wd list-group fs-5 rounded-0"
    >
      {links.map((link) => (
        <ListGroup.Item
          key={link.path}
          as={Link}
          to={link.path}
          className={`
              ${
                pathname.includes(link.label)
                  ? "list-group-item active border border-0"
                  : "list-group-item text-danger border border-0"
              }`}
        >
          <br />
          {link.label}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
