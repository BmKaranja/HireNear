import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 underline">About HireNear</h1>
      <div className="text-lg leading-relaxed">
        <div className='flex items-center gap-8 mb-20 mt-20'>
            <img src='/pexels-resumegenius-18848926.jpg' className='w-120 h-100 shadows rounded-2xl shrink-0 abt-img'></img>
            <div>
              <p className="text-gray-700 text-lg leading-relaxed abt">
              Welcome to HireNear, your premier platform for connecting job seekers with local opportunities.
              We believe in bridging the gap between talent and employers in your community.
              </p>
            <hr></hr>
              <Link to='/jobs' className='bg-gray-200 pl-4 pr-4 rounded-2xl text-blue-600 font-semibold hover:bg-blue-900 hover:text-white mt-4 inline-block btns'>
                Jobs →
              </Link>
            </div>
        </div>
        <div className='flex items-center gap-8 mb-20'>
          <div>
            <p className="mb-6 text-gray-700 text-lg leading-relaxed abt">
              Our mission is to make job searching and hiring as seamless as possible, providing tools
              that help you find the perfect match whether you're looking for your next career move or
              seeking to grow your team.
            </p>
            <hr></hr>
            <Link to='/applicants' className='bg-gray-200 pl-4 pr-4 rounded-2xl text-blue-600 font-semibold hover:bg-blue-900 hover:text-white mt-4 inline-block btns'>
                Applicants →
            </Link>

          </div>
          <img src='/pexels-sora-shimazaki-5668863.jpg' className='w-120 h-100 shadows rounded-2xl shrink-0 abt-img'></img>
        </div>
        <div className='flex items-center gap-8 mb-20'>
          <img src='/pexels-kowalievska-1174775.jpg' className='w-120 h-100 shadows rounded-2xl shrink-0 abt-img'></img>
          <p className="mb-6 text-gray-700 text-lg leading-relaxed abt">
            With features like location-based job searches, detailed job listings, and easy application
            processes, HireNear is designed to make the job market more accessible and efficient for everyone.
          </p>
        </div>
        <hr></hr>

        <p className="text-gray-700 text-lg leading-relaxed italic abt mb-10">
          Join our community today and discover opportunities right in your neighborhood!
        </p>
      </div>
      
    </div>
  );
}

export default About;
