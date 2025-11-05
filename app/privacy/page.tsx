import Link from "next/link";
import BackgroundEden from "@/components/BackgroundEden";

export const metadata = {
  title: "Privacy Policy - Waitlist Component",
  description: "Privacy Policy for Waitlist Component",
};

export default function PrivacyPage() {
  return (
    <>
      <main className="relative min-h-screen">
        <BackgroundEden />
        <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 max-w-4xl">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-2xl border-2 border-purple-500/30">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 mb-8 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>

            <h1 className="text-4xl sm:text-5xl font-bold text-purple-900 mb-4">Privacy Policy</h1>
            <p className="text-sm text-neutral-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-purple max-w-none space-y-6 text-neutral-700">
              <section>
                <h2 className="text-2xl font-semibold text-purple-900 mt-8 mb-4">1. Introduction</h2>
                <p>
                  We respect your privacy and are committed to protecting your personal data. This privacy policy explains
                  how we collect, use, and safeguard your information when you use our waitlist service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-purple-900 mt-8 mb-4">2. Information We Collect</h2>
                <p>We collect the following information:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Email Address:</strong> Collected when you submit the waitlist form</li>
                  <li><strong>IP Address:</strong> Collected for rate limiting and security purposes</li>
                  <li><strong>Timestamp:</strong> Automatically recorded when you submit your email</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-purple-900 mt-8 mb-4">3. How We Use Your Information</h2>
                <p>We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>To notify you about product updates and launch announcements</li>
                  <li>To prevent spam and abuse through rate limiting</li>
                  <li>To improve our service and user experience</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-purple-900 mt-8 mb-4">4. Data Storage and Security</h2>
                <p>
                  Your email address is stored securely in our Supabase database. We implement appropriate technical and
                  organizational measures to protect your personal data against unauthorized access, alteration, disclosure,
                  or destruction.
                </p>
                <p className="mt-2">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive
                  to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-purple-900 mt-8 mb-4">5. Data Retention</h2>
                <p>
                  We will retain your email address for as long as necessary to fulfill the purposes outlined in this privacy
                  policy, unless a longer retention period is required or permitted by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-purple-900 mt-8 mb-4">6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Unsubscribe from communications at any time</li>
                  <li>Object to processing of your personal data</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the information provided in the Contact section.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-purple-900 mt-8 mb-4">7. Third-Party Services</h2>
                <p>
                  We use Supabase to store and manage your email data. Supabase is a third-party service provider that
                  complies with data protection regulations. For more information about Supabase&apos;s privacy practices,
                  please visit their privacy policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-purple-900 mt-8 mb-4">8. Cookies and Tracking</h2>
                <p>
                  This waitlist service does not use cookies or tracking technologies. We only collect the email address you
                  explicitly provide through the form.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-purple-900 mt-8 mb-4">9. Children&apos;s Privacy</h2>
                <p>
                  Our service is not intended for children under the age of 13. We do not knowingly collect personal
                  information from children under 13. If you are a parent or guardian and believe your child has provided us
                  with personal information, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-purple-900 mt-8 mb-4">10. Changes to This Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                  Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this
                  Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-purple-900 mt-8 mb-4">11. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us
                  through the appropriate channels listed on our website.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-neutral-200">
              <Link
                href="/terms"
                className="text-purple-700 hover:text-purple-900 underline transition-colors"
              >
                View Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

