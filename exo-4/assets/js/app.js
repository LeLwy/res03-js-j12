let App = {  
    data() {  
        return {  
            tasks : [  
  
            ]  
        }  
    },  
    
    methods : {  
        addTask (event) {
            
            let task = {
                
                text : "",
                isDone : false
            };
            let value = event.target.elements.task.value;
            task.text = value;
            this.tasks.push(task);
            event.target.elements.task.value = "";
            
        },
        
        removeTask(task){
            
            task.isDone = true;
        }
    }  
}

export { App };