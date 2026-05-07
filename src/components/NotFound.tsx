interface NotFoundProps {
  /** Optional path that was attempted, for display only */
  attempted?: string;
}

const NotFound = ({ attempted }: NotFoundProps) => {
  const goHome = () => {
    window.history.replaceState(null, '', '/');
    window.location.reload();
  };

  return (
    <div className="not-found">
      <div className="not-found-card">
        <div className="not-found-code">404</div>
        <h2>Page Not Found</h2>
        <p>
          The page you were looking for doesn’t exist
          {attempted ? (
            <>
              {' '}— <code>{attempted}</code>
            </>
          ) : null}
          . It may have been moved or the link is incorrect.
        </p>

        <div className="not-found-actions">
          <button onClick={goHome} className="btn btn-primary">
            <i className="fas fa-house"></i> Back to Home
          </button>
          <a href="#contact" className="btn btn-outline">
            <i className="fas fa-envelope"></i> Contact Us
          </a>
        </div>
      </div>

      <style>{`
        .not-found {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 1rem;
          background: linear-gradient(135deg, #0f4c75 0%, #3282b8 100%);
        }
        .not-found-card {
          max-width: 540px;
          width: 100%;
          background: #ffffff;
          border-radius: 22px;
          padding: 2.5rem 1.75rem;
          text-align: center;
          box-shadow: 0 30px 70px -20px rgba(0, 0, 0, 0.35);
        }
        .not-found-code {
          font-family: 'Cormorant Garamond', serif;
          font-size: 5rem;
          font-weight: 800;
          line-height: 1;
          background: linear-gradient(135deg, #0f4c75 0%, #ea7317 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 0.4rem;
          letter-spacing: -2px;
        }
        .not-found-card h2 {
          margin: 0 0 0.6rem;
          font-size: 1.55rem;
          font-weight: 700;
          color: #0f172a;
        }
        .not-found-card p {
          color: #475569;
          font-size: 0.95rem;
          line-height: 1.55;
          margin: 0 0 1.4rem;
        }
        .not-found-card code {
          background: #f1f5f9;
          padding: 1px 6px;
          border-radius: 5px;
          font-size: 0.85em;
          color: #b91c1c;
        }
        .not-found-actions {
          display: flex;
          gap: 0.7rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .not-found-actions .btn {
          padding: 0.65rem 1.2rem;
          font-size: 0.92rem;
        }
        @media (max-width: 480px) {
          .not-found-code { font-size: 4rem; }
          .not-found-card h2 { font-size: 1.3rem; }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
