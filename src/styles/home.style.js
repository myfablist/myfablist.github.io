import style from './style';

const s = Object.create(style);

s.pageLinkContainer = {
  margin: '1vh 0',
};

s.homeContent = {
  //display: 'flex',
  //flexWrap: 'wrap',
  //flexDirection: 'row',
  //minHeight: '100vh',
}

s.leftContent = {
  //flex: '1 0 auto',
  //display: 'flex',
  //flexWrap: 'wrap',
  //flexDirection: 'column',
  backgroundColor: 'gray',
  border: '1px solid red',
  color: 'black',

}

s.carousel = {
  minHeight: '25vh',

  marginLeft: '30px',
  marginRight: '30px',
  flex: '1 0 auto',
  flexDirection: 'column',
  display: 'flex',
  border: '1px solid black',
  heading: {
    flex: '1 0 auto',
  },
}
  
s.rightContent = {
  //flex: '1 0 auto',
  //minWidth: '200px',

  //display: 'flex',
  backgroundColor: 'white',
  border: '1px solid green',
}
export default s;
