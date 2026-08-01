export default function SquirrelsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-scouts-red to-scouts-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Squirrels (4-6 years)</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A future section for our youngest members.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Squirrels Coming Soon</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Unfortunately, we do not have a Squirrels section set up yet. We hope to start this
              section in the near future.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              Please check back for updates, or use our joining system to register your interest.
            </p>
            <a
              href="https://www.knotyet.org.uk/join/org-096f4fa2-a194-4842-9e25-cbdd17ff620e"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 bg-scouts-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Register Your Interest
            </a>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">About Squirrels</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                Squirrels is the Scouts section for children aged 4 to 6. It introduces young
                people to new activities, people, and experiences while helping them develop
                skills for life.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Squirrels can take part in activities, work towards awards, and earn badges for
                trying things they enjoy. When they are ready, they can move on to their next
                adventure with Beavers.
              </p>
              <p className="mt-6 text-center">
                <a
                  href="https://www.scouts.org.uk/squirrels/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-scouts-red font-semibold hover:text-red-700 transition-colors"
                >
                  Learn more about Squirrels at Scouts UK →
                </a>
              </p>
            </div>
          </div>

          <section className="mt-12 bg-purple-50 border border-purple-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Your First Few Weeks</h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                For the first couple of weeks, come as you are. We want to make sure that your
                child is happy and settled. If you or your child have questions, please speak to
                one of the leaders, who will be happy to help.
              </p>
              <p>
                Once you and your child are happy to continue with the group, we will organise an
                investiture. This sounds quite formal, but it is not: it is simply a short
                ceremony where the young person and leader say the Scout Promise in front of the
                group.
              </p>
              <p>
                This normally happens just before a session and is a special event where parents
                can attend and take photos for personal use only. We will present a group
                neckerchief, membership badge, and Chorley District badges. Before the
                investiture, we ask that young people are kitted out in their section&apos;s uniform.
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
