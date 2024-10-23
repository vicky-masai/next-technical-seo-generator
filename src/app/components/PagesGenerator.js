'use client';
import { useState } from 'react';
import CopyCodeBlock from './CopyCodeBlock';
import toast, { Toaster } from 'react-hot-toast';
import styles from './PageGeenrator.module.css';
const PagesGenerator = () => {

    const [show, setShow]=useState(false)
    const [formData, setFormData] = useState({
        brandName: '',
        domainUrl: '',
        toolTitle: '',
        keywords:'',
        toolDescription: '',
        toolBannerImage: ''
    });

    const {
        brandName,
        domainUrl,
        toolTitle,
        toolDescription,
        toolBannerImage,
        keywords
    } = formData;

    const [charCount, setCharCount] = useState({
        toolTitle: 0,
        toolDescription: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if ((name === 'toolTitle' && value.length <= 60) || (name === 'toolDescription' && value.length <= 145) || (name !== 'toolTitle' && name !== 'toolDescription')) {
            setFormData({
                ...formData,
                [name]: value
            });

            if (name === 'toolTitle' || name === 'toolDescription') {
                setCharCount({
                    ...charCount,
                    [name]: value.length
                });
            }
        }
    };

  

    // variable for code outputs 

    const desclaimerVar = `import React from 'react';
    const Disclaimer = () => {
  return (
    <div className="bg-black text-gray-300 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-white">Disclaimer</h1>
        <p className="mb-4">
          If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at 
          <a href="mailto:contact@codeapto.com" className="text-blue-400 underline"> contact@codeapto.com</a>.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-white">Disclaimers</h2>
        <p className="mb-4">
          All the information on this website – 
          <a href="${domainUrl}" className="text-blue-400 underline"> ${domainUrl}</a> – is published in good faith and for general information purpose only. colour converter does not make any warranties about the completeness, reliability, and accuracy of this information. Any action you take upon the information you find on this website (colour converter), is strictly at your own risk. colour converter will not be liable for any losses and/or damages in connection with the use of our website.
        </p>
        <p className="mb-4">
          From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone ‘bad’.
        </p>
        <p className="mb-4">
          Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their “Terms of Service” before engaging in any business or uploading any information.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-white">Consent</h2>
        <p className="mb-4">
          By using our website, you hereby consent to our disclaimer and agree to its terms.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-white">Update</h2>
        <p className="mb-4">
          Should we update, amend, or make any changes to this document, those changes will be prominently posted here.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
`

const DisclosureVar = `import React from 'react';

const DisclosurePolicy = () => {
  return (
    <div className="bg-black text-gray-300 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-white">Disclosure Policy</h1>
        <p className="mb-4">
          This Disclosure Policy is valid as of May 22, 2026, and applies to 
          <a href="${domainUrl}" className="text-blue-400 underline"> ${domainUrl}</a>.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-white">Advertising Partnerships</h2>
        <p className="mb-4">
          The Website may engage in affiliate marketing, advertising, or sponsorships with various companies and brands. This means that we may earn a commission or fee when you click on or make a purchase through certain links on the Website.
        </p>
        <p className="mb-4">
          We may also display advertisements provided by advertising networks, such as Google AdSense, which may use cookies to collect information about your visits to this and other websites in order to provide targeted advertisements relevant to your interests.
        </p>
        <p className="mb-4">
          These advertising partners and networks have their own privacy policies, which you should review if you have any concerns about their practices. We are not responsible for the privacy practices or the content of these third-party websites.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-white">Editorial Independence</h2>
        <p className="mb-4">
          While we may receive compensation or other benefits from our advertising partners, our editorial content remains independent and is not influenced by these partnerships. We strive to provide honest and unbiased information to our readers.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-white">Affiliate Links</h2>
        <p className="mb-4">
          Some of the links on the Website may be affiliate links, which means that we may earn a commission if you click on the link and make a purchase. However, this does not affect the price you pay or the products or services you receive.
        </p>
        <p className="mb-4">
          We only recommend products or services that we believe will be of value to our readers. Any compensation we receive is used to support the operation and maintenance of the Website.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-white">Updates to this Policy</h2>
        <p className="mb-4">
          We reserve the right to update or change this Disclosure Policy at any time. Any changes will be posted on this page with a revised effective date. Your continued use of the Website after any such changes constitutes your acceptance of the new policy.
        </p>
        <p className="mb-4">
          If you have any questions or concerns about this Disclosure Policy, please contact us at 
          <a href="mailto:contactcodeapto.com" className="text-blue-400 underline"> contact@codeapto.com</a>.
        </p>
      </div>
    </div>
  );
};

export default DisclosurePolicy;
`

const ContactVar = `"use client";

const ContactUs = () => {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center p-8 text-gray-300">
      <div className="bg-gray-900 shadow-md rounded-md p-8 max-w-3xl w-full border border-gray-700">
        <h1 className="text-3xl font-bold text-gray-100 mb-6">Contact Us</h1>
        <p className="text-lg mb-6">
          We at <strong className="text-cyan-400">${brandName}</strong> are here to help
          you unlock the potential of technology for your business. Whether you
          have a question, need support with an existing project, or are
          interested in exploring a sponsorship opportunity, we encourage you to
          reach out!
        </p>

        <h2 className="text-2xl font-semibold mb-4">How to Connect with Us</h2>
        <p className="text-lg mb-6">
          Email: Our dedicated support team is readily available to answer your
          questions, address any concerns, or discuss your initial project
          inquiries. Feel free to reach out to us at:{" "}
          <strong className="text-cyan-400">contact@codeapto.com</strong>
        </p>

        <h3 className="text-xl font-semibold mb-4">For Sponsorship Inquiries</h3>
        <p className="text-lg mb-6">
          If you’re interested in discussing potential sponsorship opportunities
          with ${brandName}, please explicitly mention “Sponsorship Inquiry” in your
          email subject line. We actively partner with brands and organizations
          that align with our values and can provide value to our audience.
        </p>

        <p className="text-lg text-gray-400">
          We look forward to hearing from you!
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
`

    let privacyVar = `import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-gray-300 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-white">Privacy Policy</h1>
        <p className="mb-4">
          At ${brandName}, accessible from ${brandName}, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ${brandName} and how we use it.
        </p>
        <p className="mb-4">
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
        </p>
        <p className="mb-4">
          This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in ${brandName}. This policy is not applicable to any information collected offline or via channels other than this website.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-white">Consent</h2>
        <p className="mb-4">
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-white">Information we collect</h2>
        <p className="mb-4">
          The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
        </p>
        <p className="mb-4">
          If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
        </p>
        <p className="mb-4">
          When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-white">How we use your information</h2>
        <p className="mb-4">
          We use the information we collect in various ways, including to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 text-white">Log Files</h2>
        <p className="mb-4">
          ${brandName} follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-white">Google DoubleClick DART Cookie</h2>
        <p className="mb-4">
          Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. Visitors can opt-out by visiting Google’s Privacy Policy at <a href="https://policies.google.com/technologies/ads" className="text-blue-400 underline">Google Ads Policies</a>.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-white">Third Party Privacy Policies</h2>
        <p className="mb-4">
          ${brandName}'s Privacy Policy does not apply to other advertisers or websites. We encourage you to consult the respective privacy policies of these third-party ad servers for more information.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-white">CCPA Privacy Rights</h2>
        <p className="mb-4">
          California consumers have the right to request details about their personal data, request deletion, and opt out of data sales.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-white">GDPR Data Protection Rights</h2>
        <p className="mb-4">
          Users have rights to access, rectify, erase, restrict processing, object to processing, and request data portability under the GDPR.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-white">Children’s Information</h2>
        <p className="mb-4">
          ${brandName} does not knowingly collect personal information from children under 13. If a child provides such information, please contact us immediately.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
`

const TermsVar = `"use client";

const TermsAndConditions = () => {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center p-8 text-gray-300">
      <div className="bg-gray-900 shadow-md rounded-md p-8 max-w-5xl w-full border border-gray-700">
        <h1 className="text-4xl font-bold text-gray-100 mb-6">
          Terms and Conditions
        </h1>
        <p className="text-lg mb-4">
          Welcome to <strong className="text-cyan-400">${brandName}</strong>.
        </p>
        <p className="text-lg mb-4">
          These terms and conditions outline the rules and regulations for the
          use of the ${brandName} Website, located at{" "}
          <a
            href="${domainUrl}"
            className="text-cyan-400 hover:underline"
          >
            ${domainUrl}
          </a>
          .
        </p>
        <p className="text-lg mb-6">
          By accessing this website, we assume you accept these terms and
          conditions. Do not continue to use ${brandName} if you do not agree to take
          all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Terminology</h2>
        <p className="text-lg mb-6">
          The following terminology applies to these Terms and Conditions,
          Privacy Statement, and Disclaimer Notice, and all Agreements: “Client”,
          “You”, and “Your” refers to you, the person logging on this website and
          compliant with the Company’s terms and conditions. “The Company”,
          “Ourselves”, “We”, “Our”, and “Us” refers to our Company. “Party”,
          “Parties”, or “Us” refers to both the Client and ourselves.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
        <p className="text-lg mb-6">
          We employ the use of cookies. By accessing ${brandName}, you agreed to use
          cookies in agreement with the ${brandName} Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4">License</h2>
        <p className="text-lg mb-6">
          Unless otherwise stated, ${brandName} and/or its licensors own the
          intellectual property rights for all material on ${brandName}. All
          intellectual property rights are reserved. You may access this from
          ${brandName} for your own personal use subject to restrictions set in these
          terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mb-4">You must not:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Republish material from ${brandName}</li>
          <li>Sell, rent, or sub-license material from ${brandName}</li>
          <li>Reproduce, duplicate or copy material from ${brandName}</li>
          <li>Redistribute content from ${brandName}</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Hyperlinking to our Content</h2>
        <p className="text-lg mb-6">
          The following organizations may link to our Website without prior
          written approval: Government agencies, search engines, news
          organizations, and online directory distributors.
        </p>

        <h2 className="text-2xl font-semibold mb-4">iFrames</h2>
        <p className="text-lg mb-6">
          Without prior approval and written permission, you may not create
          frames around our Webpages that alter in any way the visual
          presentation or appearance of our Website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Content Liability</h2>
        <p className="text-lg mb-6">
          We shall not be held responsible for any content that appears on your
          website. You agree to protect and defend us against all claims that
          arise from your website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
        <p className="text-lg mb-6">
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties, and conditions relating to our website and
          the use of this website.
        </p>

        <p className="text-lg text-gray-400">
          If you have any questions or concerns about these Terms and Conditions,
          please contact us at contact@codeapto.com.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
`

const metaTagsVar = `import localFont from "next/font/local";
import "./globals.css";


const ttle = "${toolTitle}";
const des = "${toolDescription}";
const urll = "${domainUrl}";
const keywords = ["${keywords}"];

export const metadata =  {
  title: ttle,
  description: des,
  robots: {
    follow: true,
    index: true,
    max_snippet: -1,
    max_video_preview: -1,
    max_image_preview: 'large',
  },
  url: urll,
  alternates: {
    canonical: urll,
  },
  locale: 'en',
  type: 'website',
  openGraph: {
    title: ttle,
    description: des,
    url: urll,
    site_name: '${brandName}',
    image: {
      url: "toolBannerImage",
      secure_url: "toolBannerImage",
      width: 512,
      height: 512,
      alt: ttle,
      type: 'image/png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: ttle,
    description: des,
    image: "toolBannerImage",
    label1: 'Product ideation and developed by',
    data1: 'Vicky Paswan',
  },
  script: {
    type: 'application/ld+json',
    json: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": ttle,
      "description": des,
      "url": urll,
      "image": {
        "@type": "ImageObject",
        "url": "toolBannerImage",
        "width": 512,
        "height": 512
      },
      "author": {
        "@type": "Person",
        "name": "Vicky Paswan",
        "url": "https://www.linkedin.com/in/vicky-paswan/"
      },
      "publisher": {
        "@type": "Organization",
        "name": 'CodeApto'
      },
      "inLanguage": "en",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": urll
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": urll + "?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }),
  },
  meta: [
    {
      name: 'keywords',
      content: keywords
    },
    {
      name: 'author',
      content: 'Vicky Paswan'
    },
    {
      name: 'geo.region',
      content: 'Global'
    },
    {
      name: 'geo.placename',
      content: 'Global'
    },
    {
      name: 'geo.position',
      content: 'Global'
    },
    {
      name: 'ICBM',
      content: 'Global'
    }
  ],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="apple-touch-icon" sizes="180x180" href="https://aptoapi.com/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://aptoapi.com/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://aptoapi.com/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="https://aptoapi.com/favicon_io/site.webmanifest" />
        <link rel="icon" href="https://aptoapi.com/favicon_io/favicon.ico" />
      </head>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}`;

const robotvar = `export default function robots() {
    return {
      rules: [
        {
          userAgent: 'Googlebot',
          allow: ['/'],
          disallow: ['/private/'],
        },
        {
          userAgent: ['Applebot', 'Bingbot'],
          disallow: ['/'],
        },
      ],
      sitemap: '${domainUrl}sitemap.xml',
    }
  }`

  const sitemapVar = `export default function sitemap() {
    return [
      {
        url: 'https://colorconverter.in',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: '${domainUrl}contact',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
      {
        url: '${domainUrl}privacy-policy',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
      {
        url: '${domainUrl}disclaimer',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
      {
        url: '${domainUrl}terms-and-conditions',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
      {
        url: '${domainUrl}disclosure-policy',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
    ]
  }
`
    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(true);
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        // toast.success(text);
      };


    return (
        <>
         <Toaster position="bottom-left" />
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 text-gray-300">
            <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded shadow-md w-full max-w-lg mb-4">
                <h2 className="text-2xl font-bold mb-4">Technical SEO Generator</h2>
                
                <div className="mb-4">
                    <label className="block text-gray-400">Brand Name/Company Name</label>
                    <input
                        type="text"
                        name="brandName"
                        value={formData.brandName}
                        onChange={handleChange}
                        placeholder="Enter brand name/company name"
                        className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-800 text-white"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-400">Domain URL</label>
                    <input
                        type="text"
                        name="domainUrl"
                        value={formData.domainUrl}
                        onChange={handleChange}
                        placeholder="Enter domain URL"
                        className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-800 text-white"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-400">Tool Title (max 60 characters)</label>
                    <input
                        type="text"
                        name="toolTitle"
                        value={formData.toolTitle}
                        onChange={handleChange}
                        placeholder="Enter tool title"
                        className={`w-full px-3 py-2 border ${charCount.toolTitle > 60 ? 'border-red-500' : 'border-gray-600'} rounded bg-gray-800 text-white`}
                        required
                    />
                    <div className="text-right text-gray-500">{charCount.toolTitle}/60</div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-400">Tool Description (max 145 characters)</label>
                    <textarea
                        name="toolDescription"
                        value={formData.toolDescription}
                        onChange={handleChange}
                        placeholder="Enter tool description"
                        className={`w-full px-3 py-2 border ${charCount.toolDescription > 145 ? 'border-red-500' : 'border-gray-600'} rounded bg-gray-800 text-white`}
                        required
                    />
                    <div className="text-right text-gray-500">{charCount.toolDescription}/145</div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-400">Keywords (e.g., converter, text converter)</label>
                    <input
                        type="text"
                        name="keywords"
                        value={formData.keywords}
                        onChange={handleChange}
                        placeholder="Enter keywords"
                        className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-800 text-white"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-400">Tool Banner Image</label>
                    <input
                        type="text"
                        name="toolBannerImage"
                        value={formData.toolBannerImage}
                        onChange={handleChange}
                        placeholder="Enter tool banner image URL"
                        className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-800 text-white"
                        required
                    />
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Submit</button>
            </form>
{show &&
            <div className={styles.grid} >
                <div>
                    <h2 className='text-2xl font-bold mt-4'>Meta tags(layout.js): Put in layout.js file</h2>
                    <div className="border border-gray-600" onClick={() => handleCopy(metaTagsVar)}>
                        <CopyCodeBlock code={metaTagsVar} />
                    </div>
                </div>

                <div>
                    <h2 className='text-2xl font-bold mt-4'>robots.js file</h2>
                    <div className="border border-gray-600" onClick={() => handleCopy(robotvar)}>
                        <CopyCodeBlock code={robotvar} />
                    </div>
                </div>

                <div>
                    <h2 className='text-2xl font-bold mt-4'>Sitemap(sitemap.js): Put in sitemap.js file</h2>
                    <div className="border border-gray-600" onClick={() => handleCopy(sitemapVar)}>
                        <CopyCodeBlock code={sitemapVar} />
                    </div>
                </div>

                <div>
                    <h2 className='text-2xl font-bold mt-4'>Privacy Policy(Components): Put in PrivacyPolicy.js file</h2>
                    <div className="border border-gray-600" onClick={() => handleCopy(privacyVar)}>
                        <CopyCodeBlock code={privacyVar} />
                    </div>
                </div>

                <div>
                    <h2 className='text-2xl font-bold mt-4'>Terms and Conditions(Components): Put in TermsAndConditions.js file</h2>
                    <div className="border border-gray-600" onClick={() => handleCopy(TermsVar)}>
                        <CopyCodeBlock code={TermsVar} />
                    </div>
                </div>

                <div>
                    <h2 className='text-2xl font-bold mt-4'>Disclaimer(Components): Put in Disclaimer.js file</h2>
                    <div className="border border-gray-600" onClick={() => handleCopy(desclaimerVar)}>
                        <CopyCodeBlock code={desclaimerVar} />
                    </div>
                </div>

                <div>
                    <h2 className='text-2xl font-bold mt-4'>Contact(Components): Put in ContactUs.js file</h2>
                    <div className="border border-gray-600" onClick={() => handleCopy(ContactVar)}>
                        <CopyCodeBlock code={ContactVar} />
                    </div>
                </div>

                <div>
                    <h2 className='text-2xl font-bold mt-4'>Disclosure(Components): Put in DisclosurePolicy.js file</h2>
                    <div className="border border-gray-600" onClick={() => handleCopy(DisclosureVar)}>
                        <CopyCodeBlock code={DisclosureVar} />
                    </div>
                </div>
            </div>}
        </div>
        <center><p className='text-gray-400 text-sm'>Developed by <a href="https://www.linkedin.com/in/vicky-paswan/" target='_blank' className='text-blue-500'>Vicky Paswan</a></p></center>
        </>

    );
};

export default PagesGenerator;
