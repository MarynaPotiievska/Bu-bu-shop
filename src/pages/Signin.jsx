import AlterAuth from "components/Auth/AlterAuth";
import AuthLink from "components/Auth/AuthLink";
import Footer from "components/Auth/Footer";
import Header from "components/Auth/Header";
import LogoLink from "components/Auth/LogoLink";
import SigninForm from "components/Auth/SigninForm";

const Signin = () => {
  return (
    <>
      <Header />
      <main>
        <LogoLink />
        <SigninForm />
        <AuthLink path="/register" message="У мене немає акаунта" />
        <AlterAuth />
      </main>
      <Footer />
    </>
  );
};

export default Signin;
