import Image from 'next/image';
import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';

import { treatments, usefulLinks } from '../data.js'; // Data for footer links

// ============================================================
// Helper function to render widget sections (e.g., Useful Links, Treatments)
// ============================================================
const widget = (list, title) => (
  <div className="widget">
    <h4 className="widget-title fs-24 mb-3">{title}</h4>
    <ul className="list-unstyled text-reset mb-0">
      {list.map(({title, id }) => (
        <li key={id}>
          <NextLink href="#" title={title} />
        </li>
      ))}
    </ul>
  </div>
);

// ============================================================
// Footer Component
// Displays logo, contact info, social links, and navigation widgets
// ============================================================
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-top bg-primary-dark overflow-hidden">
      <div className="container pt-10 pt-md-12 pb-7">
        <div className="row gx-10 justify-content-around">

          {/* Logo, description, and contact information */}
          <div className=" col-lg-4 col-xl-3">
            <div className="widget d-flex flex-column">
              <div className="mb-5 d-flex" >
                <Image
                  src="/img/logo-light.webp"
                  alt="Logo | OrthoCare"
                  width={50}
                  height={50}
                  layout="responsive"
                  className="position-static text-center"
                  style={{ maxHeight: "200px", maxWidth: "300px" }}
                />
              </div>
              <p className="lead mb-2 text-justify fs-18 text-white">
                Expert orthopedic care in Location, delivering advanced treatments for bone and joint health.
              </p>
            </div>

            {/* Email */}
            <div className="d-flex my-1">
              <i className="uil uil-envelope fs-26 text-white" />
              <a href="mailto:info@orthocare.com" className="link-body ms-2 text-white">
                info@orthocare.com
              </a>
            </div>

            {/* Phone */}
            <div className="d-flex">
              <i className="uil uil-phone-volume fs-26 text-white" />
              <p className="mt-1 ms-2 fs-18">
                <a href="tel:+911234567890" className="text-white">
                  +91 12345 67890
                </a>
              </p>
            </div>

            {/* Social Media */}
            <div className="d-flex flex-column">
              <h4 className="fs-24 text-white">Follow Us On</h4>
              <SocialLinks className="nav social text-md-end" />
            </div>
          </div>

          {/* Link widgets */}
          <div className="col-md-6 col-lg-4 col-xl-3 mt-lg-0 mt-5 text-white d-flex justify-content-md-center">
            {widget(usefulLinks, 'Useful Links')}
          </div>

          <div className="col-md-6 col-lg-4 col-xl-3 mt-lg-0 mt-5 text-white d-flex justify-content-md-center">
            {widget(treatments, 'Treatments')}
          </div>
          <div className="col-xl-3 mt-md-5 mt-xl-0 mt-10 overflow-hidden">
            <div className="widget">
              <h4 className="widget-title fs-24 mb-3">Location</h4>
              <div className=" d-flex justify-content-center border rounded">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019594510314!2d-122.4194156846815!3d37.77492927975988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f3e74c6f%3A0x4211bbcc3de0b9f0!2sGeneral%20Hospital%20-%20San%20Francisco!5e0!3m2!1sen!2sus!4v1748419750000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-4 mb-7" />

        {/* Copyright */}
        <div className="d-md-flex align-items-center justify-content-center">
          <p className="mb-2 mb-lg-0 text-white">
            © {currentYear} OrthoCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
