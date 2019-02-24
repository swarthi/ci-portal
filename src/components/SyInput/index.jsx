import React, { Component, Fragment } from 'react';
import { withFormsy } from 'formsy-react';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

class SyInput extends Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        // Important: Don't skip this step. This pattern is required
        // for Formsy to work.
        this.props.setValue(event.currentTarget.value);
    }

    render() {
        // An error message is returned only if the component is invalid
        const errorMessage = this.props.getErrorMessage();
        // console.log('syInput');

        return (
            <Fragment>
                <Input
                    onChange={this.changeValue}
                    type={ this.props.type || 'text'}
                    value={this.props.getValue() || ''}
                />
                <FormHelperText error={true}>{errorMessage}</FormHelperText>
            </Fragment>
        );
    }
}

export default withFormsy(SyInput);