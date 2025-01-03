export default [
  {
    id: 'q1',
    text: 'What is the primary purpose of the React "key" property in lists?',
    answers: [
      'To uniquely identify each element for efficient updates.',
      'To define the style of the list element.',
      'To control the rendering order of the elements.',
      'To store state information within the list element.',
    ],
  },
  {
    id: 'q2',
    text: 'Which of the following is a valid way to pass data between React components?',
    answers: [
      'Using props to pass data from a parent to a child component.',
      'Using the state of a child component to update the parent.',
      'Using context to pass data from one sibling component to another directly.',
      'Using Redux to pass data only between functional components.',
    ],
  },
  {
    id: 'q3',
    text: 'How does the "useEffect" hook behave by default?',
    answers: [
      'It runs after every render, including the initial render.',
      'It runs only once during the initial render.',
      'It runs only when the component is removed from the DOM.',
      'It runs only when explicitly called by the developer.',
    ],
  },
  {
    id: 'q4',
    text: 'What is the virtual DOM in React?',
    answers: [
      'A lightweight copy of the real DOM used to optimize rendering.',
      'A DOM structure only used in mobile applications.',
      'A tool to directly modify the real DOM.',
      'An extension of the browser DOM API.',
    ],
  },
  {
    id: 'q5',
    text: 'What is the purpose of the "React.Fragment" component?',
    answers: [
      'To group a list of children without adding extra nodes to the DOM.',
      'To provide a fallback UI when an error occurs.',
      'To create animations in React applications.',
      'To manage global state in functional components.',
    ],
  },
  {
    id: 'q6',
    text: 'Which method is commonly used to fetch data in a React component?',
    answers: [
      'Using the fetch() method inside the useEffect hook.',
      'Calling the fetch() method in the render function.',
      'Using the fetchData() method provided by React.',
      'Fetching data directly in the JSX template.',
    ],
  },
  {
    id: 'q7',
    text: 'What does "lifting state up" mean in React?',
    answers: [
      'Moving state to a common parent component to share between child components.',
      'Updating the state of a child component from its parent.',
      'Using Redux to manage state globally.',
      'Adding state management logic inside utility functions.',
    ],
  },
  {
    id: 'q8',
    text: 'What is the purpose of "PropTypes" in React?',
    answers: [
      'To validate the types of props passed to a component.',
      'To define the default values for props.',
      'To optimize the performance of components.',
      'To manage state across multiple components.',
    ],
  },
  {
    id: 'q9',
    text: 'Which React hook is used to manage local component state?',
    answers: [
      'useState',
      'useEffect',
      'useContext',
      'useReducer',
    ],
  },
  {
    id: 'q10',
    text: 'What is a higher-order component (HOC) in React?',
    answers: [
      'A function that takes a component and returns a new component.',
      'A special type of React component that cannot have children.',
      'A component that is used exclusively for state management.',
      'A lifecycle method available only in class components.',
    ],
  },
  {
    id: 'q11',
    text: 'What does React.StrictMode do?',
    answers: [
      'Highlights potential problems in an application during development.',
      'Enforces stricter rules for coding style.',
      'Prevents runtime errors in production.',
      'Automatically optimizes component rendering.',
    ],
  },
  {
    id: 'q12',
    text: 'Which of the following is NOT a valid React lifecycle method?',
    answers: [
      'componentDidMount',
      'componentWillUpdate',
      'componentWillRender',
      'componentDidUpdate',
    ],
  },
];
