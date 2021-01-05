import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import Controls from './Controls';
import Details from './Details';
import Player from './Player';
import canciones from './canciones'
import canciones2 from './canciones2'
import canciones3 from './canciones3'
import canciones4 from './canciones4'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


function myfunctionx() {
  alert("Playlist Descargada")
}


function generate(element) {
  return [0].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}



function selectPl(active){
  switch (active){
    case 1: 
      return (
        canciones.map((data)=>
          generate(
            <ListItem>
              <ListItemText
                disableTypography
                primary={<Typography style={{ color: '#e92d2d' }}>{data.title}</Typography>}
                secondary={data.artist}
              />
            </ListItem>,
          )
        )
      )
    case 1:
      return (
        canciones2.map((data)=>
          generate(
            <ListItem>
              <ListItemText
                disableTypography
                primary={<Typography style={{ color: '#e92d2d' }}>{data.title}</Typography>}
                secondary={data.artist}
              />
            </ListItem>,
          )
        )
      )
    case 3:
      return (
        canciones3.map((data)=>
          generate(
            <ListItem>
              <ListItemText
                 disableTypography
                 primary={<Typography style={{ color: '#e92d2d' }}>{data.title}</Typography>}
                 secondary={data.artist}
              />
            </ListItem>,
          )
        )
      )
    case 4:
      return (
        canciones4.map((data)=>
          generate(
            <ListItem>
              <ListItemText
                disableTypography
                primary={<Typography style={{ color: '#e92d2d' }}>{data.title}</Typography>}
                secondary={data.artist}
              />
            </ListItem>,
          )
        )
      )
  }
}










{/*function UseForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}*/}


const options = ["Ejemplo"];


function Playlist(props) {

  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [count, setCount] = useState(0);
  let [Plactive, setPlactive] = React.useState(1);


  function playlist_icon(nombre_lista){
    return(
    <div class="wrapper" onClick={() => setPlactive(options.findIndex(todo => todo === nombre_lista)+1)}>
          <div class="botonLista" align='center'>
            <IconButton aria-label="add an alarm">
              <MusicNoteIcon />
            </IconButton>
          </div>
          <div class="textoLista">
            {nombre_lista}
          </div>
        </div>)
  }
  
  function create_playlist(){
    const enteredName = prompt('Nombre de la lista');
    if(enteredName != null){
      
    change_options(enteredName);}
  }

  function change_options(nueva_lista){
    if(count == 4){
      alert("No puedes agregar más\nDebes eliminar una lista.")
    }
    else{
    setCount(options.push(nueva_lista));}
  }
  return (
    <div className={classes.root}>
      <Container>
      {options.map(playlist_icon)}
      <div class="wrapper">
        <div class="botonLista" align='center'>
          <IconButton onClick ={() => create_playlist()} aria-label="add an alarm">
            <AddIcon />
          </IconButton>
        </div>
        <div class="textoLista">
          Nueva
        </div>
      </div>

      </Container>
      <Container>
        <div class='wrapper'><Button disabled >Compartir</Button></div>
        <div class='wrapper'><Button disabled >Editar</Button></div>
        <div class='wrapper'><Button onClick = {myfunctionx}  >Descargar</Button></div>
        <div class='wrapper'><Button disabled  >Eliminar</Button></div>
      </Container>

         <div className={"lista"}>
            <List dense={dense}>
              {selectPl(Plactive)}
            </List>
          </div>

    </div>
  );
}

export default Playlist;
