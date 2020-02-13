import React from "react";
import Aside from "./Aside";
import CardContainer from "./CardContainer";
import CardExtendedInfo from "./CardExtendedInfo";
import technologies from "../technologies";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { idClicked: 0, techUsage: null, searching: null };
    this.cardClick2 = this.cardClick2.bind(this);
    this.gotBack = this.gotBack.bind(this);
    this.radioUpdatesM = this.radioUpdatesM.bind(this);
    this.searchUpdatesM = this.searchUpdatesM.bind(this);
  }

  gotBack() {
    this.setState({ idClicked: 0 });
  }

  cardClick2(e) {
    this.setState({ idClicked: e });
  }

  showCards() {
    console.log("En MAIN " + this.state.techUsage);

    return (
      <CardContainer
        onClick2={this.cardClick2}
        radioUpdates={this.state.techUsage}
        searchUpdates={this.state.searching}
      />
    );
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

  radioUpdatesM(e) {
    if (e !== undefined) {
      this.setState({
        techUsage: e.target.value
      });
      this.render();
    }
  }
  searchUpdatesM(e) {
    if (e !== undefined) {
      this.setState({
        searching: e.target.value
      });
      this.render();
    }
  }

  callAside() {
    return (
      <Aside
        radioUpdates={this.radioUpdatesM}
        searchUpdates={this.searchUpdatesM}
      />
    );
  }

  render() {
    return (
      <div className="afterNavContainer">
        {this.props.showAside ? this.callAside() : null}

        {this.state.idClicked === 0
          ? this.showCards()
          : this.showTechContent(this.state.idClicked - 1)}
      </div>
    );
  }
}

export default Main;
