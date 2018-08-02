import React, { Component } from 'react';
// 1
// class MouseTracker extends Component {
//     constructor(props) {
//         super(props);
//         this.handleMouseMove = this.handleMouseMove.bind(this);
//         this.state = { x: 0, y: 0 };
//     }

//     handleMouseMove(event) {
//         this.setState({
//             x: event.clientX,
//             y: event.clientY
//         });
//     }

//     render() {
//         return (
//             <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
//                 <h1>Move the mouse around!</h1>
//                 <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
//             </div>
//         );
//     }
// }

// 2
// class Mouse extends Component {
//     constructor(props) {
//         super(props);
//         this.handleMouseMove = this.handleMouseMove.bind(this);
//         this.state = { x: 0, y: 0 };
//     }

//     handleMouseMove(event) {
//         this.setState({
//             x: event.clientX,
//             y: event.clientY
//         });
//     }

//     render() {
//         return (
//             <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>

//                 {/* ...but how do we render something other than a <p>? */}
//                 <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
//             </div>
//         );
//     }
// }

// class MouseTracker extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Move the mouse around!</h1>
//                 <Mouse />
//             </div>
//         );
//     }
// }

// 3
// class Cat extends React.Component {
//     render() {
//         const mouse = this.props.mouse;
//         return (
//             <img src="http://icons.iconarchive.com/icons/sonya/swarm/256/Cat-icon.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
//         );
//     }
// }

// class MouseWithCat extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleMouseMove = this.handleMouseMove.bind(this);
//         this.state = { x: 0, y: 0 };
//     }

//     handleMouseMove(event) {
//         this.setState({
//             x: event.clientX,
//             y: event.clientY
//         });
//     }

//     render() {
//         return (
//             <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>

//                 {/*
//             We could just swap out the <p> for a <Cat> here ... but then
//             we would need to create a separate <MouseWithSomethingElse>
//             component every time we need to use it, so <MouseWithCat>
//             isn't really reusable yet.
//           */}
//                 <Cat mouse={this.state} />
//             </div>
//         );
//     }
// }

// class MouseTracker extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Move the mouse around!</h1>
//                 <MouseWithCat />
//             </div>
//         );
//     }
// }

class Cat extends React.Component {
  render() {
    const animal = this.props.animal;
    return (
      <img
        src="http://icons.iconarchive.com/icons/sonya/swarm/256/Cat-icon.png"
        style={{ position: 'absolute', left: animal.x, top: animal.y }}
      />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        {/* <Mouse render={mouse => (
                    <Cat animal={mouse} />
                )} /> */}
        <WithMouse animal={Cat} />
      </div>
    );
  }
}

class WithMouse extends Component {
  render() {
    const Component = this.props.animal;
    return (
      <Mouse render={mouse => <Component {...this.props} animal={mouse} />} />
    );
  }
}

export { MouseTracker };
