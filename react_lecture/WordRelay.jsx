const React = require('react');
const { useState, useRef } = React;


const WordRelay = () => {
  const [word, setWord] = useState('제로초');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      console.log('test1');
      setResult('딩동댕');
      setWord(value);
      setValue('');
      inputRef.current.focus();
    } else {
      console.log('test2');
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };



  return (
      <>
          <div>{word}</div>
          <form onSubmit={onSubmitForm} id="test">
            <div><label htmlFor={"wordInput222"}>글자를 입력하세요</label></div>
            <input ref={inputRef} className={"wordInput"} value={value} onChange={onChangeInput}/>
            <button>입력!</button>
          </form>
        <div>{result}</div>
      </>
    )

};



// const React = require('react');
// class WordRelay extends Component {
//     state= {
//         word:'제로초',
//         value:'',
//         result:'',
//     };
//
//   onSubmitForm = (e) => {
//     e.preventDefault();
//     if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
//       console.log('test1');
//       this.setState({
//         result: '딩동댕',
//         word: this.state.value,
//         value: '',
//       });
//       this.input.focus();
//     } else {
//       console.log('test2');
//       this.setState({
//         result: '땡',
//         value:''
//       });
//       this.input.focus();
//     }
//   };
//
//   onChangeInput = (e) => {
//     this.setState({value: e.target.value});
//   };
//   input;
//   onRefInput = (c) => {
//     this.input = c;
//   };
//
//     render(){
//         return (
//           <>
//               <div>{this.state.word}</div>
//               <form onSubmit={this.onSubmitForm} id="test">
//                 <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput}/>
//                 <button>입력!</button>
//               </form>
//             <div>{this.state.result}</div>
//           </>
//         )
//     }
// }

module.exports = WordRelay;
