import { useNavigate, useParams } from "react-router-dom";
import { useUserStore } from "../../../store/useUserStore";
import { useEffect, useState } from "react";

export default function UserUpdate() {

    const { id } = useParams();

    const navigate = useNavigate();
    const user = useUserStore(
        (state) => state.user
    );

    const updateUser = useUserStore(
        (state) => state.updateUser
    );

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");


    useEffect(() => {

        const dataUser = user.find(
            (item) => item.id === Number(id)
        );

        if (dataUser) {
            setName(dataUser.name);
            setEmail(dataUser.email);
            setPassword(dataUser.password);
            setImage(dataUser.image || ""); 
        }

    }, [id, user]);


    // submit update
    const handleUpdate = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        updateUser(Number(id), {
            name,
            email,
            password,
            image,
        });

        navigate("/dashboard/user");
    };

 return (
    <div className="p-10 max-w-lg">

        <h1 className="text-2xl font-bold mb-4">
            Update User
        </h1>

        <form 
        onSubmit={handleUpdate} 
        className="flex flex-col gap-4"
        >
            <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">
                    Nama Lengkap
                </label>
            
            <input 
            type="text"
            value={name}
            onChange={(e) => 
                setName(e.target.value)
            }
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
             />
            </div>

            <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">
                    Email
                </label>

            <input 
            type="text"
            value={email}
            onChange={(e) =>
                setEmail(e.target.value)
            } 
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
        />
            </div>

            <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">
                    Password
                </label>

                <input
                    type="password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    className="w-full border-2 border-[#8B2F4A] p-2 rounded"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">
                    Image
                </label>

                <input
                    type="text"
                    value={image}
                    onChange={(e) =>
                        setImage(e.target.value)
                    }
                    className="w-full border-2 border-[#8B2F4A] p-2 rounded"
                />
            </div>

            <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
                Update
            </button>

        </form>
    </div>
 );
}