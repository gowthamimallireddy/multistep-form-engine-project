// import { useState } from "react";

// function Step2({ formData, setFormData, next, back }) {
//   const [error, setError] = useState("");

//   const handleNext = () => {
//     if (!formData.age || !formData.gender || !formData.city) {
//       setError("Please fill all required fields");
//       return;
//     }
//     setError("");
//     next();
//   };

//   return (
//     <div className="card">
//       <h2 className="text-xl font-bold mb-1">Professional Details</h2>
//       <p className="text-sm text-gray-500 mb-4">Help us know you better</p>
//       {error && <p className="text-red-500 mb-3">{error}</p>}

//       <div className="grid grid-cols-2 gap-3">
//         <input className="input" placeholder="Age" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
//         <select className="input" value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
//           <option value="">Select Gender</option>
//           <option>Male</option>
//           <option>Female</option>
//           <option>Other</option>
//         </select>
//       </div>

//       <div className="grid grid-cols-2 gap-3">
//         <input className="input" placeholder="City" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
//         <input className="input" placeholder="Country" value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} />
//       </div>

//       <textarea className="input" placeholder="Skills (React, JS, CSS...)" value={formData.skills} onChange={(e) => setFormData({ ...formData, skills: e.target.value })} />

//       <div className="flex justify-between mt-2">
//         <button className="btn secondary" onClick={back}>← Back</button>
//         <button className="btn primary" onClick={handleNext}>Review →</button>
//       </div>
//     </div>
//   );
// }

// export default Step2;




import { useState } from "react";

function Step2({ formData, setFormData, next, back }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.age) newErrors.age = "Age is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.skills) newErrors.skills = "Skills are required";
    if (!formData.profileImage) newErrors.profileImage = "Profile image is required";
    if (!formData.resumePdf) newErrors.resumePdf = "Resume PDF is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) next();
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">Step 2: Additional Details</h2>

      <input
        className="input"
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={(e) =>
          setFormData({ ...formData, age: e.target.value })
        }
      />
      {errors.age && <p className="text-red-500 text-sm mb-2">{errors.age}</p>}

      <input
        className="input"
        placeholder="City"
        value={formData.city}
        onChange={(e) =>
          setFormData({ ...formData, city: e.target.value })
        }
      />
      {errors.city && <p className="text-red-500 text-sm mb-2">{errors.city}</p>}

      <input
        className="input"
        placeholder="Country"
        value={formData.country}
        onChange={(e) =>
          setFormData({ ...formData, country: e.target.value })
        }
      />
      {errors.country && <p className="text-red-500 text-sm mb-2">{errors.country}</p>}

      <input
        className="input"
        placeholder="Skills (comma separated)"
        value={formData.skills}
        onChange={(e) =>
          setFormData({ ...formData, skills: e.target.value })
        }
      />
      {errors.skills && <p className="text-red-500 text-sm mb-2">{errors.skills}</p>}

      {/* Image Upload */}
      <label className="block text-sm font-medium mt-2">
        Upload Profile Image
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setFormData({ ...formData, profileImage: e.target.files[0] })
        }
      />
      {errors.profileImage && (
        <p className="text-red-500 text-sm mb-2">{errors.profileImage}</p>
      )}

      {/* PDF Upload */}
      <label className="block text-sm font-medium mt-3">
        Upload Resume (PDF)
      </label>
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) =>
          setFormData({ ...formData, resumePdf: e.target.files[0] })
        }
      />
      {errors.resumePdf && (
        <p className="text-red-500 text-sm mb-2">{errors.resumePdf}</p>
      )}

      <div className="flex justify-between mt-6">
        <button className="btn secondary" onClick={back}>
          Back
        </button>
        <button className="btn primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Step2;
