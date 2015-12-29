import deku from 'deku'
const {string, element} = deku; // 2.0.0-rc4 has an issue with importing

const MyComponent = {
  render: ({props, children, dispatch}) => {
    return <button>{children}</button>
  },
};

console.log(string.renderString(<MyComponent>Hello button</MyComponent>));
