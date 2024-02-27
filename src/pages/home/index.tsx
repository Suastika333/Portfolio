interface HomeInterface {
  name: string;
}

function Home(props: HomeInterface) {
  return (
    <div>
      <h1>Welcome {props.name}</h1>
    </div>
  );
}

export default Home;
