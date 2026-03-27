import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Step1 from "./components/step1";
import Step2 from "./components/step2";
import Review from "./components/review";
import Success from "./components/sucess";

const initialData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  age: "",
  gender: "",
  city: "",
  country: "",
  skills: "",
  profileImage: null,
  resumePdf: null,
};

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialData);
  const [darkMode, setDarkMode] = useState(false);
  const [hydrated, setHydrated] = useState(false); // 🔥 hydration flag

  // Load saved data from LocalStorage
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData((prev) => ({
        ...prev,
        ...JSON.parse(savedData),
      }));
    }
    setHydrated(true); // ✅ mark as hydrated after loading
  }, []);

  // Save form data to LocalStorage
  useEffect(() => {
    if (!hydrated) return; // ⛔ skip saving before hydration

    const { profileImage, resumePdf, ...safeData } = formData; // avoid storing files
    localStorage.setItem("formData", JSON.stringify(safeData));
  }, [formData, hydrated]);

  // Reset form
  const resetForm = () => {
    localStorage.removeItem("formData");
    setFormData(initialData);
    setStep(1);
  };

  return (
    <div className={`${darkMode ? "dark bg-gray-900" : "bg-gray-100"} min-h-screen flex flex-col items-center`}>
      {/* Navbar */}
      <Navbar
        step={step}
        goToStep={setStep}
        darkMode={darkMode}
        toggleDark={() => setDarkMode(!darkMode)}
      />

      {/* Progress Bar Above Card */}
      {step <= 3 && (
        <div className="w-96 h-2 rounded mt-24 mb-4 bg-transparent">
          <div
            className="bg-blue-600 h-2 rounded transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      )}

      {/* Card Container */}
      <div className="card fade-in flex flex-col items-center p-6">
        {step === 1 && (
          <Step1
            formData={formData}
            setFormData={setFormData}
            next={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <Step2
            formData={formData}
            setFormData={setFormData}
            back={() => setStep(1)}
            next={() => setStep(3)}
          />
        )}
        {step === 3 && (
          <Review
            formData={formData}
            back={() => setStep(2)}
            onSuccess={() => setStep(4)}
          />
        )}
        {step === 4 && <Success reset={resetForm} />}
      </div>
    </div>
  );
}

export default App;
