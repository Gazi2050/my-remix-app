import { redirect, useLoaderData } from "@remix-run/react";
import { findUser, User } from "users";

export const loader = async ({ params }: { params: { id: string } }) => {
    const user = await findUser(params.id);
    if (!user) {
        return redirect('/');
    }
    return new Response(
        JSON.stringify(user),
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
};

const Profile = () => {
    const user = useLoaderData<User>();
    return (
        <div className="flex justify-center items-center min-h-screen p-5 bg-gray-100">
            <div className="max-w-md w-full bg-white shadow-lg rounded-xl border-2 p-6 ">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Profile</h1>
                <p className="text-lg text-gray-700 mb-2">
                    <span className="font-semibold">Name:</span> {user.name}
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    <span className="font-semibold">Email:</span> {user.email}
                </p>
            </div>
        </div>
    );
};

export default Profile;
