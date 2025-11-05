import Link from "next/link";
import BackgroundEden from "@/components/BackgroundEden";

export const metadata = {
  title: "Terms of Service - Waitlist Component",
  description: "Terms of Service for Waitlist Component",
};

export default function TermsPage() {
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

            <h1 className="text-4xl sm:text-5xl font-bold text-purple-900 mb-4">Terms of Service</h1>
            <p className="text-sm text-neutral-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-purple max-w-none space-y-6 text-neutral-700">
              <section>
                <h2 className="text-2xl font-semibold text-purple-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using this waitlist service, you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-purple-900 mt-8 mb-4">2. Use License</h2>
                <p>
                  Permission is granted to temporarily use this waitlist service for personal, non-commercial transitory
                  viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained in the service</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-purple-900 mt-8 mb-4">3. Email Collection</h2>
                <p>
                  By submitting your email address, you agree to receive communications from us regarding updates,
                  announcements, and information related to our product launch. You can unsubscribe at any time by
                  contacting us or using the unsubscribe link in any email you receive.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-purple-900 mt-8 mb-4">4. User Conduct</h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Submit false or misleading information</li>
                  <li>Use automated systems to submit multiple email addresses</li>
                  <li>Interfere with or disrupt the service or servers</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-purple-900 mt-8 mb-4">5. Disclaimer</h2>
                <p>
                  The materials on this waitlist service are provided on an &apos;as is&apos; basis. We make no warranties,
                  expressed or implied, and hereby disclaim and negate all other warranties including, without limitation,
                  implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
                  of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-purple-900 mt-8 mb-4">6. Limitations</h2>
                <p>
                  In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for
                  loss of data or profit, or due to business interruption) arising out of the use or inability to use the
                  materials on this waitlist service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-purple-900 mt-8 mb-4">7. Modifications</h2>
                <p>
                  We reserve the right to revise these terms of service at any time without notice. By using this service,
                  you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-purple-900 mt-8 mb-4">8. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us through the appropriate
                  channels listed on our website.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-neutral-200">
              <Link
                href="/privacy"
                className="text-purple-700 hover:text-purple-900 underline transition-colors"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

