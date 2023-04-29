import React, { ChangeEvent, FormEvent } from "react";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import { useRouter } from "next/router";

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default function RegisterModalContent() {
  const [email, setEmail] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError("");
      router.push(`/register?email=${email}`);
    } else {
      setError("Invalid email address");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <form className="p-6" onSubmit={handleSubmit} noValidate>
      <Input
        label="Email address"
        type="email"
        placeholder="john.doe@company.com"
        onChange={handleChange}
        error={error}
        required
        name="email"
      />

      <Button className="w-full mt-4" type="submit">
        Submit
      </Button>
      <p className="text-sm mt-2 text-center leading-relaxed text-gray-500 dark:text-gray-400">
        By click on &quot;Continue&quot; you agree with the Term & Conditions
        and the Privacy Policy
      </p>
    </form>
  );
}
