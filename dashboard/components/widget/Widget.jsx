import "./widget.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import MessageIcon from '@mui/icons-material/Message';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';

const Widget = (props) => {
  let data;
  switch (props.type) {
    case "user":
      data = {
        title: "USERS",
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
          />
        ),
      };
      break;
      case "Apartment":
        data = {
          title: "Apartment category",
          link: "View Apartment",
          icon: (
            <AddHomeWorkIcon
              className="icon"
            />
          ),
        };
      
      break;
      case "Bookings":
        data = {
          title: "Bookings",
          link: "View Bookings",
          icon: (
            <EmojiTransportationIcon
              className="icon"
              
        
            />
          ),
        };

        break;
      case "Messages":
        data = {
          title: "Messages",
          link: "View Messages",
          icon: (
            <MessageIcon
              className="icon"
              
        
            />
          ),
        };
  }

  return (
    <div className="widget">
       <div className="left">
        <span className="title">{data.title}</span>
        <span className="title">21345</span>
        <span className="title">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon/> 20%
        </div>
       {data.icon}
        </div>
      </div>
  );
};

export default Widget;
