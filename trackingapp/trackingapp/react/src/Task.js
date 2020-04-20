import React, { Component } from 'react';

class Task extends Component {
    //state internal/private storage of components
    state = {
        isloading : true,
        Tasks : []
      } 

    // in charge of processing the js file and return as the export in the last line
    
    // sync : send request and wait for response 
    // async : send request and don't have to wait 

    async componentDidMount(){
        const response = await fetch('/api/dashboard')
        const body = await response.json();
        this.setState({Tasks : body, isloading : false});
    }

    render() {   
        const {Tasks, isloading} = this.state;
        if(isloading)
            return (<div> Loading...</div>);

        return ( 
            <div>
                <h2>Tasks</h2>
                {
                    Tasks.map(task =>
                        // [!!] this id inside the div tag is the id for the div not for the task
                        // the div id is for iteration
                        <div id={task.task_id}> 
                            {task.title}
                            {task.description}
                        </div>
                    )
                }
            </div>
         );
    }
}
 
export default Task ;