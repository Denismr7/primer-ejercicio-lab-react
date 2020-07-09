import React, { ReactNode, useEffect, useState } from 'react';
import { makeStyles, withStyles, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Member } from '../interfaces';

const useStyles = makeStyles({
    table: {
      maxWidth: 900,
      margin: '0 auto',
    },
  });

const StyledTableCell = withStyles(() =>
  createStyles({
    head: {
      backgroundColor: '#393e46',
      color: '#eeeeee',
    },
  }),
)(TableCell);

const StyledTableRow = withStyles(() => 
  createStyles({
      root: {
          '&:nth-of-type(odd)': {
              backgroundColor: '#f4f6ff'
          },
      },
  }),
)(TableRow)

export default function MembersList(props: any) {
    const organization = props.organization;
    const url: string = `https://api.github.com/orgs/${organization}/members`;
    const classes = useStyles();
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url).then(response => response.json())
                  .then(d => setData(d))
                  .catch(e => console.error(`Error in fetching data: ${e}`))
    }, [url])
    
    const generateMemberRow = (MembersArray: Member[]): ReactNode => 
        MembersArray.map(member => {
            return (
            <StyledTableRow key={member.id}>
                <TableCell><img src={member.avatar_url} alt='member'/></TableCell>
                <TableCell>{member.login}</TableCell>
                <TableCell>{member.id}</TableCell>
            </StyledTableRow>
            )
        })

    return (
        <TableContainer className={classes.table} component={Paper}>
            <Table aria-label="members">
                <TableHead className='TableHead'>
                    <TableRow>
                        <StyledTableCell>Avatar</StyledTableCell>
                        <StyledTableCell>Username</StyledTableCell>
                        <StyledTableCell>Id</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {generateMemberRow(data)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
