import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Logo = ({ className, width }) => (
  <svg
    viewBox="0 0 400 70"
    className={className}
    css={css`
      width: ${width || '221px'};

      .dark-mode & {
        fill: white;
      }
    `}
  >
    <g transform="translate(-10 -10)">
      <path d="M108.78,26.42h12q6.77,0,9.88,3.22t3.12,10.3V49.3q0,7.06-3.12,10.3t-9.88,3.22h-12V58.71h3.12V30.48h-3.12Zm11.34,32.34a15.7,15.7,0,0,0,4.13-.47,6.45,6.45,0,0,0,2.89-1.58,6.81,6.81,0,0,0,1.69-3,17.44,17.44,0,0,0,.54-4.73V40.25a17.38,17.38,0,0,0-.54-4.73,6.81,6.81,0,0,0-1.69-3,6.37,6.37,0,0,0-2.89-1.59,16.17,16.17,0,0,0-4.13-.46h-3.85V58.76Z" />
      <path d="M142.87,51.17a9.14,9.14,0,0,0,2.4,6.19,8.22,8.22,0,0,0,6.24,2.34,10.73,10.73,0,0,0,3.17-.42A7.34,7.34,0,0,0,157,58.14a6.39,6.39,0,0,0,1.56-1.69,9.58,9.58,0,0,0,1-2.05l3.85,1a11.34,11.34,0,0,1-4,5.84,12.67,12.67,0,0,1-7.93,2.27,12.91,12.91,0,0,1-5.07-1,11.51,11.51,0,0,1-4-2.72,12.82,12.82,0,0,1-2.6-4.22,15.08,15.08,0,0,1-.93-5.4V49a13.2,13.2,0,0,1,1-5.05,11.9,11.9,0,0,1,2.68-4,12.5,12.5,0,0,1,4-2.65,12.94,12.94,0,0,1,5-1A12,12,0,0,1,157,37.47a12.21,12.21,0,0,1,3.8,2.89,11.93,11.93,0,0,1,2.88,7.48v3.33Zm8.64-11a9.27,9.27,0,0,0-3.2.54,8.13,8.13,0,0,0-4.42,3.85,8.57,8.57,0,0,0-.91,2.89h16.64A7.44,7.44,0,0,0,157,42.12a8.21,8.21,0,0,0-2.55-1.45A8.42,8.42,0,0,0,151.51,40.15Z" />
      <path d="M184.07,62.82h-8l-9-25.79h4.78L179.76,61h.62L188.29,37h4.78Z" />
      <path d="M200.44,51.17a9.13,9.13,0,0,0,2.39,6.19,8.22,8.22,0,0,0,6.24,2.34,10.73,10.73,0,0,0,3.17-.42,7.5,7.5,0,0,0,2.32-1.14,6.39,6.39,0,0,0,1.56-1.69,10.66,10.66,0,0,0,1-2.05l3.85,1a11.4,11.4,0,0,1-4,5.84A12.69,12.69,0,0,1,209,63.55a12.91,12.91,0,0,1-5.07-1,11.42,11.42,0,0,1-4-2.72,12.66,12.66,0,0,1-2.6-4.22,14.86,14.86,0,0,1-.94-5.4V49a13.2,13.2,0,0,1,1-5.05,12.05,12.05,0,0,1,2.68-4,12.72,12.72,0,0,1,4-2.65,13,13,0,0,1,5-1,11.85,11.85,0,0,1,9.28,4.06,11.39,11.39,0,0,1,2.19,3.74,11.71,11.71,0,0,1,.7,3.74v3.33Zm8.63-11a9.31,9.31,0,0,0-3.2.54,8.25,8.25,0,0,0-2.6,1.54,8.34,8.34,0,0,0-1.82,2.31,8.57,8.57,0,0,0-.91,2.89h16.64a7.38,7.38,0,0,0-2.62-5.31,8.7,8.7,0,0,0-5.49-2Z" />
      <path d="M226.07,59.07h9.36V30.16h-9V26.42h13.1V59.07h9.36v3.75H226.07Z" />
      <path d="M279,50.24a14.29,14.29,0,0,1-1.07,5.69,12.51,12.51,0,0,1-2.83,4.16,11.94,11.94,0,0,1-4.14,2.57,14.07,14.07,0,0,1-9.85,0A12,12,0,0,1,257,60.09a12.51,12.51,0,0,1-2.83-4.16,14.29,14.29,0,0,1-1.07-5.69v-.63A14.15,14.15,0,0,1,254.13,44,12.62,12.62,0,0,1,257,39.78a12.11,12.11,0,0,1,4.13-2.6,14,14,0,0,1,9.78,0,12.2,12.2,0,0,1,4.13,2.6A12.62,12.62,0,0,1,277.89,44,14.15,14.15,0,0,1,279,49.61ZM266,59.7a9.11,9.11,0,0,0,3.46-.65,8.11,8.11,0,0,0,2.78-1.9,8.87,8.87,0,0,0,1.87-3,10.78,10.78,0,0,0,.68-3.92v-.63a10.5,10.5,0,0,0-.68-3.82,8.87,8.87,0,0,0-1.87-3,8.65,8.65,0,0,0-2.81-1.95,8.75,8.75,0,0,0-6.86,0,8.65,8.65,0,0,0-2.81,1.95,8.87,8.87,0,0,0-1.87,3,10.5,10.5,0,0,0-.68,3.82v.63a10.78,10.78,0,0,0,.68,3.92,8.87,8.87,0,0,0,1.87,3,8,8,0,0,0,2.78,1.9A9.11,9.11,0,0,0,266,59.7Z" />
      <path d="M288.55,73.22H284.5V37h4.05v4h.63a8.92,8.92,0,0,1,3.74-3.56,11.31,11.31,0,0,1,5.2-1.22,11.67,11.67,0,0,1,4.52.88,11.33,11.33,0,0,1,3.77,2.55,11.94,11.94,0,0,1,2.6,4.11,15.11,15.11,0,0,1,1,5.56v1a15.72,15.72,0,0,1-.94,5.62,11.73,11.73,0,0,1-2.57,4.11,10.92,10.92,0,0,1-3.83,2.52,12.56,12.56,0,0,1-4.62.86,11.8,11.8,0,0,1-2.55-.29,10.09,10.09,0,0,1-2.47-.88,10.93,10.93,0,0,1-2.16-1.46,7.74,7.74,0,0,1-1.66-2.05h-.63Zm8.63-13.52a8.93,8.93,0,0,0,3.44-.65,8.1,8.1,0,0,0,2.73-1.85,8.42,8.42,0,0,0,1.82-2.91,10.87,10.87,0,0,0,.65-3.85v-1a10.54,10.54,0,0,0-.65-3.77,9,9,0,0,0-1.82-2.91,8.31,8.31,0,0,0-2.76-1.9,8.61,8.61,0,0,0-3.41-.67,8.12,8.12,0,0,0-3.38.7,8.53,8.53,0,0,0-2.73,1.95,9.13,9.13,0,0,0-1.84,3,10.5,10.5,0,0,0-.68,3.82v.63a10.62,10.62,0,0,0,.68,3.87,9.13,9.13,0,0,0,1.84,3A8.15,8.15,0,0,0,293.8,59,8.43,8.43,0,0,0,297.18,59.7Z" />
      <path d="M318.91,51.17a9.18,9.18,0,0,0,2.4,6.19,8.22,8.22,0,0,0,6.24,2.34,10.73,10.73,0,0,0,3.17-.42A7.34,7.34,0,0,0,333,58.14a6.39,6.39,0,0,0,1.56-1.69,9.58,9.58,0,0,0,1-2.05l3.85,1a11.34,11.34,0,0,1-4,5.84,12.67,12.67,0,0,1-7.93,2.27,12.91,12.91,0,0,1-5.07-1,11.51,11.51,0,0,1-4-2.72,12.82,12.82,0,0,1-2.6-4.22,15.08,15.08,0,0,1-.93-5.4V49a13.2,13.2,0,0,1,1-5.05,11.9,11.9,0,0,1,2.68-4,12.61,12.61,0,0,1,4-2.65,12.94,12.94,0,0,1,5-1A12,12,0,0,1,333,37.47a12.21,12.21,0,0,1,3.8,2.89,11.93,11.93,0,0,1,2.88,7.48v3.33Zm8.64-11a9.27,9.27,0,0,0-3.2.54,8.13,8.13,0,0,0-4.42,3.85,8.57,8.57,0,0,0-.91,2.89h16.64A7.44,7.44,0,0,0,333,42.12a8.21,8.21,0,0,0-2.55-1.45A8.42,8.42,0,0,0,327.55,40.15Z" />
      <path d="M344.21,37h9.36v3.43h.62A6.74,6.74,0,0,1,357,37.31a8.46,8.46,0,0,1,4.16-1,8.21,8.21,0,0,1,6.29,2.55q2.4,2.55,2.55,7.43l-4.26.63c0-2.39-.58-4.12-1.72-5.18a6,6,0,0,0-4.21-1.58,5.88,5.88,0,0,0-2.78.62,5.65,5.65,0,0,0-1.95,1.72A7.47,7.47,0,0,0,353.93,45a13.08,13.08,0,0,0-.36,3.12V59.07h6.55v3.75H343.58V59.07h5.93V40.77h-5.3Z" />
      <path d="M380,43.68a3.17,3.17,0,0,0,1.59,2.86c1.06.66,3,1.1,5.8,1.3A13.21,13.21,0,0,1,394.26,50a6.18,6.18,0,0,1,2.36,5.23v.31a7.31,7.31,0,0,1-.75,3.35,7.44,7.44,0,0,1-2.08,2.52A9.16,9.16,0,0,1,390.57,63a15.13,15.13,0,0,1-4.14.55,14.73,14.73,0,0,1-5.17-.81,10.79,10.79,0,0,1-3.59-2.13,8.94,8.94,0,0,1-2.16-3,10.2,10.2,0,0,1-.83-3.4l3.85-.94A6.85,6.85,0,0,0,380.82,58a7.87,7.87,0,0,0,5.4,1.79,8.5,8.5,0,0,0,4.61-1.11,3.55,3.55,0,0,0,1.74-3.15,3.26,3.26,0,0,0-1.72-3.12,14.31,14.31,0,0,0-5.56-1.2,12.94,12.94,0,0,1-6.87-2.08A6,6,0,0,1,376,44v-.31a6.34,6.34,0,0,1,.78-3.19,7,7,0,0,1,2.11-2.32,9.67,9.67,0,0,1,3-1.4,12.5,12.5,0,0,1,3.48-.47,13,13,0,0,1,4.47.7,10.44,10.44,0,0,1,3.23,1.82,8,8,0,0,1,2,2.58,9.89,9.89,0,0,1,.91,2.91l-3.85.93a5.52,5.52,0,0,0-2-3.9,7.06,7.06,0,0,0-4.55-1.4,9.74,9.74,0,0,0-2.11.23,6.37,6.37,0,0,0-1.79.7A4,4,0,0,0,380.45,42,2.92,2.92,0,0,0,380,43.68Z" />
      <path d="M18.65,22.35a4,4,0,0,1,1.12-2.91,3.88,3.88,0,0,1,2.89-1.14h5V22H24.11c-.93,0-1.4.52-1.4,1.56V40.24a4,4,0,0,1-1.12,2.91,3.9,3.9,0,0,1-2.94,1.15H18v.62h.62a3.9,3.9,0,0,1,2.94,1.15A4,4,0,0,1,22.71,49V65.62c0,1,.47,1.56,1.4,1.56H27.7v3.74h-5a3.88,3.88,0,0,1-2.89-1.14,4,4,0,0,1-1.12-2.91V48.93c0-1-.47-1.51-1.4-1.51H14.6V41.8h2.65c.93,0,1.4-.5,1.4-1.51Z" />
      <path d="M86.25,40.29c0,1,.47,1.51,1.41,1.51h2.65v5.62H87.66c-.94,0-1.41.5-1.41,1.51V66.87a4,4,0,0,1-1.12,2.91,3.84,3.84,0,0,1-2.88,1.14h-5V67.18h3.59q1.41,0,1.41-1.56V49a4,4,0,0,1,1.11-2.91,3.92,3.92,0,0,1,2.94-1.15h.63V44.3h-.63a3.92,3.92,0,0,1-2.94-1.15,4,4,0,0,1-1.11-2.91V23.6Q82.2,22,80.79,22H77.2V18.3h5a3.84,3.84,0,0,1,2.88,1.14,4,4,0,0,1,1.12,2.91Z" />
      <rect fill="#0ab0bf;" x="31.42" y="32.05" width="32.22" height="5" />
      <rect fill="#fda032;" x="39.27" y="42.05" width="15.3" height="5" />
      <rect fill="#66e6a8" x="58.76" y="42.05" width="15.3" height="5" />
      <rect fill="#70ccd3" x="39.27" y="52.05" width="20.38" height="5" />
    </g>
  </svg>
);

Logo.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
};

export default Logo;
