import { useEffect, useRef, useState } from "react";
import "./DonateIntroModal.css";

interface DonateIntroModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDonate: () => void;
}

export default function DonateIntroModal({
  isOpen,
  onClose,
  onDonate,
}: DonateIntroModalProps) {
  const [show, setShow] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // trigger entrance animation on next frame
      const id = requestAnimationFrame(() => setShow(true));
      document.body.style.overflow = "hidden";
      return () => {
        cancelAnimationFrame(id);
        document.body.style.overflow = "";
      };
    } else {
      setShow(false);
    }
  }, [isOpen]);


  if (!isOpen) return null;

  const handleDonate = () => {
    onDonate();
    onClose();
  };

  return (
    <div
      className={`donate-intro-overlay ${show ? "active" : ""}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="donate-intro-title"
    >
        <div
        className={`donate-intro-modal ${show ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        <button
          className="donate-intro-close"
          onClick={onClose}
          aria-label="Close"
        >
          <i className="fas fa-times"></i>
        </button>

        <div className="donate-intro-body">
        <div className="donate-intro-hero">
          <div className="donate-intro-icon">
            <i className="fas fa-hand-holding-heart"></i>
          </div>
          <span className="donate-intro-badge">
            <i className="fas fa-star"></i> Make a Difference
          </span>
          <h2 id="donate-intro-title" className="donate-intro-title">
            Your Donation Can Change a Life
          </h2>
          <p className="donate-intro-subtitle">
            Every contribution to Khinvasara Trust empowers communities,
            educates children, and brings hope to those in need.
          </p>
        </div>

        <div className="donate-intro-reasons">
          <div className="donate-reasons-block">
            <h3 className="donate-reasons-title">
              <i className="fas fa-seedling"></i> Why Donate?
            </h3>
            <ul className="donate-reasons-list">
              <li>
                <i className="fas fa-check-circle"></i>
                Transform a child's future through quality education
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                Save lives with affordable, timely healthcare
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                Empower rural communities and protect the environment
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                Claim 50% tax deduction under Section 80G
              </li>
            </ul>
          </div>

          <div className="donate-reasons-block donate-reasons-block--alt">
            <h3 className="donate-reasons-title">
              <i className="fas fa-shield-heart"></i> Why Khinvasara Trust?
            </h3>
            <ul className="donate-reasons-list">
              <li>
                <i className="fas fa-check-circle"></i>
18+ years of proven on-ground impact since 2007
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                100% transparent - every rupee reaches the cause
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                Registered Public Charitable Trust with 80G certification
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                Recognized by leading newspapers &amp; community leaders
              </li>
            </ul>
          </div>
        </div>

        <div className="donate-intro-tax">
          <i className="fas fa-receipt"></i>
          <span>
            All donations are <strong>80G tax exempt</strong> under Income Tax Act
          </span>
        </div>

        <div className="donate-intro-actions">
          <button className="donate-intro-btn-primary" onClick={handleDonate}>
            <i className="fas fa-heart"></i> Donate Now
          </button>
          <button className="donate-intro-btn-secondary" onClick={onClose}>
            Maybe Later
          </button>
        </div>
        </div>{/* .donate-intro-body */}
      </div>
    </div>
  );
}
