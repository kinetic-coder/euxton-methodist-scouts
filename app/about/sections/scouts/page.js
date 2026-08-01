export default function ScoutsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-scouts-teal to-scouts-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Scouts (10½-14 years)</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Bigger adventures, new skills, and opportunities to lead.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Scouts Meetings</h2>
            <p className="text-lg text-gray-600 mb-8">
              Scouts meet regularly during term time for activities, skills, and adventure.
            </p>
            <div className="max-w-sm mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Where We Meet</h3>
              <address className="text-gray-600 not-italic leading-relaxed">
                Euxton Methodist Church Hall<br />
                Wigan Road, Euxton<br />
                Chorley, Lancashire, PR7 6LP<br />
                North West England
              </address>
            </div>
            <a
              href="https://www.knotyet.org.uk/join/org-096f4fa2-a194-4842-9e25-cbdd17ff620e"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 bg-scouts-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Register Your Interest
            </a>
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
