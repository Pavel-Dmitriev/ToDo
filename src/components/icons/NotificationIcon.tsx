import clsx from "clsx";

function NotificationIcon({ className }: { className: string }) {
  return (
    <svg
      className={clsx("text-gray-300", className)}
      fill="currentColor"
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
    >
      <path
        d="M8 2a4.5 4.5 0 00-4.5 4.5v2.4l-.96 2.41A.5.5 0 003 12h3a2 2 0 104 0h3a.5.5 0 00.46-.69l-.96-2.4V6.5A4.5 4.5 0 008 2zm1 10a1 1 0 01-1 1 1 1 0 01-1-1h2zM4.5 6.5a3.5 3.5 0 117 0V9c0 .06.01.12.04.18l.72 1.82H3.74l.72-1.82A.5.5 0 004.5 9V6.5z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export default NotificationIcon;
