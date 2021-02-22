import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { Avatar } from '@material-ui/core';

interface ChipData {
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
  }),
);

export default function ChipsArray(props: any) {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState<ChipData[]>([
    { key: 0, label: 'General' },
    { key: 1, label: 'Technology' },
    { key: 2, label: 'Design' },
    { key: 3, label: 'Culture' },
    { key: 4, label: 'Business' },
    { key: 5, label: 'Politics' },
    { key: 6, label: 'Opinion' },
    { key: 7, label: 'Science' },
    { key: 8, label: 'Health' },
    { key: 9, label: 'Style' },
    { key: 10, label: 'Travel' }
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Paper component="ul" className={classes.root}>
      {chipData.map((data) => {
        
        return (
          <li key={data.key}>
            <Chip
              avatar={<Avatar>{data.label.charAt(0)}</Avatar>}
              disabled={data.label === 'General' ? true : false}
              label={data.label}
              onDelete={data.label === 'General' ? undefined : handleDelete(data)}
              className={classes.chip}
              color={data.key%2 === 0 ? 'primary': 'secondary'}
            />
          </li>
        );
      })}
    </Paper>
  );
}