import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from '@/components/breadcrumb';
import Link from 'next/link';
  
export default function PrivacyPolicyPage() {
    return (
      <div className="bg-white text-[#0B0B0B]">
        <main className="min-h-screen">
          <section className="bg-[#F5F6F6] py-8 md:py-12">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <Link href="/">HOME</Link>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>PRIVACY POLICY</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-light tracking-tight" style={{ lineHeight: 0.95 }}>
                Privacy Policy
              </h1>
            </div>
          </section>
  
          <section className="py-12 md:py-20 lg:py-24">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
                <p>Dubai Contracting Company PSC ("Crown LLC") created this privacy policy (the "Site Policy") to demonstrate our commitment to the privacy of our website visitors and the right of privacy throughout the Internet. Privacy on this Crown LLC website (the "Site") is of great importance to us. Because we gather anonymous information from visitors to our Site, we have established this policy to communicate our information gathering and dissemination practices. Crown LLC will treat this information in accordance with the privacy statement in place at the time of collection of such information. By using this Site, you are agreeing to the terms of the Site Policy. We reserve the right to change the Site Policy. It is the responsibility of the website visitor to visit this page to learn about any updates/changes to the policy.</p>

                <h2 className="uppercase font-medium tracking-wider mt-16">Collected Information</h2>

                <h3 className="font-medium tracking-wide mt-8 text-xl">Anonymous Information</h3>
                <p>
                You can visit the Site to read information about our company, products, and services without telling us who you are and without revealing any personal information. To improve the usefulness of our site, Crown LLC measures and analyses non-identifying, aggregate usage, and volume statistical information from Site visitors to administer our Site, and to constantly improve the quality of our service and site performance.
                </p>
                <p>
                Information gathered may include, but is not limited to, the following: the activity of the Site visitor's browser when the visitor is viewing the Site; the site path of visitors; and the time visitors come to the Site. Crown LLC reserves the right to publish anonymous, aggregate summary information regarding its Site visitors for promotional purposes and as a representative audience for advertisers. Please note that this is not personal information, only general summaries of our visitors' usage of the Site.
                </p>
                {/* Additional sections from attachments */}
                <h2 className="uppercase font-medium tracking-wider mt-16">Personally Identifiable Information</h2>
                <p>Crown LLC does not ask for personal information of Site visitors, such as name, company, title, phone number, e-mail address, site name, URL and how they heard about us. This type of information is not required by us for you to browse and enjoy our Site.</p>

                <h2 className="uppercase font-medium tracking-wider mt-16">Site Cookies</h2>
                <h3 className="font-medium tracking-wide mt-8 text-xl">What Are Cookies</h3>
                <p>Cookies are files that Web servers place on an Internet user's computer that are designed to store basic information (such as visitor preferences). The use of cookies on this Site allows visitors to enjoy more seamless visits and more accurately measures visitor behaviour on the Site. There are two types of cookies: session and persistent. Session cookies exist only during an Internet user's online session. They disappear from the user's computer when he/she closes the browser software. Persistent cookies remain on the user's computer after the browser has been closed. The cookies used on the Site do not identify you personally. They merely recognize your browser while you remain anonymous.</p>

                <h3 className="font-medium tracking-wide mt-8 text-xl">How We Use Cookies</h3>
                <p>When you interact with the Site, we strive to make that experience easy and meaningful. When you come to our Site, the hosting web server uses cookies to improve your interaction with the Site by, for example, remembering your preferences. More specifically, Crown LLC uses cookies to measure your behaviour on this Site and to save personal settings on specific pages. Crown LLC uses cookies (that only Crown LLC can read and use) to identify the fact that you are a prior Site visitor. Users who disable their Web browsers' ability to accept cookies will still be able to browse the Site; however, they may lose some of the functionality provided using cookies.</p>

                <h3 className="font-medium tracking-wide mt-8 text-xl">Controlling Our Use Of Cookies</h3>
                <p>You may accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you are using a public computer or do not otherwise want the general information to be stored, you can select the appropriate radio button on the page, and this cookie will not be used. If you choose to decline cookies, you may not be able to use some features of Crown LLC web site that depend on cookies.</p>

                <h3 className="font-medium tracking-wide mt-8 text-xl">What Are Clear Gifs?</h3>
                <p>Clear gifs (also known as web beacons) are used in combination with cookies to help Site operators understand how visitors interact with their websites. A clear gif is typically a transparent graphic image (usually 1 pixel x 1 pixel) that is placed on a site. The use of a clear gif allows the Site to measure the actions of the visitor opening the page that contains the clear gif.</p>

                <h3 className="font-medium tracking-wide mt-8 text-xl">How We Use Clear Gifs</h3>
                <p>We utilize clear gifs to measure visitor behaviour, to help us improve visitor experience, and to manage site content.</p>

                <h2 className="uppercase font-medium tracking-wider mt-16">Third Party Sites</h2>
                <p>The Site may contain links to other websites. Crown LLC is not responsible for the privacy practices or the content of these other websites. Visitors should check the privacy policy statements of these other websites to understand their policies. Customers and visitors who access a linked site may be disclosing their private information. It is the responsibility of the user to keep such information private and confidential.</p>

                <h2 className="uppercase font-medium tracking-wider mt-16">Policy Date</h2>
                <p>This policy was last updated on Mach 30, 2023.</p>
            </div>
          </section>
        </main>
      </div>
    );
}
