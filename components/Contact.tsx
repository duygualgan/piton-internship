import React from "react";

function Contact() {
  return (
    <>
      <div className=" mt-24 w-full bg-white py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <img
              src="/side-image.png"
              alt="Two People"
              className="w-[600px] h-[800px] object-cover"
            />
          </div>

          <div className="flex flex-col justify-between w-[622px] h-[891px]">
            <h2 className="text-4xl font-bold w-[368px] ml-auto text-right">
              We'd love to hear from you
            </h2>

            <form className="flex flex-col justify-center space-y-6 w-full h-full">
              <input
                type="text"
                placeholder="Name"
                className="p-6 border border-gray-700 rounded text-left"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-6 border border-gray-700 rounded text-left"
              />
              <input
                type="text"
                placeholder="Website URL"
                className="p-6 border border-gray-700 rounded text-left"
              />
              <textarea
                placeholder="Project Details"
                className="p-6 border border-gray-700 rounded text-left"
                rows={5}
              ></textarea>
              <button
                type="submit"
                className="p-6 bg-black text-white rounded hover:bg-gray-800 transition text-center"
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
