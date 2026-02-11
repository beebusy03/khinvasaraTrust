interface PreloaderProps {
  isLoading: boolean;
}

const Preloader = ({ isLoading }: PreloaderProps) => {
  return (
    <div className={`preloader ${!isLoading ? 'hidden' : ''}`}>
      <div className="preloader-content">
        <div className="preloader-icon">
          <i className="fas fa-hands-holding-heart"></i>
        </div>
        <div className="preloader-spinner"></div>
        <div className="preloader-text">Loading...</div>
      </div>
    </div>
  );
};

export default Preloader;