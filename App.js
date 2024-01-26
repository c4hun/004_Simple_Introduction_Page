
const baseUrl = 'https://avatars.githubusercontent.com/u/101428141?v=4';
const person = {
  name: 'Chew',
  imageId: 'c4hun',
  imageSize: 's',
  theme: {
    backgroundColor: 'pink',
    color: 'purple'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={baseUrl + person.imageId + person.imageSize+'.jpg'}
        alt={person.name}
      />
      <ul>
        <h2>OS used as following :</h2>
        <li>Major: Ubuntu(22.04/23.10); kernel(6.5.0.14)</li>
        <li>Study: Red Hat Enterprise Linux 9.3; kervel(5.14.0)</li>
        <br></br>
        <p> 🥰 I’m currently learning JavaScript and its framworks(Angular, React.JS and Node.JS) </p>
        <p>for a chance on Junior Web developer(Front-End) for my study! </p>
      </ul>
    </div>
  );
}
