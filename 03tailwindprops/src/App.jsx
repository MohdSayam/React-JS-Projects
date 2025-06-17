import Card from "./components/cards.jsx";
import Navbar from "./components/nav.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <h1 className="text-3xl bg-green-500 flex-1 p-3 rounded-md">
        Hello from jalalabad
      </h1>

      <Card
        username={"Sayam"}
        post={"Executive Director, Chicago"}
        source={
          "https://cdn.pixabay.com/photo/2023/12/21/13/49/ferris-wheel-8461874_1280.jpg"
        }
      />

      <Card
        username={"Salim"}
        post={"Karmchari Department Head, Michigan"}
        source={
          "https://media.istockphoto.com/id/637145824/photo/vienna-postcard.jpg?s=1024x1024&w=is&k=20&c=P-E_CJ56Cg2s2gU6aQT8hX8bUwI6fwoLLtpFNNNcWaM="
        }
      />

      <Card
        username={"Shaad"}
        post={"Cricket Team WaterBoy, Bihar"}
        source={
          "https://media.istockphoto.com/id/2183338527/photo/fair-wheel-in-budapest.jpg?s=1024x1024&w=is&k=20&c=2NyPlhWmno2_FvS690I9ONl2m1PuHCdYt4mW1b0V2HA="
        }
      />
    </>
  );
}

export default App;
