"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function forgotPasswordPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // const response = await fetch("/api/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // });

      // if (response.ok) {
      //   router.push("/dashboard");
      // } else {
      //   const errorData = await response.json();
      //   setError("root", {
      //     type: "manual",
      //     message: errorData.message || "Login failed",
      //   });
      // }
      console.log("login");
    } catch (err) {
      setError("root", {
        type: "manual",
        message: "An error occurred during login",
      });
    }
  };
  return (
    <div className="bg-orange-50">
      <div className="container-center">
        <div className="flex justify-center items-center min-h-[90.5vh]">
          <div className="flex justify-center max-w-[750px] ">
            <div className="w-1/3 ">
              <img
                className="w-full h-full"
                src="https://img.freepik.com/premium-photo/create-minimalistic-banner-shopping-sale_1096167-109387.jpg?ga=GA1.1.250074556.1742207635&semt=ais_hybrid&w=740"
                alt=""
              />
            </div>
            <div className="w-1/2 space-y-4 border border-gray-200 border-l-0 px-6 py-6 bg-white">
              <div>
                <h2 className="mt-3 text-center text-2xl font-extrabold text-orange-600">
                  Forgot Password
                </h2>
              </div>
              {errors.root && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  {errors.root.message}
                </div>
              )}
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input  
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Email address"
                      className="border w-full p-2 border-gray-300 rounded-xl"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-xl font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send Verification code"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
