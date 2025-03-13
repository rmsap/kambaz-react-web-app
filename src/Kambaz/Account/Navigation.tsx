import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.includes("Signin") ? (
        <Link
          to="/Kambaz/Account/Signin"
          id="wd-signin-link"
          className="list-group-item active border border-0"
        >
          Signin
        </Link>
      ) : (
        <></>
      )}
      {links.includes("Signup") ? (
        <Link
          to="/Kambaz/Account/Signup"
          id="wd-signup-link"
          className="list-group-item text-danger border border-0"
        >
          Signup
        </Link>
      ) : (
        <></>
      )}
      {links.includes("Profile") ? (
        <Link
          to="/Kambaz/Account/Profile"
          id="wd-profile-link"
          className="list-group-item text-danger border border-0"
        >
          Profile
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}
