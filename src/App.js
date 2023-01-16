import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from 'react-redux'
import AddTodos from './component/AddTodo';
import Filtered from './component/Filter';
import TodoList from './component/TodoList';
import './app.css'

function App() {
  let todo = useSelector(state=>state.TodoReducer.Todos)
  let Filter = useSelector(state=>state.TodoReducer.Filter)
  return (
    <div className="App">
      <AddTodos/>
      <TodoList todo={(Filter=='Done')?todo.filter(el=>el.isDone==true):(Filter=='UnDone')?todo.filter(el=>el.isDone==false): todo}/>
      <hr/>
      <hr/>
      <Filtered/>
      
      
    </div>
  );
}

export default App;
