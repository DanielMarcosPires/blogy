import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  variants: {
    variant: {
      primary: "text-white bg-transparent transition-all p-2",
      secondary: "bg-white text-red-700  transition-all p-2",
      formulario: "bg-black text-white w-full my-2 py-2",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;

export function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${button({ variant, className })} font-bold`}
    >
      {props.children}
    </button>
  );
}
