import React, {useState, useEffect} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { Avatar } from '@material-ui/core';
import PropTypes from 'prop-types';
import axios from 'axios';
import CheckIcon from '@material-ui/icons/Check';
import StarIcon from '@material-ui/icons/Star';
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

  const [chipData, setChipData] = useState<ChipData[]>([]);
  const [state, setstate] = useState<ChipData[]>([]);
  const [chipColor, setChipColor] = useState<boolean>(true);

  // const handleDelete = (chipSelected: ChipData) => () => {
  //   setChipData((chips) => chips.filter((chip) => chip.key !== chipSelected.key));
  // };

  const addChip = (showing: boolean, key: number, label: string): void => {
    const newChip: ChipData[] = [...state, { showing, key, label }];
    setstate(newChip);
    setChipColor(false)
  };

  return (
    <Paper component="ul" className={classes.root}>
      {chipData &&
       chipData.map((data: any) => {
        
        return (
            <Chip
              key={data.id}
              // avatar={<Avatar>{data.title.charAt(0)}</Avatar>}
              color={chipColor ? 'primary' : 'secondary'}
              label={data.title}
              icon={chipColor ? <CheckIcon/> : <StarIcon/>}
              // onDelete={data.label === 'General' ? undefined : handleDelete(data)}
              // onClick={handleDelete(data)}
              // clickable
              // className={classes.chip}
              // onClick={() => setcolor(true)}
              // onClick={() => toggleChipProperty(data.id)}
              onClick={() => addChip(true, data.id, data.title)}
              className={(data.published ? classes.active : classes.inactive )}
            />
        );
      })
      }
    </Paper>
  );
}

ChipsArray.propTypes = {
  toggleChipProperty: PropTypes.func
};