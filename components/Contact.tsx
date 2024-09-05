import React from "react";

function Contact() {
  return (
    <>
      <div className="mt-24 w-full bg-white py-16">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center">
            <img
              src="/side-image.png"
              alt="Two People"
              className="w-full h-auto max-w-[600px] lg:max-h-[800px] object-cover"
            />
          </div>

          <div className="flex flex-col justify-between w-full lg:w-[622px] h-auto lg:h-[891px]">
            <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold w-full lg:w-[368px] ml-auto text-right">
              We'd love to hear from you
            </h2>

            <form className="flex flex-col justify-center space-y-4 md:space-y-6 w-full h-full">
              <input
                type="text"
                placeholder="Name"
                className="p-4 lg:p-6 border border-gray-700 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-4 lg:p-6 border border-gray-700 rounded"
              />
              <input
                type="text"
                placeholder="Website URL"
                className="p-4 lg:p-6 border border-gray-700 rounded"
              />
              <textarea
                placeholder="Project Details"
                className="p-4 lg:p-6 border border-gray-700 rounded"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="p-4 lg:p-6 bg-black text-white rounded hover:bg-gray-800 transition text-center"
              >
                Send Proposal
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
