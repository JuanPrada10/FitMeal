import { Button } from "../atoms/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../atoms/card";
import { FormField } from "../molecules";
import { Mail, Eye } from "lucide-react";

const LoginForm = () => {
  return (
    <div className="flex justify-center  items-center w-screen h-screen">
      <Card className="w-full max-w-md p-10">
        <CardHeader>
          <CardTitle className="font-bold text-2xl text-center">
            Iniciar sesion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action="">
            <FormField
              name="Email"
              type="text"
              icon={Mail}
              placeHolder="Example@exaple.com"
            ></FormField>
            <FormField
              name="Password"
              type="password"
              icon={Eye}
              placeHolder="*************"
            ></FormField>
          </form>
          <span className="text-gray-600 text-sm pl-4">
            no tienes Cuenta?
            <a
              href="/register"
              className="text-blue-500 hover:text-blue-700 ml-2"
            >
              crear cuenta
            </a>
          </span>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>Iniciar Sesion</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
