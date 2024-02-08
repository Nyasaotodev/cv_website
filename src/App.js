import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <header>
          <div className={"bg-slate-900 "}>
            <div className={"flex justify-center p-10 bg-slate-700 max-w-xl rounded-r-full "}>
              <div className={"flex flex-col text-slate-100 space-y-3 my-5"}>
                <h3 className={"text-5xl "}>Lohann Allostry</h3>
                <p className={"text-2xl"}>Alternance BUT Informatique</p>
              </div>
              <img src={logo} className=" h-28 w-28 mt-3 ml-10" alt="logo" />

            </div>

          </div>
      </header>
    </div>
  );
}

export default App;
