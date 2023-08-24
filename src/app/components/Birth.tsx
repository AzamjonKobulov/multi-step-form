import React from 'react';

const Birth: React.FC = () => {
  return (
    <div className="space-y-3.5">
      <h2 className="text-2xl text-start mt-10 font-medium">Date of Birth:</h2>
      <form className="space-y-3">
        <div className="flex flex-col items-start space-y-1.5">
          <label htmlFor="date">Birth Date</label>
          <input
            id="date"
            type="date"
            className="w-full px-3 py-2.5 border-2 rounded outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col items-start space-y-1.5">
          <label htmlFor="gender">Address</label>
          <select className="w-full px-3 py-2.5 border-2 rounded outline-none focus:border-blue-500">
            <option value="1">Male</option>
            <option value="1">Female</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Birth;
