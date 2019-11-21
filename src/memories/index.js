import React from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function Memories({
  writeMemory,
  memories = [],
  onSongClick,
  currentSongId,
  getMemories
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState(1);
  const [valueKey, setValueKey] = React.useState("");
  const [valueMem, setValueMem] = React.useState("");

  const handleChangeKey = event => {
    setValueKey(event.target.value);
  };
  const handleChangeMem = event => {
    setValueMem(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
    getMemories(currentSongId);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMemoryInput = () => {
    let memObj = {
      memory_key: valueKey,
      memory: valueMem,
      songId: currentSongId
    };
    writeMemory(memObj);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        View and Add to Memory Bank
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          View and Add Memories For This Song
        </DialogTitle>
        <div style={{ marginLeft: "50", marginRight: "50" }}>
          <p>
            <strong>LABEL: MEMORY</strong>
          </p>
          {memories.map(memory => {
            return (
              <p>
                <strong>{memory.memory_key}</strong>: {memory.memory}
              </p>
            );
          })}
        </div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-multiline-flexible"
            label="Label This Memory"
            multiline
            rowsMax="4"
            value={valueKey}
            onChange={handleChangeKey}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="standard-multiline-static"
            label="What does this song remind you of?"
            multiline
            rows="4"
            className={classes.textField}
            margin="normal"
            value={valueMem}
            onChange={handleChangeMem}
          />
        </form>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={handleMemoryInput}>
            Save to Memory Bank
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
