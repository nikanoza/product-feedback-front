import { EditFeedback, Feedback, Home, NewFeedback, Roadmap } from 'pages';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className='w-full h-full'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/feedbacks/:id' element={<Feedback />} />
        <Route path='/feedbacks/new' element={<NewFeedback />} />
        <Route path='/feedbacks-edit/:id' element={<EditFeedback />} />
        <Route path='/roadmap' element={<Roadmap />} />
        <Route path='*' element={<div>Error</div>} />
      </Routes>
    </div>
  );
}

export default App;
