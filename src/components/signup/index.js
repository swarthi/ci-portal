import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import { FormControl } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});


const languages = [
    'JavaScript/Node',
    'Java/SpringBoot',
    'Python',
    'PHP',
    'Go',
    'Rust',
    'Other',
];

const hosting = [
    'AWS-EC2',
    'AWS-EKS',
    'Lambda',
    'Knative',
    'GCP-Functions',
    'GCP-Kubernetes',
    'OpenShift',
    'Heroku',
    'Azure',
    'Other',
];

const _interface = [
    'OpenAPI-OAS',
    'GraphQL',
    'RPC-protobuf',
    'Sockets',
    'events-MQMT',
];

class Signup extends Component {
    state = {};
    constructor() {
        // console.log('arguments', arguments);
        super();
        this.state = {
            lang: [],
            host: [],
            iface: []
        };
    }

    handleChangeLanguage = event => {
        this.setState({ lang: event.target.value });
    };

    handleChangeHosting = event => {
        this.setState({ host: event.target.value });
    };

    handleChangeInterface = event => {
        this.setState({ iface: event.target.value });
    };

    render() {
        // console.log('this.props', this.props);
        const {classes} = this.props;
        return(
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar><LockIcon /></Avatar>
                    <Typography variant="h5">Sign Up</Typography>
                    <form>
                        <FormControl margin="dense" fullWidth>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" name="email" type="email" />
                        </FormControl>
                        <FormControl margin="dense" fullWidth>
                            <InputLabel htmlFor="firstName">First Name</InputLabel>
                            <Input id="firstName" name="firstName" />
                        </FormControl>
                        <FormControl margin="dense" fullWidth>
                            <InputLabel htmlFor="lastName">Last Name</InputLabel>
                            <Input id="lastName" name="lastName" />
                        </FormControl>
                        <FormControl margin="dense" fullWidth>
                            <InputLabel htmlFor="alias">Alias</InputLabel>
                            <Input id="alias" name="alias" />
                        </FormControl>
                        <FormControl margin="dense" fullWidth>
                            <InputLabel htmlFor="pin">PIN</InputLabel>
                            <Input id="pin" name="pin" type="password" />
                        </FormControl>
                        <FormControl margin="dense" fullWidth>
                            <InputLabel htmlFor="favLang">Favorite Programming Language</InputLabel>
                            <Select
                                id="favLang" name="favLang"
                                multiple
                                value={this.state.lang}
                                onChange={this.handleChangeLanguage}
                                input={<Input id="select-multiple-checkbox" />}
                                renderValue={selected => selected.join(', ')}
                                // MenuProps={MenuProps}
                            >
                                {languages.map(name => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={this.state.lang.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl margin="dense" fullWidth>
                            <InputLabel htmlFor="favHost">Favorite Hosting Plateform</InputLabel>
                            <Select
                                id="favHost" name="favHost"
                                multiple
                                value={this.state.host}
                                onChange={this.handleChangeHosting}
                                input={<Input id="select-multiple-checkbox" />}
                                renderValue={selected => selected.join(', ')}
                                // MenuProps={MenuProps}
                            >
                                {hosting.map(name => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={this.state.host.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl margin="dense" fullWidth>
                            <InputLabel htmlFor="favInterface">Favorite Interface Format</InputLabel>
                            <Select
                                id="favInterface" name="favInterface"
                                multiple
                                value={this.state.iface}
                                onChange={this.handleChangeInterface}
                                input={<Input id="select-multiple-checkbox" />}
                                renderValue={selected => selected.join(', ')}
                                // MenuProps={MenuProps}
                            >
                                {_interface.map(name => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={this.state.iface.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox value="accept" color="primary" />}
                            label="Accept T &amp; C"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign up
                        </Button>
                    </form>
                </Paper>
            </main>
        );
    }
}

Signup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signup);