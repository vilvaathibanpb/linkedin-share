// ProfileList.js
import React from 'react';

const ProfileList = ({ profiles }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-yellow-500 mb-10">Profile List</h2>
      <ul className="list-disc">
        {profiles.map((profile, index) => (
          <li key={index} className="mb-10">
            <div className='flex justify-between items-center w-full md:w-1/2'>

            <h3 className="text-xl font-semibold">{profile.name.toUpperCase()}</h3>
            <div className="flex items-center space-x-2">
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline flex"
              >
                <img height={25} width={25} className='mr-4' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png' />LinkedIn Profile
              </a>
            </div>
            </div>
            <p className="text-green-400 font-bold">{profile.position}</p>
            <p className="text-pink-400 font-bold">{profile.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;
