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
// import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
// import { withFormsy } from 'formsy-react';
import Formsy from 'formsy-react';
import SyInput from '../SyInput';
import SySelect from '../SySelect';

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
        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            alias: '',
            pin: '',
            confPin: '',
            lang: [],
            host: [],
            iface: [],
            canSubmit: false
        };
    }

    disableButton() {
        this.setState({ canSubmit: false });
    }
    
    enableButton() {
        this.setState({ canSubmit: true });
    }

    handleChangeLanguage = event => {
        this.setState({ lang: event.target.value });
    };

    handleChangeInterface = event => {
        this.setState({ iface: event.target.value });
    };

    handleSignup = (model) => {
        // event.preventDefault();
        // debugger;
        // console.log(model);

        (async () => {
            const rawResponse = await fetch('http://localhost:9000/test', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(model)
            });
            const content = await rawResponse;
            // console.log('========',content,content.json());
            if ( content.status === 200 ) {
                this.setState({
                    email: '',
                    firstName: '',
                    lastName: '',
                    alias: '',
                    pin: '',
                    confPin: '',
                    lang: [],
                    host: [],
                    iface: [],
                    canSubmit: false
                });
                alert('User Saved.');
            }

            // console.log(content);
        })();

    };

    render() {
        // console.log('this.props', this.props);
        const {classes} = this.props;
        return(
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar><LockIcon /></Avatar>
                    <Typography variant="h5">Sign Up</Typography>
                    <Formsy
                        onValidSubmit={this.handleSignup}
                        onValid={this.enableButton}
                        onInvalid={this.disableButton}
                    >
                        <FormControl margin="dense" fullWidth>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <SyInput 
                                id="email"
                                name="email"
                                required
                                validations='isEmail'
                                validationError="This is not a valid email"
                            />
                        </FormControl>
                        <FormControl margin="dense" fullWidth>
                            <InputLabel htmlFor="firstName">First Name</InputLabel>
                            <SyInput
                                id="firstName"
                                name="firstName"
                                value=""
                                required
                                validations="minLength:3"
                                validationError="First name should be 3 char long."
                            />
                        </FormControl>
                        <FormControl margin="dense" fullWidth>
                            <InputLabel htmlFor="lastName">Last Name</InputLabel>
                            <SyInput
                                id="lastName"
                                name="lastName"
                                required
                                validations="minLength:3"
                                validationError="Last name should be 3 char long."
                            />
                        </FormControl>
                        <FormControl margin="dense" fullWidth>
                            <InputLabel htmlFor="alias">Alias</InputLabel>
                            <SyInput
                                id="alias"
                                name="alias"
                                required
                                validations="minLength:3"
                                validationError="Alias should be 3 char long."
                            />
                        </FormControl>
                        <FormControl margin="dense" fullWidth>
                            <InputLabel htmlFor="pin">PIN</InputLabel>
                            <SyInput
                                id="pin"
                                name="pin"
                                type="password"
                                required
                                validations="minLength:6"
                                validationError="Password should be 6 char long"
                            />
                        </FormControl>
                        <FormControl margin="dense" fullWidth>
                            <InputLabel htmlFor="confPin">Confirm PIN</InputLabel>
                            <SyInput
                                id="confPin"
                                name="confPin"
                                type="password"
                                validations="equalsField:pin"
                                validationError="PIN did not match."
                            />
                        </FormControl>
                        <FormControl margin="dense" fullWidth>
                            <InputLabel htmlFor="favLang">Favorite Programming Language</InputLabel>
                            <SySelect
                                id="favLang"
                                name="favLang"
                                multiple
                                value={this.state.lang}
                                // onChange={this.handleChangeLanguage}
                                // input={<Input id="select-multiple-checkbox-lang" />}
                                // renderValue={selected => selected.join(', ')}
                                // MenuProps={MenuProps}
                                options={languages}
                                required
                            >
                            </SySelect>
                        </FormControl>
                        <FormControl margin="dense" fullWidth>
                            <InputLabel htmlFor="favHost">Favorite Hosting Plateform</InputLabel>
                            <SySelect
                                id="favHost" name="favHost"
                                multiple
                                value={this.state.host}
                                // MenuProps={MenuProps}
                                options={hosting}
                                required
                                // validations="minLength:1"
                                // validationError="Select one value at least."
                            >
                            </SySelect>
                        </FormControl>
                        <FormControl margin="dense" fullWidth>
                            <InputLabel htmlFor="favInterface">Favorite Interface Format</InputLabel>
                            <SySelect
                                id="favInterface" name="favInterface"
                                multiple
                                value={this.state.iface}
                                // onChange={this.handleChangeInterface}
                                // input={<Input id="select-multiple-checkbox-iface" />}
                                // renderValue={selected => selected.join(', ')}
                                // MenuProps={MenuProps}
                                options={_interface}
                                required
                            >
                                {/* {_interface.map(name => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={this.state.iface.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem> */}
                                ))}
                            </SySelect>
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
                            disabled={!this.state.canSubmit}
                        >
                            Sign up
                        </Button>
                    </Formsy>
                </Paper>
            </main>
        );
    }
}

Signup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signup);