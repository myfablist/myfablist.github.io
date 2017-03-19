import style from './style';

const s = Object.create(style);

s.pageLinkContainer = {
  margin: '1vh 0',
};

s.homeContent = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  minHeight: '100vh'
}

s.leftContent = {
  flex: '1.5 0 auto',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  backgroundColor: 'white',
  border: '1px solid red',
}

s.carousel = {
  minHeight: '35vh',
  maxHeight: '35vh',
  flex: '1 0 auto',
  flexDirection: 'column',
  display: 'flex',
  border: '1px solid black',
  heading: {
    flex: '1 0 auto',
  },
  body: {
    flex: '12 0 auto',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'gray',
    padding: '3px',
    margin: '3px',
    card: {
      backgroundColor: 'white',
      flex: '1 0 auto',
      minWidth: 120,
      maxWidth: 120,
      height: 160
    }
  }
    
}
  
s.rightContent = {
  flex: '1 0 auto',
  display: 'flex',
  backgroundColor: 'white',
  border: '1px solid green',
}
export default s;
