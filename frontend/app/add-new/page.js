import Image from "next/image";
import Form from "next/form"

export default function AddNewPage() {
    return (
        <Form className="flex flex-col max-w-md mx-auto p-8 db-white shadow-lg rounded-xl border border-gray-100 text-black mt-3">
            <div className="space-y-1 m-5">
                <label
                    htmlFor="name"
                    className=" block font-semibold text-sm font-medium text-gray-700"
                >
                    Name
                </label>
                <input
                type="name"
                id="name"
                name="name"
                required
                className="w-full p-3 border-gray-200 rounded-lg bgigray-50"
                placeholder="John Doe"
                />
            </div>

            <div className="space-y-1 m-5">
                <label
                    htmlFor="email"
                    className=" block font-semibold text-sm font-medium text-gray-700"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-3 border-gray-200 rounded-lg bgigray-50"
                    placeholder="johndoe@gmail.com"
                />
            </div>

            <button
                type = "submit"
                className="bg-blue-600 w-full text-white py-3 px-6 rounded-lg font-semibold"
            >
            Submit
            </button>



        </Form>

    );
}