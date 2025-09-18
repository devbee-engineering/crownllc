export function LegalBar() {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-between w-full text-sm text-black/60 gap-4">
        <p>&copy; {new Date().getFullYear()} DCC. All rights reserved</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-black hover:underline">
            Terms & Conditions
          </a>
          <span className="opacity-50">|</span>
          <a href="#" className="hover:text-black hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    );
  }
  