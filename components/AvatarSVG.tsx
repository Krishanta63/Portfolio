function AvatarSVG() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow Background */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-red-600/20 blur-3xl"></div>

      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[420px] h-[420px] relative z-10"
      >
        <defs>
          {/* Main circle image mask */}
          <clipPath id="avatarClip">
            <circle cx="250" cy="250" r="150" />
          </clipPath>

          {/* Red glow */}
          <radialGradient id="redGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff1e1e" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff1e1e" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer glow circle */}
        <circle cx="250" cy="250" r="185" fill="url(#redGlow)" />

        {/* Main circular border */}
        <circle
          cx="250"
          cy="250"
          r="160"
          fill="none"
          stroke="#ff1e1e"
          strokeWidth="2"
          opacity="0.5"
        />

        {/* Dotted orbit */}
        <circle
          cx="250"
          cy="250"
          r="210"
          fill="none"
          stroke="#ff1e1e"
          strokeWidth="1"
          strokeDasharray="8 8"
          opacity="0.25"
        />

        {/* Floating red dots */}
        <circle cx="430" cy="160" r="6" fill="#ff1e1e" />
        <circle cx="80" cy="350" r="5" fill="#ff1e1e" />

        {/* Image */}
        <image
          href="/image/profile.png"
          x="100"
          y="100"
          width="300"
          height="300"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#avatarClip)"
        />

        {/* Dark overlay */}
        <circle
          cx="250"
          cy="250"
          r="150"
          fill="rgba(0,0,0,0.12)"
        />

        {/* Main image border */}
        <circle
          cx="250"
          cy="250"
          r="150"
          fill="none"
          stroke="#ff1e1e"
          strokeWidth="3"
        />

        {/* Floating UI cards */}
        {/* Top card */}
        <g>
          <rect
            x="70"
            y="120"
            width="110"
            height="90"
            rx="18"
            fill="#111"
            stroke="#2a2a2a"
          />
          <text
            x="125"
            y="155"
            fill="#ff1e1e"
            fontSize="26"
            textAnchor="middle"
          >
            {"</>"}
          </text>
          <text
            x="125"
            y="182"
            fill="#aaa"
            fontSize="13"
            textAnchor="middle"
          >
            Clean Code
          </text>
        </g>

        {/* Bottom card */}
        <g>
          <rect
            x="330"
            y="330"
            width="120"
            height="95"
            rx="18"
            fill="#111"
            stroke="#2a2a2a"
          />
          <text
            x="390"
            y="365"
            fill="#ff1e1e"
            fontSize="24"
            textAnchor="middle"
          >
            ⚡
          </text>
          <text
            x="390"
            y="392"
            fill="#aaa"
            fontSize="13"
            textAnchor="middle"
          >
            Performance
          </text>
        </g>
      </svg>
    </div>
  );
}

export default AvatarSVG;