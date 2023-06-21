import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    React.useEffect(() => {
        AOS.init({ once: true });
      }, []);
  return (
    <div className="justify-center flex flex-col md:flex-row mb-4 md:gap-5">
      <div className="stats shadow " data-aos="fade-up">
        <div className="stat my-1">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-primary">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat my-1">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat my-1">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="https://freesvg.org/storage/img/thumb/wheel3.png" alt="Avatar" />
              </div>
            </div>
          </div>
          <div className="stat-value">96%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">48 tasks remaining</div>
        </div>
      </div>

      <div className="stats shadow" data-aos="fade-up">
        <div className="stat place-items-center my-1">
          <div className="stat-title">Downloads</div>
          <div className="stat-value">311K</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center my-1">
          <div className="stat-title">Users</div>
          <div className="stat-value text-secondary">4,2000</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center my-1">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,2500</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default About;
