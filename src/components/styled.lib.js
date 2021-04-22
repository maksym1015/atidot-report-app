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

const ValueHeader = styled.span(
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

const FlexColumn = styled.div({
  display: 'flex',
  flexDirection: 'column',
})

const FlexBetween = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
})

const FlexBaseline = styled.div({
  display: 'flex',
  alignItems: 'baseline',
})

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

export {ShowPercent, ValueHeader, PercentNum, ShowValue, FlexColumn, FlexBetween, FlexBaseline, Li, Circle}