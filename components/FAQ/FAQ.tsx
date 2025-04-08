import React from 'react';

const FAQ: React.FC = () => {
  const faqData = [
    {
      question: "What is Innovation Hacks?",
      answer: "Innovation Hacks is a 24-hour hackathon organized by ASU's AI Society, GDSC, and SODA, where students come together to build innovative solutions to real-world problems."
    },
    {
      question: "Who can participate?",
      answer: "The hackathon is open to all ASU students. Whether you're a beginner or an experienced developer, we welcome everyone to join and showcase their skills."
    },
    {
      question: "What is the team size?",
      answer: "Teams should consist of 2-4 members. All team members must be ASU students."
    },
    {
      question: "Do I need to have coding experience?",
      answer: "No prior coding experience is required! Innovation Hacks is a great opportunity to learn and grow. We'll have mentors and workshops to help you throughout the event."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, chargers, and any other equipment you might need. We'll provide food, drinks, and a comfortable space to work in."
    },
    {
      question: "Will there be prizes?",
      answer: "Yes! We have exciting prizes for the winning teams, including cash prizes, tech gadgets, and more. There will also be special category prizes."
    },
    {
      question: "What are the judging criteria?",
      answer: "Projects will be judged based on innovation, technical implementation, design, and potential impact. More details will be provided during the event."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation in Innovation Hacks is completely free! We want to make it accessible to all ASU students."
    }
  ];

  return (
    <div className="faqContainer1">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="glassy-effect rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://sds.asu.edu/events/innovation-hacks"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-[#E066FF] to-[#ba3554] text-white rounded-lg font-semibold text-center hover:opacity-90 transition-opacity"
          >
            RSVP Now
          </a>
          <a
            href="https://forms.gle/your-registration-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-[#ba3554] to-[#E066FF] text-white rounded-lg font-semibold text-center hover:opacity-90 transition-opacity"
          >
            Register Now
          </a>
        </div>
        <p className="mt-4 text-center text-gray-400 text-sm">
          Note: All team members must complete both the RSVP and registration forms to participate.
        </p>
      </div>
    </div>
  );
};

export default FAQ; 