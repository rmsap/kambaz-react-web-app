import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Card, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ProtectedContent from "../Account/ProtectedContent";
import { addCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { addEnrollment, deleteEnrollment } from "../Courses/enrollmentsReducer";
import * as userClient from "../Account/client";
import * as courseClient from "../Courses/client";

export default function Dashboard({
  course,
  setCourse,
}: {
  course: any;
  setCourse: (course: any) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [allCourses, setAllCourses] = useState([]);
  const dispatch = useDispatch();

  const fetchAllCourses = async () => {
    setAllCourses(await courseClient.fetchAllCourses());
  };

  const addNewCourse = async (course: any) => {
    const newCourse = await userClient.createCourse(course);
    dispatch(addCourse(newCourse));
  };

  const deleteCrs = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    dispatch(deleteCourse(courseId));
  };

  const updateCrs = async (course: any) => {
    const updatedCourse = await courseClient.updateCourse(course);
    dispatch(updateCourse(updatedCourse));
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  return (
    <div className="p-4" id="wd-dashboard">
      <Button
        variant="primary"
        className="float-end"
        onClick={() => setShowAll(!showAll)}
      >
        Enrollments
      </Button>
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <ProtectedContent>
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={() =>
              addNewCourse({ name: courseName, description: courseDescription })
            }
          >
            Add
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={() =>
              updateCrs({
                ...course,
                name: courseName,
                description: courseDescription,
              })
            }
            id="wd-update-course-click"
          >
            Update
          </button>
        </h5>
        <br />
        <FormControl
          defaultValue={course.name}
          className="mb-2"
          onChange={(e) => setCourseName(e.target.value)}
        />
        <FormControl
          defaultValue={course.description}
          onChange={(e) => setCourseDescription(e.target.value)}
        />
        <hr />
      </ProtectedContent>
      <h2 id="wd-dashboard-published">
        Published Courses ({showAll ? allCourses.length : courses.length})
      </h2>
      <hr />
      <div className="row" id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {showAll
            ? allCourses.map((course: any) => (
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                  <Card>
                    {!courses.includes(course) ? (
                      <Link
                        to={`/Kambaz/Dashboard`}
                        className="wd-dashboard-course-link text-decoration-none text-dark"
                      >
                        <Card.Img
                          src="/images/reactImage.png"
                          variant="top"
                          width="100%"
                          height={160}
                        />
                        <Card.Body className="card-body">
                          <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                            {course.name}{" "}
                          </Card.Title>
                          <Card.Text
                            className="wd-dashboard-course-description overflow-hidden"
                            style={{ height: "100px" }}
                          >
                            {course.description}{" "}
                          </Card.Text>
                          <Button variant="primary"> Go </Button>
                          {courses.includes(course) ? (
                            <Button
                              variant="danger"
                              className="ms-1"
                              onClick={() =>
                                dispatch(
                                  deleteEnrollment({
                                    user: currentUser._id,
                                    course: course._id,
                                  })
                                )
                              }
                            >
                              Unenroll
                            </Button>
                          ) : (
                            <Button
                              variant="success"
                              className="ms-1"
                              onClick={() =>
                                dispatch(
                                  addEnrollment({
                                    user: currentUser._id,
                                    course: course._id,
                                  })
                                )
                              }
                            >
                              Enroll
                            </Button>
                          )}
                          <ProtectedContent>
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                deleteCrs(course._id);
                              }}
                              className="btn btn-danger float-end"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>
                            <button
                              id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end"
                            >
                              Edit
                            </button>
                          </ProtectedContent>
                        </Card.Body>
                      </Link>
                    ) : (
                      <Link
                        to={`/Kambaz/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark"
                      >
                        <Card.Img
                          src="/images/reactImage.png"
                          variant="top"
                          width="100%"
                          height={160}
                        />
                        <Card.Body className="card-body">
                          <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                            {course.name}{" "}
                          </Card.Title>
                          <Card.Text
                            className="wd-dashboard-course-description overflow-hidden"
                            style={{ height: "100px" }}
                          >
                            {course.description}{" "}
                          </Card.Text>
                          <Button variant="primary"> Go </Button>
                          {courses.includes(course) ? (
                            <Button
                              variant="danger"
                              className="ms-1"
                              onClick={() =>
                                dispatch(
                                  deleteEnrollment({
                                    user: currentUser._id,
                                    course: course._id,
                                  })
                                )
                              }
                            >
                              Unenroll
                            </Button>
                          ) : (
                            <Button
                              variant="success"
                              className="ms-1"
                              onClick={() =>
                                dispatch(
                                  addEnrollment({
                                    user: currentUser._id,
                                    course: course._id,
                                  })
                                )
                              }
                            >
                              Enroll
                            </Button>
                          )}
                          <ProtectedContent>
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                deleteCrs(course._id);
                              }}
                              className="btn btn-danger float-end"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>
                            <button
                              id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end"
                            >
                              Edit
                            </button>
                          </ProtectedContent>
                        </Card.Body>
                      </Link>
                    )}
                  </Card>
                </Col>
              ))
            : courses.map((course: any) => (
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                  <Card>
                    <Link
                      to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <Card.Img
                        src="/images/reactImage.png"
                        variant="top"
                        width="100%"
                        height={160}
                      />
                      <Card.Body className="card-body">
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                          {course.name}{" "}
                        </Card.Title>
                        <Card.Text
                          className="wd-dashboard-course-description overflow-hidden"
                          style={{ height: "100px" }}
                        >
                          {course.description}{" "}
                        </Card.Text>
                        <Button variant="primary"> Go </Button>
                        {courses.includes(course) ? (
                          <Button
                            variant="danger"
                            className="ms-1"
                            onClick={() =>
                              dispatch(
                                deleteEnrollment({
                                  user: currentUser._id,
                                  course: course._id,
                                })
                              )
                            }
                          >
                            Unenroll
                          </Button>
                        ) : (
                          <Button
                            variant="success"
                            className="ms-1"
                            onClick={() =>
                              dispatch(
                                addEnrollment({
                                  user: currentUser._id,
                                  course: course._id,
                                })
                              )
                            }
                          >
                            Enroll
                          </Button>
                        )}
                        <ProtectedContent>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCrs(course._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </button>
                        </ProtectedContent>
                      </Card.Body>
                    </Link>
                  </Card>
                </Col>
              ))}
        </div>
      </div>
    </div>
  );
}
