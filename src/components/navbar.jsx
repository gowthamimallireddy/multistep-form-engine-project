import { useState } from "react";

function Navbar({ step, goToStep, darkMode, toggleDark }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 shadow-lg transition-all ${
        darkMode ? "bg-blue-900/90" : "bg-blue-700/90"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-3 max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white">MultiStep Form</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 items-center">
          {["Form", "Details", "Review"].map((label, index) => {
            const stepNum = index + 1;
            return (
              <button
                key={label}
                onClick={() => goToStep(stepNum)}
                className={`px-3 py-1 rounded font-semibold transition
                  ${step === stepNum
                    ? "bg-white/30 text-white backdrop-blur-sm"
                    : "text-white hover:bg-blue-600/50 backdrop-blur-sm"}`}
              >
                {label}
              </button>
            );
          })}

          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            className="px-3 py-1 rounded font-semibold bg-white text-blue-700 hover:bg-gray-200 transition"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="text-white md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`md:hidden mt-4 flex flex-col gap-3 px-6 pb-4 rounded-b-lg ${
            darkMode ? "bg-blue-900/90" : "bg-blue-700/90"
          }`}
        >
          {["Form", "Details", "Review"].map((label, index) => {
            const stepNum = index + 1;
            return (
              <button
                key={label}
                onClick={() => {
                  goToStep(stepNum);
                  setOpen(false);
                }}
                className={`px-3 py-2 rounded font-semibold transition
                  ${step === stepNum
                    ? "bg-white/30 text-white backdrop-blur-sm"
                    : "text-white hover:bg-blue-600/50 backdrop-blur-sm"}`}
              >
                {label}
              </button>
            );
          })}

          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            className="px-3 py-2 rounded font-semibold bg-white text-blue-700 hover:bg-gray-200 transition"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
