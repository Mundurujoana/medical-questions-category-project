
import Dashboard from './components/Dashboard';
import CreatePage from "./components/CreatePage";
import Main from './components/Main';


function App() {
const categories = [{name: "category1", questions: [{text: "question1", answer: "answer1"}]}, {name: "category2", questions: [{text: "question2", answer: "answer2"}]}]
  return (
    <div>
      <Main categories={categories}/>
    </div>
    // <div className="App">
    //  <Main />

    //  {/* <CreatePage/> */}
    // </div>
  )
}

export default App;
