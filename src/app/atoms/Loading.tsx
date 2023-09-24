/**
 * ローディングアイコン
 */
export const NomalLoading = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="48"
        height="48"
      >
        <path
          fill="#e6edf3"
          d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12,12-5.4,12-12S18.6,0,12,0m0,3c5,0,9,4,9,9s-4,9-9,9S3,17,3,12,7,3,12,3"
        />
        <path fill="#2589d0" d="M12,0c6.6,0,12,5.4,12,12h-3c0-5-4-9-9-9V0Z">
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            from="0 12 12"
            to="360 12 12"
            dur="1s"
          />
        </path>
      </svg>
    </>
  );
};

/**
 * 時計を回すローディングアイコン
 */
export const TimeLoading = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="48"
        height="48"
        fill="#2589d0"
      >
        <circle cx="12" cy="12" r="11" fill="none" stroke="#2589d0" />
        <rect x="11.5" y="3" width="1" height="9">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0,12,12"
            to="360,12,12"
            dur="2s"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="11.5" y="6" width="1" height="6.5">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0,12,12"
            to="360,12,12"
            dur="8s"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </>
  );
};
