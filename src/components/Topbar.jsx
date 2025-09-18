import Link from 'next/link';

const Topbar = () => {
  return (
    <section className="bg-color bg-primary-dark">
      <div className="container">
        <div className="text-white fw-bold fs-15 d-flex row justify-content-center bg-primary-dark">
          <div className="bg-color py-1 d-flex align-items-center justify-content-between w-100">

            {/* Left section: Operating hours and email */}
            <div className="d-flex flex-row align-items-center">
              <p className="mb-0">Monday To Saturday - (10am to 1pm)</p>

              <div className="d-flex align-items-center ms-5">
                <i className="uil uil-envelope text-white fs-22 mt-1 me-2" />
                <a
                  href="mailto:info@orthocare.com"
                  className="link-white hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  info@orthocare.com
                </a>
              </div>
            </div>

            {/* Right section: WhatsApp and TeleConsult buttons */}
            <div className="d-flex align-items-center col-auto me-5 gap-4">

              {/* WhatsApp Chat Button */}
              <button
                className="bg-white text-main fs-18 rounded border-0 px-3 py-1 d-flex align-items-center fw-bold"
              >
                <i className="uil uil-whatsapp fs-22 me-2 text-main fw-bold" />
                <span className="fs-16 fw-bold">Chat With Us</span>
              </button>

              {/* Tele-consultation Link */}
              <Link
                href="#"
                className="primary-bg text-white fs-18 rounded border-0 px-3 py-1 d-flex align-items-center fw-bold"
              >
                <i className="uil uil-calender me-2 fs-22 text-white fw-bold" />
                <span className="fs-16 fw-bold">Schedule TeleConsult</span>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
