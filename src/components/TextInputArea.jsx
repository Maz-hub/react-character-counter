const TextInputArea = ({
  textRef,
  onUserTyping,
  excludeSpaces,
  onToggleSpaces,
  limitOn,
  onToggleLimit,
  limitValue,
  onChangeLimit,
}) => {
  return (
    <>
      <section>
        {/* Textarea */}
        <div>
          <textarea
            ref={textRef}
            onInput={onUserTyping}
            placeholder="Start typing here… (or paste your text)"
            className="w-full rounded-[12px] border-2 border-[var(--color-light-200)] bg-[var(--color-light-100)] text-preset-3 text-[var(--color-dark-700)] p-3 md:px-5 md:pt-5 hover:bg-[var(--color-light-200)] cursor-pointer"
            rows="6"
          />
        </div>

        {/* Options */}
        <div className="mt-4 space-y-3 text-preset-4 md:flex md:space-y-0">
          <label className="flex items-center gap-[10px] md:mr-6">
            <input
              id="excludeSpaces"
              type="checkbox"
              checked={excludeSpaces}
              onChange={onToggleSpaces}
            />
            <label htmlFor="excludeSpaces">Exclude Spaces</label>
          </label>

          <label className="flex items-center gap-[10px]">
            <input
              id="charLimit"
              type="checkbox"
              checked={limitOn}
              onChange={onToggleLimit}
            />
            <span>Set Character Limit</span>
            {limitOn && (
              <input
                type="number"
                className="border py-1 w-15 rounded-[6px] text-center appearance-none"
              />
            )}
          </label>

          {/* Info text */}
          <p className="md:ml-auto">Approx. reading time: 0 minute</p>
        </div>
      </section>
    </>
  );
};

export default TextInputArea;
