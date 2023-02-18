import './Card.css';
/* 4th for wrapping content */
// it shell around the content
const card = (props)=>{
    // expeseItem class apply from here in the case of wrapper components..!
const classes = 'card ' + props.className
return <div className={classes}>{props.children}</div>
};

export default card;