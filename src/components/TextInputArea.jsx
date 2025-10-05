// Info icon shown when the user exceeds the character limit
import iconInfo from "../assets/images/icon-info.svg";

/*
  TextInputArea component:
  - Contains the main textarea where the user types or pastes text
  - Displays a warning if a character limit is exceeded
  - Provides options to:
      → exclude spaces from character count
      → set a custom character limit
  - Also shows an estimated reading time
  - Uses `ref` instead of a controlled value (uncontrolled component)
    so the parent component (App.jsx) can directly access the text value
*/
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
  readingTime,
}) => {
  return (
    <>
      <section>
        {/* --------------------- ✏️ MAIN TEXTAREA --------------------- */}
        <div>
          <textarea
            ref={textRef} // connects this element to the ref in App.jsx
            onInput={onUserTyping} // triggers live text analysis
            placeholder="Start typing here… (or paste your text)"
            aria-invalid={overLimit ? "true" : "false"} // accessibility flag for screen readers
            aria-describedby={overLimit ? "charLimitMsg" : undefined} // links alert message if over limit
            className={`w-full rounded-[12px] border-2 p-3 md:px-5 md:pt-5 
              text-preset-3 text-[var(--color-dark-700)] dark:text-[var(--color-light-200)] 
              dark:border-[var(--color-dark-700)]
              hover:bg-[var(--color-light-200)] 
              dark:hover:bg-[var(--color-dark-700)] 
              dark:hover:border-[var(--color-dark-600)] 
              dark:active:border-[var(--color-purple-500)] 
              cursor-pointer
              ${
                // Conditional style when the limit is exceeded
                overLimit
                  ? "border-[var(--color-orange-700)] dark:border-[var(--color-orange-700)] bg-[var(--color-light-100)] dark:bg-[var(--color-dark-800)]"
                  : "border-[var(--color-light-200)] bg-[var(--color-light-100)] dark:bg-[var(--color-dark-800)]"
              }`}
            rows="6"
          />
        </div>

        {/* --------------------- ⚠️ LIMIT WARNING --------------------- */}
        {overLimit && (
          <div
            id="charLimitMsg"
            className="flex items-start"
            role="alert"
            aria-live="polite" // ensures assistive tech announces this message dynamically
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

        {/* --------------------- ⚙️ TEXT OPTIONS --------------------- */}
        <div className="mt-4 space-y-3 text-preset-4 md:flex md:space-y-0 dark:text-[var(--color-light-200)]">
          {/* Option 1 → Exclude spaces from character count */}
          <label className="flex items-center gap-[10px] md:mr-6">
            <input
              id="excludeSpaces"
              type="checkbox"
              checked={excludeSpaces}
              onChange={onToggleSpaces}
            />
            <span htmlFor="excludeSpaces">Exclude Spaces</span>
          </label>

          {/* Option 2 → Enable or disable custom character limit */}
          <label className="flex items-center gap-[10px]">
            <input
              id="charLimit"
              type="checkbox"
              checked={limitOn}
              onChange={onToggleLimit}
            />
            <span>Set Character Limit</span>

            {/* If limit checkbox is checked → show input for custom limit */}
            {limitOn && (
              <input
                type="text"
                value={limitValue}
                onChange={onChangeLimit}
                className="border py-1 w-15 rounded-[6px] text-center dark:border-[var(--color-dark-600)]"
              />
            )}
          </label>

          {/* Approximate reading time (based on 200 words per minute) */}
          <p className="md:ml-auto">Approx. reading time: {readingTime}</p>
        </div>
      </section>
    </>
  );
};

export default TextInputArea;
