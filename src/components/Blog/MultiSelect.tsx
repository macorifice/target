import React, {useState, useEffect} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { Avatar } from '@material-ui/core';
import PropTypes from 'prop-types';
import axios from 'axios';
interface ChipData {
  showing: boolean;
  key: number;
  label: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
      backgroundColor: 'transparent'
    },
    active: {
      backgroundColor: theme.palette.primary.main,
      color:"white",
      padding: '5px',
      margin: theme.spacing(0.5),
    },
    inactive: {
      backgroundColor: theme.palette.primary.dark,
      color: "#575b6e",
      border:"1px solid #8080806e",
      padding: '5px',
      margin: theme.spacing(0.5),
    }
  }),
);

export default function ChipsArray(props: { toggleChipProperty: any; }) {
  const classes = useStyles();
  const { toggleChipProperty } = props;

  // { key: 0, label: 'General', showing: true },
  // { key: 1, label: 'Technology', showing: true },
  // { key: 2, label: 'Design' , showing: true },
  // { key: 3, label: 'Culture' , showing: true },
  // { key: 4, label: 'Business' , showing: true },
  // { key: 5, label: 'Politics' , showing: true },
  // { key: 6, label: 'Opinion' , showing: true },
  // { key: 7, label: 'Science' , showing: true },
  // { key: 8, label: 'Health' , showing: true },
  // { key: 9, label: 'Style' , showing: true },
  // { key: 10, label: 'Travel' , showing: true }


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://the-social-target.com/api/categories`
      );
      setChipData(result.data);
    };
 
    fetchData();
  }, []);

  const [chipData, setChipData] = useState([]);

  const handleDelete = (chipSelected: ChipData) => () => {
    // setChipData((chips) => chips.filter((chip) => chip.key !== chipSelected.key));
    setcolor(!color);
  };

  const [color, setcolor] = useState(false)

  return (
    <Paper component="ul" className={classes.root}>
      {chipData &&
       chipData.map((data: any) => {
        
        return (
          <li key={data.key}>
            <Chip
              avatar={<Avatar>{data.title.charAt(0)}</Avatar>}
              disabled={data.title === 'General' ? true : false}
              label={data.title}
              // onDelete={data.label === 'General' ? undefined : handleDelete(data)}
              // onClick={handleDelete(data)}
              clickable
              // className={classes.chip}
              // onClick={() => setcolor(true)}
              // color={data.key%2 === 0 ? 'primary': 'secondary'}
              // color={color ? 'primary': 'secondary'}
              onClick={() => toggleChipProperty(data.id)}
              className={(data.published ? classes.active : classes.inactive )}
            />
          </li>
        );
      })
      }
    </Paper>
  );
}

ChipsArray.propTypes = {
  toggleChipProperty: PropTypes.func
};