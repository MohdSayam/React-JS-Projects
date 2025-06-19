import React from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="bg-gray-600 py-8 text-center text-white m-4 font-bold">
      Github Followers: {data ? data.followers : "Loading..."}
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/hiteshchoudhary");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
