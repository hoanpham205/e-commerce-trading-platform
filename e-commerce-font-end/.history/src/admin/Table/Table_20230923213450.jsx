import "./Table.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}
const rows = [
  createData("Phi Hoan", 89212111, "20 May 2002", "Approved"),
  createData("Nhut Tan", 81212131, "6 June 2002", "Pending"),
  createData("Dang Khoa", 84212211, "19 March 2002", "Approved"),
  createData("Hong Son", 21212123, "18 May 2002", "Delivered"),
];
const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    }
  }else if(status === 'Pending'){
    return{
        background: '#ffadad8f',
        color: 'red',
      }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
};
}

export default function BasicTable(){
    return (
        
    )
}