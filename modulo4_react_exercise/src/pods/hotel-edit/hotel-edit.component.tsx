import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  WithStyles,
  withStyles
} from "@material-ui/core";
import * as React from "react";
import { styles } from "./hotel-edit.styles";
import { HotelEntityVm } from "./hotel-edit.vm";
import Rating from 'material-ui-rating'

interface Props extends WithStyles<typeof styles> {
  hotel: HotelEntityVm;
  onChange: (key: string, value: string) => void;
  onRatingChange: (value: number) => void;
  onSave: () => void;
}

const HotelEditComponentInner = (props: Props) => {
  const { hotel, onChange, classes, onSave, onRatingChange } = props;

  const handleChange = (fieldname: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(fieldname, e.target.value);
  }

  const handleRating = () => {
    onRatingChange(1);
  }

  return (
    <form className={classes.container} autoComplete="off">
      <TextField
        required
        id="outlined-required"
        label="Hotel Name"
        value={hotel.name}
        className={classes.textField}
        onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
      />
      <img className={classes.picture} src={hotel.picture} />
      <input
        accept="image/*"
        className={classes.input}
        id="outlined-button-file"
        multiple
        type="file"
        onChange={handleChange('picture')}
      />
      <label htmlFor="outlined-button-file">
        <Button variant="outlined" component="span" className={classes.button}>
          Upload new Picture
        </Button>
      </label>
      {/* <Rating
        value={hotel.rating}
        max={5}
        onChange={handleRating()}/> */}
      <InputLabel htmlFor="city-simple" className={classes.label}>City</InputLabel>
      <Select value={hotel.city} className={classes.textField} variant="outlined" onChange={handleChange('city')}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Other"}>Other City</MenuItem>
        <MenuItem value={"Seattle"}>Seattle</MenuItem>
      </Select>
      <TextField
        className={classes.textArea}
        id="outlined-full-width"
        label="Description"
        placeholder="Placeholder"
        value={hotel.description}
        margin="normal"
        variant="outlined"
        onChange={handleChange('description')}
        InputLabelProps={{
          shrink: true
        }} />
      <label>
        <Button variant="contained" color="primary" className={classes.button} onClick={onSave}>
          Save
        </Button>
      </label>
    </form>
  );
};

export const HotelEditComponent = withStyles(styles)(HotelEditComponentInner);
