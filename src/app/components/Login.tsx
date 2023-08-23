import React from 'react';

const Name: React.FC = () => {
  return (
    <div className="space-y-3.5">
      <h2 className="text-2xl text-start mt-10 font-medium">Login Details:</h2>
      <form className="space-y-3">
        <div className="flex flex-col items-start space-y-1.5">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            className="w-full px-3 py-2.5 border-2 rounded outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col items-start space-y-1.5">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="w-full px-3 py-2.5 border-2 rounded outline-none focus:border-blue-500"
          />
        </div>
      </form>
    </div>
  );
};

export default Name;
