import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import "./Header.css"

const quotes = ["Quote 1", "Quote 2", "Quote 3"];

function getRandomInt(max)
{
  return Math.floor(Math.random() * (max + 1));
}

export default function Header()
{
  const description = quotes[getRandomInt(2)];
  return(
    <div>
    <p>Only me dfdfdf! {description}</p>
    <a href="https://vite.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logoy" />
    </a>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  </div>
  );
}
