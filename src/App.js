import logo from "./logo.svg";
import "./App.css";
import InterviewAccord from "./components/InterviewAccord";
import data from "./helper/data"

function App() {
  return (
    <>
      <div className="header">
        <h2>REACT Intervieew Questions And Answers</h2>
      </div>
      <div>
        <div className="app">
          <div className="main">
            <InterviewAccord data={data} />
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
