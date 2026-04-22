import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/InputText";
import { InputPassword } from "../components/ui/InputPassword";
import { Button } from "../components/ui/Button";

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
    <div>    
        <form onSubmit={handleSubmit(onSumbit)}>
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
           nama="Password"
           register={register}
           error={errors.password?.message}/>

            <InputPassword
           label="Password_confirm"
           nama="Password_confirm"
           register={register}
           error={errors.password_confirm?.message}/>







            <div>
                <Button label="Register" variant="primary" />

            </div>
        </form>
    </div>
    );
}
