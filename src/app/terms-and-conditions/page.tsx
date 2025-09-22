import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/breadcrumb';
import Link from 'next/link';

export default function TermsAndConditionsPage() {
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
                  <BreadcrumbPage>TERMS & CONDITIONS</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-light tracking-tight" style={{ lineHeight: 0.95 }}>
              Terms & Conditions
            </h1>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
            <p>Please read these terms and conditions carefully.</p>

            <h2 className="uppercase font-medium tracking-wider mt-16">Interpretation</h2>
            <p>
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>

            <h2 className="uppercase font-medium tracking-wider mt-16">Definitions</h2>
            <p>For the purposes of these Terms and Conditions:</p>
            <ul className="list-disc pl-8 space-y-4">
              <li>
                <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
              </li>
              <li>
                <strong>Company</strong> (referred to as either "the Company", "We", "Us", "Our" or "DCC" in this Agreement) refers to DUBAI CONTRACTING COMPANY PSC.
              </li>
              <li>
                <strong>Country</strong> refers to United Arab Emirates.
              </li>
              <li>
                <strong>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}