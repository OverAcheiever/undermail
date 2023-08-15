const Subject = ({
  subject,
  setSubject,
}: {
  subject?: string;
  setSubject: (subject: string) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  return (
    <div className="flex h-14 items-center border-b border-[#222]">
      <div className="px-4 text-[#444]">Subject</div>
      <input
        type="text"
        className="w-full bg-black outline-none"
        value={subject}
        onChange={handleChange}
      />
    </div>
  );
};

export default Subject;
