import iconInfo from "../assets/images/icon-info.svg";

const TextInputArea = ({
  textRef,
  onUserTyping,
  excludeSpaces,
  onToggleSpaces,
  limitOn,
  onToggleLimit,
  limitValue,
  onChangeLimit,
  overLimit,
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
            aria-invalid={overLimit ? "true" : "false"}
            aria-describedby={overLimit ? "charLimitMsg" : undefined}
            className={`w-full rounded-[12px] border-2 p-3 md:px-5 md:pt-5 text-preset-3 text-[var(--color-dark-700)] hover:bg-[var(--color-light-200)] cursor-pointer
    ${
      overLimit
        ? "border-[var(--color-orange-700)] bg-[var(--color-light-100)]"
        : "border-[var(--color-light-200)] bg-[var(--color-light-100)]"
    }`}
            rows="6"
          />
        </div>
        {overLimit && (
          <div
            id="charLimitMsg"
            className="flex items-start"
            role="alert"
            aria-live="polite"
          >
            <img
              src={iconInfo}
              alt="Icon Info for Character Limit"
              aria-hidden="true"
            />
            <p className="text-preset-4 text-[var(--color-orange-800)] pl-2">
              Limit reached! Your text exceeds {limitValue} characters.
            </p>
          </div>
        )}

        {/* Options */}
        <div className="mt-4 space-y-3 text-preset-4 md:flex md:space-y-0">
          <label className="flex items-center gap-[10px] md:mr-6">
            <input
              id="excludeSpaces"
              type="checkbox"
              checked={excludeSpaces}
              onChange={onToggleSpaces}
            />
            <span htmlFor="excludeSpaces">Exclude Spaces</span>
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
                type="text"
                value={limitValue}
                onChange={onChangeLimit}
                className="border py-1 w-15 rounded-[6px] text-center"
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
