export default function Btn({ text, onClick, className = "" }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm cursor-pointer whitespace-nowrap leading-tight w-auto ${className}`}

      onClick={onClick}
    >
      <span className="inline-flex items-center gap-2">{text}</span>
    </button>
  );
}
