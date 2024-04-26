// React code //



/**
 * React.createElement() is a function that creates React elements.
 * It takes three arguments:
 * 1. The type of element to create
 * 2. The element's properties {} -> Give attributes to the element
 * 3. The element's children or text content
 */

//Example 1
const heading = React.createElement('h1', { id: "heading" }, 'Hello World From React'); // returns object

//Example 2
/**
 * <div id="parent">
 *     <div id="child">
 *       <h1>I'm h1 tag</h1>
 *       <h2>I'm h2 tag</h2>
 *      </div>
 * <div id="child2">
 *       <h1>I'm h1 tag</h1>
 *       <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement('div', { id: "parent" },
    [
        React.createElement('div', { id: "child" },
            [
                React.createElement('h1', {}, 'I\'m h1 tag'),
                React.createElement('h2', {}, 'I\'m h2 tag')
            ]
        ),
        React.createElement('div', { id: "child2" },
            [
                React.createElement('h1', {}, 'I\'m h1 tag'),
                React.createElement('h2', {}, 'I\'m h2 tag')
            ]
        )
    ]
)
console.log(parent) //object

// JSX //



//* Create root element - everuthing will be rendered inside this root element
const root = ReactDOM.createRoot(document.getElementById('root'));

//* Note : render() method is used to render the element to the DOM and it's replaced element from the existing element
//* Render the element
root.render(parent);
