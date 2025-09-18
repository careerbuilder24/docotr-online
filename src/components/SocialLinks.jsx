// List of social media links with associated icons
const links = [
  {
    id: 1,
    icon: 'uil uil-facebook-f', // Facebook icon class
    url: 'https://www.facebook.com/',
  },
  {
    id: 2,
    icon: 'uil uil-instagram', // Instagram icon class
    url: 'https://www.instagram.com/',
  },
  {
    id: 3,
    icon: 'uil uil-linkedin', // LinkedIn icon class
    url: 'https://www.linkedin.com/',
  },
];

/**
 * Renders a group of social media icons with external links.
 *
 * @param {Object} props
 * @param {string} props.className - Optional class name for the <nav> wrapper.
 */
const SocialLinks = ({ className = 'nav social mt-4' }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a 
          key={id}
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit our ${icon.split('-')[1]} page`} // Improves accessibility
        >
          <i className={`${icon} fs-30 bg-white rounded`} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
