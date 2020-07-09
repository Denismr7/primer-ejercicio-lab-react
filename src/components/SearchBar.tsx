import React, { useState, ChangeEvent, FormEvent } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        margin: theme.spacing(4),
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        marginLeft: theme.spacing(1)
    }
  }),
);

export default function SearchBar(props: any) {
    const classes = useStyles();
    const {organization, setOrganization} = props;
    const [inputValue, setInputValue] = useState(organization);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setOrganization(inputValue)
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="Empresa" variant="outlined" defaultValue={organization} onChange={handleInputChange}/>
            <Button className={classes.button} variant="outlined" color="primary" type='submit'>VER MIEMBROS</Button>
        </form>
    )
}
