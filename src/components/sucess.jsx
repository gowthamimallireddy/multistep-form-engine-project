import { useEffect } from "react";

function Success({ reset }) {
  useEffect(() => {
    const timer = setTimeout(() => reset(), 5000);
    return () => clearTimeout(timer);
  }, [reset]);

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    <div className="h-[60vh] flex items-center justify-center bg-gray-100 dark:bg-gray-900">

      <div className="card text-center animate-fadeIn">
        <div className="text-green-600 text-5xl mb-4">✔</div>
        <h2 className="text-2xl font-bold mb-2">Submitted Successfully</h2>
        <p className="text-gray-600 mb-4">Your form has been submitted.</p>
        <p className="text-sm text-gray-400">Resetting form in 5 seconds...</p>
      </div>
  </div>
  );
}

export default Success;
