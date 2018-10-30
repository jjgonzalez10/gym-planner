import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';


/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class StuffItemAdmin extends React.Component {
  render() {
    /** Destructuración de objetos */
    const { name, repetitions, category, setps, _id } = this.props.stuff;
    return (
        <Table.Row>
          <Table.Cell>{name}</Table.Cell>
          <Table.Cell>{repetitions}</Table.Cell>
          <Table.Cell>{category}</Table.Cell>
          <Table.Cell>{steps}</Table.Cell>
          <Table.Cell>
            <Link to={`/edit/${_id}`}>Edit</Link>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
StuffItemAdmin.propTypes = {
  stuff: PropTypes.object.isRequired,
};

export default StuffItemAdmin;
