import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
  error?: any;
}
// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }: InputProps, ref) => {
    return (
      <>
        <label htmlFor={label} className="block">
          {label}
        </label>
        <div
          className={`overflow-hidden rounded-3xl border border-2 border-black px-2 transition-all hover:bg-[#00000011] ${className}`}
        >
          <input
            ref={ref}
            {...props}
            id={label}
            className="w-[100%] bg-transparent outline-none"
          />
          <p className="text-red-500">{error}</p>
        </div>
      </>
    );
  },
);

export default Input;
