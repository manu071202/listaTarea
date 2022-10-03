import 'bootstrap/dist/css/bootstrap.min.css' 
import  Container  from 'react-bootstrap/Container';
import FormTarea from './components/FormTarea';


function App() {
  return (
    <div>
      <Container className='my-5 '>
      <h1 className='display-2 text-center '>Lista  de tareas </h1>
      <hr/>
<FormTarea></FormTarea>
      </Container>
      
    </div>
  );
}

export default App;
