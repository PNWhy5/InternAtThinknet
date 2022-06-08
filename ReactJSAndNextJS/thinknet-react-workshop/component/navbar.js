export default function AppHeader(props) {
  return (
    <h1>
      <p>โปรแกรมทำข้อสอบออนไลน์</p>
      <p>{props.userName}</p>
    </h1>
  );
}