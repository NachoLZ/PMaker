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
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AddIcon from '@material-ui/icons/Add';

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

function generate(element) {
  return [0].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

function Playlist(props) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);

  return (
    <div className={classes.root}>
      <Container>
      <div class="wrapper">
        <div class="botonLista" align='center'>
          <IconButton disabled aria-label="add an alarm">
            <MusicNoteIcon />
          </IconButton>
        </div>
        <div class="textoLista">
          Lista 1
        </div>
      </div>
      <div class="wrapper">
        <div class="botonLista" align='center'>
          <IconButton disabled aria-label="add an alarm">
            <MusicNoteIcon />
          </IconButton>
        </div>
        <div class="textoLista">
          Lista 2
        </div>
      </div>
      <div class="wrapper">
        <div class="botonLista" align='center'>
          <IconButton disabled aria-label="add an alarm">
            <MusicNoteIcon />
          </IconButton>
        </div>
        <div class="textoLista">
          Lista 3
        </div>
      </div>
      <div class="wrapper">
        <div class="botonLista" align='center'>
          <IconButton disabled aria-label="add an alarm">
            <MusicNoteIcon />
          </IconButton>
        </div>
        <div class="textoLista">
          Lista 4
        </div>
      </div>
      <div class="wrapper">
        <div class="botonLista" align='center'>
          <IconButton disabled aria-label="add an alarm">
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
        <div class='wrapper'><Button disabled >Descargar</Button></div>
      </Container>

          <div className={classes.demo}>
            <List dense={dense}>
              {canciones.map((data)=>
              generate(
                <ListItem>
                  <ListItemText
                    disableTypography
                    primary={<Typography style={{ color: '#e92d2d' }}>{data.title}</Typography>}
                    secondary={data.artist}
                  />
                </ListItem>,
              ))}
            </List>
          </div>

    </div>
  );
}

export default Playlist;
