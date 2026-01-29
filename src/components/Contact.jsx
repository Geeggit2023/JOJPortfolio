import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
