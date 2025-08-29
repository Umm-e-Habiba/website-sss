import Faq1 from "./Faq1";

export const metadata = {
  title: "FAQ| Metro Guards",
  description:
    "Frequently asked questions about Metroguards.",
  openGraph: {
    title: "K9 Security Services - Metro Guards Melbourne",
    description:
      "Frequently asked questions about Metroguards.",
    url: "https://metroguards.vercel.app/FAQ",
    siteName: "Metro Guards",
    images: [
      {
        url: "/assets/img/logo/mg metro gaurds.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Guards K9 Security Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Metro Guards Melbourne",
    description:
      "Looking for urgent or short-term security? Metro Guards provides adhoc security services across Melbourne for businesses, events, and emergencies.",
    images: [
      "https://metroguards.vercel.app/assets/img/logo/mg metro gaurds.jpg",
    ],
  },
};

// Only renders your client component
export default function Page() {
  return <Faq1/>;
}
