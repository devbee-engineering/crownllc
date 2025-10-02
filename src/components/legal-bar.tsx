import Link from "next/link";

export function LegalBar() {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-between w-full text-sm gap-4">
        <p className="font-bold text-black">&copy; {new Date().getFullYear()} Crown Pillars. All rights reserved</p>
        <div className="flex items-center gap-6">
          <Link href="/terms-and-conditions" className="font-semibold text-black hover:text-blue-600 hover:underline transition-colors">
            Terms & Conditions
          </Link>
          <span className="text-black/40 font-bold">|</span>
          <Link href="/privacy-policy" className="font-semibold text-black hover:text-blue-600 hover:underline transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    );
  }
