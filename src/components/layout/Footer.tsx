import {
  airbnbUrl,
  bookingDotComUrl,
  agodaUrl,
  mmtUrl,
  goibiboUrl,
  emailAddress,
  phoneNumber,
  facebookUrl,
  instagramUrl,
  imagekitBaseUrl,
} from "@/config";
import { Link } from "react-router-dom";
import { SiInstagram, SiFacebook } from "@icons-pack/react-simple-icons";

const sites = [
  {
    name: "Airbnb",
    url: airbnbUrl,
  },
  {
    name: "Booking.com",
    url: bookingDotComUrl,
  },
  {
    name: "Agoda",
    url: agodaUrl,
  },
  {
    name: "Make My Trip",
    url: mmtUrl,
  },
  {
    name: "Goibibo",
    url: goibiboUrl,
  },
];

const socials = [
  {
    name: "Instagram",
    url: instagramUrl,
    icon: SiInstagram,
  },
  {
    name: "Facebook",
    url: facebookUrl,
    icon: SiFacebook,
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-black pt-16 pb-10 px-5 md:px-10 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Col 1 */}
          <div className="flex flex-col max-md:items-center gap-8">
            <img
              src={imagekitBaseUrl + "/logo-white.png"}
              alt="Furtado's Hospitality"
              className="h-20 opacity-50 w-fit"
            />
            <div className="mt-auto flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors mr-4 flex gap-2"
                >
                  <social.icon size={24} />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2">
              {["Home", "Villas", "Pool", "Explore", "Gallery", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={
                        item === "Home"
                          ? "/"
                          : `/${item.toLowerCase().replace(/ & /g, "-and-").replace(/ /g, "-")}`
                      }
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Book Direct</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {phoneNumber}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {emailAddress}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Also available on</h4>
            <ul className="space-y-2">
              {sites.map((site) => (
                <li key={site.name}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {site.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Furtado's Hospitality. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link
              to="/privacy"
              className="text-white/50 hover:text-white text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-white/50 hover:text-white text-xs transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
      <a
        href="//devific.in/?ref=furtadoshospitality.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden"
      >
        Devific
      </a>
    </footer>
  );
}
