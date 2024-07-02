import React, { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FiSun } from "react-icons/fi";
import { BsFillCloudSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import myContext from "../../context/data/myContext";

const Navbar = () => {
  // Context setup
  const context = useContext(myContext);
  const { mode, toggleMode } = context;

  // State for mobile menu
  const [open, setOpen] = useState(false);

  // Retrieve user data from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // Logout function
  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/login";
  };

  // Redux selector for cart items
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="bg-white sticky top-0 z-50">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          {/* Transparent background when menu is open */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          {/* Menu panel */}
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                {/* Close button */}
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>

                {/* Menu links */}
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-900"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>

                  {user ? (
                    <Link
                      to={"/order"}
                      className="text-sm font-medium text-gray-900"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Order
                    </Link>
                  ) : null}

                  {user?.user?.email === "gaurav2k50@gmail.com" ? (
                    <Link
                      to={"/dashboard"}
                      className="text-sm font-medium text-gray-900"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Admin
                    </Link>
                  ) : null}

                  {user ? (
                    <a
                      onClick={logout}
                      className="text-sm font-medium text-gray-900 cursor-pointer"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Logout
                    </a>
                  ) : null}

                  {/* Profile image */}
                  <div className="flow-root">
                    <Link to={"/"} className="-m-2 block p-2">
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://cdn-icons-png.flaticon.com/128/14663/14663189.png"
                        alt="User Profile"
                      />
                    </Link>
                  </div>
                </div>

                {/* Country selection */}
                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-base font-medium text-gray-900"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      INDIA
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop navigation */}
      <header className="relative bg-white">
        {/* Top bar */}
        <p
          className="flex h-10 items-center justify-center bg-indigo-950 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
          style={{
            backgroundColor: mode === "dark" ? "rgb(62 64 66)" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          Get free delivery on orders over ₹500
        </p>

        {/* Main navigation */}
        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl"
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="flex h-16 items-center">
            {/* Menu toggle button */}
            <button
              type="button"
              className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
              onClick={() => setOpen(true)}
              style={{
                backgroundColor: mode === "dark" ? "rgb(80 82 87)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <Link to={"/"} className="flex">
                <h1
                  className="text-2xl font-bold text-black px-2 py-1 rounded"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ShopEase
                </h1>
              </Link>
            </div>

            {/* Desktop menu items */}
            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <Link
                  to={"/allproducts"}
                  className="text-sm font-medium text-gray-700"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  All Products
                </Link>

                {user ? (
                  <Link
                    to={"/order"}
                    className="text-sm font-medium text-gray-700"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Order
                  </Link>
                ) : null}

                {user?.user?.email === "gaurav2k50@gmail.com" ? (
                  <Link
                    to={"/dashboard"}
                    className="text-sm font-medium text-gray-700"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Admin
                  </Link>
                ) : null}

                {user ? (
                  <a
                    onClick={logout}
                    className="text-sm font-medium text-gray-700 cursor-pointer"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Logout
                  </a>
                ) : null}
              </div>

              {/* Country flag */}
              <div className="hidden lg:ml-8 lg:flex">
                <a href="#" className="flex items-center text-gray-700">
                  <img
                    src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                    alt=""
                    className="block h-auto w-5 flex-shrink-0"
                  />
                  <span
                    className="ml-3 block text-sm font-medium"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    INDIA
                  </span>
                </a>
              </div>

              {/* User profile image */}
              <div className="hidden lg:ml-8 lg:flex">
                <a href="#" className="flex items-center text-gray-700">
                  <img
                    className="inline-block w-10 h-10 rounded-full"
                    src="https://cdn-icons-png.flaticon.com/128/14663/14663189.png"
                    alt="User Profile"
                  />
                </a>
              </div>

              {/* Dark mode toggle */}
              <div className="flex lg:ml-6">
                <button onClick={toggleMode}>
                  {mode === "light" ? (
                    <FiSun className="" size={30} />
                  ) : mode === "dark" ? (
                    <BsFillCloudSunFill size={30} />
                  ) : (
                    ""
                  )}
                </button>
              </div>

              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <Link
                  to={"/cart"}
                  className="group -m-2 flex items-center p-2"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>

                  <span
                    className="ml-2 text-sm font-medium text-gray-700 group-"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    {cartItems.length}
                  </span>
                  <span className="sr-only">items in cart, view bag</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
