"use client";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import CartIcon from "../assests/icons/CartIcon";
import { useSelector } from "react-redux";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useUser from "../hook/useUser";
import { getcart } from "../cart/page";

export default function Header() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const pathname = usePathname();
  const navLinks = [
    {
      label: "Men",
      link: "/men",
    },
    {
      label: "Women",
      link: "/women",
    },
    {
      label: "Kids",
      link: "/kids",
    },
  ];
  const { data: user } = useUser();
  const userId = user?._id;
  // const { data: carts, isLoading } = useQuery({
  //   queryKey: ["cart", userId],
  //   queryFn: () => getcart(userId),
  //   staleTime: 1000000,
  // });
  const { data: carts, isLoading } = useQuery({
    queryKey: ["cart", userId],
    queryFn: () => getcart(userId),
    enabled: !!userId, // ⬅️ run only when userId is available
    staleTime: 1000 * 60, // optional: 1 min stale
  });

  const cartCount = useSelector((state) => state.cart.cartCount);
  const noOfCart = user ? carts?.length : cartCount;

  const logout = async () => {
    try {
      const res = await axios.post(
        "/api/logout",
        {},
        { withCredentials: "true" }
      );
      console.log(res, "logout");
      if (res.status == 200) {
        router.push("/");
        queryClient.setQueryData(["user"], null);
        // 2. Optionally also remove cache completely
        queryClient.removeQueries({ queryKey: ["user"], exact: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="bg-[#fff] shadow-2xs sticky top-0 z-50">
      <div className="container-center">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-orange-500">
            ShopEase
          </Link>

          {/* Navigation */}
          <nav className="space-x-12 hidden md:flex">
            {navLinks.map((nav, i) => (
              <div key={i} className="group py-4.5 ">
                <Link
                  href={nav.link}
                  className={`font-medium cursor-pointer ${
                    pathname === nav.link
                      ? "text-orange-600 "
                      : "text-gray-500 hover:text-orange-500"
                  }`}
                >
                  {nav.label}
                </Link>
                {/* <div className="absolute top-full p-4 w-40  flex-col gap-2 hidden group-hover:flex border border-gray-200 shadow-lg bg-white text-gray-500">
                  {nav.subLinks.map(({ label, href }, i) => {
                    return (
                      <Link
                        href={href}
                        key={i}
                        className="hover:text-orange-500 cursor-pointer"
                      >
                        {label}
                      </Link>
                    );
                  })}
                </div> */}
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            {/* Auth Links */}
            {user ? (
              <div className="relative group">
                <button className="font-semibold text-gray-500 ">
                  Profile
                </button>
                <div className="hidden bg-gray-50 group-hover:block absolute py-4 px-3 rounded shadow-2xl w-[250px] -left-[100px] top-[25px] z-50">
                  <p className="text-xl">
                    Username:{" "}
                    <span className="text-gray-700">{user?.username}</span>
                  </p>
                  <button
                    onClick={logout}
                    className="bg-red-500 mt-2 cursor-pointer hover:bg-red-600 w-full py-2 text-white rounded text-semibold"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-6">
                <Link
                  href="/login"
                  className={`font-medium ${
                    pathname === "/login"
                      ? "text-orange-600 "
                      : "text-gray-500 hover:text-orange-500"
                  }`}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="text-sm font-semibold text-orange-600 border-2
            px-3 py-1 rounded-lg hover:bg-orange-600 hover:text-white transition"
                >
                  Sign Up
                </Link>
              </div>
            )}
            <Link href="/cart" className="relative">
              <CartIcon />
              <span className="absolute -top-3 left-3 py-1 px-2 text-xs rounded-full bg-orange-500 text-white font-bold">
                {isLoading ? "…" : noOfCart || 0}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
