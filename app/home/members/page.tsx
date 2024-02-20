'use client'
import React, { use } from 'react'
import { IMember, IQueryMembers } from '@/interfaces/members/member';
import { GET_ALL_MEMBERS } from '@/lib/graphql/members/get-members';
import { client } from '@/lib/graphql/apollo';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const getAllMembers = async () => {
  return await client.query<IQueryMembers>({ query: GET_ALL_MEMBERS} );
}


export default function MemberList() {
  const { data } = use(getAllMembers())  
  return (
    <div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone number</TableCell>
                <TableCell align="right">Date of birth</TableCell>
                <TableCell align="right">Date of membership</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data && data?.members.map((member: IMember) => (
                <TableRow
                  key={member._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {member.Name}
                  </TableCell>
                  <TableCell align="right">{member.Email}</TableCell>
                  <TableCell align="right">{member.Phone}</TableCell>
                  <TableCell align="right">{member.DateOfBirth}</TableCell>
                  <TableCell align="right">{member.DateOfCreation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}