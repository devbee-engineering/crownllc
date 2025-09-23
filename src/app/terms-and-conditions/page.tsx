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
            <p>Last updated: July 22, 2024</p>
            <p>Please read these terms and conditions carefully before using Our Service.</p>

            <h2 className="uppercase font-medium tracking-wider mt-16">Interpretation and Definitions</h2>
            
            <h3 className="font-medium tracking-wide mt-8 text-xl">Interpretation</h3>
            <p>
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>

            <h3 className="font-medium tracking-wide mt-8 text-xl">Definitions</h3>
            <p>For the purposes of these Terms and Conditions:</p>
            <ul className="list-disc pl-8 space-y-4">
              <li>
                <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
              </li>
              <li>
                <strong>Company</strong> (referred to as either "the Company", "We", "Us", "Our" or "Crown LLC" in this Agreement) refers to DUBAI CONTRACTING COMPANY PSC.
              </li>
              <li>
                <strong>Country</strong> refers to: United Arab Emirates
              </li>
              <li>
                <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
              </li>
              <li>
                <strong>Service</strong> refers to the Website.
              </li>
              <li>
                <strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.
              </li>
              <li>
                <strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
              </li>
              <li>
                <strong>Website</strong> refers to Crown Pillars, accessible from [website URL]
              </li>
              <li>
                <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
              </li>
            </ul>

            <h2 className="uppercase font-medium tracking-wider mt-16">Acknowledgment</h2>
            <p>
              These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
            </p>
            <p>
              Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
            </p>
            <p>
              By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
            </p>
            <p>
              You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
            </p>
            <p>
              Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
            </p>

            <h2 className="uppercase font-medium tracking-wider mt-16">Links to Other Websites</h2>
            <p>
              Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
            </p>
            <p>
              The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
            </p>
            <p>
              We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
            </p>
            
            <h2 className="uppercase font-medium tracking-wider mt-16">Termination</h2>
            <p>
              We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
            </p>
            <p>
              Upon termination, Your right to use the Service will cease immediately.
            </p>

            <h2 className="uppercase font-medium tracking-wider mt-16">Limitation of Liability</h2>
            <p>
            To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, for loss of data or other information, for business interruption, for personal injury, for loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
            </p>
            <p>
              Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
            </p>
            
            {/* Additional sections from attachments */}
            <h2 className="uppercase font-medium tracking-wider mt-16">"As Is" And "As Available" Disclaimer</h2>
            <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>
            <p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>

            <h2 className="uppercase font-medium tracking-wider mt-16">Governing Law</h2>
            <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Service may also be subject to other local, state, national, or international laws.</p>

            <h2 className="uppercase font-medium tracking-wider mt-16">Disputes Resolution</h2>
            <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>

            <h2 className="uppercase font-medium tracking-wider mt-16">Severability</h2>
            <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>

            <h2 className="uppercase font-medium tracking-wider mt-16">Waiver</h2>
            <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>

            <h2 className="uppercase font-medium tracking-wider mt-16">Changes To These Terms And Conditions</h2>
            <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
            <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>

            <h2 className="uppercase font-medium tracking-wider mt-16">Terms And Conditions Date</h2>
            <p>Our Terms and Conditions were last updated on April 6, 2023.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
