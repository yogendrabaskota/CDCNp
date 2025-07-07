import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      {/* Footer Section */}
      <footer className="relative bg-gray-900 text-white pt-16 pb-8">
        {/* Wave SVG background */}
        <div
          className="absolute -top-12 left-0 w-full h-12"
          style={{
            backgroundImage: 'url("data:image/svg+xml',
            backgroundSize: "cover",
          }}
        />
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 relative z-10">
          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-pink-600 mb-4">
              Education Hub
            </h2>
            <p className="mb-4 leading-relaxed opacity-90">
              Destination for All the books and Educational Resources provided
              by the Curriculum Development Center (CDC) Nepal and the Ministry
              of Education, Nepal. We aim to provide a comprehensive platform
              for students to access quality educational materials.
            </p>
            {/* Social Links */}
            {/* <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-10 flex items-center justify-center rounded-full text-white transition-transform hover:-translate-y-1 hover:bg-pink-600"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-10 flex items-center justify-center rounded-full text-white transition-transform hover:-translate-y-1 hover:bg-pink-600"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-10 flex items-center justify-center rounded-full text-white transition-transform hover:-translate-y-1 hover:bg-pink-600"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-10 flex items-center justify-center rounded-full text-white transition-transform hover:-translate-y-1 hover:bg-pink-600"
              >
                <i className="fab fa-youtube" />
              </a>
            </div> */}
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl text-pink-600 mb-6 border-b-2 border-pink-600 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:translate-x-1 transition"
                >
                  <i className="fas fa-chevron-right text-pink-600" /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:translate-x-1 transition"
                >
                  <i className="fas fa-chevron-right text-pink-600" /> About Us
                </Link>
              </li>
              {/*<li>
                <a
                  href="#"
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:translate-x-1 transition"
                >
                  <i className="fas fa-chevron-right text-pink-600" /> Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:translate-x-1 transition"
                >
                  <i className="fas fa-chevron-right text-pink-600" /> Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:translate-x-1 transition"
                >
                  <i className="fas fa-chevron-right text-pink-600" /> Gallery
                </a>
              </li> */}
            </ul>
          </div>
          {/* Our Services */}
          <div>
            <h3 className="text-xl text-pink-600 mb-6 border-b-2 border-pink-600 pb-2">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:translate-x-1 transition"
                >
                  <i className="fas fa-chevron-right text-pink-600" />
                  All Curriculum books and Educational Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:translate-x-1 transition"
                >
                  <i className="fas fa-chevron-right text-pink-600" />
                  Online Learning Platform
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:translate-x-1 transition"
                >
                  <i className="fas fa-chevron-right text-pink-600" />
                  Educational News and Updates
                </Link>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:translate-x-1 transition"
                >
                  <i className="fas fa-chevron-right text-pink-600" />{" "}
                  Photoshoot Studio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:translate-x-1 transition"
                >
                  <i className="fas fa-chevron-right text-pink-600" /> Event
                  Hosting
                </a>
              </li> */}
            </ul>
          </div>
          {/* Contact Us */}
          <div>
            <h3 className="text-xl text-pink-600 mb-6 border-b-2 border-pink-600 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-4">
                <i className="fas fa-map-marker-alt text-pink-600 mt-1" />
                <div>Nepal</div>
              </li>
              <li className="flex items-start gap-4">
                <i className="fas fa-phone-alt text-pink-600 mt-1" />
                <div>
                  <a
                    href="tel:+97715639122"
                    className="block hover:underline opacity-90 hover:opacity-100"
                  >
                    +977-1- 5639122
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <i className="fas fa-envelope text-pink-600 mt-1" />
                <div>
                  <a
                    href="mailto: info@moecdc.gov.np"
                    className="block hover:underline opacity-90 hover:opacity-100"
                  >
                    info@moecdc.gov.np
                  </a>
                </div>
              </li>
            </ul>
            {/* Newsletter */}
            <h3 className="text-xl text-pink-600 mb-2 border-b-2 border-pink-600 pb-2">
              Newsletter
            </h3>
            <p className="mb-4 opacity-70">
              Subscribe to get updates on our latest events and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                required
                className="flex-1 p-3 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-500 text-white p-3 rounded-r-md transition"
              >
                <i className="fas fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center opacity-70 text-sm">
          <p>
            © 2025 CDC(Curriculum Development Centre). All Rights Reserved. |
            Developed by @Sujan
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
