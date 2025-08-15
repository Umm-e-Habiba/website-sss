// app/layout.js
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "public/assets/css/plugins/bootstrap.min.css"
import "public/assets/css/plugins/aos.css"
import "public/assets/css/plugins/fontawesome.css"
import "public/assets/css/plugins/slick-slider.css"
import "public/assets/css/plugins/nice-select.css"
import "public/assets/css/plugins/fonts.css"
import "public/assets/css/master.css"
import "public/assets/css/h4-master.css"
import TopBar from '@/components/layout/TopBar';



export const metadata = {
  title: 'Security Guard Services | Security Company in Melbourne',
  description: 'Metro Guards is a leading security company in Melbourne. We are providing security guard services for both residential & commercial Buildings. Call us 1300731173',
  openGraph: {
    title: "Security Guard Services - Security Company in Melbourne",
    description: "Metro Guards is a leading security company in Melbourne. We are providing security guard services for both residential & commercial Buildings. Call us 1300731173",
    url: "https://metroguards.vercel.app",
    siteName: "Metro Guards",
    images: [
      {
        url: "/assets/img/logo/mg metro gaurds.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Guards Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Guard Services - Security Company in Melbourne",
    description: "Metro Guards is a leading security company in Melbourne. We are providing security guard services for both residential & commercial Buildings. Call us 1300731173",
    images: ["https://metroguards.vercel.app/assets/img/logo/mg metro gaurds.jpg"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="#top">
      <body className="relative">
        {/* Header Strip - fixed at the very top */}
        <div className="fixed top-0 left-0 right-0 z-50">
          {/* <TopBar/> */}
        </div>

        {/* Main content with padding to account for header strip height */}
        <main className="pt-[40px] min-h-screen"> {/* Adjust pt value based on your header strip height */}
          {children}
        </main>
      </body>
    </html>
  )
}