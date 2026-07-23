function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200"
    />
  );
}

export default Input;