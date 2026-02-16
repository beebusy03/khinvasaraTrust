
import "./DonateModal.css";

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className={`donate-modal-overlay ${isOpen ? 'active' : ''}`}
      onClick={onClose}
    >
      <div 
        className="donate-modal"
        onClick={(e) => e.stopPropagation()}
      >
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
            Scan QR code or use bank details below
          </p>
        </div>

        {/* Modal Body */}
        <div className="donate-modal-body">
          {/* QR Code Section */}
          <div className="donate-qr-section">
            <div className="donate-qr-container">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://khinvasaratrust.org/donate&bgcolor=FFFFFF&color=000000" 
                alt="Donation QR Code"
                className="donate-qr-image"
              />
            </div>
          </div>

          <div className="donate-divider">OR</div>

          {/* Bank Details Section */}
          <div className="donate-bank-section">
            <div className="donate-bank-details">
              <div className="donate-detail-row">
                <span className="donate-detail-label">Bank</span>
                <span className="donate-detail-value">State Bank of India</span>
              </div>
              <div className="donate-detail-row">
                <span className="donate-detail-label">Account</span>
                <span className="donate-detail-value">1234-5678-9101</span>
              </div>
              <div className="donate-detail-row">
                <span className="donate-detail-label">IFSC</span>
                <span className="donate-detail-value">SBIN0001234</span>
              </div>
            </div>
          </div>

          {/* Trust Info Badge */}
          <div className="donate-trust-info">
            <i className="fas fa-shield-alt"></i>
            <div className="donate-trust-info-text">
              <p>Registered Trust No: MH/123/2007</p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="donate-modal-footer">
          <button
            onClick={onClose}
            className="donate-action-btn"
          >
            <i className="fas fa-check-circle"></i>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}