"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import GoogleLogo from "../assests/icons/GoogleLogo";
import axios from "axios";
import useProfile from "../hook/useUser";

export default function SignupPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();
  const { refetch: UserRefetch } = useProfile()
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post("/api/user/signup", data);
      console.log(res, "signup response");
      if (res.status == 200) {
        router.push("/");
        UserRefetch();
      }
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
        <div className="flex justify-center items-center min-h-[90.5vh]">
          <div className="w-[420px] space-y-4 bg-white  shadow px-6 py-6 rounded-2xl">
            <div>
              <h2 className="mt-3 text-center text-2xl font-extrabold text-orange-600">
                Signup
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
                  <label htmlFor="username" className="sr-only">
                    Username
                  </label>
                  <input
                    id="username"
                    type="username"
                    autoComplete="username"
                    placeholder="Username"
                    className="border w-full p-2 border-gray-300 rounded-xl"
                    {...register("username", {
                      required: "username is required",
                      minLength: {
                        value: 3,
                        message: "username must be at least 3 characters",
                      },
                    })}
                  />
                  {errors.username && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.username.message}
                    </p>
                  )}
                </div>
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
              <div className="flex flex-col items-center gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-xl font-semibold"
                >
                  {isSubmitting ? "Signuping..." : "Sign up"}
                </button>
              </div>
            </form>
            <div className="text-center text-sm text-gray-600">
              Already have an account ?
              <Link href="/login" className="font-medium text-orange-600 ml-1">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
