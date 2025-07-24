export default function Btn({ text, onClick, className = "" }) {
  return (
    <button
      type="button"
      className={`inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-700 sm:ml-3 sm:w-auto cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="flex gap-5 flex-row items-center">
        <h1 className="text-sm text-white flex items-center gap-3">{text}</h1>
      </div>
    </button>
  );
}