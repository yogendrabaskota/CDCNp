const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 pt-24 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
        <button
          className="w-auto md:w-auto px-3 py-2 text-blue-600 mb-6 border-b-2 border-blue-600 pb-2
rounded-lg text-lg font-small transition"
          onClick={() => window.history.back()}
        >
          Back
        </button>

        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          About Education Hub
        </h1>

        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Our Mission
            </h2>
            <p className="mb-4">
              Education Hub is dedicated to providing quality educational
              resources to students across Nepal. Our platform aims to bridge
              the gap between students and educational materials approved by the
              Curriculum Development Center (CDC) Nepal and the Ministry of
              Education, Nepal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Terms of Use
            </h2>
            <p className="mb-4">
              By accessing and using Education Hub, you agree to comply with the
              following terms and conditions:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                All educational materials provided on this platform are the
                intellectual property of CDC-Nepal and the Ministry of
                Education, Nepal.
              </li>
              <li>
                Unauthorized reproduction, distribution, or commercial use of
                any materials is strictly prohibited.
              </li>
              <li>
                Users may download materials for personal, non-commercial
                educational purposes only.
              </li>
              <li>
                Modification of any content without explicit permission from
                CDC-Nepal is not allowed.
              </li>
              <li>
                Proper attribution must be given when referencing materials from
                this platform.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Copyright Policy
            </h2>
            <p className="mb-4">
              <strong>
                Copying of these materials is strongly prohibited without
                agreement with CDC-Nepal or Ministry of Education, Nepal.
              </strong>
            </p>
            <p className="mb-4">
              All content available on Education Hub, including but not limited
              to textbooks, question banks, and other educational resources, are
              protected under the Copyright Act of Nepal. Any violation of these
              copyrights may result in legal action.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              User Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Users must not share login credentials or provide access to
                unauthorized individuals.
              </li>
              <li>
                Users are responsible for maintaining the confidentiality of
                their account information.
              </li>
              <li>
                Any suspicious activity should be reported immediately to the
                platform administrators.
              </li>
              <li>
                Users must respect the intellectual property rights of all
                materials provided.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Contact Information
            </h2>
            <p className="mb-2">
              For copyright inquiries or permission requests:
            </p>
            <p className="mb-1">
              <strong>Curriculum Development Center (CDC-Nepal)</strong>
            </p>
            <p className="mb-1">Sanothimi, Bhaktapur</p>
            <p className="mb-1">Phone: +977-1- 5639122</p>
            <p className="mb-1">Email: info@moecdc.gov.np</p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <button
            className="w-full md:w-auto px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition"
            onClick={() => window.history.back()}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
