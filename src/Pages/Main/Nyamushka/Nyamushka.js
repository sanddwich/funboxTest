import React from "react";
import classes from "./Nyamushka.module.scss";

export default class Nyamushka extends React.Component {
  constructor(props) {
    super(props);

    this.insertClasses = [classes.Nyamushka];
    if (this.props.nyamushka.disabled) {
      this.insertClasses.push(classes.disabled);
    }
  }

  buyLinkClick = (event) => {
    event.preventDefault();
    this.props.toggleClick(this.props.nyamushka.id);
  };

  render() {
    return (
      <div className={this.insertClasses.join(" ")}>
        <div
          className={classes.card}
          id="Nyamushka"
          elementid={this.props.nyamushka.id}
          onClick={() =>
            !this.props.nyamushka.disabled
              ? this.props.toggleClick(this.props.nyamushka.id)
              : null
          }
        >
          <div className={classes.thinTitle}>
            <div
              className={
                this.props.nyamushka.selected
                  ? classes.thinTitle__cornerSelected
                  : classes.thinTitle__corner
              }
              id="frameCorner"
              elementid={this.props.nyamushka.id}
            ></div>
            <div
              className={
                this.props.nyamushka.selected
                  ? classes.thinTitle__contentSelected
                  : classes.thinTitle__content
              }
              id="frameTitle"
              elementid={this.props.nyamushka.id}
            >
              <span>{this.props.nyamushka.thinTitle}</span>
            </div>
          </div>
          <div
            className={
              this.props.nyamushka.selected
                ? classes.contentSelected
                : classes.content
            }
            id="frameCntent"
            elementid={this.props.nyamushka.id}
          >
            <div className={classes.content__img}>
              <img src="images/cat.png" alt="Котэ" />
              <div
                className={
                  this.props.nyamushka.selected
                    ? classes.content__weightSelected
                    : classes.content__weight
                }
                id="frameWeight"
                elementid={this.props.nyamushka.id}
              >
                <div style={{ marginTop: "19px" }}>
                  <span>{this.props.nyamushka.weight}</span>
                </div>
                <div style={{ marginTop: "10px" }}>кг</div>
              </div>
            </div>
            <h1>Нямушка</h1>
            <h3>{this.props.nyamushka.title}</h3>
            <ul>
              {this.props.nyamushka.description.map((desc, index) => {
                return <li key={index}>{desc}</li>;
              })}
            </ul>
          </div>
        </div>
        {this.props.nyamushka.selected ? (
          <div className={classes.footer}>
            {this.props.nyamushka.underTitleSelected}
          </div>
        ) : (
          <div className={classes.footer} id='footer' elementid={this.props.nyamushka.id}>
            {this.props.nyamushka.underTitle}
            <a
              href="#"
              onClick={(event) =>
                !this.props.nyamushka.disabled
                  ? this.buyLinkClick(event)
                  : event.preventDefault()
              }
            >
              купи
            </a>
          </div>
        )}
      </div>
    );
  }
}
