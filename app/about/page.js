import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Scout Group</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Euxton Methodist Scouts is a vibrant and active scout group serving the local community
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are committed to providing young people with opportunities to grow, be safe, and most importantly, to have fun!
                Our group focuses on developing character, leadership skills, and a love for the outdoors.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Based in the village of Euxton in the North West of England, we are part of the wider Scouting movement
                that has been helping young people develop skills for life for over 100 years.
              </p>
              <p className="text-lg text-gray-600">
                We generally meet at Euxton Methodist Church Hall but also get out and about for various activities,
                camps, and adventures. We keep all scout parents updated with weekly emails about upcoming events.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What We Do</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Outdoor activities and camping</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Skill development and badges</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Team building and leadership</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Community service projects</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Fun games and activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scout Sections Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Scout Sections</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We have sections for young people of all ages, each designed to provide age-appropriate
              challenges and opportunities for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/about/sections/squirrels" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Squirrels (4-6 years)
                </h3>
                <p className="text-gray-600 mb-4">
                  Our youngest members start their scouting journey with fun activities, games, and gentle
                  introduction to outdoor experiences.
                </p>
                <span className="text-blue-600 font-medium group-hover:underline">Learn More →</span>
              </div>
            </Link>

            <Link href="/about/sections/beavers" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Beavers (6-8 years)
                </h3>
                <p className="text-gray-600 mb-4">
                  Beavers explore the world around them, make new friends, and learn through play and adventure.
                </p>
                <span className="text-blue-600 font-medium group-hover:underline">Learn More →</span>
              </div>
            </Link>

            <Link href="/about/sections/cubs" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Cubs (8-10½ years)
                </h3>
                <p className="text-gray-600 mb-4">
                  Cubs develop new skills, take on challenges, and work together on exciting projects and activities.
                </p>
                <span className="text-blue-600 font-medium group-hover:underline">Learn More →</span>
              </div>
            </Link>

            <Link href="/about/sections/scouts" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Scouts (10½-14 years)
                </h3>
                <p className="text-gray-600 mb-4">
                  Scouts take on bigger challenges, develop leadership skills, and plan their own adventures.
                </p>
                <span className="text-blue-600 font-medium group-hover:underline">Learn More →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">How Can My Child Join?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We welcome new members throughout the year! Contact us to find out about availability
            in your child's age group and arrange a visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}