import React from "react";

const Menu = ({ mitem }) => {
  return (
    <div className="section-center">
      {mitem?.map((menuitem) => {
        const { id, title, img, desc, price } = menuitem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price} TL</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default Menu;
