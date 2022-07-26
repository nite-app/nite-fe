import React from "react";

function Personal() {
  return (
    <div className="mb-10">
      <p className="font-semibold text-2xl hidden xl:block dark:text-white">
        Personal
      </p>
      <div className="mt-6">
        <p className="font-semibold text-lg mb-4 dark:text-neutral-50">Name</p>
        <div className="flex flex-col xl:flex-row">
          <input
            type="text"
            name="nametxt"
            id=""
            className="p-4 rounded-2xl bg-gray-300 box-border min-w-max text-md mb-2 focus:outline-none xl:mb-0 xl:mr-3 xl:w-8/12 dark:bg-zinc-600"
            placeholder="Name"
          />
          <button className="rounded-2xl p-4 bg-gray-100 focus:outline-none xl:w-4/12 dark:bg-zinc-700">
            <p className="font-semibold text-md dark:text-neutral-200">
              Change name
            </p>
          </button>
        </div>
      </div>
      <div className="mt-6">
        <p className="font-semibold text-lg mb-4 dark:text-neutral-50">Email</p>
        <div className="flex flex-col xl:flex-row">
          <input
            type="text"
            name="emailtxt"
            id=""
            className="p-4 rounded-2xl bg-gray-300 box-border min-w-max text-md mb-2 focus:outline-none xl:mb-0 xl:mr-3 xl:w-8/12 dark:bg-zinc-600"
            placeholder="Email"
          />
          <button className="rounded-2xl p-4 bg-gray-100 focus:outline-none xl:w-4/12 dark:bg-zinc-700">
            <p className="font-semibold text-md dark:text-neutral-200">
              Change email
            </p>
          </button>
        </div>
      </div>
      <div className="mt-6">
        <p className="font-semibold text-lg mb-4 dark:text-neutral-50">
          Account Deletion
        </p>
        <div className="flex flex-col">
          <button className="rounded-2xl p-4 bg-red-50 focus:outline-none dark:bg-zinc-700">
            <p className="font-semibold text-md text-red-600 dark:text-red-400">
              Delete Account
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Personal;
