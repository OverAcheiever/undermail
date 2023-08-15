const To = ({ to, setTo }: { to?: string; setTo: (to: string) => void }) => {
  // const [error, setError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTo(e.target.value);
  };

  return (
    <div className="flex h-14 items-center border-b border-[#222]">
      <div className="px-4 text-[#444]">To</div>
      <input
        type="text"
        className="w-full bg-black outline-none"
        value={to}
        onChange={handleChange}
      />
    </div>
  );
};

export default To;
