import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

const LoginPage = ({ session }) => {
  const router = useRouter();

  const loginWithGoogle = async () => {
    try {
      await signIn("google");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (session) {
      router.replace("/user/profile");
    }
  }, [session, router]);

  if (session) {
    return null;
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center min-h-screen gap-5 my-20">
        <h2 className="section-title">Вы не залогинены</h2>
        <button
          onClick={loginWithGoogle}
          className="flex items-center justify-center h-12 gap-2 font-medium text-white uppercase duration-300 bg-gray-900 w-72 hover:opacity-80"
        >
          <span>
            <FcGoogle />
          </span>{" "}
          Логин
        </button>
      </div>
    );
  }
};

export default LoginPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/user/profile",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
