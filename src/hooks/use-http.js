
const useHttp = async (get=true) => {
    let url =  'https://react-http-8c045-default-rtdb.firebaseio.com/';
    if(get){
    try {
        const response = await fetch(
          url+'/tasks.json'
        );
  
        if (!response.ok) {
          console.log(response);
          throw new Error('Request failed!');
        }
  
        const data = await response.json();
  
        const loadedTasks = [];
  
        for (const taskKey in data) {
          loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }
        return {error:{
            status: false, msg: null
        } ,
        loadedTasks: loadedTasks}
      } catch (err) {
        const errorMsg = (err.message || 'Something went wrong!');
        return {error: {status: true, msg: errorMsg}, loadedTasks: null};
      }
    }
      
}

export default useHttp;