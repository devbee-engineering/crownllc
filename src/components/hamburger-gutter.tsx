import { HamburgerIcon } from "./hamburger-icon";

export function HamburgerGutter() {
  return (
    <div className="fixed top-1/2 left-4 md:left-8 -translate-y-1/2 z-30 hidden md:block">
      <HamburgerIcon />
    </div>
  );
}
