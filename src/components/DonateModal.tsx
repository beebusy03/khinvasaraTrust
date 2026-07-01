
import { useState } from "react";
import "./DonateModal.css";

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DetailRow {
  label: string;
  value: string;
  copyable?: boolean;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  icon: string;
}

const bankDetails: DetailRow[] = [
  { label: "Bank", value: "Canara Bank" },
  { label: "Account No.", value: "2811101001805", copyable: true },
  { label: "IFSC Code", value: "CNRB0002811", copyable: true },
  { label: "PAN No.", value: "AABTK4114E", copyable: true },
];

const faqItems: FAQItem[] = [
  {
    id: "tax-exemption",
    question: "Will I get a tax exemption for my donation?",
    answer:
      "Yes! Khinvasara Trust is registered under Section 80G of the Income Tax Act, 1961 (Registration No: MH/123/2007). All donations are fully tax-exempt. You can claim 50% of your donation amount as a deduction in your income tax return, effectively making your donation at half the cost.",
    icon: "fa-receipt",
  },
  {
    id: "80g-certificate",
    question: "How do I receive my 80G certificate?",
    answer:
      "After making your donation, please email your name and PAN (Permanent Account Number) to info@khinvasaratrust.org. We will process your details and send you the 80G certificate within 10-15 business days. You can use this certificate to claim tax deduction in your ITR (Income Tax Return).",
    icon: "fa-certificate",
  },
  {
    id: "lost-receipt",
    question: "What if I misplace my tax receipt?",
    answer:
      "No worries! We maintain digital records of all donations. Simply contact us at info@khinvasaratrust.org with your donation date and amount. We will verify your donation and resend the tax receipt and 80G certificate within 5-7 business days. Keep your transaction reference/UPI transaction ID handy for quicker verification.",
    icon: "fa-file-contract",
  },
  {
    id: "international-donation",
    question: "How do I make a donation from outside India?",
    answer:
      "International donors can make donations through international bank transfers using our bank details. Please use the following information for your SWIFT transfer: Bank: Canara Bank, Account No: 2811101001805, IFSC: CNRB0002811. Alternatively, you can also donate through wire transfer services. Please note that international transaction charges may apply. Contact us at info@khinvasaratrust.org for assistance with international transfers.",
    icon: "fa-globe",
  },
  {
    id: "money-usage",
    question: "Where is my money spent?",
    answer:
      "Your donation goes directly into our core programs: Education Support (40%) - scholarships and learning resources, Healthcare Initiatives (35%) - medical camps and health awareness, Community Development (25%) - livelihood and skill training. We maintain complete financial transparency with detailed annual reports available on our website. Over 95% of funds go directly to beneficiaries, with minimal administrative overhead.",
    icon: "fa-chart-pie",
  },
  {
    id: "choose-program",
    question: "Can I choose which programme to donate to?",
    answer:
      "Absolutely! You can specify your preferred program during donation. Simply mention in your email (after donation): mention which program(s) you'd like to support - Education, Healthcare, or Community Development. If you don't specify, your donation will be allocated where the need is greatest to maximize impact.",
    icon: "fa-hand-holding-heart",
  },
  {
    id: "financial-details",
    question: "Where can I get details about Khinvasara Trust's finances?",
    answer:
      "We maintain complete financial transparency! Our detailed annual audit reports and financial statements are available on our website. You can access comprehensive information about our fund allocation, expense breakdowns, and impact metrics. For specific financial queries, please reach out to info@khinvasaratrust.org and we'll be happy to provide additional details.",
    icon: "fa-file-invoice-dollar",
  },
  {
    id: "update-details",
    question:
      "What to do if I need to update payment details or make any edits in the receipt?",
    answer:
      "You can update your details by contacting us directly at info@khinvasaratrust.org with your original donation reference and new information. We will verify the changes and issue an updated receipt if needed. Please provide: your original donation date, transaction ID, and the details you wish to update (name, address, PAN, etc.).",
    icon: "fa-pencil-alt",
  },
  {
    id: "contact-queries",
    question: "How to contact if I have any queries?",
    answer:
      "We're here to help! You can reach us through multiple channels: Email: info@khinvasaratrust.org, Phone: +91-XXXXXXXXXX (during business hours), Website: www.khinvasaratrust.org, Address: Khinvasara Trust Office, [Your Office Address]. Our team typically responds within 24-48 hours.",
    icon: "fa-headset",
  },
  {
    id: "10be-exemption",
    question: "When will I get 10BE exemption?",
    answer:
      "The 10BE exemption (for foreign donors) is a separate certification process. If you are a foreign national, you can apply for 10BE exemption status which provides preferential tax treatment for donations. This typically takes 15-30 days to process. Please contact info@khinvasaratrust.org with your donor details to initiate the 10BE exemption application.",
    icon: "fa-stamp",
  },
];

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div
      className={`donate-modal-overlay ${isOpen ? "active" : ""}`}
      onClick={onClose}
    >
      <div className="donate-modal" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="donate-modal-header">
          <button
            onClick={onClose}
            className="donate-modal-close"
            aria-label="Close modal"
          >
            <i className="fas fa-times"></i>
          </button>
          <h2 className="donate-modal-title">Make a Donation</h2>
          <p className="donate-modal-subtitle">
            Scan the QR code or use the bank details to contribute
          </p>
        </div>

        {/* Modal Body */}
        <div className="donate-modal-body">
          <div className="donate-payment-grid">
            {/* QR Code Section */}
            <div className="donate-qr-section">
              <div className="donate-section-label">
                <i className="fas fa-qrcode"></i>
                <span>Scan to Pay</span>
              </div>
              <div className="donate-qr-container">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https://khinvasaratrust.org/donate&bgcolor=FFFFFF&color=000000"
                  alt="Donation QR Code"
                  className="donate-qr-image"
                />
              </div>
              <p className="donate-qr-help">
                Use any UPI app — GPay, PhonePe, Paytm, BHIM
              </p>
            </div>

            {/* Bank Details Section */}
            <div className="donate-bank-section">
              <div className="donate-section-label">
                <i className="fas fa-university"></i>
                <span>Bank Transfer</span>
              </div>
              <div className="donate-bank-details">
                {bankDetails.map((row) => (
                  <div className="donate-detail-row" key={row.label}>
                    <span className="donate-detail-label">{row.label}</span>
                    <span className="donate-detail-value">
                      <span className="donate-detail-text">{row.value}</span>
                      {row.copyable && (
                        <button
                          type="button"
                          className={`donate-copy-btn ${
                            copiedKey === row.label ? "copied" : ""
                          }`}
                          onClick={() => handleCopy(row.label, row.value)}
                          aria-label={`Copy ${row.label}`}
                        >
                          <i
                            className={`fas ${
                              copiedKey === row.label
                                ? "fa-check"
                                : "fa-copy"
                            }`}
                          ></i>
                        </button>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Donation Quick Points */}
          <div className="donate-points">
            <div className="donate-points-header">
              <i className="fas fa-circle-info"></i>
              <span>Things to Know</span>
            </div>
            <ul className="donate-points-list">
              <li>
                <i className="fas fa-shield-halved"></i>
                <div>
                  <strong>100% Secure &amp; Transparent</strong>
                  <p>Every rupee directly funds education, healthcare and community work</p>
                </div>
              </li>
              <li>
                <i className="fas fa-id-card"></i>
                <div>
                  <strong>Share PAN for Records</strong>
                  <p>Email your name &amp; PAN to <strong>info@khinvasaratrust.org</strong> after donating</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Trust Info Badge */}
          <div className="donate-trust-info">
            <i className="fas fa-shield-alt"></i>
            <div className="donate-trust-info-text">
              <h4>Registered Trust</h4>
              <p>
                Trust No: MH/123/2007 &middot; All donations are{" "}
                <strong>80G tax exempt</strong>
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="donate-faq-section">
            <div className="donate-faq-header">
              <i className="fas fa-question-circle"></i>
              <h3>Frequently Asked Questions</h3>
            </div>

            <div className="donate-faq-container">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className={`donate-faq-item ${
                    expandedFAQ === item.id ? "expanded" : ""
                  }`}
                >
                  <button
                    className="donate-faq-question"
                    onClick={() => toggleFAQ(item.id)}
                    aria-expanded={expandedFAQ === item.id}
                  >
                    <span className="donate-faq-icon">
                      <i className={`fas ${item.icon}`}></i>
                    </span>
                    <span className="donate-faq-question-text">
                      {item.question}
                    </span>
                    <span className="donate-faq-toggle">
                      <i
                        className={`fas fa-chevron-${
                          expandedFAQ === item.id ? "up" : "down"
                        }`}
                      ></i>
                    </span>
                  </button>

                  <div className="donate-faq-answer">
                    <div className="donate-faq-answer-content">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="donate-modal-footer">
          <button onClick={onClose} className="donate-action-btn">
            <i className="fas fa-check-circle"></i>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
