import Link from 'next/link';
import Image from 'next/image';

export default function BeaversPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 mb-6">
              <Image
                src="/images/beavers-logo-multi-colour.png"
                alt="Beavers Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Beavers (6-8 years)</h1>
            <p className="text-xl max-w-3xl mx-auto">
              The youngest section of our scout group, where adventure begins and friendships are made
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Beavers</h2>
              <p className="text-lg text-gray-600 mb-6">
                Beavers are our youngest members, aged 6-8 years old. This is where the scouting adventure begins! 
                Beavers learn through play and discovery, making new friends and exploring the world around them.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our Beaver colony provides a safe and fun environment where children can develop confidence, 
                learn new skills, and start building the foundation for their scouting journey.
              </p>
              <p className="text-lg text-gray-600">
                We focus on age-appropriate activities that are both educational and entertaining, 
                helping Beavers develop social skills, creativity, and a love for the outdoors.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What Beavers Do</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Fun games and activities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Arts and crafts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Gentle outdoor activities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Team building games</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Learning about nature</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Badges and Awards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Beaver Badges and Awards</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beavers can earn various badges and awards as they learn new skills and complete challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Activity Badges</h3>
              <p className="text-gray-600">
                Badges for trying new activities and developing interests in different areas
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Challenge Awards</h3>
              <p className="text-gray-600">
                Special awards for completing challenges and developing important life skills
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Joining In Award</h3>
              <p className="text-gray-600">
                Recognition for participating in activities and being part of the Beaver colony
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Beaver Meetings</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our Beaver colony meets regularly during term time. We focus on fun, learning, and friendship.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What to Expect</h3>
                  <ul className="text-gray-600 space-y-2 text-left">
                    <li>• Fun games and activities</li>
                    <li>• Arts and crafts projects</li>
                    <li>• Gentle outdoor activities</li>
                    <li>• Making new friends</li>
                    <li>• Learning new skills</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What to Bring</h3>
                  <ul className="text-gray-600 space-y-2 text-left">
                    <li>• Comfortable clothing</li>
                    <li>• Water bottle</li>
                    <li>• Enthusiasm and energy!</li>
                    <li>• Any specific items for activities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Explore Other Sections</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about/sections/squirrels"
              className="bg-white text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors border border-gray-300"
            >
              Squirrels (4-6)
            </Link>
            <Link
              href="/about/sections/cubs"
              className="bg-white text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors border border-gray-300"
            >
              Cubs (8-10½)
            </Link>
            <Link
              href="/about/sections/scouts"
              className="bg-white text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors border border-gray-300"
            >
              Scouts (10½-14)
            </Link>
          </div>
          
          <div className="mt-8">
            <Link
              href="/about"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              ← Back to About
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}