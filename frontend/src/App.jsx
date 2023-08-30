import RecipeList from "./components/RecipeList";
export default function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md">
          <h1 className="text-2xl font-semibold mb-4">
            Welcome to My Tailwind App
          </h1>
          <p className="text-gray-700">
            This is an example of a React app styled using Tailwind CSS.
          </p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Click me
          </button>
        </div>
        <RecipeList />
      </div>
    </>
  );
}
