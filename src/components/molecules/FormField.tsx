import { Label } from "../atoms/label";
import { Input } from "../atoms/input";
import type { LucideIcon } from "lucide-react";

interface FormFieldProps {
  name: string;
  type: string;
  placeHolder?: string;
  required?: boolean;
  icon?: LucideIcon;
}

const FormField = ({
  name,
  type,
  placeHolder,
  required,
  icon: Icon,
}: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-2 my-4">
      <Label className="">{name}</Label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        )}
        <Input
          className={`bg-white ${Icon ? "pl-10" : "pl-3"}`}
          type={type}
          placeholder={placeHolder}
          required={required}
        />
      </div>
    </div>
  );
};

export default FormField;
