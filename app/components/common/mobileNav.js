"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoSettingsOutline, IoSparklesOutline, IoAnalyticsOutline, IoStatsChartOutline, IoChatbubbleEllipsesOutline, IoPeopleOutline, IoBookOutline, IoBriefcaseOutline, IoSchoolOutline, IoMailOutline } from "react-icons/io5";

export default function MobileNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(null);
  }, [pathname]);

  const navLinks = [
    {
      href: "",
      label: "AI Solutions",
      dropdown: [
        {
          href: "/ai-solutions",
          label: "Expertise",
          icon: IoSettingsOutline,
          description: "Explore AI and advanced technology expertise",
        },
        {
          href: "/ai-services",
          label: "Services",
          icon: IoAnalyticsOutline,
          description: "End-to-end AI software development services",
        },
        {
          href: "https://cplc.codework.ai/",
          label: "AI Training Courses",
          icon: IoSparklesOutline,
          description: "Professional AI training courses",
        },
      ],
      dropdownImage: "/navmenu1.jpg",
    },
    {
      href: "/industries-you-must-know",
      label: "Industries",
      dropdown: [
        {
          href: "/ai-in-healthcare-you-must-know",
          label: "AI-Healthcare",
          image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/Healthcare.jpg",
          video:
            "https://codework-ebook.s3.amazonaws.com/codework-media/Industries_videos/Hospital.mp4",
        },
        {
          href: "/unique-ai-in-education",
          label: "AI-Education",
          image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/education.webp",
          video:
            "https://codework-ebook.s3.amazonaws.com/codework-media/Industries_videos/school.mp4",
        },
        {
          href: "/ai-in-ecommerce",
          label: "AI-E-commerce",
          image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/AI-E-commerce.avif",
          video:
            "https://codework-ebook.s3.amazonaws.com/codework-media/Industries_videos/ECommerce.mp4",
        },
        {
          href: "/new-ai-in-finance",
          label: "AI-Finance",
          image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/finance.jpg",
          video:
            "https://codework-ebook.s3.amazonaws.com/codework-media/Industries_videos/Money.mp4",
        },
        {
          href: "/ai-in-data-security",
          label: "AI-Data Security",
          image: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/DataSecurity.avif",
          video:
            "https://codework-ebook.s3.amazonaws.com/codework-media/Industries_videos/Data%20security.mp4",
        },
      ],
    },
    {
      href: "",
      label: "Resources",
      dropdown: [
        {
          href: "/our-company-case-studies",
          label: "Case Studies",
          icon: IoStatsChartOutline,
          description: "Real-world AI projects and outcomes",
        },
        {
          href: "/our-blog-lists",
          label: "Blogs",
          icon: IoAnalyticsOutline,
          description: "Insights and updates from our team",
        },
        {
          href: "/testimonials",
          label: "Testimonials",
          icon: IoChatbubbleEllipsesOutline,
          description: "Customer success stories",
        },
      ],
      dropdownImage: "/navmenu2.jpg",
    },
    {
      href: "",
      label: "About Us",
      dropdown: [
        {
          href: "/about-us",
          label: "Our Team ",
          icon: IoPeopleOutline,
          description: "Meet the leadership and experts behind Codework",
        },
        {
          href: "/ai-automations",
          label: "100 AI Automations (Booklet)",
          icon: IoBookOutline,
          description: "Browse 100 practical AI automation ideas",
        },
          {
          href: "/contact-ai-solutions",
          label: "Contact Us",
          icon: IoMailOutline,
          description: "Get in touch with us for more information",
        },
      ],
      dropdownImage: "/navmenu3.jpg",
    },
    {
      href: "",
      label: "Careers",
      dropdown: [
        {
          href: "/careers-at-codework",
          label: "Job Opportunities",
          icon: IoBriefcaseOutline,
          description: "Explore open roles and start your journey",
        },
        {
          href: "/internship",
          label: "Internship Program",
          icon: IoSchoolOutline,
          description: "Learn, build, and grow with hands-on projects",
        },
      ],
      dropdownImage: "/navmenu4.jpg",
    },
    {
      href: "/products-we-build",
      label: "Our Products",
      dropdown: [],
    },
  ];

  // Helper function to generate unique keys
  const getUniqueKey = (item, index) => {
    return item.href && item.href !== "" ? item.href : `nav-item-${index}`;
  };

  const getDropdownKey = (dropdownItem, parentIndex, dropdownIndex) => {
    return dropdownItem.href && dropdownItem.href !== "" 
      ? `${dropdownItem.href}-${parentIndex}-${dropdownIndex}` 
      : `dropdown-${parentIndex}-${dropdownIndex}`;
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-secondary shadow-lg">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-secondary/95 backdrop-blur-sm border-b border-primary/20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="hover:bg-primary/20 transition-all duration-300">
            <Image src="/Logo.svg" alt="Company Logo" width={120} height={40} priority />
          </div>
        </Link>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative w-10 h-10 flex items-center justify-center hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 group"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-6">
            {/* Animated Hamburger Lines */}
            <span
              className={`absolute top-1 left-0 w-6 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : "rotate-0"
              }`}
            />
            <span
              className={`absolute top-1/2 left-0 w-6 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-1 left-0 w-6 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : "rotate-0"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu with Slide Animation */}
      <div
        className={`${
          isMenuOpen
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4"
        } overflow-hidden transition-all duration-500 ease-out bg-secondary/98 backdrop-blur-md border-b border-primary/20`}
      >
        <div className="px-4 py-2 space-y-1">
          {navLinks.map((item, index) => (
            <div
              key={getUniqueKey(item, index)} // FIXED: Using unique key function
              className={`${
                isMenuOpen ? "animate-fadeInUp" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Main Navigation Item */}
              <div className="bg-primary/5 rounded-xl border border-primary/10 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-left"
                  onClick={() => {
                    if (item.dropdown.length > 0) {
                      setIsDropdownOpen(isDropdownOpen === index ? null : index);
                    } else {
                      router.push(item.href);
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  <span className="text-primary font-medium text-base hover:text-primary/80 transition-colors duration-300">
                    {item.label}
                  </span>
                  {item.dropdown.length > 0 && (
                    <div
                      className={`w-6 h-6 flex items-center justify-center rounded-full bg-secondary/20 transition-all duration-300 ${
                        isDropdownOpen === index ? "rotate-180 bg-secondary/30" : "rotate-0"
                      }`}
                    >
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  )}
                </button>

                {/* Dropdown Items with Smooth Expansion */}
                {item.dropdown.length > 0 && (
                  <div
                    className={`${
                      isDropdownOpen === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden transition-all duration-400 ease-out`}
                  >
                    <div className="px-4 pb-3 space-y-1">
                      {item.dropdown.map((dropdownItem, dropIndex) => (
                        <Link
                          key={getDropdownKey(dropdownItem, index, dropIndex)} // FIXED: Using unique key function
                          href={dropdownItem.href}
                          className={`block p-3 rounded-lg bg-secondary/5 border border-secondary/20 hover:bg-secondary/10 hover:border-secondary/40 transition-all duration-300 group ${
                            isDropdownOpen === index ? "animate-slideInLeft" : ""
                          }`}
                          style={{ animationDelay: `${dropIndex * 100}ms` }}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <h3 className="font-medium text-primary text-sm mb-1 group-hover:text-primary transition-colors duration-300">
                            {dropdownItem.label}
                          </h3>
                          {dropdownItem.description && (
                            <p className="text-primary/70 text-xs leading-relaxed group-hover:text-primary/90 transition-colors duration-300">
                              {dropdownItem.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Get Started Button */}
          <div
            className={`pt-4 ${isMenuOpen ? "animate-fadeInUp" : ""}`}
            style={{ animationDelay: `${navLinks.length * 100}ms` }}
          >
            <Link href="/contact-ai-solutions">
              <button
                className="w-full bg-gradient-to-r from-secondary to-secondary/80 text-primary font-bold px-6 py-4 rounded-xl hover:from-secondary/90 hover:to-secondary hover:shadow-2xl hover:shadow-secondary/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 top-16 bg-secondary/80 backdrop-blur-sm opacity-50"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
