
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

const bankDetails: DetailRow[] = [
  { label: "Bank", value: "Canara Bank" },
  { label: "Account No.", value: "2811101001805", copyable: true },
  { label: "IFSC Code", value: "CNRB0002811", copyable: true },
  { label: "PAN No.", value: "AABTK4114E", copyable: true },
];

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

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
