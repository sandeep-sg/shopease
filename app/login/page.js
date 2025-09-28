"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import useProfile from "../hook/useUser";

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();
  const { refetch: UserRefetch } = useProfile();
  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/user/login", data);
      console.log(res, "login response");
      if (res.status == 200) {
        router.push("/");
        UserRefetch();
      }
      console.log("login", data);
    } catch (error) {
      console.log(error);
      setError("root", {
        type: "manual",
        message: "An error occurred during signup",
      });
    }
  };
  return (
    <div className="bg-orange-50">
      <div className="container-center">
        <div className="flex justify-center items-center  min-h-[80.5vh] md:min-h-[90.5vh]">
          <div className="flex w-[750px] md:h-[400px] bg-white">
            <div className="w-1/2 hidden md:block">
              <Image
                className="w-full h-full"
                width={300}
                height={400}
                src="https://img.freepik.com/premium-photo/create-minimalistic-banner-shopping-sale_1096167-109387.jpg?ga=GA1.1.250074556.1742207635&semt=ais_hybrid&w=740"
                alt=""
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4 border border-gray-200 border-l-0 px-4 md:px-6  py-6">
              <div>
                <h2 className="md:mt-3 text-center text-2xl font-extrabold text-orange-600">
                  Login
                </h2>
                {errors.root && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                    {errors.root.message}
                  </div>
                )}
              </div>
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
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      autoComplete="current-password"
                      className="border w-full p-2 border-gray-300 rounded-xl"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                    />
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="text-sm">
                    <Link
                      href="/forgot-password"
                      className="font-medium text-orange-600"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-xl font-semibold"
                  >
                    {isSubmitting ? "Login..." : "Login"}
                  </button>
                </div>
              </form>
              <div className="text-center text-sm text-gray-600">
                Don't have an account ?{" "}
                <Link href="/signup" className="font-medium text-orange-600">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
