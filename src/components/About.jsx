import Image from 'next/image';
import NextLink from './NextLink';
import { slideInLeftAnimate, slideInRightAnimate } from './animation';
import UseIntersectionObserver from './UseIntersectionObserver';

const About = ({
  heading,
  headingH1,
  subHeading,
  para,
  para2,
  para3,
  imgPosition = 'left',
  src,
  btnTitle,
  btnUrl,
  video,
  span,
  afterSpan
}) => {
  // Track visibility for animation trigger
  const [elementRef, isVisible] = UseIntersectionObserver({ threshold: 0.1 });


  
  // Determine animation direction based on image position
  const imgAnimation = imgPosition === 'left' ? slideInLeftAnimate('0.3s') : slideInRightAnimate('0.3s');
  const textAnimation = imgPosition === 'left' ? slideInRightAnimate('0.3s') : slideInLeftAnimate('0.3s');

  // Render either video or image based on `video` prop
  const renderMedia = () =>
    video ? (
      <video
        className="mr-5"
        style={{ maxWidth: '100%', borderRadius: '10px' }}
        autoPlay
        muted
        loop
        src={video.src}
      />
    ) : (
      <Image
        alt={`${headingH1 || heading || 'About'} ${span || ''} ${afterSpan || ''} | OrthoCare`}
        src={src}
        width={535}
        height={225}
        layout="responsive"
        className="position-static about1-img"
      />
    );

  return (
    <div className="row gx-lg-10 align-items-center" ref={elementRef}>
      {/* Image or Video Section */}
      <div
        className={`col-lg-5 about-us-image ${
          imgPosition === 'right' ? 'order-lg-2' : 'order-lg-1'
        } ${isVisible ? 'animate' : ''}`}
        style={isVisible ? imgAnimation : {}}
      >
        <div className="about-img">
          <figure className="reveal image-anime rounded-xl shadow-lg">{renderMedia()}</figure>
        </div>
      </div>

      {/* Text Content Section */}
      <div
        className={`col-lg-7 ${imgPosition === 'right' ? 'order-lg-1' : 'order-lg-2'} ${
          isVisible ? 'animate' : ''
        }`}
        style={isVisible ? textAnimation : {}}
      >
        {/* Optional Subheading Label */}
        {subHeading && (
          <h3 className="fs-15 py-2 px-3 primary-bg-soft text-main d-inline rounded-pill">{subHeading}</h3>
        )}

        {/* Heading H1 */}
        {headingH1 && (
          <h1 className="fw-bold mb-3 mt-4">
            {headingH1}
            {span && <span>{span}</span>}
            {afterSpan}
          </h1>
        )}

        {/* Heading H2 */}
        {heading && (
          <h2 className="mb-3 mt-3">
            {heading}
            {span && <span>{span}</span>}
            {afterSpan}
          </h2>
        )}

        {/* Paragraphs */}
        {para && <p className="mb-4 text-justify">{para}</p>}
        {para2 && <p className="mb-3 text-justify">{para2}</p>}
        {para3 && <p className="mb-3 text-justify">{para3}</p>}

        {/* CTA Button */}
        {btnTitle && btnUrl && (
          <div className="mt-5">
            <NextLink title={btnTitle} href={btnUrl} className="btn btn-md bg-primary text-white rounded" />
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
