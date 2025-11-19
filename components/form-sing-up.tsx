import { Button } from "./ui/button";
import { Input } from "./ui/input";

const FormSignUp = () => {
  return (
    <form className="space-y-4">
      <Input type="username" placeholder="Username" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="confirm-password" placeholder="Confirm Password" />
      <Button className="w-full cursor-pointer">Register</Button>
    </form>
  );
};

export default FormSignUp;
