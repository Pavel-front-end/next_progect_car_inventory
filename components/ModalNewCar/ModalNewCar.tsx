"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";
import CustomButton from "@components/ui/CustomButton";
import CustomInput from "@components/ui/CustumInput";

interface ModalNewCarProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalNewCar = ({ isOpen, closeModal }: ModalNewCarProps) => {
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const [modelValue, setModelValue] = useState('');
    const [makeValue, setMakeValue] = useState('');
    const [fuelValue, setFuelValue] = useState('');
    const [yearValue, setYearValue] = useState('');
    const handleModelChange = (value: string) => {
        setModelValue(value);
    }
    const handleMakeChange = (value: string) => {
        setMakeValue(value);
    }
    const handleFuelChange = (value: string) => {
        setFuelValue(value);
    }
    const handleYearChange = (value: string) => {
        setYearValue(value);
    }

    const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setLoader(true)
        setError(false)
        fetch('/server-endpoint', {
            method: 'POST',
            body: JSON.stringify({ model: modelValue, make: makeValue, fuel: fuelValue, year: yearValue }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Handle the server response if necessary
            setLoader(false)
        })
        .catch(error => {
            // Handle any errors during the API call
            setLoader(false)
            setError(true)
        });
    };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3"></div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      Add new car
                    </h2>

                    <div className="mt-3">
                      <CustomInput
                        id="model"
                        label="Model"
                        type="text"
                        placeholder="corolla"
                        wrapperClassName="mt-4"
                        onValueChange={handleModelChange}
                        required={true}
                      />
                      <CustomInput
                        id="make"
                        label="Make"
                        type="text"
                        placeholder="toyota"
                        wrapperClassName="mt-4"
                        onValueChange={handleMakeChange}
                        required={true}
                      />
                      <CustomInput
                        id="fuel"
                        label="Fuel Type"
                        type="text"
                        placeholder="gas"
                        wrapperClassName="mt-4"
                        onValueChange={handleFuelChange}
                        required={true}
                      />
                      <CustomInput
                        id="year"
                        label="Year"
                        type="text"
                        placeholder="2020"
                        wrapperClassName="mt-4"
                        onValueChange={handleYearChange}
                        required={true}
                      />
                    </div>
                  </div>
                  <CustomButton
                    btnType="button"
                    title="Confirm"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleSubmit}
                    isDisabled={loader}
                  ></CustomButton>
                  {error && <div><p className="text-red-600">server Error</p></div>}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalNewCar;
