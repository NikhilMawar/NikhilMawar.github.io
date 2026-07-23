import Logo from "../../assets/svg/logo.svg?react";
import BulbRope from "../hero/BulbRope";

export default function MobileTopBar({
  theme,
  onThemeToggle,
}) {
  return (
    <header className="mobile-topbar">

        <div className="mobile-topbar__content">

        <Logo className="mobile-topbar__logo" />

        <BulbRope
          theme={theme}
          onThemeToggle={onThemeToggle}
          mobile
        />

      </div>

    </header>
  );
}