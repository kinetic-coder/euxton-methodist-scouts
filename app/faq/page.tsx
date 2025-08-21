/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

export default function FAQPage() {
  const faqs = [
    {
      question: "What is the Scouts and who can join?",
      answer: "The Scouts is a worldwide movement that helps young people develop skills for life. We welcome young people aged 4-14 across our four sections: Squirrels (4-6), Beavers (6-8), Cubs (8-10½), and Scouts (10½-14)."
    },
    {
      question: "How much does it cost to join?",
      answer: "There's a monthly subscription of £15 to cover general programme and location costs. For some of the activities we run, there will be an additional charge but this will be clearly detailed as and when the activities are planned. We never want cost to be a barrier to joining - please speak to us if you have any concerns."
    },
    {
      question: "When and where do you meet?",
      answer: "We generaly meet at Euxton Methodist Church Hall. Each section meets once a week during term time, in the evenings. Specific meeting times and locations will vary by section and planned activities and will be provided in a weekly email."
    },
    {
      question: "What activities do you do?",
      answer: "We offer a wide range of activities including games, crafts, outdoor adventures, camping, hiking, community service, and skill development. Activities are designed to be fun while helping young people develop confidence, teamwork, and practical skills."
    },
    {
      question: "Do you go camping?",
      answer: "Yes! Camping and outdoor activities are a big part of Scouts. We have regular camps throughout the year, from simple day trips to weekend camps. These experiences help young people develop independence, outdoor skills, and a love for nature."
    },
    {
      question: "What should my child wear?",
      answer: "Each section has its own uniform: Squirrels wear a red top, Beavers wear a blue top, Cubs wear a green top, and Scouts wear a teal top. We recommend comfortable, practical clothing underneath. Full uniform details will be provided when you join."
    },
    {
      question: "How do I register my child?",
      answer: "The best way to start is to contact us through our contact page or come along to one of our meetings to see what we do. We'll provide you with registration forms and answer any questions you might have."
    },
    {
      question: "What if my child has special needs or disabilities?",
      answer: "We're committed to being inclusive and welcome all young people. We work with families to ensure every child can participate fully in our activities. Please let us know about any specific needs so we can make appropriate arrangements."
    },
    {
      question: "Are the leaders qualified and safe?",
      answer: "All our leaders are volunteers who have been through comprehensive training and background checks. We follow strict safety guidelines and all activities are risk-assessed. Your child's safety is our top priority."
    },
    {
      question: "Can parents get involved?",
      answer: "Absolutely! We welcome parent volunteers in many ways - from helping with activities to becoming leaders. You don't need to have been a Scout yourself - we provide all the training you need. Even small commitments can make a big difference."
    },
    {
      question: "What if my child doesn't enjoy it?",
      answer: "We encourage young people to try a few sessions before deciding. Scouts isn't for everyone, and that's okay. We want young people to have fun and feel comfortable. If they decide it's not for them, there's no pressure to continue."
    },
    {
      question: "How does Scouts help with school and future careers?",
      answer: "Scouts helps develop essential life skills like leadership, teamwork, problem-solving, and communication. These skills are valuable in school, university, and the workplace. Many employers and universities value Scouting experience on CVs and applications."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-scouts-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Everything you need to know about joining Euxton Methodist Scouts
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-purple-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            We're here to help! Get in touch with us for more information.
          </p>
          <div className="space-x-4">
            <Link 
              href="/contact" 
              className="inline-block bg-scouts-purple text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-800 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/about" 
              className="inline-block bg-scouts-teal text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-800 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Ready to Join?</h3>
            <p className="text-gray-600 mb-4">
              Find out more about our sections and how to get started.
            </p>
            <Link 
              href="/about" 
              className="text-scouts-purple hover:text-purple-800 font-medium"
            >
              Explore Our Sections →
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Get in Touch</h3>
            <p className="text-gray-600 mb-4">
              Have specific questions? We'd love to hear from you.
            </p>
            <Link 
              href="/contact" 
              className="text-scouts-purple hover:text-purple-800 font-medium"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
