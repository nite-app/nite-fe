import React from "react";

function Personal() {
  return (
    <div className="mb-10">
      <p className="font-semibold text-2xl hidden xl:block">Personal</p>
      <div className="mt-6">
        <p className="font-semibold text-lg mb-4">Name</p>
        <div className="flex flex-col xl:flex-row">
          <input
            type="text"
            name="nametxt"
            id=""
            className="p-4 rounded-2xl bg-gray-300 box-border min-w-max text-md mb-2 focus:outline-none xl:mb-0 mr-3 xl:w-8/12"
            placeholder="Name"
          />
          <button className="rounded-2xl p-4 bg-gray-100 focus:outline-none xl:w-4/12">
            <p className="font-semibold text-md">Change name</p>
          </button>
        </div>
      </div>
      <div className="mt-6">
        <p className="font-semibold text-lg mb-4">Email</p>
        <div className="flex flex-col xl:flex-row">
          <input
            type="text"
            name="emailtxt"
            id=""
            className="p-4 rounded-2xl bg-gray-300 box-border min-w-max text-md mb-2 focus:outline-none xl:mb-0 mr-3 xl:w-8/12"
            placeholder="Email"
          />
          <button className="rounded-2xl p-4 bg-gray-100 focus:outline-none xl:w-4/12">
            <p className="font-semibold text-md">Change email</p>
          </button>
        </div>
      </div>
      <div className="mt-6">
        <p className="font-semibold text-lg mb-4">Account Deletion</p>
        <div className="flex flex-col">
          <button className="rounded-2xl p-4 bg-gray-100 focus:outline-none">
            <p className="font-semibold text-md text-red-600">Delete Account</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Personal;
