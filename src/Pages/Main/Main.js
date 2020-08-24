import React from "react";
import classes from "./Main.module.scss";
import Grid from "@material-ui/core/Grid";
import Nyamushka from "./Nyamushka/Nyamushka";

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nyamushki: [
        {
          id: 0,
          thinTitle: "Сказочное заморское явство",
          selectedThinTitle: "Котэ не одобряет?",
          title: "с фуа-гра",
          description: [
            '10 порций', 'мышь в подарок', ' '
          ],
          weight: "0,5",
          underTitle: 'Чего сидишь? Порадуй котэ, ',
          underTitleSelected: "Печень утки разварная с артишоками.",
          underTitleDisabled: "Печалька, с фуа-гра закончился.",
          selected: false,
          disabled: false,
        },
        {
          id: 1,
          thinTitle: "Сказочное заморское явство",
          selectedThinTitle: "Котэ не одобряет?",
          title: "с рыбой",
          description: [
            '40 порций', '2 мыши в подарок', ' '
          ],
          weight: "2",
          underTitle: 'Чего сидишь? Порадуй котэ, ',
          underTitleSelected: "Головы щучьи с чесноком да свежайшая сёмгушка.",
          underTitleDisabled: "Печалька, с рыбой закончился.",
          selected: false,
          disabled: false,
        },
        {
          id: 2,
          thinTitle: "Сказочное заморское явство",
          selectedThinTitle: "Котэ не одобряет?",
          title: "с курой",
          description: [
            '100 порций', '5 мышей в подарок', 'заказчик доволен'
          ],
          weight: "5",
          underTitle: 'Чего сидишь? Порадуй котэ, ',
          underTitleSelected: "Филе из цыплят с трюфелями в бульоне.",
          underTitleDisabled: "Печалька, с курой закончился.",
          selected: false,
          disabled: true,
        },        
      ],
    };
  }

  toggleClick = (id) => {
    const state = this.state;
    state.nyamushki[id].selected = !state.nyamushki[id].selected;
    this.setState({
      state
    })
    
    document.querySelector('#frameTitle[elementid="'+id+'"]').innerHTML = this.state.nyamushki[id].thinTitle;
  };

  componentDidMount() {
    document.querySelectorAll('#Nyamushka').forEach(nyam => {
      const id = nyam.getAttribute('elementid');
      nyam.addEventListener('mouseover', () => this.mouseOverListener(id));
      nyam.addEventListener('mouseout', () => this.mouseOutListener(id));

      if (this.state.nyamushki[id].disabled) {
        document.querySelector('#footer[elementid="'+id+'"]').innerHTML = `<span style="color:#ff6;">${this.state.nyamushki[id].underTitleDisabled}</span>`;
      }
    });
  }

  mouseOverListener = (id) => {
    if (!(this.state.nyamushki[id].selected || this.state.nyamushki[id].disabled)) {
      document.querySelector('#frameCorner[elementid="'+id+'"]').style.background = 'linear-gradient(-45deg, #fff, #fff 27px, #2ea8e6 0, #2ea8e6 31px, transparent 0)';
      document.querySelector('#frameTitle[elementid="'+id+'"]').style.borderTop = '4px solid #2ea8e6';
      document.querySelector('#frameTitle[elementid="'+id+'"]').style.borderRight = '4px solid #2ea8e6';
      document.querySelector('#frameCntent[elementid="'+id+'"]').style.border = '4px solid #2ea8e6';
      document.querySelector('#frameCntent[elementid="'+id+'"]').style.borderTop = 'none';
      document.querySelector('#frameWeight[elementid="'+id+'"]').style.backgroundColor = '#2ea8e6';
    }
  }

  mouseOutListener = (id) => {
    if (!(this.state.nyamushki[id].selected || this.state.nyamushki[id].disabled)) {
      document.querySelector('#frameCorner[elementid="'+id+'"]').style.background = null;
      document.querySelector('#frameTitle[elementid="'+id+'"]').style.borderTop = null;
      document.querySelector('#frameTitle[elementid="'+id+'"]').style.borderRight = null;
      document.querySelector('#frameCntent[elementid="'+id+'"]').style.border = null;
      document.querySelector('#frameCntent[elementid="'+id+'"]').style.borderTop = null;
      document.querySelector('#frameWeight[elementid="'+id+'"]').style.backgroundColor = null;

    } else if (this.state.nyamushki[id].selected && !this.state.nyamushki[id].disabled) {
      document.querySelector('#frameTitle[elementid="'+id+'"]').innerHTML = `<span style="color:#d91667">${this.state.nyamushki[id].selectedThinTitle}</span>`
    }
  }

  render() {
    return (
      <Grid container className={classes.Main}>
        <Grid container justify={"center"}>
          <h1>Ты сегодня покормил кота?</h1>
        </Grid>
        <Grid container justify={"center"}>
          {this.state.nyamushki.map((nyamushka, index) => {
            return (
              <Grid key={index} item={true} lg={4} md={6} xs={12}>
                <Grid container justify={"center"}>
                  <Nyamushka
                    nyamushka={nyamushka}
                    toggleClick={this.toggleClick}
                  />
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    );
  }
}
