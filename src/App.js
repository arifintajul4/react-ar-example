import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import {
  faFacebook,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React, { Fragment, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:container px-4 md:px-auto">
        <h1 className="font-bold text-xl md:text-4xl my-4">Our Product</h1>
        <hr />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 mt-4">
          <div className="relative">
            <div className="w-full max-w-sm bg-white space-y-3 hover:shadow-xl hover:border hover:p-4 p-2 pb-4 group hover:absolute hover:-left-[0%] hover:z-10 hover:-top-[1%]">
              <img alt="Sample Car" src="static/images/sample-car.jpg" />
              <h1 className="md:text-2xl text-lg font-bold">BMW 1 Series</h1>
              <p className="md:text-base text-sm">
                Take control with modern dynamics.
              </p>
              <div className="group-hover:flex gap-2 hidden">
                <a
                  href="https://plonk.revezdigital.com/production/instant/?id=44d50aa3-e1df-ec11-ab22-06dd318c68b0"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 md:text-base text-xs text-white uppercase px-3 py-2"
                >
                  Discover Now
                </a>
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-gray-500 md:text-base text-xs text-white uppercase px-3 py-2"
                >
                  Scan Now
                </button>
              </div>
              <div className="group-hover:flex gap-2 hidden">
                <h1 className="font-semibold">Share Now</h1>
                <a href="">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full max-w-sm bg-white space-y-3 hover:shadow-xl hover:border hover:p-4 p-2 pb-4 group hover:absolute hover:-left-[0%] hover:z-10 hover:-top-[1%]">
              <img alt="Sample Car" src="static/images/sample-car.jpg" />
              <h1 className="md:text-2xl text-lg font-bold">BMW 1 Series</h1>
              <p className="md:text-base text-sm">
                Take control with modern dynamics.
              </p>
              <div className="group-hover:flex gap-2 hidden">
                <a
                  href="https://plonk.revezdigital.com/production/instant/?id=44d50aa3-e1df-ec11-ab22-06dd318c68b0"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 md:text-base text-xs text-white uppercase px-3 py-2"
                >
                  Discover Now
                </a>
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-gray-500 md:text-base text-xs text-white uppercase px-3 py-2"
                >
                  Scan Now
                </button>
              </div>
              <div className="group-hover:flex gap-2 hidden">
                <h1 className="font-semibold">Share Now</h1>
                <a href="">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full max-w-sm bg-white space-y-3 hover:shadow-xl hover:border hover:p-4 p-2 pb-4 group hover:absolute hover:-left-[0%] hover:z-10 hover:-top-[1%]">
              <img alt="Sample Car" src="static/images/sample-car.jpg" />
              <h1 className="md:text-2xl text-lg font-bold">BMW 1 Series</h1>
              <p className="md:text-base text-sm">
                Take control with modern dynamics.
              </p>
              <div className="group-hover:flex gap-2 hidden">
                <a
                  href="https://plonk.revezdigital.com/production/instant/?id=44d50aa3-e1df-ec11-ab22-06dd318c68b0"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 md:text-base text-xs text-white uppercase px-3 py-2"
                >
                  Discover Now
                </a>
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-gray-500 md:text-base text-xs text-white uppercase px-3 py-2"
                >
                  Scan Now
                </button>
              </div>
              <div className="group-hover:flex gap-2 hidden">
                <h1 className="font-semibold">Share Now</h1>
                <a href="">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full max-w-sm bg-white space-y-3 hover:shadow-xl hover:border hover:p-4 p-2 pb-4 group hover:absolute hover:-left-[0%] hover:z-10 hover:-top-[1%]">
              <img alt="Sample Car" src="static/images/sample-car.jpg" />
              <h1 className="md:text-2xl text-lg font-bold">BMW 1 Series</h1>
              <p className="md:text-base text-sm">
                Take control with modern dynamics.
              </p>
              <div className="group-hover:flex gap-2 hidden">
                <a
                  href="https://plonk.revezdigital.com/production/instant/?id=44d50aa3-e1df-ec11-ab22-06dd318c68b0"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 md:text-base text-xs text-white uppercase px-3 py-2"
                >
                  Discover Now
                </a>
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-gray-500 md:text-base text-xs text-white uppercase px-3 py-2"
                >
                  Scan Now
                </button>
              </div>
              <div className="group-hover:flex gap-2 hidden">
                <h1 className="font-semibold">Share Now</h1>
                <a href="">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full max-w-sm bg-white space-y-3 hover:shadow-xl hover:border hover:p-4 p-2 pb-4 group hover:absolute hover:-left-[0%] hover:z-10 hover:-top-[1%]">
              <img alt="Sample Car" src="static/images/sample-car.jpg" />
              <h1 className="md:text-2xl text-lg font-bold">BMW 1 Series</h1>
              <p className="md:text-base text-sm">
                Take control with modern dynamics.
              </p>
              <div className="group-hover:flex gap-2 hidden">
                <a
                  href="https://plonk.revezdigital.com/production/instant/?id=44d50aa3-e1df-ec11-ab22-06dd318c68b0"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 md:text-base text-xs text-white uppercase px-3 py-2"
                >
                  Discover Now
                </a>
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-gray-500 md:text-base text-xs text-white uppercase px-3 py-2"
                >
                  Scan Now
                </button>
              </div>
              <div className="group-hover:flex gap-2 hidden">
                <h1 className="font-semibold">Share Now</h1>
                <a href="">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full transition-all duration-500 max-w-sm bg-white space-y-3 hover:shadow-xl hover:border hover:p-4 p-2 pb-4 group hover:absolute hover:-left-[0%] hover:z-10 hover:-top-[1%]">
              <img alt="Sample Car" src="static/images/sample-car.jpg" />
              <h1 className="md:text-2xl text-lg font-bold">BMW 1 Series</h1>
              <p className="md:text-base text-sm">
                Take control with modern dynamics.
              </p>
              <div className="group-hover:flex gap-2 hidden">
                <a
                  href="https://plonk.revezdigital.com/production/instant/?id=44d50aa3-e1df-ec11-ab22-06dd318c68b0"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 md:text-base text-xs text-white uppercase px-3 py-2"
                >
                  Discover Now
                </a>
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-gray-500 md:text-base text-xs text-white uppercase px-3 py-2"
                >
                  Scan Now
                </button>
              </div>
              <div className="group-hover:flex gap-2 hidden">
                <h1 className="font-semibold">Share Now</h1>
                <a href="">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setIsOpen(false)}
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

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-4 text-center shadow-xl transition-all">
                    <img
                      alt="qr-code"
                      src="static/images/qr-code.png"
                      className="m-auto"
                    />
                    <div className="flex justify-center">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => setIsOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
      <div className="w-full bg-black p-2 text-center text-white fixed bottom-0 left-0 right-0">
        Copyright © 2022 . All rights reserved.
      </div>
    </>
  );
}

export default App;
