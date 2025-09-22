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
                <p>Dubai Contracting Company PSC ("DCC") created this privacy policy (the "Site Policy") to demonstrate our commitment to the privacy of our website visitors and the right of privacy throughout the Internet. Privacy on this DCC website (the "Site") is of great importance to us. Because we gather anonymous information from visitors to our Site, we have established this policy to communicate our information gathering and dissemination practices. DCC will treat this information in accordance with the privacy statement in place at the time of collection of such information. By using this Site, you are agreeing to the terms of the Site Policy. We reserve the right to change the Site Policy. It is the responsibility of the website visitor to visit this page to learn about any updates/changes to the policy.</p>

                <h2 className="uppercase font-medium tracking-wider mt-16">Collected Information</h2>

                <h3 className="font-medium tracking-wide mt-8 text-xl">Anonymous Information</h3>
                <p>
                You can visit the Site to read information about our company, products, and services without telling us who you are and without revealing any personal information. To improve the usefulness of our site, DCC measures and analyses non-identifying, aggregate usage, and volume statistical information from Site visitors to administer our Site, and to constantly improve the quality of our service and site performance.
                </p>
                <p>
                Information gathered may include, but is not limited to, the following: the activity of the Site visitor's browser when the visitor is viewing the Site; the site path of visitors; and the time visitors come to the Site. DCC reserves the right to publish anonymous, aggregate summary information regarding its Site visitors for promotional purposes and as a representative audience for advertisers. Please note that this is not personal information, only general summaries of our visitors' usage of the Site.
                </p>
            </div>
          </section>
        </main>
      </div>
    );
}
