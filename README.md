# @ginioo/simple-carousel
## a simple carousel for images or else

1. install
```bash
npm i -D @ginioo/simple-carousel
```

2. add ImageCarousel to a component
```jsx
import React, {Component} from 'react';
import {ImageCarousel} from '@ginioo/simple-carousel';

class SampleComponent extends Component {

  render() {
    return (
      <div id="sample">
        // default slide to the right
        <ImageCarousel src="http://via.placeholder.com/350x150" />
        
        <ImageCarousel slide="left" src={[
            "http://via.placeholder.com/350x150",
            "http://via.placeholder.com/350x150",
        ]} />
      </div>
    );
  }
}

export default SampleComponent;
```
