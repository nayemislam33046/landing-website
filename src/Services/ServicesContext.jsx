import React from "react";
const ServicesContext = ({ icon, title, text }) => {
  return (
    <div>
      <span className="text-5xl text-green-600">{icon}</span>
      <p className="text-xl font-semibold my-2">{title}</p>
      <p className="text-gray-500 text-sm">{text}</p>
    </div>
  );
};
export default ServicesContext;