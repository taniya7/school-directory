import { Link } from "react-router-dom";
import { SchoolIcon, PlusIcon } from "lucide-react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <SchoolIcon className="h-8 w-8 text-blue-600" />
              <Link
                to="/"
                className="ml-2 text-md md:text-2xl font-bold text-gray-800"
              >
                School Directory
              </Link>
            </div>
            <nav className="flex space-x-2 md:space-x-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Schools
              </Link>
              <Link
                to="/add"
                className="flex items-center bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                <PlusIcon className="h-4 w-4 mr-1" />
                Add School
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="bg-white shadow-inner mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} School Directory. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
