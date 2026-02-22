import { Button } from "./Button";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

function Navbar() {
  const { user, logout, authLoading } = useAuth();

  if (authLoading) return null;

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-grey-900 text-white">
      <h1 className="text-xl font-bold text-blue-600">Dashkit</h1>
      <div className="flex items-center gap-3">
        <Button className="bg-transparent hover:bg-black/10 text-lg">
          🌙
        </Button>
        {!user ?(
          <Link to="/login">
            <Button>
              Login
            </Button>
          </Link>
        ):(
          <Button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700"
          >
            Logout
          </Button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;