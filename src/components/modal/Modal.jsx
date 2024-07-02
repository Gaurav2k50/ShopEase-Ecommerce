import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Modal({
  name,
  address,
  pincode,
  phoneNumber,
  setName,
  setAddress,
  setPincode,
  setPhoneNumber,
  buyNow,
}) {
  // State to manage the modal open/close state
  let [isOpen, setIsOpen] = useState(false);

  // Function to close the modal
  function closeModal() {
    setIsOpen(false);
  }

  // Function to open the modal
  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {/* Button to open the modal */}
      <div className="text-center rounded-lg text-white font-bold">
        <button
          type="button"
          onClick={openModal}
          className="w-full bg-indigo-950 py-2 text-center rounded-lg text-white font-bold"
        >
          Buy Now
        </button>
      </div>

      {/* Modal transition */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          {/* Modal content */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="fixed inset-0 flex items-center justify-center">
              <div className="bg-white rounded-lg max-w-md w-full p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">Order Details</h2>
                {/* Form inside the modal */}
                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {/* Name input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Enter Full Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="name"
                      id="name"
                      className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                      required
                    />
                  </div>
                  {/* Address input */}
                  <div>
                    <label
                      htmlFor="address"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Enter Full Address
                    </label>
                    <input
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      type="text"
                      name="address"
                      id="address"
                      className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                      required
                    />
                  </div>
                  {/* Pincode input */}
                  <div>
                    <label
                      htmlFor="pincode"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Enter Pincode
                    </label>
                    <input
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      type="text"
                      name="pincode"
                      id="pincode"
                      className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                      required
                    />
                  </div>
                  {/* Mobile number input */}
                  <div>
                    <label
                      htmlFor="mobileNumber"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Enter Mobile Number
                    </label>
                    <input
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      type="text"
                      name="mobileNumber"
                      id="mobileNumber"
                      className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                      required
                    />
                  </div>
                  {/* Submit button */}
                  <button
                    onClick={() => {
                      buyNow();
                      closeModal();
                    }}
                    type="button"
                    className="w-full py-2.5 px-5 text-white bg-indigo-950 hover:bg-violet-800 focus:outline-none rounded-lg text-sm font-medium"
                  >
                    Order Now
                  </button>
                </form>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
