import style from './style';

const s = Object.create(style);

s.root = {
  flex: '1 0 auto',
  backgroundColor: 'grey',
  height: '100%',
  fontFamily: 'helvetica neue, helvetica, sans-serif',
  fontWeight: '300',
  fontSize: '16px',
  letterSpacing: '0.025em',
  //padding: '3vh 0 12vh 0',
  minWidth: '60vw',
  // use responsive max-width to simulate padding/margin to allow
  // space for vertical scroll bar without creating horizontal scroll bar
  // (if there is padding, the window will scroll horizontally to show the padding)
  //maxWidth: 'calc(100vw - 40px)',

  // center based on vw to prevent content jump when vertical scroll bar show/hide
  // note: vw/vh include the width of scroll bars. Note that centering using margin auto
  // or % (which doesn't include scroll bars, so changes when scroll bars shown) causes a page jump
  position: 'relative',
  left: '50vw',
  WebkitTransform: 'translate(-50%, 0)',
  MozTransform: 'translate(-50%, 0)',
  msTransform: 'translate(-50%, 0)',
  OTransform: 'translate(-50%, 0)',
  transform: 'translate(-50%, 0)',

  WebkitTextSizeAdjust: 'none',
  MozTextSizeAdjust: 'none',
  msTextSizeAdjust: 'none',
  textSizeAdjust: 'none',
};

s.pageLinkContainer = {
  flex: '1 0 auto',
  maxWidth: '100px',
  minWidth: '100px',
}

s.nav = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  backgroundColor: 'white',
  color: 'blue',
}

s.header = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  height: '10vh',
  backgroundColor: 'blue',
}
s.footer = {
  height: '10vh',
  backgroundColor: 'blue',
  overflowY: 'hidden',
}

s.title = {
  fontSize: '20px',
  marginBottom: '0.5vh',
};

s.repoLink = {
  fontSize: '14px',
};

s.mapMenu = {
  margin: '3vh 0',
};

s.creditLine = {
  color: '#A0A0A0',
  fontSize: '14px',
  marginTop: '50px',
};

export default s;
