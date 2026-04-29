import { useForm } from "react-hook-form";
import { Input } from "./BaseInput";
import { PasswordInput } from "./PasswordInput";
import { Textarea } from "./TextArea";
import { Select } from "./Select";
import { Button } from "./Button"

import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod";

type FormData = z.infer<typeof registerSchema>;

export const registerSchema = z.object({
  nama: z.string().min(1, "Nama wajib diisi"),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Password minimal 8 karakter"),
  bio: z.string().optional(),
  event: z.string().min(1, "Pilih event dulu")
});


export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } =useForm<FormData>({
  resolver: zodResolver(registerSchema)
})


    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="bg-white p-3 rounded-lg shadow-md w-300px flex flex-col gap-2">
        
        <h2 className="text-xl font-bold text-center mb-2">
         Selamat Datang!</h2>

            <Input
            label="Nama"
            name="nama"
            register={register}
            error={errors.nama?.message}
            />
            <Input
            label="Email"
            name="email"
            register={register}
            error={errors.email?.message}
            />

            <PasswordInput
            label="Password"
            name="password"
            register={register}
            error={errors.password?.message}
            />

            <Textarea
            label="Bio"
            name="bio"
            register={register}
            />

            <Select
            label="Event"
            name="event"
            register={register}
            options={[
                {label: "Invofest", value: "invofest"},
                {label: "Workshop AI", value: "ai"},
                {label: "Workshop Web Development", value: "web"},
                {label: "Workshop CyberSecurity", value: "cs"},
            ]}
            error={errors.event?.message}
            />
            <Button type="submit" label="Daftar"/>
        </form>
    )
}