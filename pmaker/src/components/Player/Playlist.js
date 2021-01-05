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









var options = [{nombre: "Ejemplo", songs:canciones}];


function Playlist(props) {
  
  const [numero_index,setIndex] = useState(0)
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [count, setCount] = useState(0);
  const [Canciones, setCanciones] = useState(canciones);
  function remove_song(list){
    let filteredArray = options[numero_index].songs.filter(item => item !== list);
    options[numero_index].songs = filteredArray 
    setCanciones(filteredArray);
  }
  
  function selectPl(){
    return(       
    Canciones.map((data)=>
            generate(
              <ListItem>
                <ListItemText

                  disableTypography
                  primary={<Typography style={{ color: '#e92d2d' }}>{data.title}</Typography>}
                  secondary={data.artist}
                />
                <IconButton onClick ={() => remove_song(data)} aria-label="add an alarm">
                <DeleteIcon />
                </IconButton>
              </ListItem>
            )
          ) )  
    }
  

  function change_canciones(nombre_lista){
    setCanciones(nombre_lista.songs)
    setIndex(options.findIndex(todo => todo.nombre === nombre_lista.nombre))
    
  }

  function playlist_icon(nombre_lista){
    return(
    <div class="wrapper" onClick={() => change_canciones(nombre_lista)}>
          <div class="botonLista" align='center'>
            <IconButton aria-label="add an alarm">
              <MusicNoteIcon />
            </IconButton>
          </div>
          <div class="textoLista">
            {nombre_lista.nombre}
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
    setCount(options.push({nombre:nueva_lista,songs:canciones}));}
  }

  function eliminar_playlist(){
    options.splice(numero_index, 1);
    
    
    setCount(count-1)
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
      <Container class='opciones'>
        <div ><Button class='opciones' disabled >Compartir</Button></div>
        <div ><Button class='opciones' disabled >Editar</Button></div>
        <div ><Button class='opciones' onClick = {myfunctionx}  >Descargar</Button></div>
        <div ><Button class='opciones' onClick = {() => eliminar_playlist()} >Eliminar</Button></div>
      </Container>

         <div class='lista'>
            <List dense={dense}>
              {selectPl()}
            </List>
          </div>

    </div>
  );
}

export default Playlist;
