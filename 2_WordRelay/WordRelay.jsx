const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState('쿼카정');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult(딩동댕);
      setWord(value);
      setValue('');
      inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    this.setValue({ value: e.target.value });
  }

    return (
      <>
        <div>{this.word}</div>
        <form onSubmit={onSubmitForm}>
          <input type="text" ref={inputRef} value={value} onChange={onChangeInput} />
          <button>입력!</button>
        </form>
        <div>{result}</div>
      </>
    )
}

module.exports = WordRelay;