import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";

const SchoolCard = ({ school }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={school.image}
          alt={`${school.name} building`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {school.name}
        </h3>
        <div className="flex items-start mb-2">
          <MapPinIcon className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
          <p className="text-gray-600">
            {school.address}, {school.city}, {school.state} {school.zipCode}
          </p>
        </div>
        <div className="flex items-center mb-2">
          <PhoneIcon className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
          <p className="text-gray-600">{school.phone}</p>
        </div>
        <div className="flex items-center">
          <MailIcon className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
          <p className="text-gray-600">{school.email}</p>
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;
