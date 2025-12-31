import React from "react";
import "../styles/Legal.css";

export default function Privacy() {
  return (
    <div className="legal-page">
      <main>
        <h1>Privacy Policy</h1>

        <section>
          <h2>Scope</h2>
          <p>
            This Privacy Policy explains how Zula Travels collects, uses, stores and discloses personal data when you
            book services or use our website. We comply with the Data Protection and Privacy Act, 2019 (Uganda).
          </p>
        </section>

        <section>
          <h2>What Data We Collect</h2>
          <ul>
            <li>Identity data (name, passport/ID number)</li>
            <li>Contact data (phone, email, address)</li>
            <li>Booking details (itinerary, guests, special requests)</li>
            <li>Payment data (where we process payments)</li>
            <li>Device and usage data (IP, browser)</li>
          </ul>
        </section>

        <section>
          <h2>Legal Basis &amp; Purpose</h2>
          <p>
            We process personal data where necessary for contract performance (booking fulfillment), to comply with legal
            obligations (immigration, safety) and where you consent (marketing). The Data Protection Act requires that personal
            data be lawfully processed and that data subjects can exercise rights (access, correction, deletion).
          </p>
        </section>

        <section>
          <h2>How We Share Data</h2>
          <p>
            Personal data may be shared with airlines, hotels, national parks, permit authorities, payment processors and
            law enforcement where required. We only share the minimum required data and enter data processing or confidentiality
            agreements with partners when necessary.
          </p>
        </section>

        <section>
          <h2>Data Retention</h2>
          <p>
            We retain booking and transactional records for as long as required by law and for operational needs (usually 5–7 years),
            then anonymize or delete them in line with best practice and legal obligations.
          </p>
        </section>

        <section>
          <h2>Security</h2>
          <p>
            We apply administrative, physical and technical safeguards to protect personal data. Where we store data with
            third-party processors, we require strong contractual safeguards and security measures.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>
            You have rights of access, correction, erasure, restriction and objection in line with the Data Protection and
            Privacy Act. To exercise these rights, contact us at info@zulatravels.com.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Data Protection Officer: <strong>Zula Travels</strong> — info@zulatravels.com. If you have complaints about our
            handling of personal data you can also contact the Personal Data Protection Office (PDPO) at NITA-U.
          </p>
        </section>

        <section>
          <h2>References</h2>
          <p>
            This Privacy Policy is based on the requirements of the Data Protection and Privacy Act, 2019 of Uganda.
          </p>
        </section>
      </main>
    </div>
  );
}