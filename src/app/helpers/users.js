import "dotenv/config";

export const getUsers = () => {
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
};
