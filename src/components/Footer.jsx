import React from 'react';

const Footer = () => {
  const footerLinks = [
    {
      title: "Shop and Learn",
      links: ["Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"]
    },
    {
      title: "Services",
      links: ["Apple Music", "Apple TV+", "iCloud", "Apple One"]
    },
    {
      title: "Apple Store",
      links: ["Find a Store", "Genius Bar", "Today at Apple", "Apple Camp"]
    },
    {
      title: "For Business",
      links: ["Apple and Business", "Shop for Business"]
    }
  ];

  return (
    <footer className="bg-gray-100 text-gray-600 px-6 sm:px-12 lg:px-40 py-10">
      {/* Legal Section */}
      <div className="text-xs mb-10">
        <p className="leading-relaxed space-y-4">
        ◊No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3-, 6-, 9- or 12-month tenures from most leading card issuers. Eligible AirPods, HomePod and Beats products are available with No Cost EMI on 3- and 6-month tenures only. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply.
Representative example:
A purchase of ₹79900.00 repaid over 12 months with an interest rate of 15.99% p.a. and No Cost EMI savings of ₹6514.00 requires monthly payments of ₹6658.00. Total amount payable: ₹79900.00.          {/* Keep this legal text short or collapsible in production */}
        </p>
        <hr className="mt-8 border-t border-gray-300" />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-8">
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-black font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i} className="hover:underline cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Additional Links */}
      <p className="text-sm mb-4">More ways to shop: <span className="underline cursor-pointer">Find an Apple Store</span> or other retailer near you. Or call 000800 040 1966.</p>
      <hr className="mb-4 border-t border-gray-300" />

      {/* Bottom Info */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-2">
        <p>© 2025 Apple Inc. All rights reserved.</p>
        <p>India</p>
      </div>
    </footer>
  );
};

export default Footer;
