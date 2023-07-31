"use client";

import React, { useState } from "react";
import CustomButton from "./ui/CustomButton";
import ModalNewCar from "./ModalNewCar/ModalNewCar";

const ContainerAddCar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-end">
      <CustomButton
        btnType="button"
        title="Add new car"
        containerStyles="bg-primary-blue rounded-full text-white"
        handleClick={() => setIsOpen(true)}
      ></CustomButton>
      </div>
      <ModalNewCar isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  );
};

export default ContainerAddCar;
