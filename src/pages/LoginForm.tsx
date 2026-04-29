
import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/InputText";
import { InputPassword } from "../components/ui/InputPassword";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod";

type FormData = {
    email: string;
    password: string;
};

const schema = z.object({
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Password Minimal 8 Karakter")
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

        <div className="text-center">
            <h1 className="text-3xl font-bold text-[#852e4e]">
                Selamat Datang!
            </h1>
            <p className="mt-2 text-slate-500">
                Silahkan Login untuk melanjutkan
            </p>
        </div>

        <form onSubmit={handleSubmit(onSumbit)} className="flex flex-col gap-4">
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

            <div>
                <Button 
                type="submit"
                label="Login" 
                variant="primary" />

            </div>

            <div>
                Belum Punya Akun? 
                <Link to="/Register" className="text-[#8B2F4A] font-medium">
                Daftar Disini
                </Link>
            </div>
        </form>
    </div>
    </div>
    );
}

