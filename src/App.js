import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const {error, loadedTasks} = useHttp(true);
  if(error.status){
    setError(error.msg);
  }
    setTasks(loadedTasks);
    setIsLoading(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
