import React, {useEffect} from "react";
import "./Assign.css";
import HeaderClass from "../Header/HeaderClass";
import {Assignment} from "@material-ui/icons";
import classroomAPI from '../../api/classroomAPI';
import {Button} from "@material-ui/core";
const Assign = (props) => {
  const [teacher, setTeacher] = React.useState({});
  useEffect(() => {
    const fetchAssignList = async () => {
      try {
        const response = await classroomAPI.getTeacher(props.items.classId);
        if(response.data){
          setTeacher(response.data[0]);
        };
      } catch (error) {
        console.log("Fail to fetch", error);
      }
    };
    fetchAssignList();
  }, [props.items.classId]);
  var date1 = new Date(props.items.updatedAt);
  var date2 = new Date(props.items.dueDate);
  var createAt = `${date1.getDate()}/${date1.getMonth()+1}/${date1.getFullYear()}`;
  var deadline = `${date2.getDate()}/${date2.getMonth()+1}/${date2.getFullYear()}`;
  return (
    <div className="main">
      <HeaderClass items={props.items}/>
      <div className="invite">
          <div className="assign_form">
              <div className="assign_detail">
                  <h1 className="title_assign skin"><Assignment/>&nbsp;{props.items.assignmentTitle}</h1>
                  <h3 className="mt-2">{teacher.fullName} - {createAt} </h3>
                  <div className="d-flex"><h3 className="mt-2">{props.items.point} điểm</h3><h3 className="mt-2 ml-auto">Deadline: {deadline} </h3></div>
                  <hr className="mt-2"/>
              </div>
              <div className="assign_submit">
                <h2 className="skin">Bài tập của bạn</h2>
                <label className="mt-5">
                  <input  style={{ display: 'none' }} name="upload-file " type="file"/> 
                  <Button variant="outlined" color="secondary" component="span" className="w-100 mt-5">
                    Upload File
                  </Button>
                </label>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Assign;