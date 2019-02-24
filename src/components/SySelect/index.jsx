import React, { Component, Fragment } from 'react';
import { withFormsy } from 'formsy-react';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

class SySelect extends Component {
    changeValue = (event) => {
        this.props.setValue(event.target.value);
    }

    render() {
        const errorMessage = this.props.getErrorMessage();

        const options = this.props.options.map((option, i) => {
            // debugger;
            const selected = this.props.getValue();
            console.log('selected=', this.state);
            const isSelected = selected && selected.length ? selected.indexOf(option) > -1 : false;
            return (
                <MenuItem key={option} value={option}>
                    <Checkbox checked={isSelected} />
                    <ListItemText primary={option} />
                </MenuItem>
            );
        });
        // const checkBoxId = "select-multiple-checkbox-"+this.props.id;
        return (
            <Fragment>
                <Select
                    multiple
                    onChange={this.changeValue}
                    value={this.props.getValue()}
                    // input={<Input id={checkBoxId} />}
                    renderValue={selected => selected.join(', ')}
                >
                    {options}
                </Select>
                <FormHelperText error={true}>{errorMessage}</FormHelperText>
            </Fragment>
        );
    }
}

export default withFormsy(SySelect);