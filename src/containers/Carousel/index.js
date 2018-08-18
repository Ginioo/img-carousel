import React, {Component} from 'react';
import uuid from 'uuid';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {src: null};
  }

  componentDidMount() {
    if (this.props.src) switch (typeof(this.props.src)) {
      case "string":
        this.setState({src: [this.props.src]});
        break;
      default:
        this.setState({src: this.props.src});
        break;
    }

    this.timer = setInterval(() => this.change(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  change() {
    let src = this.state.src;
    src.push(src.shift());

    this.setState({
      src: [...src]
    });
  }

  render() {
    if (!this.state.src) {
      return null;
    }

    let direction = "slide-right";
    if (this.props.slide && this.props.slide.toLowerCase() === "left") {
      direction = "slide-left";
    }

    return (
      <div id="simple-carousel">
        <div className="wrapper">
          <TransitionGroup>
            <CSSTransition key={uuid.v4()} classNames={direction} timeout={{enter: 1000, exit: 1000}}>
              <div className="slide">
                <img className="content" src={this.state.src[0]}/>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    );
  }
}
