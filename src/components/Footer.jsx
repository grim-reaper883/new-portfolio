import { ButtonPrimary } from "./Button";



const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Reviews',
    href: '#reviews'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/codewithsadee-org'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/codewithsadee'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/codewithsadee_'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/codewithsadee'
  },
  {
    label: 'CodePen',
    href: 'https://codepen.io/codewithsadee'
  }
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">

        <div className="lg:grid lg:grid-cols-2 ">

          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] "> 
              Let&apos;s work together today!
            </h2>

            <ButtonPrimary
            href="mailto:mahmudalisakib@gmail.com"
            label="Start Project"
            icon="chevron_right"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20 ">
            <div className=""> 
              <p className="mb-2">
                Sitemap
                <ul>
                  {sitemap.map(({label,href}, key) => (
                    <li key={key}>
                      <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </p>
            </div>

                <div className=""> 
              <p className="mb-2">
                Socials
                <ul>
                  {socials.map(({label,href}, key) => (
                    <li key={key}>
                      <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200" target="_blank">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </p>
            </div>

          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <img src="/images/logo2.png" width={60} height={60} alt="" />
          <p className="text-zinc-500 text-sm">
            &copy; 2025 <span className="text-zinc-200">sakib</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;