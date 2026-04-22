import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/InputText";
import { InputPassword } from "../components/ui/InputPassword";
import { Button } from "../components/ui/Button";

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
    <div>
        <form onSubmit={handleSubmit(onSumbit)}>
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

            <div>
                <Button label="Login" variant="primary" />

            </div>
        </form>
    </div>
    );
}
