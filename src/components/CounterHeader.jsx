import LogoLightTheme from "../assets/images/logo-light-theme.svg";
import LogoDarkTheme from "../assets/images/logo-dark-theme.svg";
import SunIcon from "../assets/images/icon-sun.svg";
import MoonIcon from "../assets/images/icon-moon.svg";

/*
  CounterHeader component:
  - Displays the app’s logo (light or dark version depending on theme)
  - Shows a theme toggle button (moon → to activate dark mode, sun → to go back to light mode)
  - The actual theme switching logic happens in App.jsx, and we trigger it through the onToggleTheme prop.
*/

const CounterHeader = ({ onToggleTheme }) => {
  return (
    // Header layout: logo on the left, theme toggle on the right
    <section className="flex justify-between items-center pb-4">
      <div>
        {/* Light theme logo → visible only when dark mode is OFF */}
        <img src={LogoLightTheme} alt="Logo" className="block dark:hidden" />

        {/* Dark theme logo → visible only when dark mode is ON */}
        <img src={LogoDarkTheme} alt="Logo" className="hidden dark:block" />
      </div>

      {/* Toggle buttons container */}
      <div>
        {/* Light Theme Button
            - Visible in light mode
            - When clicked → switches to dark mode
            - The moon icon makes the action intuitive
        */}
        <button
          aria-label="Switch to dark mode"
          className="block dark:hidden bg-[var(--color-light-100)] p-[6px] md:p-[11px] rounded-md cursor-pointer"
          onClick={onToggleTheme}
        >
          <img
            src={MoonIcon}
            alt=""
            className="h-5 w-5 md:h-[22px] md:w-[22px]"
            aria-hidden="true"
          />
        </button>

        {/* Dark Theme Button
            - Visible in dark mode
            - When clicked → switches back to light mode
            - The sun icon signals returning to light mode
        */}

        <button
          aria-label="Switch to light mode"
          className=" hidden dark:block bg-[var(--color-dark-700)] p-[6px] md:p-[11px] rounded-md cursor-pointer"
          onClick={onToggleTheme}
        >
          <img
            src={SunIcon}
            alt="Switch to light mode"
            className=" h-5 w-5 md:h-[22px] md:w-[22px] hidden dark:block"
          />
        </button>
      </div>
    </section>
  );
};

export default CounterHeader;
