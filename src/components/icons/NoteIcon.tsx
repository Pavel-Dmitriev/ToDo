import clsx from "clsx";

function NoteIcon({ className }: { className: string }) {
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
        d="M4.5 2A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14h3.67c.66 0 1.3-.26 1.77-.73l3.33-3.33c.47-.47.73-1.1.73-1.77V4.5A2.5 2.5 0 0011.5 2h-7zM3 4.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5V8h-2.5A2.5 2.5 0 008 10.5V13H4.5A1.5 1.5 0 013 11.5v-7zm6 8.25V10.5c0-.83.67-1.5 1.5-1.5h2.25a1.5 1.5 0 01-.19.23l-3.33 3.33a1.5 1.5 0 01-.23.2z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export default NoteIcon;
