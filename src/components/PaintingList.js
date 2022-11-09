import Painting from './Painting';

export default function PaintingList({ paintings }) {
  return (
    <ul>
      {paintings.map(({ id, url, title, author, price, quantity }) => {
        return (
          <li key={id}>
            <Painting
              imgUrl={url}
              title={title}
              authorName={author.tag}
              profileUrl={author.url}
              price={price}
              quantity={quantity}
            />
            ;
          </li>
        );
      })}
    </ul>
  );
}
