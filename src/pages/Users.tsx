import React, { useState, useEffect } from 'react';
import IUser from "../types/IUser";
import { UserGrid } from '../components/Users/UserGrid';
import '../style/User.scss';
import { selectUser } from '../services/users/userSlice';
import { useAppSelector } from '../services/hooks';
import { Box } from '@mui/material';
import { Share, Camera, Microphone } from '../components/Tools';

export const Users = () => {
    const users = useAppSelector(selectUser);
    // const [judgesGrids, setJudgesGrids] = useState(users.judges);
    // const [respondersGrids, setRespondersGrids] = useState(users.responders);

    // useEffect(() => {
    //     setJudgesGrids(users.judges);
    //     setRespondersGrids(users.responders);
    // }, [users])

    const renderGrids = (data: IUser[]) => {
        return data.map((user, index: number) => (
            <UserGrid key={user.id} user={user} index={index} />
        ));
    };

    return (
        <Box className="video-layout">
            <Box className={`grid-container layout-${users.judges.length}`}>
                {renderGrids(users.judges)}
            </Box>
            <Box className={`grid-container layout-${users.responders.length}`}>
                {renderGrids(users.responders)}
            </Box>
            <Box className="video-tools-wrapper">
                <Share />
                <Microphone />
                <Camera />
            </Box>
        </Box>
    );
}