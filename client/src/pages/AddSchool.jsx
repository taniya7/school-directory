import Layout from "../components/Layout";
import SchoolForm from "../components/SchoolForm";

const AddSchool = () => {
  return (
    <Layout>
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900">
              Add New School
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Fill out the form below to add a new school to the database
            </p>
          </div>
          <SchoolForm />
        </div>
      </main>
    </Layout>
  );
};

export default AddSchool;
