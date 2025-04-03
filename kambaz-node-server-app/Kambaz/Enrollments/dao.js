import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  const newEnrollment = { _id: uuidv4(), user: userId, course: courseId };
  enrollments.push(newEnrollment);
  Database.enrollments = enrollments;
  return newEnrollment;
}

export function unEnrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.filter(
    (enrollment) => enrollment.course !== courseId && enrollment.user !== userId
  );
}
