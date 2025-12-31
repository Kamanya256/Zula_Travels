import React from "react";
import "../styles/Legal.css";

export default function Terms() {
  return (
    <div className="legal-page">
      <main>
        <h1>Terms of Service</h1>

        <section>
          <h2>Agreement to Terms</h2>
          <p>
            By booking any travel services with Zula Travels, you agree to these Terms of Service and our Privacy Policy.
            These terms constitute a legally binding agreement between you and Zula Travels.
          </p>
        </section>

        <section>
          <h2>Free Consultation Services</h2>
          <p>
            We are pleased to offer complimentary consultation services to help you plan your perfect trip. Our travel experts 
            provide free advice and itinerary planning without any obligation to book.
          </p>
          <ul>
            <li>Free personalized travel consultations</li>
            <li>Custom itinerary planning at no cost</li>
            <li>Expert advice on destinations and experiences</li>
            <li>No hidden fees for consultation services</li>
          </ul>
        </section>

        <section>
          <h2>Booking and Payments</h2>
          <p><strong>No Booking Fees:</strong> We do not charge any booking fees for our services.</p>
          <ul>
            <li>All bookings are subject to availability and confirmation</li>
            <li><strong>No booking fees</strong> - we charge only for the actual services</li>
            <li>Deposits are required to secure bookings (applied toward final payment)</li>
            <li>Full payment must be made before service delivery</li>
            <li>Prices are subject to change without notice until booking is confirmed</li>
            <li>We accept various payment methods including bank transfer, mobile money, and credit cards</li>
          </ul>
        </section>

        <section>
          <h2>Cancellation and Refunds</h2>
          <p>
            While we don't charge booking fees, cancellation charges may apply depending on the service provider's policies 
            and the timing of cancellation:
          </p>
          <ul>
            <li>Cancellations 30+ days before travel: Full refund of payments made</li>
            <li>Cancellations 15-29 days before travel: 50% refund of payments made</li>
            <li>Cancellations less than 14 days before travel: No refund</li>
            <li>Some services (gorilla permits, flight tickets, special events) may have non-refundable components</li>
            <li>Third-party provider fees may be non-refundable as per their policies</li>
          </ul>
        </section>

        <section>
          <h2>Service Charges</h2>
          <p>
            Our pricing is transparent - you only pay for the actual travel services booked. We earn through commissions 
            from service providers, not from charging you extra fees.
          </p>
          <ul>
            <li>No hidden service charges</li>
            <li>No booking fees</li>
            <li>No consultation fees</li>
            <li>Clear breakdown of all costs provided before booking</li>
          </ul>
        </section>

        <section>
          <h2>Travel Documents and Requirements</h2>
          <p>
            Clients are responsible for ensuring they have valid travel documents including passports, visas, and vaccination
            certificates where required. We provide guidance but ultimate responsibility lies with the traveler.
          </p>
        </section>

        <section>
          <h2>Liability</h2>
          <p>
            Zula Travels acts as an intermediary between clients and service providers. We are not liable for accidents,
            injuries, damages, or losses incurred during travel. Travel insurance is strongly recommended.
          </p>
        </section>

        <section>
          <h2>Changes to Itinerary</h2>
          <p>
            We reserve the right to modify itineraries due to circumstances beyond our control including weather conditions,
            political instability, or changes in park regulations. We will provide suitable alternatives whenever possible.
          </p>
        </section>

        <section>
          <h2>Governing Law</h2>
          <p>
            These terms are governed by the laws of Uganda. Any disputes shall be subject to the exclusive jurisdiction
            of the courts of Uganda.
          </p>
        </section>

        <section>
          <h2>Contact Information</h2>
          <p>
            For any questions about these Terms of Service, please contact us at:
            <br />
            Email: info@zulatravels.com
            <br />
            Phone: +256 774488956
            <br />
            <em>Remember: Consultation is always free!</em>
          </p>
        </section>
      </main>
    </div>
  );
}