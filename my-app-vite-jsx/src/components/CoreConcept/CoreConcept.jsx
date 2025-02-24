import './CoreConcept.css'

export default function CoreConcept({title, description, image})
{
  return (
    <li>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description} 123</p>
    </li>);
}