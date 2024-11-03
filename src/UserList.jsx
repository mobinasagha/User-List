export default function UserList({ item }) {
  return (
    <>
      <li>
        <p style={{ color: "blue" }}>{`Usernamme: ${item.username}`}</p>
        <p style={{ color: "green" }}>{`Password: ${item.password}`}</p>
        <hr style={{ color: "red" }} />
      </li>
    </>
  );
}
