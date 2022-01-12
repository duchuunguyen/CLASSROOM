import React from "react";
import { useLocalContext } from "../../context/context";
import {Dialog, Slide,Button,TextField, Box,InputLabel,Select} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import "./FormEx.css";
import assignmentAPI from '../../api/assignmentAPI';
import {Formik,Form, Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';

const Transition = React.forwardRef(function Transition(props,ref){
    return <Slide direction="up" ref={ref}{...props}/>
});

const FormEx = (props) => {
    const initialValues={
        assignmentTitle:'',
        instruction:'',
        point:'',
        dueDate:'',
        classId: props.items.id,
        scale: '',
        isFinal: false
    }

    const onSubmit=(values,data)=>{
        assignmentAPI.createAssignment(values);
        window.location.reload(false);
    }

    const {formExDialog,setFormExDialog} = useLocalContext();
    return(
        <div>
            <Dialog 
            fullScreen 
            open={formExDialog} 
            onClose={() => setFormExDialog(false)}
            TransitionComponent={Transition}
            >
                <Formik className="invite" initialValues={initialValues} onSubmit={onSubmit}>
                {(data) => (
                    <Form>
                        <div className="invite__wrapper">
                            <div className="invite__wrapper2" 
                                onClick={() => setFormExDialog(false)}>
                                <Close className="invite__svg"></Close>
                                <div className="invite__topHead">Exercise</div>
                                <div className="ml-auto">
                                    <Button
                                        className="invite__btn"
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        disabled={data.isSubmitting}
                                    >
                                        Assignment
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="input__form">
                            <div className="invite__loginInfo">
                                <Field
                                    as={TextField}
                                    id="outlined-basic"
                                    label="Title"
                                    name="assignmentTitle"
                                    variant="outlined"
                                    className="title__input"
                                >
                                </Field>
                                <Field
                                    as={TextField}
                                    id="outlined-basic"
                                    label="Instruct"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    name="instruction"
                                    className="instruct__input"
                                >
                                </Field>
                            </div>
                            <div className="invite_btnform">
                                <Box>
                                    <InputLabel id="demo-simple-select-label">Point</InputLabel>
                                    <Field
                                        as={Select}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label='Point'
                                        name='point'
                                    >
                                        <option value="10">10</option>
                                        <option value="100">100</option>
                                    </Field>
                                </Box>
                                <form className="container" noValidate>
                                    <Field
                                        as={TextField}
                                        id="datetime-local"
                                        label="Deadline"
                                        type="datetime-local"
                                        className="textField"
                                        name="dueDate"
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                </form>
                                <Field
                                    as={TextField}
                                    id="outlined-basic"
                                    label="Scale (%)"
                                    name="scale"
                                    variant="outlined"
                                    className="scale_input"
                                >
                                </Field>
                            </div>
                        </div>
                    </Form>
                )}
                </Formik>
            </Dialog>
        </div>
    );
};
export default FormEx;