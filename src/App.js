import React from 'react';
import './App.css';

class Task extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
    this.inputChange = this.inputChange.bind(this);
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    this.setState({data:nextProps.data})
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
    console.log(this.state.tasks)
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
        <div>
        <svg width="803" height="713" viewBox="0 0 803 713" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i)">
            <rect x="-10" y="228.239" width="1300" height="700" rx="25" transform="rotate(-45 -10 228.239)" fill="#4043FF"/>
            </g>
            <defs>
            <filter id="filter0_i" x="0.355347" y="-680.645" width="1393.5" height="1403.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="10"/>
            <feGaussianBlur stdDeviation="20"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0352941 0 0 0 0 0.054902 0 0 0 0 0.0941176 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
            </filter>
            </defs>
            </svg>
        </div>
        {this.state.tasks.map((task,index) => (
          <Task
            data={task}
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
