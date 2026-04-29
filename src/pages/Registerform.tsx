import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/InputText";
import { InputPassword } from "../components/ui/InputPassword";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom"

import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod";

type FormData = {
    nama: string;
    email: string;
    password: string;
    password_confirm: string;
};

const schema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Password Minimal 8 Karakter"),
    password_confirm: z.string().min(8, "Password Minimal 8 Karakter"),
}) .refine((data) => data.password === data.password_confirm, {
  message: "Password tidak sama",
  path: ["password_confirm"],
});


export default function LoginForm() {
    const {register, 
        handleSubmit,
        formState: {errors},
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSumbit = (data: FormData) => {
        console.log(data);
    };



    return (
    <div className="min-h-screen flex items-center justify-center"> 
        <div className="bg-white p-10 rounded-2xl border border-[#8B2F4A] shadow-md w-full max-w-md">
        
        <div>
            <h1 className="text-3xl font-bold text-[#852e4e] text-center">
                Selamat Datang!
            </h1>
            <p className="mt-2 text-slate-500 text-center font-medium">
                Silahkan Daftar!
            </p>
        </div>
        <form onSubmit={handleSubmit(onSumbit)} className="flex flex-col gap-0.5">
            <InputText
           label="Nama"
           nama="nama"
           register={register}
           error={errors.nama?.message}
           />

           <InputText
           label="Email"
           nama="email"
           register={register}
           error={errors.email?.message}
           />

            <InputPassword
           label="Password"
           nama="password"
           register={register}
           error={errors.password?.message}/>


            <InputPassword
           label="Password Confirm"
           nama="password_confirm"
           register={register}
           error={errors.password_confirm?.message}/>


            <div>
                <Button 
                type="submit"
                label="Register" 
                variant="primary" />

            </div>

            <div>
                Sudah Punya Akun? 
                <Link to="/Login" className="text-[#8B2F4A] font-medium">
                Daftar Disini
                </Link>
            </div>

        </form>
    </div>
    </div>
    );
}
