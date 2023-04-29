import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import axios from "axios";
import { useRouter } from "next/router";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import AccessList from "@/components/atoms/AccessList";
import CCRequirement from "@/components/atoms/CCRequirement";

function capitalizeText(text: string): string {
  return text.charAt(0).toUpperCase() + text.substring(1);
}

function validateExpiryDate(expiryDate: string): string {
  const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (!regex.test(expiryDate)) {
    return "Invalid expiration date (MM/YY)";
  }

  const parts = expiryDate.split("/");
  const month = parseInt(parts[0]);
  const year = parseInt("20" + parts[1]);

  const expiryDateObj = new Date(year, month, 0);
  const today = new Date();

  if (expiryDateObj < today) {
    return "Card has been expired";
  }

  return "";
}

function validateCvc(cvc: string): string {
  if (!/^\d+$/.test(cvc)) {
    return "The CVC code consists of digits only.";
  }

  if (cvc.length !== 3 && cvc.length !== 4) {
    return "The CVC code must be 3 or 4 digits.";
  }

  return "";
}

function validateCardNumber(cardNumber: string) {
  const cleanedCardNumber = cardNumber.replace(/[\s-]/g, "");

  if (!/^\d{13,19}$/.test(cleanedCardNumber)) {
    return "Invalid card number";
  }

  let sum = 0;
  for (let i = cleanedCardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanedCardNumber.charAt(i));
    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }

  if (sum % 10 !== 0) {
    return "Invalid card number";
  }

  return "";
}

export default function RegisterForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    card: "",
    name: "",
    expiryDate: "",
    cvc: "",
  });

  const [errForm, setErrForm] = useState({
    cardErr: "Card is not empty!",
    nameErr: "Name is not empty!",
    expiryDateErr: "Expiry date is not empty!",
    cvcErr: "CVC is not empty!",
  });

  const { email } = router.query;

  const validForm = Object.values(errForm).every((t) => t === "");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validForm) {
      try {
        const res = await axios.post("/api/hello", {
          ...form,
          email,
        });
        if (res.data.status) {
          toast("Registration successful!");
        }
      } catch (error) {
        console.log(error);
        toast("Something wrong!");
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    let value = e.target.value;
    let errorMess = "";
    if (name === "card") {
      value = value.replace(/\D/g, "").replace(/(\d{4})/g, "$1-");

      if (value.endsWith("-")) {
        value = value.slice(0, -1);
      }

      errorMess = validateCardNumber(value);
    }

    if (name === "cvc") {
      value = value.replace(/\D/g, "");
      errorMess = validateCvc(value);
    }

    if (name === "expiryDate") {
      value = value
        .replace(/\D/g, "")
        .slice(0, 4)
        .replace(/(\d{2})/, "$1/");

      errorMess = validateExpiryDate(value);
    }

    setErrForm((state) => ({ ...state, [`${name}Err`]: errorMess }));
    setForm((state) => ({ ...state, [name]: value }));
  };

  return (
    <form
      className="flex md:flex-row flex-col gap-6 md:p-4 "
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="shadow-2xl rounded-lg w-full mb-4 md:w-1/2 ">
        <div className="p-4 bg-indigo-600 rounded-tl-lg rounded-tr-lg text-white  flex justify-center items-center gap-4">
          <ShieldCheckIcon className="w-6 " /> Secure & TLS Encrypted
          Verification
        </div>
        <div className="p-6">
          <Input
            label="Email address"
            value={email}
            type="email"
            required
            disabled
          />

          <Input
            label="Full name"
            type="text"
            placeholder="John Doe"
            onChange={handleChange}
            required
            name="name"
            value={form.name}
            error={errForm.nameErr}
          />

          <Input
            label="Card Number"
            type="text"
            placeholder="1234 1234 1234 1234"
            onChange={handleChange}
            maxLength={19}
            required
            name="card"
            value={form.card}
            error={errForm.cardErr}
          />

          <div className="flex flex-col md:flex-row gap-0 md:gap-4">
            <Input
              label="Expiry Date"
              type="text"
              placeholder="MM/YY"
              onChange={handleChange}
              required
              name="expiryDate"
              value={form.expiryDate}
              error={errForm.expiryDateErr}
              className="w-full md:w-1/2"
            />

            <Input
              label="CVC"
              type="text"
              placeholder="123"
              onChange={handleChange}
              maxLength={3}
              required
              name="cvc"
              value={form.cvc}
              error={errForm.cvcErr}
              className="w-full md:w-1/2"
            />
          </div>

          <Button className="w-full mt-4" type="submit" disabled={!validForm}>
            Get Access
          </Button>
          <p className="text-sm mt-2 text-center leading-relaxed text-gray-500 dark:text-gray-400">
            By click on &quot;Get Access&quot; you agree with the Term &
            Conditions and the Privacy Policy
          </p>
        </div>{" "}
      </div>

      <div className="w-full mb-4 md:w-1/2 shadow-2xl p-6 rounded-lg bg-gray-100">
        <h3 className="font-bold mb-3">
          Your member ship will give you access to:
        </h3>
        <div className="px-4 mb-16">
          <AccessList />
        </div>
        <div className="px-4">
          <CCRequirement />
        </div>
      </div>
    </form>
  );
}
