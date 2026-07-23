function Card({ children }) {
  return (
    <div className="bg-slate-800 shadow-2xl rounded-2xl p-8 w-full max-w-md">
      {children}
    </div>
  );
}

export default Card;