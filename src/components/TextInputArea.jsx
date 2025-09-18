const TextInputArea = () => {
  return (
    <>
      <section>
        {/* Textarea */}
        <div>
          <textarea
            placeholder="Start typing here… (or paste your text)"
            className="w-full rounded-[12px] border-2 border-[var(--color-light-200)] bg-[var(--color-light-100)] text-preset-3 text-[var(--color-dark-700)] p-3"
            rows="6"
          />
        </div>

        {/* Options */}
        <div className="mt-4 space-y-3 text-preset-4">
          <label className="flex items-center gap-[10px]">
            <input type="checkbox" />
            <span>Exclude Spaces</span>
          </label>

          <label className="flex items-center gap-[10px]">
            <input type="checkbox" />
            <span>Set Character Limit</span>
          </label>

          {/* Info text */}
          <p>Approx. reading time: &lt;1 minute</p>
        </div>
      </section>
    </>
  );
};

export default TextInputArea;
