import React, { useState } from 'react';

const UpcomingClasses = () => {
  const initialClasses = [
    { id: 1, className: 'UI/UX Designing', status: 'Live', time: '0:54', staffName: 'Suriya R', action: 'Join now' },
    { id: 2, className: 'Graphic Designing', status: '', time: '2:40:34', staffName: 'Priya Sweety', action: '' },
    { id: 3, className: 'Design Hierarchy', status: '', time: '21st June 10am', staffName: 'Leslie Alexander', action: 'Book now' },
    { id: 4, className: 'Basics of Frontend', status: '', time: '21st June 4pm', staffName: 'Courtney Henry', action: '' },
    { id: 5, className: 'Graphic Designing', status: '', time: '22nd June 10am', staffName: 'Jerome Bell', action: '' },
    { id: 6, className: 'Graphic Designing', status: '', time: '23rd June 11am', staffName: 'Arlene McCoy', action: 'Book now' },
    { id: 7, className: 'Graphic Designing', status: '', time: '23rd June 11am', staffName: 'Arlene McCoy', action: 'Book now' },
  ];

  const [classes, setClasses] = useState(initialClasses);
  const [showBookedOnly, setShowBookedOnly] = useState(false);
  const [timerClassId, setTimerClassId] = useState(null);

  const handleBookNow = (classId) => {
    setTimerClassId(classId);
    setTimeout(() => {
      alert('Timer ended for class ' + classId);
    }, 5000);
  };

  const filteredClasses = showBookedOnly
    ? classes.filter((cls) => cls.status === 'Live' || cls.time.includes(':'))
    : classes;

  return (
    <div className="bg-white p-4 mt-3 rounded-sm border border-gray-200 flex-1">
      <div className="flex justify-between items-center">
        <strong className="text-gray-700 font-medium">Upcoming Classes</strong>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={showBookedOnly}
            onChange={(e) => setShowBookedOnly(e.target.checked)}
          />
          <span className="ml-2 text-gray-700">Booked only</span>
        </label>
      </div>
      <div className="border-t border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th className="p-2 text-left">Class name</th>
              <th className="p-2 text-left">Staff name</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Time</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredClasses.map((cls) => (
              <tr key={cls.id} className="border-t border-gray-200">
                <td className="p-2">{cls.className}</td>
                <td className="p-2">{cls.staffName}</td>
                <td className="p-2">
                  <span className={`inline-block px-2 py-1 text-xs font-semibold text-white rounded-full ${cls.status === 'Live' ? 'bg-red-500' : ''}`}>
                    {cls.status}
                  </span>
                </td>
                <td className="p-2">{cls.time}</td>
                <td className="p-2">
                  {cls.action ? (
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleBookNow(cls.id)}
                    >
                      {cls.action}
                    </button>
                  ) : (
                    <span className="text-gray-500">Unavailable</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingClasses;
