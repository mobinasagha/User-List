// import "./App.css";
// import Header from "./Header";
import UserList from "./UserList";

function App() {
  const usersList = [
    {
      id: 1,
      username: "Maryam",
      password: "123dc",
    },
    {
      id: 2,
      username: "Ali",
      password: "1awedc",
    },
    {
      id: 3,
      username: "Mahdi",
      password: "35fd",
    },
    {
      id: 4,
      username: "Mina",
      password: "352",
    },
    {
      id: 5,
      username: "Bita",
      password: "1234",
    },
  ];
  return (
    <>
      <ul>
        {usersList.map((item) => (
          <UserList key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}
export default App;
