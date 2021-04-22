import styled from '@emotion/styled';



const percentStatus = {
  up: {
    borderBottom: 'clamp(7px, 15 / 2480 * 100vw, 15px) solid #47c70e',
  },
  down: {
    borderTop: 'clamp(7px, 15 / 2480 * 100vw, 15px) solid #f22736',
  },
}

const colorStatus = {
  up: {
    color: '#47c70e',
  },
  down: {
    color: '#f22736',
  },
  normal: {
    color: 'black',
  },
  yellow: {
    color: '#dea831',
  },
  0: {
    backgroundColor: '#265b85',
  },
  1: {
    backgroundColor: '#3384af',
  },
  2: {
    backgroundColor: '#66bcea',
  },
  3: {
    backgroundColor: '#e0e1de'
  }
}

const ValueHeader = styled.p(
  {
    fontSize: 'clamp(18px, 32 / 2480 * 100vw, 32px)',
    fontWeight: '400',
    display: 'flex',
    alignItems: 'center'
  }
)

const ShowPercent = styled.div(
  {
    width: 0,
    height: 0,
    borderLeft: 'clamp(5px, 9 / 2480 * 100vw, 9px) solid transparent',
    borderRight: 'clamp(5px, 9 / 2480 * 100vw, 9px) solid transparent',
  },
  ({variant}) => percentStatus[variant],
)

const ShowValue = styled.p(
  {
    fontSize: 'clamp(20px, 50 / 2480 * 100vw, 50px)',
    fontWeight: '400',
    lineHeight: '1.4'
  },
  ({color}) => colorStatus[color],
)

const PercentNum = styled.p(
  {
    fontSize: 'clamp(18px, 32 / 2480 * 100vw, 32px)',
  },
  ({variant}) => colorStatus[variant],
)


const liStatus = {
  key: {
    fontWeight: '300',
  },
  gap: {
    fontWeight: '600'
  },
}

const Li = styled.li(
  {
   fontFamily: 'Open Sans',  
   fontSize: 'clamp(14px, 28 / 2480 * 100vw, 28px)',
  },
  ({variant}) => liStatus[variant],
)

const Circle = styled.span(
  {
    height: 'clamp(9px, 16 / 2480 * 100vw, 16px)',
    width: 'clamp(9px, 16 / 2480 * 100vw, 16px)',
    marginRight: 'clamp(9px, 12 / 2480 * 100vw, 12px)',
    borderRadius: '50%',
    display: 'inline-block',
  },
  ({color}) => colorStatus[color],
)

const Container = styled.div(
  {
    display: 'flex',
  },
  props => ({
    flexDirection: props.column && 'column',
    justifyContent: props.justify,
    alignItems: props.align,
    textAlign: props.txtCenter && 'center',
    backgroundColor: props.type === 'paid' && 'rgba(223, 236, 243, 0.36);',
    border: props.type === 'paid' && '1px solid #b0cbd9',
  }
))

const Button = styled.button`
  width: 169px;
  height: 47px;
  padding: 6px 16px 7px 17px;
  border-radius: 6px;
  border: solid 2px #3384af;
  background-color: #3384af;
  color: #ffffff;
`

const OutlineButton = styled(Button)`
  background-color: #ffffff;
  color: #3384af;
`
// const Period = styled.p(
//   {
//     color: '#6c6b68',
//   },
//   props => ({
//     fontSize: props.size === 'big' ? '52px' : '18px',
//     fontFamily: props.size === 'big' ? "Poppins" : "Open Sans",
//     fontWeight: props.size === 'big' ? '300' : '400'
// }))

const ptagStyle = {
  period: {
    color: '#6c6b68',

  },
  content: {
    color: 'black',
    fontSize: '38px',
    fontWeight: '400',
    lineHeight: '1.26',
    },
  comment: {
    color: 'black',
    fontSize: '28px',
  }
}

const P = styled.p(
  {
    color: 'black',

  },
  ({variant}) => ptagStyle[variant],
)


export {ShowPercent, ValueHeader, PercentNum, ShowValue, Li, Circle, Container, P, Button, OutlineButton}