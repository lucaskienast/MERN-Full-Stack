import React, {useState, useEffect} from 'react';
import Container from './components/Container';
import Title from './components/Title';
import Options from './components/Options';
import Output from './components/Output';
import './App.css';

const App = () => {

  const [paragraphs, setParagraphs] = useState([]);
  const [tag, setTag] = useState("p");
  const [inputValue, setInputValue] = useState(1);
  const [includeHtml, setIncludeHtml] = useState("Yes");
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    console.log(inputValue);
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${inputValue}&start-with-lorem=1`;
    fetch(url)
      .then(res => res.json())
      .then(data => setParagraphs(data));
  }, [inputValue]);

  return (
    <div className="App">
      <Container>
        <Title />
        <Options 
          paragraphs={paragraphs}
          copiedCode={copiedCode}
          setCopiedCode={setCopiedCode}
          setIncludeHtml={setIncludeHtml}
          includeHtml={includeHtml}
          setInputValue={setInputValue}
          tag={tag}
          setTag={setTag}
        />
        <Output 
          paragraphs={paragraphs}
          includeHtml={includeHtml}
          tag={tag}
        />
      </Container>
    </div>
  );
}

export default App;
