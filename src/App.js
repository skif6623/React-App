import Painting from './components/Painting';
import paintings from './paintings.json';

export default function App() {
  return (
    <div>
      <Painting
        imgUrl={paintings[0].url}
        title={paintings[0].title}
        authorName={paintings[0].author.tag}
        profileUrl={paintings[0].author.url}
        price={paintings[0].price}
      />

      <Painting
        imgUrl={paintings[1].url}
        title={paintings[1].title}
        authorName={paintings[1].author.tag}
        profileUrl={paintings[1].author.url}
        price={paintings[1].price}
      />

      <Painting
        imgUrl={paintings[2].url}
        title={paintings[2].title}
        authorName={paintings[2].author.tag}
        profileUrl={paintings[2].author.url}
        price={paintings[2].price}
      />
    </div>
  );
}
