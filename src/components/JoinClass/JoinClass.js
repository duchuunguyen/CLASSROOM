import React from "react";
import { useLocalContext } from "../../context/context";
import {Dialog, Slide,Button,TextField} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import "./JoinClass.css";

const Transition = React.forwardRef(function Transition(props,ref){
    return <Slide direction="up" ref={ref}{...props}/>
});

const JoinClass = () => {
    const {joinClassDialog,setJoinClassDialog} = useLocalContext();
    return(
        <div>
            <Dialog 
            fullScreen 
            open={joinClassDialog} 
            onClose={() => setJoinClassDialog(false)}
            TransitionComponent={Transition}
            >
                <div className="joinClass">
                    <div className="joinClass__wrapper">
                        <div 
                            className="joinClass__wrapper2" 
                            onClick={() => setJoinClassDialog(false)}>
                            <Close className="joinClass__svg"></Close>
                            <div className="joinClass__topHead">Join CLass</div>
                        </div>
                    </div>
                    <div className="joinClass__form">
                        <div className="joinClass__formText">
                            <h1>Class Code</h1>
                        </div>
                        <div className="joinClass__formText">
                        Ask your teacher for the class code, and enter it here.
                        </div>
                        <div className="joinClass__loginInfo">
                            <TextField
                                id="outlined-basic"
                                label="Class Code"
                                variant="outlined"
                                className="joinClass__input"
                            >
                            </TextField>
                        </div>
                        <div className="joinClass_btnform">
                            <Button
                                className="joinClass__btn"
                                variant="contained"
                                color="primary"
                            >
                            Join Class
                            </Button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};
export default JoinClass;