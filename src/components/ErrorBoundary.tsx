import { Component, type ReactNode, type ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Log to console (and to a real error tracker like Sentry in prod)
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught:', error, info.componentStack);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) return this.props.children;
    if (this.props.fallback) return this.props.fallback;

    return (
      <div className="error-boundary">
        <div className="error-boundary-card">
          <div className="error-boundary-icon">
            <i className="fas fa-triangle-exclamation"></i>
          </div>
          <h2>Something went wrong</h2>
          <p>
            We hit an unexpected error while loading this section.
            Please refresh the page — if the issue continues, contact us at{' '}
            <a href="mailto:info@khinvasaratrust.org">info@khinvasaratrust.org</a>.
          </p>
          {this.state.error?.message && (
            <pre className="error-boundary-detail">
              {this.state.error.message}
            </pre>
          )}
          <div className="error-boundary-actions">
            <button onClick={this.handleReload} className="btn btn-primary">
              <i className="fas fa-rotate-right"></i> Reload Page
            </button>
            <a href="/" className="btn btn-outline">
              <i className="fas fa-house"></i> Go Home
            </a>
          </div>
        </div>

        <style>{`
          .error-boundary {
            min-height: 70vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem 1rem;
            background: linear-gradient(135deg, #f7f9fc 0%, #ffffff 100%);
          }
          .error-boundary-card {
            max-width: 520px;
            width: 100%;
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 18px;
            padding: 2.25rem 1.75rem;
            text-align: center;
            box-shadow: 0 20px 50px -20px rgba(15, 23, 42, 0.18);
          }
          .error-boundary-icon {
            width: 68px;
            height: 68px;
            margin: 0 auto 1rem;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 1.7rem;
            color: #fff;
            background: linear-gradient(135deg, #ea7317 0%, #d4770e 100%);
            box-shadow: 0 10px 24px -8px rgba(234, 115, 23, 0.5);
          }
          .error-boundary-card h2 {
            margin: 0 0 0.6rem;
            color: #0f172a;
            font-size: 1.4rem;
            font-weight: 700;
          }
          .error-boundary-card p {
            color: #475569;
            font-size: 0.92rem;
            line-height: 1.55;
            margin: 0 0 1rem;
          }
          .error-boundary-card a {
            color: #0f4c75;
            font-weight: 600;
          }
          .error-boundary-detail {
            background: #f1f5f9;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 0.65rem 0.85rem;
            font-size: 0.78rem;
            color: #b91c1c;
            text-align: left;
            margin: 0 0 1.2rem;
            white-space: pre-wrap;
            word-break: break-word;
          }
          .error-boundary-actions {
            display: flex;
            gap: 0.6rem;
            justify-content: center;
            flex-wrap: wrap;
          }
          .error-boundary-actions .btn {
            padding: 0.6rem 1.1rem;
            font-size: 0.9rem;
          }
        `}</style>
      </div>
    );
  }
}

export default ErrorBoundary;
