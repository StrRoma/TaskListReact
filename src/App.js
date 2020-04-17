import React from 'react';
import './App.css';

class Task extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    }
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(e){
    this.setState({data: e.target.value});
  }

  render(){
    return (
      <div className="task-input">
        <input
          onChange={this.inputChange}
          value={this.state.data}
        />
        <button onClick={() => this.props.delete(this.props.index)}>DELETE</button>
      </div>
    )
  }
};

class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        tasks: [0,1,2,3,4,5],
        addData: '',
      };

      this.delete = this.delete.bind(this);
      this.add = this.add.bind(this);
      this.onChange = this.onChange.bind(this);
  }

  delete(index) {
    let tasks = this.state.tasks;
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks,
    });
  };

  add(e) {
    let tasks = this.state.tasks;
    tasks.push(tasks.length);
    this.setState({
      tasks: tasks,
    });
  };

  onChange(e) {
    this.setState({addData: e.target.value});
  };

  render() {
    return(
      <div className="App">
        <h1 className="top">Tasks in work: </h1>
        <div className="task-input">
          <input
            onChange={this.onChange}
            value={this.state.data}
          />
          <button onClick={this.add} value={this.state.addData}>ADD</button>
        </div>
        {this.state.tasks.map((task,index) => (
          <Task
            data={this.state.addData}
            index={index}
            key={index}
            task={task}
            delete={this.delete} 
          />
        ))}
      </div>
    );
  }
}

export default App;
