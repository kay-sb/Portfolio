import React, { useState, useEffect } from "react"; // Importing React and hooks
import { useTheme } from "./ThemeContext"; // Importing ThemeContext for managing dark/light mode

// Main Form component
const Form: React.FC = () => {
  const { darkMode } = useTheme(); // Access dark mode state from ThemeContext

  return (
    <div className="mt-20 text-center md:text-left">
      <div className="flex flex-col items-center md:items-start ">
        {/* Heading for the form */}
        <h1
          className={`font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-2 ${
            darkMode ? "text-text-title-light" : "text-text-title-dark"
          }`}
        >
          LET'S WORK
        </h1>
        <h1
          className={`font-bold text-[40px] md:text-[60px] xl:text-[80px] leading-none tracking-wide mb-4 ${
            darkMode ? "text-text-title2-light" : "text-text-title2-dark"
          }`}
        >
          TOGETHER
        </h1>
        {/* Rendering the FormHome component */}
        <FormHome />
      </div>
    </div>
  );
};

// FormHome component where the actual form is defined
const FormHome: React.FC = () => {
  const { darkMode } = useTheme(); // Access dark mode state
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [submitMessage, setSubmitMessage] = useState(""); // State for the submit message
  const [displayMessage, setDisplayMessage] = useState(""); // State for displaying messages

  // Handle input changes in the form
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    // Update formData state
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Set the specific field in formData
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(formData); // Log form data for further processing (e.g., API call)

    // Clear the previous display message
    setDisplayMessage("");
    // Set the submit message
    setSubmitMessage("Thank you for your submission!");
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      budget: "",
      message: "",
    });
  };

  // Effect for animating the submit message display
  useEffect(() => {
    if (submitMessage) {
      let i = 0; // Initialize index for the message
      const interval = setInterval(() => {
        if (i < submitMessage.length) {
          // Check if there are more characters to display
          setDisplayMessage((prev) => prev + submitMessage[i]); // Add the next character to displayMessage
          i++;
        } else {
          clearInterval(interval); // Clear the interval when done
        }
      }, 100); // Display each character every 100 milliseconds

      return () => clearInterval(interval); // Cleanup on component unmount
    } else {
      setDisplayMessage(""); // Clear the message if submitMessage is empty
    }
  }, [submitMessage]); // Effect runs when submitMessage changes

  return (
    <div
      className={`text-center  md:text-left rounded-lg  max-w-md mx-auto md:mx-0 ${
        darkMode ? "text-light-mode" : "text-dark-mode"
      }`}
    >
      <form onSubmit={handleSubmit} className="gap-4">
        {/* Name input field */}
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="flex-1">
            <label className="block font-semibold mb-1" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`border border-dark-mode rounded-xl p-2 w-full ${
                darkMode
                  ? "bg-light-mode text-dark-mode"
                  : "bg-dark-mode text-light-mode"
              }`}
              required // Required field
            />
          </div>

          {/* Email input field */}
          <div className="flex-1">
            <label className="block font-semibold mb-1" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="youremail@example.com"
              value={formData.email}
              onChange={handleChange}
              className={`border border-dark-mode rounded-xl p-2 w-full ${
                darkMode
                  ? "bg-light-mode text-dark-mode"
                  : "bg-dark-mode text-light-mode"
              }`}
              required // Required field
            />
          </div>
        </div>

        {/* Budget selection */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="budget">
            Budget:
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={`border border-dark-mode rounded-xl p-2 w-full ${
              darkMode
                ? "bg-light-mode text-dark-mode"
                : "bg-dark-mode text-light-mode"
            }`}
            required // Required field
            style={{ appearance: "none" }} // Custom appearance
          >
            <option
              className={`${
                darkMode
                  ? "bg-light-mode text-dark-mode"
                  : "bg-dark-mode text-light-mode"
              }`}
              value=""
              disabled
            >
              Select your budget
            </option>
            <option
              className={`${
                darkMode
                  ? "bg-light-mode text-dark-mode"
                  : "bg-dark-mode text-light-mode"
              }`}
              value="under_1000"
            >
              Under $1000
            </option>
            <option
              className={`${
                darkMode
                  ? "bg-light-mode text-dark-mode"
                  : "bg-dark-mode text-light-mode"
              }`}
              value="1000_to_10000"
            >
              $1000 - $10,000
            </option>
            <option
              className={`${
                darkMode
                  ? "bg-light-mode text-dark-mode"
                  : "bg-dark-mode text-light-mode"
              }`}
              value="over_10000"
            >
              Over $10,000
            </option>
          </select>
        </div>

        {/* Message input field */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            className={`border border-dark-mode rounded-xl p-2 w-full ${
              darkMode
                ? "bg-light-mode text-dark-mode"
                : "bg-dark-mode text-light-mode"
            }`}
            rows={4} // Number of rows for the textarea
            required // Required field
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-active-dark text-white font-semibold py-2 px-4 rounded-md rounded-xl hover:bg-active-dark transition duration-200"
        >
          Submit
        </button>
      </form>

      {/* Displaying the submit message after form submission */}
      {displayMessage && (
        <div
          className={`mt-4 p-2 rounded-xl ${
            darkMode
              ? "bg-active-light text-light-mode"
              : "bg-active-light text-dark-mode"
          }`}
        >
          {displayMessage} {/* Render the animated display message */}
        </div>
      )}
    </div>
  );
};

export default Form; // Exporting the Form component
