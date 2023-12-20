/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function SignInWithZupass({
  onClick
}: {
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "#325f57",
        border: "solid 1px #fcd270",
        borderRadius: "12px",
        padding: "12px 16px",
        color: "#fff",
        fontSize: "16px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        columnGap: "8px",
        fontWeight: 500,
        userSelect: "none"
      }}
    >
      <img
        height="32"
        width="32"
        src="data://data:image/png;base64,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"
      ></img>

      <svg
        style={{ marginTop: "4px" }}
        width="160"
        height="17.5"
        viewBox="0 0 437.3 47.8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="svgGroup"
          strokeLinecap="round"
          fillRule="evenodd"
          fontSize="9pt"
          fill="#ffffff"
          style={{ fill: "#ffffff" }}
        >
          <path
            d="M 171.25 37.2 L 164.15 11.2 L 169.45 11.2 L 172.1 22.1 L 174.45 31.95 L 174.6 31.95 L 177.3 22.1 L 180.45 11.2 L 185.35 11.2 L 188.55 22.1 L 191.3 31.95 L 191.45 31.95 L 193.75 22.1 L 196.45 11.2 L 201.5 11.2 L 194.5 37.2 L 188.35 37.2 L 184.95 25.35 L 182.85 18.05 L 182.75 18.05 L 180.7 25.35 L 177.25 37.2 L 171.25 37.2 Z M 302.8 32.2 L 302.8 37.2 L 276.95 37.2 L 276.95 32.15 L 295.9 7.3 L 277.95 7.3 L 277.95 2.3 L 302.25 2.3 L 302.25 7.35 L 283.3 32.2 L 302.8 32.2 Z M 0 31.9 L 3.9 28.25 A 14.713 14.713 0 0 0 5.939 30.304 A 11.689 11.689 0 0 0 7.975 31.65 A 10.293 10.293 0 0 0 11.496 32.709 A 12.934 12.934 0 0 0 13.05 32.8 A 11.94 11.94 0 0 0 14.938 32.661 Q 16.918 32.343 18.1 31.3 A 4.939 4.939 0 0 0 19.758 28.021 A 6.969 6.969 0 0 0 19.8 27.25 A 5.675 5.675 0 0 0 19.645 25.886 A 3.95 3.95 0 0 0 18.6 24 A 4.415 4.415 0 0 0 17.613 23.277 Q 16.399 22.603 14.35 22.2 L 11.25 21.65 A 23.189 23.189 0 0 1 8.312 20.915 Q 6.786 20.417 5.581 19.738 A 10.143 10.143 0 0 1 3.6 18.3 A 7.906 7.906 0 0 1 1.257 13.949 A 11.616 11.616 0 0 1 1.05 11.7 A 10.464 10.464 0 0 1 1.358 9.119 A 8.983 8.983 0 0 1 1.925 7.525 Q 2.8 5.65 4.375 4.375 A 10.484 10.484 0 0 1 6.67 2.977 A 13.346 13.346 0 0 1 8.2 2.4 A 15.213 15.213 0 0 1 10.985 1.825 A 19.827 19.827 0 0 1 13.25 1.7 A 19.168 19.168 0 0 1 16.505 1.963 Q 18.469 2.302 20.1 3.075 Q 23 4.45 25.05 7.05 L 21.1 10.55 Q 19.75 8.8 17.8 7.75 A 8.282 8.282 0 0 0 15.622 6.965 Q 14.406 6.7 12.95 6.7 A 12.136 12.136 0 0 0 11.207 6.817 Q 10.293 6.95 9.549 7.234 A 5.35 5.35 0 0 0 8.3 7.9 A 3.901 3.901 0 0 0 6.686 10.742 A 5.783 5.783 0 0 0 6.65 11.4 A 5.686 5.686 0 0 0 6.782 12.665 Q 6.977 13.519 7.46 14.133 A 3.301 3.301 0 0 0 8 14.675 A 5.781 5.781 0 0 0 9.105 15.352 Q 10.243 15.898 11.939 16.248 A 20.385 20.385 0 0 0 12.2 16.3 L 15.3 16.95 A 24.122 24.122 0 0 1 18.237 17.689 Q 19.668 18.154 20.798 18.768 A 9.535 9.535 0 0 1 22.975 20.35 A 7.929 7.929 0 0 1 25.126 24.331 A 11.842 11.842 0 0 1 25.4 26.95 Q 25.4 29.4 24.55 31.4 Q 23.7 33.4 22.075 34.825 A 10.61 10.61 0 0 1 19.506 36.473 A 13.272 13.272 0 0 1 18.1 37.025 A 14.997 14.997 0 0 1 15.293 37.646 A 20.143 20.143 0 0 1 12.75 37.8 A 20.229 20.229 0 0 1 9.394 37.536 Q 7.459 37.21 5.857 36.483 A 12.056 12.056 0 0 1 5.275 36.2 Q 2.2 34.6 0 31.9 Z M 238.2 37.2 L 238.2 0.2 L 243.65 0.2 L 243.65 15.5 L 243.9 15.5 Q 244.75 13.4 246.475 12 A 5.86 5.86 0 0 1 248.588 10.93 Q 249.446 10.685 250.469 10.622 A 11.875 11.875 0 0 1 251.2 10.6 Q 255.2 10.6 257.425 13.225 A 8.607 8.607 0 0 1 259.049 16.261 Q 259.444 17.521 259.579 19.039 A 18.703 18.703 0 0 1 259.65 20.7 L 259.65 37.2 L 254.2 37.2 L 254.2 21.35 Q 254.2 15.3 249.3 15.3 Q 248.25 15.3 247.225 15.575 A 6.141 6.141 0 0 0 245.922 16.083 A 5.43 5.43 0 0 0 245.4 16.4 Q 244.6 16.95 244.125 17.8 A 3.743 3.743 0 0 0 243.68 19.216 A 4.697 4.697 0 0 0 243.65 19.75 L 243.65 37.2 L 238.2 37.2 Z M 47.3 36.55 L 47.3 36 A 4.997 4.997 0 0 1 45.841 35.275 Q 44.35 34.168 44.35 32 A 4.727 4.727 0 0 1 44.517 30.708 A 3.414 3.414 0 0 1 45.7 28.925 A 7.725 7.725 0 0 1 47.925 27.703 A 9.571 9.571 0 0 1 48.95 27.4 L 48.95 27.2 Q 46.65 26.1 45.425 24.125 A 8.128 8.128 0 0 1 44.286 20.86 A 10.412 10.412 0 0 1 44.2 19.5 A 9.711 9.711 0 0 1 44.641 16.506 A 7.912 7.912 0 0 1 46.875 13.05 A 8.667 8.667 0 0 1 50.222 11.184 Q 51.519 10.783 53.078 10.657 A 18.355 18.355 0 0 1 54.55 10.6 A 15.846 15.846 0 0 1 56.652 10.732 Q 58.092 10.925 59.25 11.4 L 59.25 10.7 A 5.987 5.987 0 0 1 59.339 9.635 Q 59.447 9.038 59.686 8.565 A 3.015 3.015 0 0 1 60.075 7.975 Q 60.797 7.122 62.226 7.015 A 5.69 5.69 0 0 1 62.65 7 L 66.65 7 L 66.65 11.4 L 61.35 11.4 L 61.35 12.45 Q 63.1 13.6 64.05 15.425 A 8.486 8.486 0 0 1 64.977 18.803 A 10.21 10.21 0 0 1 65 19.5 Q 65 23.45 62.3 25.875 A 8.792 8.792 0 0 1 58.965 27.713 Q 57.656 28.117 56.084 28.243 A 18.55 18.55 0 0 1 54.6 28.3 Q 52.7 28.3 51.2 27.9 Q 50.2 28.25 49.45 28.875 Q 48.7 29.5 48.7 30.5 A 1.796 1.796 0 0 0 48.81 31.144 Q 49.023 31.703 49.65 32 Q 50.56 32.431 52.203 32.449 A 13.219 13.219 0 0 0 52.35 32.45 L 58.75 32.45 A 18.943 18.943 0 0 1 61.209 32.598 Q 63.874 32.948 65.4 34.126 A 5.341 5.341 0 0 1 65.7 34.375 A 6.331 6.331 0 0 1 67.747 38.253 A 9.132 9.132 0 0 1 67.85 39.65 A 8.364 8.364 0 0 1 67.467 42.251 A 6.543 6.543 0 0 1 64.75 45.75 Q 61.65 47.8 54.65 47.8 A 40.406 40.406 0 0 1 52.387 47.74 Q 50.616 47.641 49.225 47.375 Q 47.521 47.05 46.287 46.505 A 8.318 8.318 0 0 1 45.575 46.15 A 6.514 6.514 0 0 1 44.545 45.442 Q 43.917 44.909 43.537 44.264 A 4.133 4.133 0 0 1 43.5 44.2 A 5.017 5.017 0 0 1 42.896 42.322 A 6.337 6.337 0 0 1 42.85 41.55 Q 42.85 39.4 44.025 38.2 A 5.334 5.334 0 0 1 45.587 37.112 Q 46.253 36.799 47.065 36.603 A 9.661 9.661 0 0 1 47.3 36.55 Z M 324.05 37.2 L 324.05 32.9 L 323.85 32.9 A 9.586 9.586 0 0 1 322.934 34.736 A 10.289 10.289 0 0 1 322.925 34.75 Q 322.35 35.65 321.475 36.325 A 6.349 6.349 0 0 1 320.245 37.061 A 8.082 8.082 0 0 1 319.375 37.4 A 7.778 7.778 0 0 1 318.012 37.706 Q 317.325 37.8 316.55 37.8 A 10.104 10.104 0 0 1 313.928 37.479 A 7.115 7.115 0 0 1 310.275 35.2 A 8.474 8.474 0 0 1 308.66 32.211 Q 308.26 30.95 308.122 29.423 A 18.658 18.658 0 0 1 308.05 27.75 L 308.05 11.2 L 313.5 11.2 L 313.5 27.05 A 10.693 10.693 0 0 0 313.714 29.296 Q 314.422 32.575 317.465 33.028 A 7.036 7.036 0 0 0 318.5 33.1 Q 319.55 33.1 320.55 32.825 Q 321.55 32.55 322.325 32 Q 323.1 31.45 323.575 30.6 Q 324.05 29.75 324.05 28.6 L 324.05 11.2 L 329.5 11.2 L 329.5 37.2 L 324.05 37.2 Z M 77.35 37.2 L 71.9 37.2 L 71.9 11.2 L 77.35 11.2 L 77.35 15.5 L 77.6 15.5 Q 78.45 13.4 80.175 12 A 5.86 5.86 0 0 1 82.288 10.93 Q 83.146 10.685 84.169 10.622 A 11.875 11.875 0 0 1 84.9 10.6 Q 88.9 10.6 91.125 13.225 A 8.607 8.607 0 0 1 92.749 16.261 Q 93.144 17.521 93.279 19.039 A 18.703 18.703 0 0 1 93.35 20.7 L 93.35 37.2 L 87.9 37.2 L 87.9 21.4 A 11.149 11.149 0 0 0 87.698 19.174 Q 86.999 15.76 83.884 15.355 A 6.849 6.849 0 0 0 83 15.3 Q 81.95 15.3 80.925 15.575 A 6.141 6.141 0 0 0 79.622 16.083 A 5.43 5.43 0 0 0 79.1 16.4 Q 78.3 16.95 77.825 17.8 Q 77.35 18.65 77.35 19.8 L 77.35 37.2 Z M 131.4 37.2 L 125.95 37.2 L 125.95 11.2 L 131.4 11.2 L 131.4 15.5 L 131.65 15.5 Q 132.5 13.4 134.225 12 A 5.86 5.86 0 0 1 136.338 10.93 Q 137.196 10.685 138.219 10.622 A 11.875 11.875 0 0 1 138.95 10.6 Q 142.95 10.6 145.175 13.225 A 8.607 8.607 0 0 1 146.799 16.261 Q 147.194 17.521 147.329 19.039 A 18.703 18.703 0 0 1 147.4 20.7 L 147.4 37.2 L 141.95 37.2 L 141.95 21.4 A 11.149 11.149 0 0 0 141.748 19.174 Q 141.049 15.76 137.934 15.355 A 6.849 6.849 0 0 0 137.05 15.3 Q 136 15.3 134.975 15.575 A 6.141 6.141 0 0 0 133.672 16.083 A 5.43 5.43 0 0 0 133.15 16.4 Q 132.35 16.95 131.875 17.8 Q 131.4 18.65 131.4 19.8 L 131.4 37.2 Z M 392.05 32.9 L 395.55 29.7 A 12.076 12.076 0 0 0 397.386 31.505 A 10.199 10.199 0 0 0 398.775 32.425 A 7.835 7.835 0 0 0 401.454 33.3 A 10.13 10.13 0 0 0 402.9 33.4 A 10.007 10.007 0 0 0 404.153 33.327 Q 405.592 33.145 406.43 32.51 A 3.036 3.036 0 0 0 406.475 32.475 A 3.01 3.01 0 0 0 407.634 30.277 A 4.298 4.298 0 0 0 407.65 29.9 Q 407.65 28.65 406.825 27.775 A 2.743 2.743 0 0 0 406.074 27.227 Q 405.263 26.81 403.95 26.65 L 401.55 26.35 Q 398.575 25.978 396.555 24.874 A 8.734 8.734 0 0 1 395.275 24.025 A 5.87 5.87 0 0 1 393.211 20.629 A 9.178 9.178 0 0 1 393 18.6 Q 393 16.7 393.7 15.225 Q 394.4 13.75 395.675 12.725 A 8.579 8.579 0 0 1 397.664 11.54 A 10.578 10.578 0 0 1 398.725 11.15 Q 400.5 10.6 402.65 10.6 Q 405.274 10.6 407.182 11.218 A 8.841 8.841 0 0 1 408.375 11.7 A 13.124 13.124 0 0 1 412.295 14.689 A 14.875 14.875 0 0 1 412.35 14.75 L 409 17.95 A 7.959 7.959 0 0 0 407.549 16.608 A 10.357 10.357 0 0 0 406.375 15.875 A 7.306 7.306 0 0 0 403.794 15.069 A 9.206 9.206 0 0 0 402.65 15 Q 400.4 15 399.325 15.9 A 2.886 2.886 0 0 0 398.258 18.005 A 3.73 3.73 0 0 0 398.25 18.25 A 3.753 3.753 0 0 0 398.35 19.144 A 2.399 2.399 0 0 0 399.2 20.5 Q 400.06 21.179 401.863 21.53 A 14.456 14.456 0 0 0 402.25 21.6 L 404.65 21.9 A 19.467 19.467 0 0 1 406.998 22.394 Q 409.536 23.107 410.925 24.425 A 6.231 6.231 0 0 1 412.805 28.127 A 8.844 8.844 0 0 1 412.9 29.45 A 8.579 8.579 0 0 1 412.671 31.469 A 7.202 7.202 0 0 1 412.175 32.875 Q 411.45 34.4 410.1 35.5 A 9.096 9.096 0 0 1 408.011 36.764 A 11.333 11.333 0 0 1 406.85 37.2 A 12.731 12.731 0 0 1 404.435 37.701 A 16.421 16.421 0 0 1 402.6 37.8 A 17.457 17.457 0 0 1 399.892 37.602 Q 398.416 37.37 397.19 36.866 A 9.692 9.692 0 0 1 396.4 36.5 Q 393.9 35.2 392.05 32.9 Z M 416.45 32.9 L 419.95 29.7 A 12.076 12.076 0 0 0 421.786 31.505 A 10.199 10.199 0 0 0 423.175 32.425 A 7.835 7.835 0 0 0 425.854 33.3 A 10.13 10.13 0 0 0 427.3 33.4 A 10.007 10.007 0 0 0 428.553 33.327 Q 429.992 33.145 430.83 32.51 A 3.036 3.036 0 0 0 430.875 32.475 A 3.01 3.01 0 0 0 432.034 30.277 A 4.298 4.298 0 0 0 432.05 29.9 Q 432.05 28.65 431.225 27.775 A 2.743 2.743 0 0 0 430.474 27.227 Q 429.663 26.81 428.35 26.65 L 425.95 26.35 Q 422.975 25.978 420.955 24.874 A 8.734 8.734 0 0 1 419.675 24.025 A 5.87 5.87 0 0 1 417.611 20.629 A 9.178 9.178 0 0 1 417.4 18.6 Q 417.4 16.7 418.1 15.225 Q 418.8 13.75 420.075 12.725 A 8.579 8.579 0 0 1 422.064 11.54 A 10.578 10.578 0 0 1 423.125 11.15 Q 424.9 10.6 427.05 10.6 Q 429.674 10.6 431.582 11.218 A 8.841 8.841 0 0 1 432.775 11.7 A 13.124 13.124 0 0 1 436.695 14.689 A 14.875 14.875 0 0 1 436.75 14.75 L 433.4 17.95 A 7.959 7.959 0 0 0 431.949 16.608 A 10.357 10.357 0 0 0 430.775 15.875 A 7.306 7.306 0 0 0 428.194 15.069 A 9.206 9.206 0 0 0 427.05 15 Q 424.8 15 423.725 15.9 A 2.886 2.886 0 0 0 422.658 18.005 A 3.73 3.73 0 0 0 422.65 18.25 A 3.753 3.753 0 0 0 422.75 19.144 A 2.399 2.399 0 0 0 423.6 20.5 Q 424.46 21.179 426.263 21.53 A 14.456 14.456 0 0 0 426.65 21.6 L 429.05 21.9 A 19.467 19.467 0 0 1 431.398 22.394 Q 433.936 23.107 435.325 24.425 A 6.231 6.231 0 0 1 437.205 28.127 A 8.844 8.844 0 0 1 437.3 29.45 A 8.579 8.579 0 0 1 437.071 31.469 A 7.202 7.202 0 0 1 436.575 32.875 Q 435.85 34.4 434.5 35.5 A 9.096 9.096 0 0 1 432.411 36.764 A 11.333 11.333 0 0 1 431.25 37.2 A 12.731 12.731 0 0 1 428.835 37.701 A 16.421 16.421 0 0 1 427 37.8 A 17.457 17.457 0 0 1 424.292 37.602 Q 422.816 37.37 421.59 36.866 A 9.692 9.692 0 0 1 420.8 36.5 Q 418.3 35.2 416.45 32.9 Z M 337.3 47.2 L 337.3 11.2 L 342.75 11.2 L 342.75 15.5 L 343 15.5 A 7.63 7.63 0 0 1 344.24 13.265 A 6.8 6.8 0 0 1 345.775 11.875 A 7.662 7.662 0 0 1 349.185 10.662 A 9.77 9.77 0 0 1 350.3 10.6 A 10.94 10.94 0 0 1 353.632 11.082 A 8.565 8.565 0 0 1 357.95 14.175 Q 360.65 17.75 360.65 24.2 A 25.005 25.005 0 0 1 360.386 27.951 Q 360.078 29.978 359.41 31.622 A 11.443 11.443 0 0 1 357.95 34.225 A 8.758 8.758 0 0 1 351.511 37.743 A 12.61 12.61 0 0 1 350.3 37.8 A 8.751 8.751 0 0 1 347.833 37.465 A 7.332 7.332 0 0 1 345.775 36.5 A 7.231 7.231 0 0 1 343.03 32.981 A 8.818 8.818 0 0 1 343 32.9 L 342.75 32.9 L 342.75 47.2 L 337.3 47.2 Z M 389 37.2 L 385.95 37.2 A 6.049 6.049 0 0 1 384.647 37.068 Q 383.776 36.876 383.134 36.405 A 3.525 3.525 0 0 1 382.65 35.975 A 5.192 5.192 0 0 1 381.424 33.731 A 6.783 6.783 0 0 1 381.25 32.85 L 381 32.85 A 7.041 7.041 0 0 1 379.98 34.942 A 6.123 6.123 0 0 1 378.25 36.55 A 8.048 8.048 0 0 1 375.438 37.621 A 11.059 11.059 0 0 1 373.4 37.8 A 12.504 12.504 0 0 1 370.951 37.575 Q 369.524 37.29 368.42 36.643 A 6.571 6.571 0 0 1 367.175 35.7 A 6.985 6.985 0 0 1 365.136 31.734 A 10.012 10.012 0 0 1 365 30.05 A 8.508 8.508 0 0 1 365.326 27.625 A 6.195 6.195 0 0 1 367.825 24.2 Q 369.819 22.824 373.121 22.419 A 24.546 24.546 0 0 1 376.1 22.25 L 380.8 22.25 L 380.8 20.05 Q 380.8 18.192 380.021 16.993 A 3.956 3.956 0 0 0 379.5 16.35 A 3.966 3.966 0 0 0 378.024 15.439 Q 376.954 15.05 375.45 15.05 A 8.655 8.655 0 0 0 373.86 15.188 Q 372.943 15.359 372.208 15.744 A 4.874 4.874 0 0 0 371.7 16.05 Q 370.25 17.05 369.25 18.6 L 366 15.65 A 10.287 10.287 0 0 1 369.219 12.299 A 12.208 12.208 0 0 1 369.65 12.025 Q 371.593 10.847 374.528 10.643 A 18.356 18.356 0 0 1 375.8 10.6 Q 379.273 10.6 381.635 11.712 A 8.247 8.247 0 0 1 383.55 12.95 A 7.61 7.61 0 0 1 385.986 17.15 A 11.637 11.637 0 0 1 386.25 19.7 L 386.25 32.75 L 389 32.75 L 389 37.2 Z M 231.9 37.2 L 227.15 37.2 Q 225.161 37.2 223.854 36.482 A 4.307 4.307 0 0 1 222.85 35.725 A 4.803 4.803 0 0 1 221.658 33.61 Q 221.4 32.689 221.4 31.55 L 221.4 15.65 L 217.35 15.65 L 217.35 11.2 L 219.55 11.2 A 4.757 4.757 0 0 0 220.2 11.159 Q 221.037 11.043 221.425 10.6 Q 221.917 10.037 221.948 8.815 A 6.59 6.59 0 0 0 221.95 8.65 L 221.95 4.1 L 226.85 4.1 L 226.85 11.2 L 232.3 11.2 L 232.3 15.65 L 226.85 15.65 L 226.85 32.75 L 231.9 32.75 L 231.9 37.2 Z M 31.8 37.2 L 31.8 11.2 L 37.25 11.2 L 37.25 37.2 L 31.8 37.2 Z M 112.7 37.2 L 112.7 11.2 L 118.15 11.2 L 118.15 37.2 L 112.7 37.2 Z M 206.7 37.2 L 206.7 11.2 L 212.15 11.2 L 212.15 37.2 L 206.7 37.2 Z M 354.9 26.45 L 354.9 21.95 A 8.612 8.612 0 0 0 354.661 19.865 A 6.112 6.112 0 0 0 353.2 17.125 Q 351.5 15.3 348.65 15.3 A 8.449 8.449 0 0 0 346.683 15.518 A 6.269 6.269 0 0 0 344.45 16.525 A 4.327 4.327 0 0 0 343.381 17.6 A 3.739 3.739 0 0 0 342.75 19.75 L 342.75 28.65 A 3.719 3.719 0 0 0 344.005 31.515 A 4.949 4.949 0 0 0 344.45 31.875 A 6.38 6.38 0 0 0 347.061 32.962 A 8.757 8.757 0 0 0 348.65 33.1 A 7.195 7.195 0 0 0 350.682 32.827 A 5.493 5.493 0 0 0 353.2 31.275 A 6.191 6.191 0 0 0 354.734 28.21 A 8.893 8.893 0 0 0 354.9 26.45 Z M 58 37.3 L 49.2 37.3 A 4.035 4.035 0 0 0 48.178 38.126 Q 47.4 39.019 47.4 40.3 A 3.231 3.231 0 0 0 47.69 41.683 Q 47.993 42.333 48.613 42.827 A 3.995 3.995 0 0 0 48.675 42.875 Q 49.775 43.716 52.195 43.832 A 16.89 16.89 0 0 0 53 43.85 L 56.4 43.85 A 16.735 16.735 0 0 0 58.558 43.724 Q 60.849 43.424 61.888 42.414 A 2.884 2.884 0 0 0 62.75 40.25 Q 62.75 38.9 61.725 38.1 A 2.823 2.823 0 0 0 60.945 37.687 Q 60.169 37.406 58.966 37.329 A 15.197 15.197 0 0 0 58 37.3 Z M 59.65 19.95 L 59.65 18.95 A 6.052 6.052 0 0 0 59.527 17.688 Q 59.361 16.912 58.973 16.334 A 3.22 3.22 0 0 0 58.325 15.625 Q 57.238 14.744 55.429 14.585 A 9.498 9.498 0 0 0 54.6 14.55 A 8.619 8.619 0 0 0 53.149 14.664 Q 51.768 14.901 50.875 15.625 Q 49.648 16.621 49.557 18.624 A 7.213 7.213 0 0 0 49.55 18.95 L 49.55 19.95 A 6.052 6.052 0 0 0 49.673 21.212 Q 49.839 21.988 50.227 22.566 A 3.22 3.22 0 0 0 50.875 23.275 Q 51.962 24.157 53.771 24.315 A 9.498 9.498 0 0 0 54.6 24.35 A 8.619 8.619 0 0 0 56.051 24.236 Q 57.432 23.999 58.325 23.275 Q 59.552 22.28 59.643 20.277 A 7.213 7.213 0 0 0 59.65 19.95 Z M 380.8 29.5 L 380.8 25.75 L 376.2 25.75 A 13.644 13.644 0 0 0 374.28 25.873 Q 372.046 26.192 371.15 27.34 A 3.009 3.009 0 0 0 370.55 29.25 L 370.55 30.15 A 4.131 4.131 0 0 0 370.677 31.204 A 2.783 2.783 0 0 0 371.725 32.775 A 4.054 4.054 0 0 0 373.019 33.403 Q 373.861 33.65 374.95 33.65 A 9.5 9.5 0 0 0 376.77 33.485 Q 377.876 33.269 378.756 32.77 A 5.623 5.623 0 0 0 379.15 32.525 A 4.044 4.044 0 0 0 380.155 31.572 Q 380.795 30.695 380.8 29.519 A 4.334 4.334 0 0 0 380.8 29.5 Z M 31.3 3.7 L 31.3 2.85 A 3.293 3.293 0 0 1 31.438 1.876 A 2.646 2.646 0 0 1 32.075 0.8 Q 32.662 0.194 33.779 0.047 A 5.919 5.919 0 0 1 34.55 0 A 5.695 5.695 0 0 1 35.431 0.063 Q 35.882 0.134 36.238 0.284 A 2.189 2.189 0 0 1 37 0.8 A 2.741 2.741 0 0 1 37.718 2.356 A 3.748 3.748 0 0 1 37.75 2.85 L 37.75 3.7 A 3.406 3.406 0 0 1 37.621 4.658 A 2.667 2.667 0 0 1 37 5.75 Q 36.25 6.55 34.55 6.55 A 5.734 5.734 0 0 1 33.667 6.487 Q 32.632 6.325 32.075 5.75 A 2.719 2.719 0 0 1 31.323 4.116 A 3.688 3.688 0 0 1 31.3 3.7 Z M 112.2 3.7 L 112.2 2.85 A 3.293 3.293 0 0 1 112.338 1.876 A 2.646 2.646 0 0 1 112.975 0.8 Q 113.562 0.194 114.679 0.047 A 5.919 5.919 0 0 1 115.45 0 A 5.695 5.695 0 0 1 116.331 0.063 Q 116.782 0.134 117.138 0.284 A 2.189 2.189 0 0 1 117.9 0.8 A 2.741 2.741 0 0 1 118.618 2.356 A 3.748 3.748 0 0 1 118.65 2.85 L 118.65 3.7 A 3.406 3.406 0 0 1 118.521 4.658 A 2.667 2.667 0 0 1 117.9 5.75 Q 117.15 6.55 115.45 6.55 A 5.734 5.734 0 0 1 114.567 6.487 Q 113.532 6.325 112.975 5.75 A 2.719 2.719 0 0 1 112.223 4.116 A 3.688 3.688 0 0 1 112.2 3.7 Z M 206.2 3.7 L 206.2 2.85 A 3.293 3.293 0 0 1 206.338 1.876 A 2.646 2.646 0 0 1 206.975 0.8 Q 207.562 0.194 208.679 0.047 A 5.919 5.919 0 0 1 209.45 0 A 5.695 5.695 0 0 1 210.331 0.063 Q 210.782 0.134 211.138 0.284 A 2.189 2.189 0 0 1 211.9 0.8 A 2.741 2.741 0 0 1 212.618 2.356 A 3.748 3.748 0 0 1 212.65 2.85 L 212.65 3.7 A 3.406 3.406 0 0 1 212.521 4.658 A 2.667 2.667 0 0 1 211.9 5.75 Q 211.15 6.55 209.45 6.55 A 5.734 5.734 0 0 1 208.567 6.487 Q 207.532 6.325 206.975 5.75 A 2.719 2.719 0 0 1 206.223 4.116 A 3.688 3.688 0 0 1 206.2 3.7 Z"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </svg>
    </button>
  );
}