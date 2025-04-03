import * as enrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {
  app.delete("/api/enrollments/:userId/:courseId", async (req, res) => {
    const { userId, courseId } = req.params;
    const status = await enrollmentsDao.unEnrollUserInCourse(userId, courseId);
    res.send(status);
  });

  app.post("/api/enrollments/:userId/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
    const enrollment = enrollmentsDao.enrollUserInCourse(userId, courseId);
    res.send(enrollment);
  });
}
