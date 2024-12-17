
const InputContainer = (props) => {
  const {change}=props;
  return (
    <textarea rows="4" cols="60" defaultValue="hello world" onChange={change} />
  )
}

export default InputContainer