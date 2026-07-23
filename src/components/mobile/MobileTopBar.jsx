import Logo from "../../assets/svg/logo.svg?react";
import ThemeToggle from "../hero/ThemeToggle";
import { themeColors } from "../../utils/theme";



export default function MobileTopBar({
  theme,
  onThemeToggle,
}) {

const colors = themeColors[theme];

  return (
    <header

        className="mobile-topbar"
        style={{
            "--mobile-topbar-bg": colors.bg,
        }}
    >

        <div className="mobile-topbar__content">

        <Logo className="mobile-topbar__logo" />

        <ThemeToggle
            mobile
            theme={theme}
            onToggle={onThemeToggle}
        />

      </div>

    </header>
  );
}