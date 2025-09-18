const TextInputArea = () => {
  return (
    <>
      <section>
        {/* Textarea */}
        <textarea
          placeholder="Start typing here… (or paste your text)"
          className="w-full rounded-[12px] border-2 border-[var(--color-light-200)] bg-[var(--color-light-100)] text-preset-3 text-[var(--color-dark-700)] p-3"
          rows="6"
        />
      </section>
    </>
  );
};

export default TextInputArea;
