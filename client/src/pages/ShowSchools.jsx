import { useState, useEffect } from "react";
import { SearchIcon } from "lucide-react";
import { useSchoolStore } from "../utils/schoolsData";
import SchoolCard from "../components/SchoolCard";
import Layout from "../components/Layout";

const ShowSchools = () => {
  const schools = useSchoolStore((state) => state.schools);
  const fetchSchools = useSchoolStore((state) => state.fetchSchools);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchSchools();
  }, [fetchSchools]);

  const filteredSchools = schools.filter(
    (school) =>
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.state.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Layout>
      <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <div>
              <p className="mt-2 text-lg text-gray-600">
                Browse our comprehensive list of schools
              </p>
            </div>
          </div>
          <div className="mb-8">
            <div className="relative max-w-md mx-auto sm:mx-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search schools by name or location..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          {filteredSchools.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No schools found matching your search criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSchools.map((school) => (
                <SchoolCard key={school.id} school={school} />
              ))}
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default ShowSchools;
