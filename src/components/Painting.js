import propTypes from 'prop-types';

// Компонент
export default function Painting({
  imgUrl,
  title,
  authorName = 'не відомо',
  profileUrl,
  price,
  quantity,
}) {
  return (
    <div>
      <img src={imgUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{authorName}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'закінчується' : 'є в наявності'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  imgUrl: propTypes.string,
  title: propTypes.string,
  authorName: propTypes.string,
  profileUrl: propTypes.string,
  price: propTypes.number,
};
