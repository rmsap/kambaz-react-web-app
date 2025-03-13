import ProtectedContent from "../../Account/ProtectedContent";
import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill me-3">
        <Modules />
      </div>
      <ProtectedContent>
        <div className="d-none d-xl-block">
          <CourseStatus />
        </div>
      </ProtectedContent>
    </div>
  );
}
