const TextInputArea = ({ textRef, onInput }) => {
  return (
    <>
      <section>
        {/* Textarea */}
        <div>
          <textarea
            ref={textRef}
            onInput={onInput}
            placeholder="Start typing here… (or paste your text)"
            className="w-full rounded-[12px] border-2 border-[var(--color-light-200)] bg-[var(--color-light-100)] text-preset-3 text-[var(--color-dark-700)] p-3 md:px-5 md:pt-5 hover:bg-[var(--color-light-200)] cursor-pointer"
            rows="6"
          />
        </div>

        {/* Options */}
        <div className="mt-4 space-y-3 text-preset-4 md:flex md:space-y-0">
          <label className="flex items-center gap-[10px] md:mr-6">
            <input type="checkbox" />
            <span>Exclude Spaces</span>
          </label>

          <label className="flex items-center gap-[10px]">
            <input type="checkbox" />
            <span>Set Character Limit</span>
          </label>

          {/* Info text */}
          <p className="md:ml-auto">Approx. reading time: 0 minute</p>
        </div>
      </section>
    </>
  );
};

export default TextInputArea;
