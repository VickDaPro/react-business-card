import Picture from "../Images/pro-picture.jpeg";

export default function Header() {
  return (
    <header>
      <img className="picture" src={Picture} alt="picture" />
    </header>
  );
}
