interface PreloaderProps {
  isLoading: boolean
}

const Preloader = ({ isLoading }: PreloaderProps) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full gradient-primary flex flex-col justify-center items-center z-[10000] transition-all duration-500 ${
        isLoading ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div className="text-center">
        <div className="w-20 h-20 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
          <i className="fas fa-hands-holding-heart text-4xl text-white"></i>
        </div>
        <div className="w-16 h-16 border-[3px] border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
        <div className="text-white text-base font-medium tracking-wide">Loading...</div>
      </div>
    </div>
  )
}

export default Preloader