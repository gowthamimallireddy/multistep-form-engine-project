import { useState } from "react";

function Review({ formData, back, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateForm = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.age ||
      !formData.city ||
      !formData.country ||
      !formData.skills ||
      !formData.profileImage ||
      !formData.resumePdf
    ) {
      setError("⚠️ Please complete all required fields before submitting.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    setLoading(true);

    
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1500);
  };

  return (
    <div className="w-full text-center">
      <h2 className="text-xl font-semibold mb-4">Review & Submit</h2>

      <div className="text-left text-sm space-y-1 mb-4">
        <p><b>Name:</b> {formData.firstName} {formData.lastName}</p>
        <p><b>Email:</b> {formData.email}</p>
        <p><b>Phone:</b> {formData.phone}</p>
        <p><b>Age:</b> {formData.age}</p>
        <p><b>City:</b> {formData.city}</p>
        <p><b>Country:</b> {formData.country}</p>
        <p><b>Skills:</b> {formData.skills}</p>
        <p><b>Profile Image:</b> {formData.profileImage?.name || "Missing"}</p>
        <p><b>Resume PDF:</b> {formData.resumePdf?.name || "Missing"}</p>
      </div>

      {error && (
        <p className="text-red-500 text-sm mb-4">{error}</p>
      )}

      <div className="flex justify-between">
        <button
          className="btn secondary"
          onClick={back}
          disabled={loading}
        >
          Back
        </button>

        <button
          className="btn primary relative flex justify-center items-center"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading && (
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
          )}
          <span className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity`}>
            Submit
          </span>
        </button>
      </div>
    </div>
  );
}

export default Review;
