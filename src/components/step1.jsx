import { useState } from "react";

function Step1({ formData, setFormData, next }) {
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};

    
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";

    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      next();
    }
  };

  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-2">Step 1: Basic Information</h2>
      <p className="text-sm text-gray-500 mb-4">
        Enter your personal details
      </p>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <input
            type="text"
            className="input"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs">{errors.firstName}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            className="input"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div>
        <input
          type="email"
          className="input"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email}</p>
        )}
      </div>

      <div>
        <input
          type="tel"
          className="input"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
        />
        {errors.phone && (
          <p className="text-red-500 text-xs">{errors.phone}</p>
        )}
      </div>

      <button
        className="btn primary w-full mt-2"
        onClick={handleNext}
      >
        Next →
      </button>
    </div>
  );
}

export default Step1;
