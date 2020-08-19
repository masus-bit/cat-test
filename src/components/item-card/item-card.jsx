import React, { useState } from "react";

export const ItemCard = (props) => {
  const { card } = props;
  const [isActive, setActive] = useState(false);
  const [isSelected, setSelect] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <React.Fragment>
      <li className="product-item">
        <div
          onMouseEnter={() => {
            card.disabled
              ? null
              : isSelected
              ? setHover(true)
              : setHover(false);
          }}
          onMouseLeave={() => {
            card.disabled
              ? null
              : isActive
              ? setSelect(true)
              : setSelect(false);
            setHover(false);
          }}
          onClick={() => {
            card.disabled
              ? null
              : isActive
              ? setActive(false)
              : setActive(true);
          }}
          className={
            card.disabled
              ? "product-item--container disabled"
              : isActive
              ? "product-item--container active"
              : "product-item--container"
          }
        >
          <div className="item-text-section">
            {hover ? (
              <h2 className="item-tagline selected">Котэ не одобряет?</h2>
            ) : (
              <h2 className="item-tagline">Сказочное заморское яство</h2>
            )}

            <h3
              className={
                card.disabled ? "item-title disabled-item" : "item-title"
              }
            >
              Нямушка
            </h3>
            <p
              className={
                card.disabled
                  ? "item-title--tag disabled-item"
                  : "item-title--tag"
              }
            >
              с {card.name}
            </p>
            <p className="item-description">{card.stock.title} <br/> {card.stock.text}</p>
          </div>
          <div className="image-section">
            <img
              src="https://s3-alpha-sig.figma.com/img/c93c/e2a3/66c7fd2a7e69f3e95cf27a0952549f59?Expires=1598832000&Signature=eKSAFsxhq73Jl-YMfbXVauA7Yyg5R6oT~p9ZRiLGRqz3RTn55wD3b2TjLLpTAF6FLfDQ9GmhSdf7VHWhnva0OD7sI0lpdC~G84fnRIixedP~DR234pCv4rKONZv1w~tDQakXG8KVCvxX~PREnd0D5CevHzV0q2cFCw7KYQKoqyhjGr35f6WO-M28goWAy1OaKZlvnyoeBKMOzJcTQulOnvAwtQ4bFZyoCuWM74ioSSN~wUlMpOy3VrZdc-~elb9UtC0j5L5hJZg1Js~6-3kzkmOePhgyqGybR6kYEPquoLtDmD5qWDvXTONwvEqDmPyc~E9MUspmf~6LgD29~NlDgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
              className="item-image"
            />
            <div
              className={
                card.disabled
                  ? "item-weight--circle disabled-circle"
                  : isActive
                  ? "item-weight--circle active-circle"
                  : "item-weight--circle"
              }
            >
              <p className="item-weight-text">
                <span className="weight"> {card.weight}</span> <br /> КГ
              </p>
            </div>
          </div>
        </div>
        {card.disabled ? (
          <p className="product-item--description disable">
            Печалька, с {card.name} закончился.
          </p>
        ) : isActive ? (
          <p className="product-item--description">{card.description}</p>
        ) : (
          <p className="product-item--description">
            Чего сидишь? Порадуй котэ,{" "}
            <a
              href="#"
              onClick={(evt) => {
                evt.preventDefault();
                isActive ? setActive(false) : setActive(true);
              }}
              className="buy-link"
            >
              купи
            </a>
            .
          </p>
        )}
      </li>
    </React.Fragment>
  );
};
