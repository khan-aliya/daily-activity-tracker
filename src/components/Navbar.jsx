import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <ul className="flex space-x-4">
        <li>
          <Link className="text-blue-600 hover:underline" to="/">Home</Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:underline" to="/activities">Activities</Link>
        </li>
        <li className="ml-auto">
          <Link className="text-green-600 hover:underline" to="/login">Login</Link>
        </li>
        <li>
          <Link className="text-purple-600 hover:underline" to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}
