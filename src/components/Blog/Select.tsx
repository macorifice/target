import React, {useEffect} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

export default function SimpleSelect(props: { category: unknown; handleChange: ((event: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>, child: React.ReactNode) => void) | undefined; }) {
  const classes = useStyles();
  const [categories, setcategories] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://the-social-target.com/api/categories`
      );
      setcategories(result.data);
    };
 
    fetchData();
  }, []);

  return (
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="select-outlined-label">Category</InputLabel>
        <Select
          labelId="select-outlined-label"
          id="select-outlined"
          value={props.category}
          onChange={props.handleChange}
          label="category"
          required
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {categories.map((cat: any) => (
              <MenuItem key={cat.id} value={cat.id}>{cat.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}