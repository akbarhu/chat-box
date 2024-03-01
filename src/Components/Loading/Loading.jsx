import React, { useEffect, useState } from "react";
import "./Loading.css";

const Loading = () => {
  const [loaderTop, setLoaderTop] = useState("0%");

  useEffect(() => {
    const preLoader = document.getElementById("pre_loader");

    const loaderAnimation = setTimeout(() => {
      setLoaderTop("-100%");
    }, 4200);

    return () => clearTimeout(loaderAnimation);
  }, []);

  return (
    <div className="main_preloader" id="preLoader" style={{ top: loaderTop }}>
      <div className="preloader">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="600"
          zoomAndPan="magnify"
          viewBox="0 0 375 374.999991"
          height="600"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
        >
          <defs>
            <g />
            <clipPath id="path1">
              <path
                d="M 203 111 L 262.582031 111 L 262.582031 201 L 203 201 Z M 203 111 "
                clip-rule="nonzero"
              />
            </clipPath>
            <clipPath id="path2">
              <path
                d="M 132 161 L 222 161 L 222 220.417969 L 132 220.417969 Z M 132 161 "
                clip-rule="nonzero"
              />
            </clipPath>
            <clipPath id="path3">
              <path
                d="M 112.582031 90 L 172 90 L 172 180 L 112.582031 180 Z M 112.582031 90 "
                clip-rule="nonzero"
              />
            </clipPath>
            <clipPath id="path4">
              <path
                id="path5"
                d="M 153 70.417969 L 243 70.417969 L 243 130 L 153 130 Z M 153 70.417969 "
                clip-rule="nonzero"
              />
            </clipPath>
          </defs>
          <g fill="#ffffff" fill-opacity="1">
            <g transform="translate(85.640624, 273.157789)">
              <g>
                <path
                  id="path6"
                  d="M 17.71875 0.707031 C 25.363281 0.707031 31.375 -4.417969 32.789062 -12.0625 L 26.027344 -12.0625 C 24.921875 -8.175781 21.785156 -5.699219 17.71875 -5.699219 C 12.460938 -5.699219 8.527344 -9.855469 8.527344 -15.421875 C 8.527344 -20.992188 12.460938 -25.1875 17.71875 -25.1875 C 21.609375 -25.1875 24.703125 -22.890625 25.984375 -19.265625 L 32.65625 -19.265625 C 31.242188 -26.601562 25.234375 -31.597656 17.71875 -31.597656 C 8.617188 -31.597656 1.722656 -24.613281 1.722656 -15.421875 C 1.722656 -6.273438 8.617188 0.707031 17.71875 0.707031 Z M 17.71875 0.707031 "
                />
              </g>
            </g>
          </g>
          <g fill="#ffffff" fill-opacity="1">
            <g transform="translate(119.703194, 273.157789)">
              <g>
                <path
                  id="path7"
                  d="M 16.746094 -24.394531 C 13.875 -24.394531 11.355469 -23.332031 9.546875 -21.609375 L 9.546875 -32.433594 L 3.09375 -32.433594 L 3.09375 0 L 9.546875 0 L 9.546875 -12.503906 C 9.546875 -16.394531 11.667969 -18.738281 14.890625 -18.738281 C 17.765625 -18.738281 19.046875 -16.96875 19.046875 -13.390625 L 19.046875 0 L 25.496094 0 L 25.496094 -14.496094 C 25.496094 -20.546875 22.140625 -24.394531 16.746094 -24.394531 Z M 16.746094 -24.394531 "
                />
              </g>
            </g>
          </g>
          <g fill="#ffffff" fill-opacity="1">
            <g transform="translate(148.022399, 273.157789)">
              <g>
                <path
                  id="path8"
                  d="M 22.535156 -23.863281 L 21.875 -21.609375 C 19.796875 -23.421875 17.101562 -24.527344 14.007812 -24.527344 C 6.847656 -24.527344 1.503906 -19.132812 1.503906 -11.929688 C 1.503906 -4.726562 6.847656 0.707031 14.007812 0.707031 C 17.058594 0.707031 19.707031 -0.355469 21.742188 -2.164062 L 22.316406 0 L 27.355469 0 L 27.355469 -23.863281 Z M 14.539062 -5.390625 C 10.78125 -5.390625 8.042969 -8.21875 8.042969 -11.929688 C 8.042969 -15.6875 10.78125 -18.472656 14.539062 -18.472656 C 18.292969 -18.472656 21.035156 -15.6875 21.035156 -11.929688 C 21.035156 -8.175781 18.292969 -5.390625 14.539062 -5.390625 Z M 14.539062 -5.390625 "
                />
              </g>
            </g>
          </g>
          <g fill="#ffffff" fill-opacity="1">
            <g transform="translate(178.506413, 273.157789)">
              <g>
                <path
                  id="path9"
                  d="M 14.757812 -5.746094 C 12.375 -5.746094 11.046875 -7.070312 11.046875 -9.367188 L 11.046875 -18.648438 L 17.542969 -18.648438 L 17.542969 -23.863281 L 10.960938 -23.863281 L 10.960938 -30.050781 L 9.722656 -30.050781 L 0.308594 -20.0625 L 0.308594 -18.648438 L 4.597656 -18.648438 L 4.597656 -8.484375 C 4.597656 -3.226562 7.820312 0 13.082031 0 L 17.675781 0 L 17.675781 -5.746094 Z M 14.757812 -5.746094 "
                />
              </g>
            </g>
          </g>
          <g fill="#ffffff" fill-opacity="1">
            <g transform="translate(197.503696, 273.157789)">
              <g />
            </g>
          </g>
          <g fill="#ffffff" fill-opacity="1">
            <g transform="translate(208.062655, 273.157789)">
              <g>
                <path
                  id="path10"
                  d="M 22.140625 -16.304688 C 24.304688 -17.808594 25.628906 -20.285156 25.628906 -22.933594 C 25.628906 -27.484375 21.652344 -30.890625 16.304688 -30.890625 L 3.535156 -30.890625 L 3.535156 0.0429688 L 16.660156 0.0429688 C 22.050781 0.0429688 26.425781 -3.933594 26.425781 -8.882812 C 26.425781 -12.195312 24.835938 -14.847656 22.140625 -16.304688 Z M 19.132812 -21.917969 C 19.132812 -19.972656 17.765625 -18.605469 15.6875 -18.605469 L 10.074219 -18.605469 L 10.074219 -25.1875 L 15.6875 -25.1875 C 17.765625 -25.1875 19.132812 -23.863281 19.132812 -21.917969 Z M 16.039062 -6.097656 L 10.074219 -6.097656 L 10.074219 -13.035156 L 16.039062 -13.035156 C 18.25 -13.035156 19.707031 -11.578125 19.707031 -9.589844 C 19.707031 -7.554688 18.25 -6.097656 16.039062 -6.097656 Z M 16.039062 -6.097656 "
                />
              </g>
            </g>
          </g>
          <g fill="#ffffff" fill-opacity="1">
            <g transform="translate(236.426045, 273.157789)">
              <g>
                <path
                  id="path11"
                  d="M 14.40625 0.707031 C 21.785156 0.707031 27.308594 -4.726562 27.308594 -11.929688 C 27.308594 -19.132812 21.785156 -24.527344 14.40625 -24.527344 C 7.027344 -24.527344 1.503906 -19.132812 1.503906 -11.929688 C 1.503906 -4.726562 7.027344 0.707031 14.40625 0.707031 Z M 14.40625 -5.390625 C 10.695312 -5.390625 8.042969 -8.042969 8.042969 -11.929688 C 8.042969 -15.777344 10.695312 -18.472656 14.40625 -18.472656 C 18.117188 -18.472656 20.769531 -15.777344 20.769531 -11.929688 C 20.769531 -8.042969 18.117188 -5.390625 14.40625 -5.390625 Z M 14.40625 -5.390625 "
                />
              </g>
            </g>
          </g>
          <g fill="#ffffff" fill-opacity="1">
            <g transform="translate(265.275408, 273.157789)">
              <g>
                <path
                  id="path12"
                  d="M 23.996094 0 L 15.820312 -12.550781 L 23.507812 -23.863281 L 16.4375 -23.863281 L 11.976562 -16.925781 L 7.867188 -23.863281 L 0.574219 -23.863281 L 8.132812 -12.242188 L 0.0429688 0 L 7.160156 0 L 11.976562 -7.867188 L 16.703125 0 Z M 23.996094 0 "
                />
              </g>
            </g>
          </g>

          <g clip-path="url(#b819ba27ff)">
            <path
              id="path13"
              fill="#70a33c"
              d="M 203.546875 200.519531 C 214.140625 199.378906 237.882812 192.054688 243.792969 157.363281 C 245.5625 158.113281 247.457031 158.621094 249.464844 158.621094 C 256.789062 158.621094 262.582031 152.679688 262.582031 145.507812 C 262.582031 138.183594 256.789062 132.242188 249.464844 132.242188 C 246.824219 132.242188 244.304688 132.992188 242.261719 134.371094 C 236.320312 124.019531 231.789062 120.355469 218.042969 111.414062 L 218.433594 111.804688 L 218.554688 111.804688 L 218.554688 111.921875 C 227.527344 120.265625 233.199219 132.121094 233.199219 145.355469 C 233.199219 145.746094 233.199219 145.988281 233.199219 146.226562 C 234.339844 168.585938 223.625 192.414062 203.546875 200.519531 Z M 203.546875 200.519531 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
          <g clip-path="url(#48d06149ff)">
            <path
              id="path14"
              fill="#773d8a"
              d="M 132.480469 161.382812 C 133.621094 171.976562 140.941406 195.597656 175.636719 201.628906 C 174.886719 203.28125 174.375 205.289062 174.375 207.300781 C 174.375 214.503906 180.316406 220.417969 187.640625 220.417969 C 194.84375 220.417969 200.757812 214.472656 200.757812 207.300781 C 200.757812 204.660156 200.007812 202.140625 198.625 200.097656 C 209.101562 194.15625 212.640625 189.503906 221.585938 175.878906 L 221.195312 176.269531 L 221.195312 176.390625 C 214.261719 183.832031 204.777344 189.023438 194.183594 190.523438 L 187.609375 202.257812 L 181.21875 191.035156 C 160.628906 190.40625 139.953125 179.808594 132.480469 161.382812 Z M 132.480469 161.382812 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
          <g clip-path="url(#f143fd51d9)">
            <path
              id="path15"
              fill="#e13990"
              d="M 171.613281 90.316406 C 161.019531 91.457031 137.402344 98.777344 131.367188 133.472656 C 129.71875 132.722656 127.707031 132.210938 125.695312 132.210938 C 118.492188 132.210938 112.582031 138.152344 112.582031 145.328125 C 112.582031 152.648438 118.523438 158.59375 125.695312 158.59375 C 128.335938 158.59375 130.859375 157.839844 132.898438 156.460938 C 138.839844 166.816406 143.492188 170.476562 157.117188 179.421875 L 156.730469 179.03125 L 156.609375 178.910156 C 147.636719 170.597656 141.964844 158.742188 141.964844 145.355469 C 141.964844 145.117188 141.964844 144.847656 141.964844 144.605469 C 140.824219 122.246094 151.535156 98.417969 171.613281 90.316406 Z M 171.613281 90.316406 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
          <g clip-path="url(#a0e036d4e0)">
            <path
              id="path16"
              fill="#f0831e"
              d="M 242.683594 129.449219 C 241.664062 118.855469 234.21875 95.117188 199.527344 89.203125 C 200.277344 87.554688 200.785156 85.542969 200.785156 83.53125 C 200.785156 76.328125 194.84375 70.417969 187.671875 70.417969 C 180.347656 70.417969 174.40625 76.359375 174.40625 83.53125 C 174.40625 86.171875 175.15625 88.695312 176.535156 90.734375 C 166.183594 96.675781 162.519531 101.328125 153.578125 114.953125 L 153.699219 114.953125 L 153.9375 114.5625 L 154.058594 114.445312 C 162.402344 105.472656 174.253906 99.796875 187.640625 99.796875 C 187.882812 99.796875 188.152344 99.796875 188.390625 99.796875 C 210.75 98.65625 234.578125 109.371094 242.683594 129.449219 Z M 242.683594 129.449219 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
          <path
            id="path17"
            fill="#6bc3fe"
            d="M 162.910156 138.035156 C 167.082031 138.035156 170.355469 141.304688 170.355469 145.476562 C 170.355469 149.527344 167.082031 152.800781 162.910156 152.800781 C 158.859375 152.800781 155.589844 149.527344 155.589844 145.476562 C 155.589844 141.304688 158.859375 138.035156 162.910156 138.035156 Z M 162.910156 138.035156 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
          <path
            id="path18"
            fill="#6bc3fe"
            d="M 187.640625 138.035156 C 191.691406 138.035156 194.964844 141.304688 194.964844 145.476562 C 194.964844 149.527344 191.691406 152.800781 187.640625 152.800781 C 183.46875 152.800781 180.199219 149.527344 180.199219 145.476562 C 180.199219 141.304688 183.46875 138.035156 187.640625 138.035156 Z M 187.640625 138.035156 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
          <path
            id="path19"
            fill="#6bc3fe"
            d="M 212.25 138.035156 C 216.300781 138.035156 219.574219 141.304688 219.574219 145.476562 C 219.574219 149.527344 216.300781 152.800781 212.25 152.800781 C 208.199219 152.800781 204.808594 149.527344 204.808594 145.476562 C 204.808594 141.304688 208.230469 138.035156 212.25 138.035156 Z M 212.25 138.035156 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
        </svg>
      </div>
      <div className="footer">
        <h2>Powered By Chat Box</h2>
      </div>
    </div>
  );
};

export default Loading;
