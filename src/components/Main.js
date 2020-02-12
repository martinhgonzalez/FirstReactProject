import React from "react";
import Aside from "./Aside";
import CardContainer from "./CardContainer";
import CardExtendedInfo from "./CardExtendedInfo";
import technologies from "../technologies";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { idClicked: 0 };
    this.cardClick2 = this.cardClick2.bind(this);
    this.gotBack = this.gotBack.bind(this);
  }

  gotBack() {
    this.setState({ idClicked: 0 });
  }

  cardClick2(e) {
    this.setState({ idClicked: e });
  }

  showCards() {
    return <CardContainer onClick2={this.cardClick2} />;
  }

  showTechContent(id) {
    return (
      <CardExtendedInfo
        fullText={technologies[id].fullText}
        fullImage={technologies[id].fullImage}
        name={technologies[id].name}
        graphic="Aqui va un grafico"
        goBackFunc={this.gotBack}
      />
    );
  }

  render() {
    return (
      <div className="afterNavContainer">
        {this.props.showAside ? <Aside /> : null}

        {this.state.idClicked === 0
          ? this.showCards()
          : this.showTechContent(this.state.idClicked - 1)}
      </div>
    );
  }
}

export default Main;
