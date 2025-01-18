import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactImage.png" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/4400/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/plImage.jpg" width={200} />
            <div>
              <h5> CS4400 Programming Languages </h5>
              <p className="wd-dashboard-course-title">
                Learn about programming languages
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/2500/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/fundies1Image.jpg" width={200} />
            <div>
              <h5> CS2500 Fundies 1 </h5>
              <p className="wd-dashboard-course-title">
                Learn about fundamentals of programming
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/2550/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/fundies2Image.jpg" width={200} />
            <div>
              <h5> CS2550 Fundies 2 </h5>
              <p className="wd-dashboard-course-title">
                Learn about more fundamentals of programming
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/3000/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/algoImage.jpg" width={200} />
            <div>
              <h5> CS3000 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Learn about how to design algorithms
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/3500/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/oodImage.svg" width={200} />
            <div>
              <h5> CS3500 OOD</h5>
              <p className="wd-dashboard-course-title">
                Learn about object orient programming
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/4500/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/softwareDevImage.jpg" width={200} />
            <div>
              <h5> CS4500 Software Dev</h5>
              <p className="wd-dashboard-course-title">
                Learn about developing software
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
