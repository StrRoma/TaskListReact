import React from 'react';

class Task extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    }
  }

  render(){
    return (
      <div claccName="task-input">
        <input
          onChage={this.inputChange}
          value={this.props.task}
        />
        <button onClick={this.props.delete} key={this.props.index}>DELETE</button>
      </div>
    )
  }
};

/*class TaskInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };

    this.onChage = this.onChage.bind(this);
  }

  addinput = () => {
    const {input} = this.state;
    if (input) {
      this.props.add(input);
      this.setState({input: ''});
    }
  };

  inputChange = event => {
    this.setState({data: event.target.value});
  };

  render() {
    const {input} = this.state;

    return(
      <div claccName="task-input">
        <input
          onChage={this.onChange}
          value={this.state.data}
        />
        <button onClick={this.addinput}>ADD</button>
      </div>
    );
  }
}*/

class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        tasks: [0,1,2,3,4,5],
        input: ''
      };

      this.delete = this.delete.bind(this);
      this.add = this.add.bind(this);
      //this.onChage = this.onChage.bind(this);
  }

  delete(event) {
    let tasks = this.state.tasks;
    tasks.splice(event.target.key, 1);
    this.setState({
      tasks: tasks,
    });
  };

  add(e) {
    let tasks = this.state.tasks;
    let input = e.target.value;
    tasks.push(tasks.length);
    this.setState({
      tasks: tasks,
      data: input
    });
  };

  onChange(e) {
    //this.state.input= e.target.value;
    this.setState({data: e.target.value});
  };

  render() {
    return(
      <div className="App">
        <h1 className="top">Tasks in work: </h1>
        <div1 claccName="task-input">
          <input
            onChage={this.onChange}
            value={this.state.data}
          />
          <button onClick={this.add} value={this.state.input}>ADD</button>
        </div1>
        {this.state.tasks.map((task,index) => (
          <Task 
            task={task}
            index={index}
            delete={this.delete} 
          />
        ))}
      </div>
    );
  }
}

export default App;
