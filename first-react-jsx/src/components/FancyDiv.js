import React from 'react';

// here we are inheriting all the Component from the react Component
class FancyDiv extends React.Component {
    // the render method is just return some jsx
    render() {
        return  (
            <>
            <div>Something</div>
            <div style={{
                border: '4px dashed blue',
                background: 'red',
            }}>

            {this.props.children}

            </div>
            </>
        )

    }
}

// inorder to use this to someother application i need to export it from ths File
export default FancyDiv;