export default function Clicker({ message, buttonText }) {
  // function clickHandler() {
  //   return alert(message);
  // }
  const clickHandler = () => {
    alert(message);
  };

  return <button onClick={clickHandler}> {buttonText}</button>;
}
