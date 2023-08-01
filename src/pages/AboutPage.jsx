import React from "react";

function AboutPage() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex text-justify flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                GNDEC Alumni: Uniting Success
              </h2>
              <p className="leading-relaxed text-base">
                We are the Alumni of Guru Nanak Dev Engineering College,
                Ludhiana India. The engineers produced by GNDEC are successfully
                employed in India & many countries all over the world making
                significant contributions to the modern economy. This website is
                the start of an effort to re-unite and recognize the GNDEC
                Alumni from India and other nations, where they reside.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Nurturing Engineers since 1956
              </h2>
              <p className="leading-relaxed text-base">
                Guru Nanak Dev Engineering College was established in 1956 by
                the Nankana Sahib Education Trust, honoring the birthplace of
                Guru Nanak Dev Ji, with a motto to uplift the vast rural
                villages of Punjab and rest of India. The college set aside
                majority of admissions every year for the students from rural
                areas. The college foundation stone was laid by Late Dr.
                Rajendra Prasad Ji, the First President of India. Nearly 10,000
                graduate and 3000 Post Graduate Engineers have graduated from
                this college since its formation and this tradition continues
                successfully.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Who made this website?
              </h2>
              <p className="leading-relaxed text-base">
                In 2023, the graduating alumni batch from 1973 made this effort
                to develop a GENCO Alumni Association website to memorialize all
                the past students in one place and connect them to a common
                database for reference and collective memory of this great
                institution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
