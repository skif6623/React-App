import Painting from './components/Painting';
import paintings from './paintings.json';

export default function App() {
  // const isOnline = true;

  // Рендер колекції
  return (
    <div>
      {paintings.map(painting => (
        <Painting
          imgUrl={painting.url}
          title={painting.title}
          authorName={painting.author.tag}
          profileUrl={painting.author.url}
          price={painting.price}
          quantity={painting.quantity}
        />
      ))}
      {/* Рендер по умові */}
      {/* {isOnline && 'Online'}

      {false}
      {null}
      {undefined} - повністю ігнорується реактом і не рендериться

      {isOnline ? 'Online' : 'Offline'} */}

      {/* <Painting
        imgUrl={paintings[0].url}
        title={paintings[0].title}
        authorName={paintings[0].author.tag}
        profileUrl={paintings[0].author.url}
        price={paintings[0].price}
        quantity={paintings[0].quantity}
      />

      <Painting
        imgUrl={paintings[1].url}
        title={paintings[1].title}
        authorName={paintings[1].author.tag}
        profileUrl={paintings[1].author.url}
        price={paintings[1].price}
        quantity={paintings[1].quantity}
      />

      <Painting
        imgUrl={paintings[2].url}
        title={paintings[2].title}
        authorName={paintings[2].author.tag}
        profileUrl={paintings[2].author.url}
        price={paintings[2].price}
        quantity={paintings[2].quantity}
      /> */}
    </div>
  );
}
