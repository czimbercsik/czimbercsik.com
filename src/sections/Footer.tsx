import { useTranslations } from "next-intl";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const footerLinks = [
  { logo: FaGithub, href: "https://github.com/czimbercsik" },
  { logo: FaXTwitter, href: "https://x.com/czimbercsik" },
  { logo: FaInstagram, href: "https://www.instagram.com/czimbercsikbence/" },
  { logo: FaLinkedin, href: "https://www.linkedin.com/in/czimbercsik-bence/" },
  { logo: FaEnvelope, href: "mailto:hello@czimbercsik.com" },
]

export const Footer = () => {
  const t = useTranslations('Footer');
  return (
    <footer className="pt-20 relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-blue-500/10 mask-[radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10" />
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; {new Date().getFullYear()}. {t('allRightsReserved')}</div>
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition duration-300">
                <link.logo className="size-5" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
