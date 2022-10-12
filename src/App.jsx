import { EditFeedback, Feedback, Home, NewFeedback, Roadmap } from 'pages';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import { fetchFeedbacks } from 'store';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFeedbacks());
  }, [dispatch]);
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
