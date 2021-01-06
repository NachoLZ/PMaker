import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import canciones from './canciones'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AddIcon from '@material-ui/icons/Add';
import { useState, useEffect} from 'react';
import MultiSelect from "react-multi-select-component";


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


function get_name(cancionx){
  return {label:cancionx.title,value:cancionx.title};
}






var options = [{nombre: "Ejemplo", songs:canciones}];
const options2 = canciones.map(get_name);


function Playlist(props) {
  const[modal,setmodal] = useState(false);
  const[nombrex,setnombre] = useState("s")
  const [selected, setSelected] = useState([]);
  const [numero_index,setIndex] = useState(0)
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [count, setCount] = useState(0);
  const [Canciones, setCanciones] = useState(options[numero_index].songs);
  
  function remove_song(list){
    let filteredArray = options[numero_index].songs.filter(item => item !== list);
    options[numero_index].songs = filteredArray 
    setCanciones(filteredArray);
    props.actualizar(filteredArray)
    props.cambiar_index(0)
  }

  function actualizar_index(cancion){
    props.cambiar_index(options[numero_index].songs.findIndex(todo => todo.title === cancion.title))
  }


  function selectPl(){
    return(       
    Canciones.map((data)=>
            generate(
              <ListItem>
                <IconButton onClick = {() => actualizar_index(data)}>
                <ListItemText
                  
                  disableTypography
                  primary={<Typography class='primarysongtext'>{data.title}</Typography>}
                  secondary={<Typography class='secondarysongtext'>{data.artist}</Typography>}
                />
                 </IconButton>
                <IconButton class= 'basurero' onClick ={() => remove_song(data)} aria-label="add an alarm">
                <DeleteIcon />
                </IconButton>
              </ListItem>
              
            )
          ) )  
    }
  

  function change_canciones(nombre_lista){
    setCanciones(nombre_lista.songs)
    props.actualizar(nombre_lista.songs)
    setIndex(options.findIndex(todo => todo.nombre === nombre_lista.nombre))
    
  }

  function playlist_icon(nombre_lista){
    if(options[numero_index]  == nombre_lista){
    return(
    <div class="wrapper" onClick={() => change_canciones(nombre_lista)}>
          <div align='center'>
            <IconButton class='boton-lista'
             aria-label="add an alarm">
              <MusicNoteIcon />
            </IconButton>
          </div>
          <div class="textoLista">
            {nombre_lista.nombre}
          </div>
        </div>)
  }
  else{
    return(
    <div class="wrapper" onClick={() => change_canciones(nombre_lista)}>
          <div align='center'>
            <IconButton 
             aria-label="add an alarm" class='apretado'>
              <MusicNoteIcon />
            </IconButton>
          </div>
          <div class="textoLista">
            {nombre_lista.nombre}
          </div>
        </div>)
  }

}
  
  function create_playlist(){
    const enteredName = prompt('Nombre de la lista');
    if(enteredName != null){
      setmodal(true);
      setnombre(enteredName)
    }
  }

  function obtener_canciones(lista){
    return(canciones[canciones.findIndex(todo => todo.title === lista.value)])
  }

  function change_options(){
    setmodal(false)
    const newlist = selected.map(obtener_canciones)
    setCount(options.push({nombre:nombrex,songs:newlist}));}
  

  function eliminar_playlist(){
    options.splice(numero_index, 1);
    setIndex(0)
    setCount(count-1)
  }

  return (
    <div className={classes.root}>
    {modal ?
   
   <div>
   <h1 class='titleselecciona'>Selecciona canciones:</h1>
   <MultiSelect
     options={options2}
     value={selected}
     onChange={setSelected}
     labelledBy={"Select"}
     className='dropdown'

   />
   <IconButton class='addicod' onClick ={() => change_options()} aria-label="add an alarm">
         <AddIcon  />
       </IconButton>
   </div>
      :<Container class='playlistcont'>
      {options.map(playlist_icon)}
      <div class="wrapper">
        <div class="botonLista" align='center'>
          <IconButton class='addico' onClick ={() => create_playlist()} aria-label="add an alarm">
            <AddIcon />
          </IconButton>
        </div>
        <div class="textoLista">
          Nueva
        </div>
      </div>

      </Container>}
      <Container class='opciones-cont'>
        <Button class='opciones' disabled >Compartir</Button>      
        <Button class='opciones' disabled >Editar</Button>
        <Button class='opciones' onClick = {myfunctionx}  >Descargar</Button>
        <Button class='opciones' onClick = {() => eliminar_playlist()} >Eliminar</Button>
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
