import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z
    .string()
    .min(1, { message: "Min 1 Char" })
    .max(9, { message: "Max 9 Char" }),
  email: z.string().email({ message: "Enter a valid Email ID" }),
  message: z.string(),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "Sam",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  console.log(watch("name"));
  console.log(watch("email"));

  console.log("isDirty:", isDirty, "isValid:", isValid);

  return (
    <>
      <div className="h-[100vh]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="py-10">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" {...register("name")} />
            {errors.name?.message && (
              <p className="text-red-500">{errors.name?.message}</p>
            )}
          </div>

          <div className="py-10">
            <label htmlFor="email">Email</label>
            <input type="text" name="mail" id="mail" {...register("email")} />
            {errors.email?.message && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </div>

          <div className="py-10">
            <label htmlFor="message">Message</label>
            <textarea id="message" {...register("message")} />
            {errors.message?.message && (
              <p className="text-red-500">{errors.message?.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={isValid ? "bg-red-500" : "bg-slate-500"}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
