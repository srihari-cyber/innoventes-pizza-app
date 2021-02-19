const initialstate = {
    small : 0,
    medium : 1,
    large : 0,
    adults:1,
    children:0,
    count:200
  }
  
  export const reducer = (state=initialstate,{type,payload}) => {
    switch(type){
      case 'small':
        return {...state,small:payload}
      case 'medium':
        return {...state,medium:payload}
      case 'large':
        return {...state,large:payload}
      case 'adults':
        return {...state,adults:payload}
      case 'children':
        return {...state,children:payload}
      case 'total':
        return {...state,count:payload}
      default:
        return state
    }
  }