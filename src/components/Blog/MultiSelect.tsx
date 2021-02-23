import React, {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { Avatar } from '@material-ui/core';

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
    chip: {
      margin: theme.spacing(0.5),
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

export default function ChipsArray(props: any) {
  const classes = useStyles();
  // const [selected, setselected] = useState(0)

  const [chipData, setChipData] = React.useState<ChipData[]>([
    { key: 0, label: 'General', showing: true },
    { key: 1, label: 'Technology', showing: true },
    { key: 2, label: 'Design' , showing: true },
    { key: 3, label: 'Culture' , showing: true },
    { key: 4, label: 'Business' , showing: true },
    { key: 5, label: 'Politics' , showing: true },
    { key: 6, label: 'Opinion' , showing: true },
    { key: 7, label: 'Science' , showing: true },
    { key: 8, label: 'Health' , showing: true },
    { key: 9, label: 'Style' , showing: true },
    { key: 10, label: 'Travel' , showing: true }
  ]);

  const handleDelete = (chipSelected: ChipData) => () => {
    // setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    setcolor(!color);
  };

  // const toggleChipProperty = (key: number) => {
  //   setselected(key);
  // }

  const [color, setcolor] = useState(false)

  return (
    <Paper component="ul" className={classes.root}>
      {chipData.map((data) => {
        
        return (
          <li key={data.key}>
            <Chip
              avatar={<Avatar>{data.label.charAt(0)}</Avatar>}
              disabled={data.label === 'General' ? true : false}
              label={data.label}
              // onDelete={data.label === 'General' ? undefined : handleDelete(data)}
              // onClick={handleDelete(data)}
              clickable
              // className={classes.chip}
              // onClick={() => setcolor(true)}
              // color={data.key%2 === 0 ? 'primary': 'secondary'}
              // color={color ? 'primary': 'secondary'}
              onClick={() => props.toggleChipProperty(data.key)}
              className={(data.showing ? classes.active : classes.inactive )}
            />
          </li>
        );
      })}
    </Paper>
  );
}