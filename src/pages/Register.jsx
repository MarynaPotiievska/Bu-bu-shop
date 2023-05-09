import AlterAuth from "components/Auth/AlterAuth";
import AuthLink from "components/Auth/AuthLink";
import Footer from "components/Auth/Footer";
import Header from "components/Auth/Header";
import LogoLink from "components/Auth/LogoLink";
import RegisterForm from "components/Auth/RegisterForm";

const Signin = () => {
  return (
    <>
      <Header />
      <main>
        <LogoLink />
        <RegisterForm />
        <AuthLink path="/signin" message="У мене є акаунт" />
        <AlterAuth />
      </main>
      <Footer />
    </>
  );
};

export default Signin;
