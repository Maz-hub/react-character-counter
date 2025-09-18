import LogoLightTheme from "../assets/images/logo-light-theme.svg";
import LogoDarkTheme from "../assets/images/logo-dark-theme.svg";
import SunIcon from "../assets/images/icon-sun.svg";
import MoonIcon from "../assets/images/icon-moon.svg";

const CounterHeader = () => {
  return (
    <section className="flex justify-between items-center p-4">
      <div>
        {/* Light Theme Logo */}
        <img src={LogoLightTheme} alt="Logo" className="block dark:hidden" />
        {/* Dark Theme Logo */}
        <img src={LogoDarkTheme} alt="Logo" className="hidden dark:block" />
      </div>
      <div>
        {/* Light Theme */}
        <img
          src={MoonIcon}
          alt="Switch to dark mode"
          className="block dark:hidden"
        />
        {/* Dark Theme */}
        <img
          src={SunIcon}
          alt="Switch to light mode"
          className="hidden dark:block"
        />
      </div>
    </section>
  );
};

export default CounterHeader;
