import ProfileEditor from "./ProfileEditor";
import UserList from "./UserList";
import Counter from "./Counter"


export default function App() {
  return (
    <div className="flex flex-col items-center justify-between p-4 h-screen">
      <h1 className="text-3xl font-bold mb-4">Buggy Dashboard 🐛</h1>
      <ProfileEditor />
      <UserList />
      <Counter />
      

      <footer className="mt-8 p-4 bg-gray-500 text-white w-full text-center">
        Debugging Challenge 🧠
      </footer>
    </div>
  );
}
