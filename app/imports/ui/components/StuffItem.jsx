import React from 'react';
import { Table,Rating } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Stuffs } from '/imports/api/stuff/stuff';



/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class StuffItem extends React.Component {
  /** Inicializar el estado*/
  state={
	  rating: 0,
  }

  handleRate = (e, { rating }) =>
   {
    this.setState({rating}, () =>{
      console.log(this.props.stuff.adress)

    });
}	
  render() {
    /* Usar destructuración de objetos */
    const { name,
	    repetitions,
	    category,
	    steps,
	    owner } = this.props.stuff
    return (
        <Table.Row>
          <Table.Cell>{name}</Table.Cell>
          <Table.Cell>{repetitions}</Table.Cell>
          <Table.Cell>{category}</Table.Cell>
          <Table.Cell>{steps}</Table.Cell>
          <Table.Cell>{owner}</Table.Cell>
          <Table.Cell>
            <Rating icon='star' defaultRating={3} maxRating={5} onRate={this.handleRate}/>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
StuffItem.propTypes = {
  stuff: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(StuffItem);
