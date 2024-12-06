import React, { useState } from "react";
import Navbar from "../components/Navbar";

const questions = [
  {
    question:
      "Please provide a brief description of the project. What product(s) are we capturing, and what are your expectations for the final deliverables?",
    type: "text",
    placeholder:
      "Example: 'We’re launching a new skincare line (cleanser, serum, and moisturizer) and need high-quality visuals for our social media and website.'",
  },
  {
    question:
      "What is the main goal of this project? What do you want the audience to feel or do after seeing the content?",
    type: "text",
    placeholder:
      "Example: 'We want to highlight the product's natural ingredients and eco-friendly packaging, and encourage our audience to engage and purchase.'",
  },
  {
    question:
      "Please describe the primary audience you want to reach with this campaign.",
    type: "text",
    placeholder:
      "Example: 'Women, ages 25-40, eco-conscious, willing to invest in sustainable products.'",
  },
  {
    question: "Please describe the tone you want for the photography and videography.",
    type: "dropdown",
    choices: [
      "Refreshing",
      "Elegant",
      "Natural",
      "Minimalistic",
      "Bold",
      "Luxurious",
      "Other",
    ],
  },
  {
    question: "Lighting Style",
    type: "dropdown",
    choices: [
      "Soft, natural light",
      "Bright, high-key lighting",
      "Dramatic, low-key lighting",
      "Studio lighting",
      "Other",
    ],
  },
  {
    question: "Photography",
    type: "text",
    placeholder:
      "Example: 15 product shots (white background), 10 lifestyle shots (real-world settings).",
  },
  {
    question:
      "Are there any brands or campaigns you would like to reference in terms of look, feel, or mood?",
    type: "text",
    placeholder: "Please provide links or upload images.",
  },
  {
    question: "Concept Approval Date",
    type: "dropdown",
    choices: ["ASAP", "1-2 weeks", "3-4 weeks", "Other"],
  },
  {
    question: "Shooting Dates",
    type: "dropdown",
    choices: ["Flexible", "Specific dates (please specify)"],
  },
  {
    question: "First Draft Review",
    type: "dropdown",
    choices: ["1 week after shooting", "2 weeks after shooting", "Other"],
  },
  {
    question: "Final Delivery",
    type: "dropdown",
    choices: [
      "2 weeks after first draft",
      "1 month after first draft",
      "Other",
    ],
  },
  {
    question: "What is your estimated budget for this project?",
    type: "dropdown",
    choices: [
      "Under $5,000",
      "$5,000 - $10,000",
      "$10,000 - $20,000",
      "$20,000+",
      "Other",
    ],
  },
  {
    question:
      "Who will be the main point of contact, and are there other key decision-makers we should be aware of?",
    type: "text",
    placeholder: "Example: Emily Johnson, Marketing Director",
  },
  {
    question: "Where will the content be used? Please select all that apply.",
    type: "checkbox",
    choices: [
      "Instagram (Feed & Stories)",
      "TikTok",
      "Website",
      "E-commerce/Online Store",
      "Digital Ads",
      "Other",
    ],
  },
];

function MainForm() {
  const [currentStep, setCurrentStep] = useState(0); // Track the current form step
  const [imageUrl, setImageUrl] = useState(null); // State to store the generated image URL
  const [formData, setFormData] = useState(
    questions.reduce(
      (acc, question) => ({
        ...acc,
        [question.question]: question.type === "checkbox" ? [] : "",
      }),
      { name: "", age: "", email: "" } // Include name, age, and email explicitly
    )
  );

  const totalSteps = questions.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...(prev[name] || []), value]
          : prev[name].filter((v) => v !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Organize responses in a "responses" object
    const responses = {};
    questions.forEach((question) => {
      responses[question.question] = formData[question.question];
    });

    // Prepare the final payload
    const payload = {
      name: formData.name,
      age: formData.age,
      email: formData.email,
      responses: responses,
    };

    console.log("Payload being sent to the API:", payload);

    try {
      const response = await fetch(
        "https://436f-35-194-44-69.ngrok-free.app/submit-survey", // Replace with your ngrok URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Server response:", data);

        // Update imageUrl state with the returned image URL
        setImageUrl(data.image_url);

        alert(`Form submitted successfully!`);
      } else {
        const errorDetails = await response.text();
        console.error("Error details from API:", errorDetails);
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-gradient-to-r from-blue-700 via-red-700 to-purple-100 animate-gradient">
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-center">Survey Form</h2>
          <div className="w-3/5 p-6 bg-white shadow-md rounded-lg">
            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Display the image if imageUrl is set */}
            {imageUrl && (
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Generated Image:</h3>
                <img
                  src={imageUrl}
                  alt="Generated from survey data"
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Form Step */}
              <div className="mb-6">
                <label className="block text-lg font-medium mb-4">
                  {questions[currentStep].question}
                </label>

                {questions[currentStep].type === "text" && (
                  <input
                    type="text"
                    name={questions[currentStep].question}
                    placeholder={questions[currentStep].placeholder}
                    value={formData[questions[currentStep].question]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                )}

                {questions[currentStep].type === "dropdown" && (
                  <select
                    name={questions[currentStep].question}
                    value={formData[questions[currentStep].question]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select an option</option>
                    {questions[currentStep].choices.map((choice, index) => (
                      <option key={index} value={choice}>
                        {choice}
                      </option>
                    ))}
                  </select>
                )}

                {questions[currentStep].type === "checkbox" && (
                  <div>
                    {questions[currentStep].choices.map((choice, index) => (
                      <label key={index} className="block mb-2">
                        <input
                          type="checkbox"
                          name={questions[currentStep].question}
                          value={choice}
                          checked={formData[questions[currentStep].question]?.includes(
                            choice
                          )}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        {choice}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                  >
                    Previous
                  </button>
                )}
                {currentStep < totalSteps - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainForm;