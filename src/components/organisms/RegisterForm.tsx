import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../atoms/card";
import { Button } from "../atoms/button";
import { FormField } from "../molecules";
import { Eye, Mail } from "lucide-react";

const RegisterForm = () => {
  return (
    <div className="flex justify-center  items-center w-screen h-screen">
      <Card className="w-full max-w-md p-10 ">
        <CardHeader>
          <CardTitle className="flex justify-center">
            <h2 className="font-bold text-2xl">Crear Cuenta</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action="">
            <FormField
              name="Email"
              type="email"
              placeHolder="Example@exaple.com"
              required={true}
              icon={Mail}
            />
            <FormField
              name="Contraseña"
              type="password"
              placeHolder="*******"
              required={true}
              icon={Eye}
            />
            <FormField
              name="Confirmar Contraseña"
              type="password"
              placeHolder="*******"
              required={true}
              icon={Eye}
            />
          </form>
          <span className="text-sm ml-6  text-gray-600">
            ya tienes cuenta?
            <a className="text-blue-500 hover:to-blue-800 ml-2 " href="/login">
              Iniciar sesion
            </a>
          </span>
        </CardContent>
        <CardFooter className="flex justify-center flex-col">
          <Button type="submit">Registrarse</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterForm;
