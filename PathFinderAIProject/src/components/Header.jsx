import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../features/dashboard/DashboardSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const queryClient = useQueryClient();
  const user = useSelector((state) => state.userState.user);
  // console.log(user);

  const handleLogout = () => {
    navigate("/");
    dispatch(logoutUser());
    // queryClient.removeQueries();
  };

  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end mr-8">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <button
              className="btn btn-xs btn-outline btn-primary"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign in
            </Link>
            {/* <Link to="/signup" className="link link-hover text-xs sm:text-sm">
              Create Account
            </Link> */}
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
