import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
}
// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, ...props }: InputProps, ref) => {
    return (
      <>
        <label className="block">{label}</label>
        <div
          className={`overflow-hidden rounded-3xl border border-2 border-black px-2 transition-all hover:bg-[#00000011] ${className}`}
        >
          <input
            ref={ref}
            {...props}
            className="w-[100%] bg-transparent outline-none"
          />
        </div>
      </>
    );
  },
);

export default Input;
