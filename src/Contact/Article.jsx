
import React from "react";

const Article = () => {
  return (
    <section className="bg-gray-200 py-4 sm:py-6">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <article className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            666RS Contact &amp; Support
          </h2>

          <p className="mt-4 text-base leading-8 text-gray-600 sm:text-[17px]">
            If you need <strong>666RS Contact</strong> information,
            this page provides guidance for visitors looking for{" "}
            <strong>666RS Contact Us</strong>,{" "}
            <strong>666RS Support</strong>, and general website
            assistance. Visitors can use the contact form to ask questions
            about website information, account access, gameplay guides, and
            platform-related topics. If you need help understanding the
            website or finding relevant resources, describe your question
            clearly when submitting a message. For{" "}
            <strong>666RS Technical Support</strong>,{" "}
            <strong>666RS Account Help</strong>,{" "}
            <strong>666RS Login Help</strong>, or registration-related
            questions, provide only the information necessary to explain
            your issue. Never share your password, verification codes, or
            sensitive account details through a contact form. Visitors can
            also explore information about mobile access, platform
            information, account security, and responsible gaming throughout
            this website.
          </p>

          {/* 14 CONTACT ARTICLE TOPICS */}
          <div className="mt-8 border-t border-gray-300 pt-6">
            <h3 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
              666RS Contact &amp; Support Articles
            </h3>

            <div className="mt-5 grid gap-x-10 gap-y-2 text-base leading-7 text-gray-600 sm:grid-cols-2">
              {/* LEFT SIDE */}
              <div className="space-y-2">
                <p>• 666RS Contact and Support Guide</p>
                <p>• 666RS Customer Support Information</p>
                <p>• 666RS Account Help Guide</p>
                <p>• 666RS Login Help and Common Issues</p>
                <p>• 666RS Registration Information</p>
                <p>• 666RS Access Guide</p>
                <p>• 666RS Mobile Access Information</p>
              </div>

              {/* RIGHT SIDE */}
              <div className="space-y-2">
                <p>• 666RS Payment Information and Safety</p>
                <p>• 666RS Deposit Information Guide</p>
                <p>• 666RS Withdrawal Information Guide</p>
                <p>• 666RS Technical Help Guide</p>
                <p>• 666RS Frequently Asked Questions</p>
                <p>• 666RS Platform Features and Information</p>
                <p>• 666RS User Support Guide</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Article;
