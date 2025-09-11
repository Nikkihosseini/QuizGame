

export default function SelectField({ label, name, options }) {
  return (
    <div className="flex items-center gap-3">
      <span className="">{label}</span>
      <div className="bg-secondary-color rounded-lg overflow-hidden w-44">
        <select name={name} id={name} className="border-none focus:border-none outline-none focus:outline-none px-2 py-1 w-[10.5rem] cursor-pointer">
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      </div>
    </div>
  );
}
