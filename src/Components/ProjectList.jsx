import { v4 as uuidv4 } from 'uuid';

export default function ProjectList ({ projectItem }) {
  return (
    <div className="containerCards">
      {projectItem.map(({ img, category }) => (
        <img key={uuidv4()} src={img} alt={category} />
      ))}
    </div>
  );
};