import Footer from "@/app/components/Layout/Footer";
import Header from "@/app/components/Layout/Header";
import Link from "next/link";
import LoginForm from "@/app/components/LoginForm";

const Login = () => {
    return (
        <>
            <Header />
            <section>
                <div className="mt-28 pb-14 w-full sm:max-w-[540px]  mx-auto">
                    <div>
                        <h1 className="text-5xl font-bold text-center">
                            Register Now
                        </h1>
                        <p className="text-center text-gray-500 mt-2">
                            Home Register
                        </p>
                        <div className="mt-10 flex flex-col justify-center items-center gap-y-2">
                            <h1 className="text-3xl font-bold">
                                Sign in Shofy
                            </h1>
                            <p className="text-center text-gray-500">
                                Do not have an account?{" "}
                                <Link
                                    href="/register"
                                    className="text-theme-primary  font-semibold"
                                >
                                    Create a free account
                                </Link>
                            </p>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Login;
