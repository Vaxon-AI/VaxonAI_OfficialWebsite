import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { absoluteUrl, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy — Vaxon Content Automation',
  description:
    'How Vaxon Content Automation collects, uses, stores, shares, and deletes information for authorised LinkedIn and Instagram publishing.',
  alternates: { canonical: absoluteUrl('/privacy-policy') },
  openGraph: {
    title: 'Privacy Policy — Vaxon Content Automation',
    description:
      'How Vaxon Content Automation handles information for authorised LinkedIn and Instagram publishing.',
    url: absoluteUrl('/privacy-policy'),
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const effectiveDate = '11 July 2026'

const policyIndex = [
  'Scope and operator',
  'Information we collect',
  'When we collect information',
  'How we use information',
  'Connected accounts and publishing',
  'Sharing and international processing',
  'Retention',
  'Disconnection and deletion',
  'Your rights and choices',
  'Security',
  'Children',
  'Changes and contact',
]

type PolicySectionProps = {
  id?: string
  number: string
  title: string
  children: ReactNode
}

function PolicySection({ id, number, title, children }: PolicySectionProps) {
  return (
    <section id={id} className="grid scroll-mt-28 gap-5 border-t border-[#dfe2ee] py-10 md:grid-cols-[4rem_1fr] md:gap-8">
      <p className="pt-1 text-sm font-semibold tabular-nums text-[#8c96c8]">{number}</p>
      <div>
        <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#12162e] md:text-[1.75rem]">{title}</h2>
        <div className="mt-5 space-y-4 text-[0.975rem] leading-7 text-[#4e5573]">{children}</div>
      </div>
    </section>
  )
}

function BulletList({ children }: { children: ReactNode }) {
  return <ul className="grid list-disc gap-2.5 pl-5 marker:text-[#8c96c8]">{children}</ul>
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="page-hero border-b border-[#c7cfec]/15">
        <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="page-kicker">Legal</p>
            <h1 className="page-title">Privacy Policy</h1>
          </div>
          <div>
            <p className="page-intro">
              This policy explains how Vaxon Content Automation handles information when authorised users connect social accounts to prepare and publish content.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/15 pt-5 text-sm text-white/60">
              <p>Effective {effectiveDate}</p>
              <p>Last updated {effectiveDate}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="shell grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <aside className="self-start lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#59628f]">At a glance</p>
            <dl className="mt-5 border-t border-[#dfe2ee] text-sm">
              {[
                ['Operator', 'Vaxon'],
                ['Service', 'Vaxon Content Automation'],
                ['Platforms', 'LinkedIn and Instagram'],
                ['Primary purpose', 'User-authorised content publishing'],
                ['Personal data sold', 'No'],
                ['Deletion available', 'Yes'],
              ].map(([term, description]) => (
                <div key={term} className="grid grid-cols-[0.9fr_1.1fr] gap-4 border-b border-[#dfe2ee] py-4">
                  <dt className="text-[#8c96c8]">{term}</dt>
                  <dd className="font-medium leading-6 text-[#12162e]">{description}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 hidden lg:block">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#59628f]">In this policy</p>
              <ol className="mt-5 grid gap-2.5 text-xs leading-5 text-[#4e5573]">
                {policyIndex.map((item, index) => (
                  <li key={item} className="grid grid-cols-[1.75rem_1fr] gap-2">
                    <span className="tabular-nums text-[#8c96c8]">{String(index + 1).padStart(2, '0')}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <article aria-label="Vaxon Content Automation privacy policy">
            <div className="pb-10">
              <p className="max-w-2xl text-xl leading-8 tracking-[-0.015em] text-[#12162e]">
                We collect only the information needed to connect accounts, carry out publishing instructions, keep the service secure, and meet our legal and platform obligations.
              </p>
              <p className="mt-5 max-w-2xl text-[0.975rem] leading-7 text-[#4e5573]">
                Vaxon Content Automation is independent from LinkedIn and Meta. References to LinkedIn and Instagram identify third-party platforms and do not imply sponsorship or endorsement.
              </p>
            </div>

            <PolicySection number="01" title="Scope and operator">
              <p>
                This policy applies to Vaxon Content Automation (the “Service”), operated by Vaxon, an Australia-based AI systems studio (“Vaxon”, “we”, “us”, or “our”). It covers the Service, its social-platform connections, and related support interactions.
              </p>
              <p>
                The Service is intended for authorised business users who manage social accounts they own or are authorised by their organisation to manage. Users are responsible for ensuring they have the rights and permissions needed for the accounts, content, and any personal information contained in material they submit.
              </p>
            </PolicySection>

            <PolicySection number="02" title="Information we collect">
              <p>Depending on the features you use and the permissions you approve, we may process:</p>
              <BulletList>
                <li>
                  <strong className="font-semibold text-[#12162e]">Information you provide:</strong> name, business contact details, organisation details, support messages, publishing preferences, captions, links, hashtags, alternative text, images, videos, documents, draft content, and requested publication times.
                </li>
                <li>
                  <strong className="font-semibold text-[#12162e]">Connected-account data:</strong> OAuth access credentials, approved permission scopes, platform user or member identifiers, organisation or Page identifiers, Instagram professional-account identifiers, account names, and the roles or permissions needed to confirm that you may publish.
                </li>
                <li>
                  <strong className="font-semibold text-[#12162e]">Publishing data:</strong> selected destination, schedule, platform post or media-container identifier, submission time, publication status, and error information returned by the platform.
                </li>
                <li>
                  <strong className="font-semibold text-[#12162e]">Technical and security data:</strong> IP address, browser or device information, request timestamps, authentication and consent records, service events, and limited diagnostic logs needed to protect and operate the Service.
                </li>
              </BulletList>
              <p>
                We do not ask for or store your LinkedIn, Instagram, or Facebook password. Platform authorisation takes place through the platform&apos;s own OAuth process. The core publishing workflow does not require us to collect private messages, connections, unrelated profiles, or contact lists.
              </p>
              <p>
                For the core publishing workflow, we store only the connected-account identifiers, account names, and authorisation roles needed to provide the Service. We do not access or store broader LinkedIn member profiles, private messages, connections, contact lists, comments, or reactions. We do not place raw access tokens or social-post content in diagnostic logs.
              </p>
            </PolicySection>

            <PolicySection number="03" title="When we collect information">
              <p>We collect information when you:</p>
              <BulletList>
                <li>provide it directly, upload content, choose settings, or contact Vaxon;</li>
                <li>connect a social account and approve specific permissions through the relevant platform;</li>
                <li>select a destination, approve a publication, or create a schedule where the platform permits scheduling and Vaxon has received any required approval; and</li>
                <li>use the Service, when limited operational and security events are generated.</li>
              </BulletList>
              <p>
                While an account remains connected, the Service may confirm that its authorisation is still valid and retrieve the result of a publishing request. We do not use that connection to import unrelated social activity on an automated schedule.
              </p>
            </PolicySection>

            <PolicySection number="04" title="How we use information">
              <p>We use information to:</p>
              <BulletList>
                <li>authenticate users, connect selected accounts, and confirm publishing authority;</li>
                <li>prepare, review, schedule, transmit, and publish content according to an authorised user&apos;s instructions;</li>
                <li>show publishing status, diagnose failed requests, and provide support;</li>
                <li>maintain security, prevent misuse, enforce service terms, and keep minimal, non-content audit events; and</li>
                <li>comply with applicable law and the requirements of connected platforms.</li>
              </BulletList>
              <p>
                We do not sell or rent personal information or platform data. We do not use it for third-party advertising, data-broker activity, employment or credit decisions, surveillance, or discriminatory profiling. We do not use LinkedIn or Instagram platform data to train any artificial-intelligence model.
              </p>
              <p>
                Where applicable, we process information to provide the Service you request, based on your consent, for our legitimate interests in securing and maintaining the Service using minimal non-content technical telemetry, and to meet legal obligations. You may withdraw consent at any time, subject to the consequences described below.
              </p>
            </PolicySection>

            <PolicySection number="05" title="Connected accounts and publishing control">
              <p>
                We request only the platform permissions needed for the feature you choose. The authorisation screen shown by LinkedIn or Meta describes the requested permissions, and you decide whether to approve them.
              </p>
              <p>
                The Service sends content only to an account and destination that an authorised user has selected. Where scheduling is available, allowed by the platform, and covered by any approval Vaxon is required to obtain, a saved schedule is the user&apos;s instruction to publish the approved content at the selected time.
              </p>
              <p>
                We do not publish to an unconnected account, conceal the destination, or use connected-account data to create unrelated posts. If a platform limits or withdraws a permission, the affected feature may stop working.
              </p>
              <p>
                Some Instagram publishing methods may require Meta to retrieve selected media from a temporary, retrievable URL. If Vaxon uses that method, the URL is created only to deliver the user-selected file to Meta and the file is removed when it is no longer needed for the publishing request. Other upload methods send media directly to the platform.
              </p>
            </PolicySection>

            <PolicySection number="06" title="Sharing and international processing">
              <p>We disclose information only where necessary for the purposes described in this policy:</p>
              <BulletList>
                <li>
                  <strong className="font-semibold text-[#12162e]">Connected platforms:</strong> we transmit approved content, media, account identifiers, and publishing instructions to LinkedIn or Meta/Instagram when you ask the Service to publish.
                </li>
                <li>
                  <strong className="font-semibold text-[#12162e]">Service providers:</strong> carefully selected providers may support secure hosting, data storage, media delivery, monitoring, and customer support. They may process information only to provide services to Vaxon and must protect it appropriately.
                </li>
                <li>
                  <strong className="font-semibold text-[#12162e]">Legal and safety needs:</strong> where applicable platform terms and law permit, we may disclose the minimum necessary information to comply with a valid legal process, protect users, investigate abuse, or defend legal rights.
                </li>
                <li>
                  <strong className="font-semibold text-[#12162e]">Business change:</strong> non-platform information may be transferred as part of a merger, financing, acquisition, reorganisation, or sale of assets, subject to appropriate confidentiality and continued protection. Platform data and OAuth credentials are transferred only if the relevant platform terms permit it and any required approval or renewed user authorisation is obtained; otherwise, they are deleted.
                </li>
              </BulletList>
              <p>
                Vaxon is based in Australia. Some connected platforms and service providers may process information in other countries. Where required, we use contractual and organisational safeguards intended to protect information during international processing.
              </p>
            </PolicySection>

            <PolicySection number="07" title="Retention">
              <p>
                We keep information only for as long as needed to provide the feature you requested, maintain security and necessary records, resolve disputes, comply with law, and meet the relevant platform&apos;s rules. We apply any shorter storage or caching period required for a particular category of LinkedIn or Meta platform data.
              </p>
              <BulletList>
                <li>OAuth credentials are retained only while needed for an active connection and are removed or made unusable when the connection is revoked, expires, or must be deleted.</li>
                <li>Drafts, uploaded media, and queued instructions are retained while needed for the requested publishing workflow or until you delete them.</li>
                <li>Publishing records and diagnostic logs are retained only for the shortest period reasonably needed for status history, support, security, and compliance.</li>
              </BulletList>
              <p>
                When LinkedIn or Meta platform data is no longer needed or permitted, we permanently delete it; de-identification is not used as a substitute where platform terms require deletion. Non-platform information may be deleted or de-identified where law and this policy permit. Necessary audit records are limited to non-content events and do not extend the retention of platform content or OAuth credentials.
              </p>
            </PolicySection>

            <PolicySection id="data-deletion" number="08" title="Disconnection and deletion">
              <p>
                You may withdraw future access by disconnecting the social account in the Service, where that control is available, or by removing Vaxon Content Automation from the permitted applications in your LinkedIn or Meta account settings. Revocation stops future authorised access. When Vaxon receives or detects the revocation, we revoke the credential where supported and delete it from active systems.
              </p>
              <p>
                Revoking access does not necessarily delete information already provided to the Service. To request deletion, contact Vaxon using the details in section 12 and write “Privacy Request” in the subject or first line. Include the email address used with the Service and identify the connected account; never send a password or access token.
              </p>
              <p>
                After we verify the request, LinkedIn API-derived content, member tokens, and OAuth access credentials are permanently deleted immediately where required by LinkedIn&apos;s terms. Any stored LinkedIn Marketing or Community Management data is deleted no later than 10 days after a valid client or account-manager request, or sooner where a stricter rule applies. Other associated personal information and stored platform data are deleted promptly and within any shorter period required by law or platform terms, unless we are legally required to retain a specific non-platform record. If the Service provides an account that you close, the same process applies.
              </p>
              <p>
                Content already published on LinkedIn or Instagram remains under that platform&apos;s control until removed there. Deleting Service data does not automatically remove a published post from the platform.
              </p>
            </PolicySection>

            <PolicySection number="09" title="Your rights and choices">
              <p>
                Depending on where you live, you may have rights to access, correct, delete, restrict, or object to the processing of your personal information; receive a portable copy; withdraw consent; or complain to a privacy regulator.
              </p>
              <p>
                Contact us to exercise a right. We may ask for limited information to verify your identity and authority over the relevant account. Withdrawing consent does not affect processing that was lawful before withdrawal, but it may prevent the Service from continuing to publish.
              </p>
            </PolicySection>

            <PolicySection number="10" title="Security">
              <p>
                We use administrative, technical, and organisational measures designed to protect information from accidental or unlawful loss, misuse, alteration, disclosure, or access. These measures include encrypted network connections, restricted access, protected credential storage, logging and monitoring, and procedures for responding to security incidents.
              </p>
              <p>
                No online service is completely secure. If an incident affects personal information, we will investigate, limit the impact, and notify affected parties, regulators, and relevant platforms when required.
              </p>
            </PolicySection>

            <PolicySection number="11" title="Children">
              <p>
                The Service is a business tool and is not directed to children under 18. We do not knowingly collect personal information from children through the Service. If you believe a child has provided personal information, contact us so we can investigate and delete it where appropriate.
              </p>
            </PolicySection>

            <PolicySection number="12" title="Changes and contact">
              <p>
                We may update this policy when the Service, platform permissions, providers, or legal requirements change. We will post the revised version at this address and update the “Last updated” date. Where a change materially affects how previously collected information is used or disclosed, we will provide additional notice or seek consent when required.
              </p>
              <div className="mt-6 border-y border-[#dfe2ee] py-6 text-[#12162e]">
                <p className="font-semibold">Vaxon — Privacy</p>
                <p className="mt-2">Australia</p>
                <p className="mt-2">Privacy enquiries and deletion requests: {site.email}</p>
                <p className="mt-2">Contact form: www.vaxon.org/contact</p>
              </div>
            </PolicySection>
          </article>
        </div>
      </section>
    </main>
  )
}
