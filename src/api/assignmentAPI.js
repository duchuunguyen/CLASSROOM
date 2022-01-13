import axiosClient from "../axiosClient";
import authHeader from "./auth-header";
const assignmentAPI = {
    getAssignment: (params) =>{
        const url = "/assignments/" + params.a_id + "?c_id=" + params.c_id;
        return (
            axiosClient.get(
            url,
            {
            headers: authHeader()
            })
        )
    },
    getAllAssignment: () =>{
        const url = "/assignments/all";
        return (
            axiosClient.get(
            url,
            {
            headers: authHeader()
            }
            )
        )
    },
    getAssignmentInClass: (params) =>{
        const url = "/assignments?c_id=" + params;
        return (
            axiosClient.get(
            url,
            {
            headers: authHeader()
            })
        )
    },
    createAssignment: (param) =>{
        const url = "/assignments";
        return (
            axiosClient.post(
            url,
            {
                assignmentTitle: param.assignmentTitle,
                instruction: param.instruction,
                point: param.point,
                dueDate: param.dueDate,
                classId: param.classId,
                scale: param.scale,
                isFinal: param.isFinal
            },
            {
            headers: authHeader()
            })
        )
    },
    deleteAssignment: (req, res) =>{
        const url = "/assignments?c_id=" + req + "&id=" + res;
        return (
            axiosClient.delete(
                url,
                {
                headers: authHeader()
                }
            )
        )
    },
    updateAssigment: (idl, params) => {
        const url = "/assignments?id=" + idl;
        return (
            axiosClient.put(url,{
                id: idl,
                assignmentTitle: params.assignmentTitle,
                instruction: params.instruction,
                point: params.point,
                dueDate: params.dueDate,
                createdAt: params.createdAt,
                updateAt: params.updateAt,
                classId: params.classId,
            },
            {
            headers: authHeader()
            })
        )
    }
}
export default assignmentAPI