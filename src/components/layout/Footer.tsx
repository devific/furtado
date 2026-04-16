import {
  airbnbUrl,
  bookingDotComUrl,
  emailAddress,
  phoneNumber,
} from "@/config";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-brand-black pt-16 pb-10 px-5 md:px-10 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-1 text-white mb-2">
              <span className="font-bold text-xl">Furtado's Hospitality</span>
            </div>
            <p className="text-white/50 text-sm mt-2">
              Your Private Goa, Finally.
            </p>
            <p className="text-white/40 text-xs mt-1">
              Porvorim, North Goa, India
            </p>
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
              <li className="text-white/40 text-xs mt-4">
                Available year-round
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Also available on</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors underline"
                >
                  Airbnb
                </a>
              </li>
              <li>
                <a
                  href={bookingDotComUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors underline"
                >
                  Booking.com
                </a>
              </li>
              <li className="text-white/40 text-xs mt-4">
                Direct bookings get priority response
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Furtado's Hospitality. All rights
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
