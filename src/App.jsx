import './App.css'
import React from 'react';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { PostCreator } from './components/PostCreator';
import { PostList } from './components/PostList';
import reactLogo from './assets/react.svg'

const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

function CharacterCounter() {
  return (
    <div>
      
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input className="input" type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  },
});

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

function App() {
  return (
    <div className="App">
      <img src={reactLogo} className="logo react" alt="React logo" />
       <h1> React + Recoil</h1>
       <PostCreator />
       <PostList />
       {/* <CharacterCounter /> */}
    </div>
  )
}

export default App
