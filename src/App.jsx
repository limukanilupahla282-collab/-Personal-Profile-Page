import Header from "./Components/header";
import ProfileCard from "./Components/Card";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProfileCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;