export const Wave = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-24 relative">
      <svg
        className="absolute -top-5  left-0 w-full h-[12.5rem] "
        id="svg"
        viewBox="0 0 1240 690"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(180deg) scale(-1,1)' }}
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop
              offset="0%"
              style={{ stopColor: '#181f3d', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: 'rgba(59,89,156,255)', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          d="M 0,700 C 0,700 0,350 0,350 C 93.39285714285714,341.6428571428571 186.78571428571428,333.2857142857143 309,335 C 431.2142857142857,336.7142857142857 582.25,348.5 716,366 C 849.75,383.5 966.2142857142858,406.7142857142857 1084,405 C 1201.7857142857142,403.2857142857143 1320.892857142857,376.6428571428571 1440,350 C 1440,350 1440,700 1440,700 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#waveGradient)"
          style={{
            transitionProperty: 'all',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDuration: '300ms',
            transitionDelay: '150ms',
          }}
        />
      </svg>
      {children}
    </div>
  )
}
