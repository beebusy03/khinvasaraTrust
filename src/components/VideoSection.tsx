import { useState, useRef } from 'react';

const VIDEO_ID = 'tYwuwtewHjM';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="video-section" id="video">
      <div className="video-section-inner">

        {/* Section header */}
        <div className="section-header">
          <span className="section-badge">
            <i className="fas fa-play-circle" /> Our Story
          </span>
          <h2>See Our Work in Action</h2>
          <p>Watch how Khinvasara Pariwar Trust is making a difference — one initiative at a time.</p>
        </div>

        {/* Video card */}
        <div className="video-card">
          <div className="video-wrapper">
            {!isPlaying ? (
              /* Custom thumbnail + play button overlay */
              <div
                className="video-thumbnail-overlay"
                onClick={handlePlay}
                role="button"
                aria-label="Play video"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handlePlay()}
              >
                {/*
                  Use a no-cookie embed in preview mode (no autoplay).
                  This renders YouTube's own thumbnail — no CORS issues.
                  The `?fs=0&controls=0&disablekb=1` flags hide UI chrome.
                  pointer-events:none prevents clicks reaching the iframe
                  so our overlay intercepts them instead.
                */}
                <iframe
                  className="video-preview-iframe"
                  src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=0&rel=0&modestbranding=1&fs=0&controls=0&disablekb=1`}
                  title="Video preview"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  tabIndex={-1}
                  aria-hidden="true"
                />

                {/* Dark overlay */}
                <div className="video-overlay" />

                {/* Play button */}
                <div className="play-btn-wrap">
                  <div className="play-btn">
                    <i className="fas fa-play" />
                  </div>
                  <span className="play-label">Watch Video</span>
                </div>

                {/* YouTube branding pill */}
                <div className="yt-badge">
                  <i className="fab fa-youtube" />
                  <span>YouTube</span>
                </div>
              </div>
            ) : (
              /* Embedded player — autoplay once user clicks */
              <iframe
                ref={iframeRef}
                className="video-iframe"
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="Khinvasara Pariwar Trust – Our Work"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>

          {/* Card footer strip */}
          <div className="video-card-footer">
            <div className="video-meta">
              <i className="fas fa-film" />
              <span>Khinvasara Pariwar Trust</span>
            </div>
            <a
              href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="yt-link"
            >
              <i className="fab fa-youtube" />
              Open on YouTube
            </a>
          </div>
        </div>

      </div>

      {/* ── Styles ── */}
      <style>{`
        /* ============================================================
           VIDEO SECTION
           ============================================================ */

        .video-section {
          background: var(--light);
          padding: 3rem 5%;
        }

        .video-section-inner {
          max-width: 900px;
          margin: 0 auto;
        }

        /* ── Video card ── */
        .video-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border);
          transition: box-shadow 0.3s ease;
        }

        .video-card:hover {
          box-shadow: var(--shadow-xl);
        }

        /* 16:9 aspect ratio wrapper */
        .video-wrapper {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          background: #0a0a0a;
          overflow: hidden;
        }

        /* ── Thumbnail overlay ── */
        .video-thumbnail-overlay {
          position: absolute;
          inset: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Preview iframe acts as the thumbnail — no pointer events so overlay stays clickable */
        .video-preview-iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
          pointer-events: none;
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(15,76,117,0.55) 0%,
            rgba(0,0,0,0.45) 100%
          );
          transition: background 0.3s ease;
        }

        .video-thumbnail-overlay:hover .video-overlay {
          background: linear-gradient(
            135deg,
            rgba(15,76,117,0.65) 0%,
            rgba(0,0,0,0.55) 100%
          );
        }

        /* ── Play button ── */
        .play-btn-wrap {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .play-btn {
          width: 70px;
          height: 70px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
        }

        .play-btn i {
          font-size: 1.5rem;
          color: var(--primary);
          margin-left: 4px;
        }

        .video-thumbnail-overlay:hover .play-btn {
          transform: scale(1.12);
          box-shadow: 0 12px 40px rgba(0,0,0,0.5);
        }

        .play-label {
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 0.3px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
        }

        /* ── YouTube badge ── */
        .yt-badge {
          position: absolute;
          bottom: 14px;
          left: 14px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 5px 11px;
          border-radius: 50px;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .yt-badge i {
          color: #ff0000;
          font-size: 0.9rem;
        }

        /* ── Embedded iframe ── */
        .video-iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        /* ── Card footer ── */
        .video-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 1.25rem;
          border-top: 1px solid var(--border);
          background: var(--light);
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .video-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-light);
          font-size: 0.83rem;
          font-weight: 500;
        }

        .video-meta i {
          color: var(--primary);
        }

        .yt-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #cc0000;
          font-size: 0.83rem;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .yt-link:hover {
          color: #ff0000;
        }

        .yt-link i {
          font-size: 1rem;
        }

        /* ── Responsive ── */
        @media (min-width: 768px) {
          .video-section {
            padding: 5rem 5%;
          }

          .play-btn {
            width: 84px;
            height: 84px;
          }

          .play-btn i {
            font-size: 1.8rem;
          }

          .play-label {
            font-size: 1.05rem;
          }

          .video-card-footer {
            padding: 1rem 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .video-section {
            padding: 6rem 5%;
          }

          .play-btn {
            width: 96px;
            height: 96px;
          }

          .play-btn i {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default VideoSection;
