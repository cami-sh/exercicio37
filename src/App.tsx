import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form'
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200
      },
    },
  }),
);


function App() {

  const classes = useStyles();

  const { register , handleSubmit , errors , watch } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  const estado_civil = watch('estado_civil')

  return (
    <div className="App">

      <Box marginTop='5vw'>
      
      <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>

      <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >

        <TextField id="outlined-basic" label="Nome" variant="outlined" name="nome" inputRef={register({required: true})}/>
          {errors.nome && <p>Nome obrigatório</p>}

        <TextField id="outlined-basic" label="Cidade" variant="outlined" name='cidade' inputRef={register} />

        <TextField id="outlined-basic" label="E-mail" variant="outlined" type='email' name='email' inputRef={register({required: true})} />
          {errors.email && <p>E-mail obrigatório</p>}

        <TextField id="outlined-basic" label="Idade" variant="outlined" name='idade' type='number' inputRef={register({required: true, min: 18})} />
          {errors.idade?.type === "required" && <p>Idade obrigatória</p>}
          {errors.idade?.type === "min" && <p>Necessário ser maior de 18</p>}

        <FormControl component="fieldset">
          <FormLabel component="legend">Estado Civil</FormLabel>
          <RadioGroup aria-label="estado-civil-1" name='estado_civil'>
            <FormControlLabel value="solteiro" name='estado_civil' control={<Radio />} label="Solteiro(a)" inputRef={register({required: true})} />
            <FormControlLabel value="casado" name='estado_civil' control={<Radio />} label="Casado(a)" inputRef={register({required: true})}/>
          </RadioGroup>
          {errors.estado_civil && <p>Estado civil obrigatório</p>}

        </FormControl> 

          {estado_civil === "casado" &&
            <TextField id="outlined-basic" label="Nome do conjuge" variant="outlined" name='conjuge' inputRef={register} />
          } 
      
        <button>Enviar</button>

        </Grid>

      </form>

      </Box>
      
    </div>
  );
}

export default App;
