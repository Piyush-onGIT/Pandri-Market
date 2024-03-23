import toast from 'react-hot-toast'

const toastSuccess = (val:string)=>{
    toast.success(val)
}
const toastError = (val:string)=>{
    toast.error(val)
}

const toastNormal = (val:string)=>{
    toast(val)
}

export {toastSuccess, toastError, toastNormal};