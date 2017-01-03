import React from 'react'

export default function Hamburger(props) {
	const
    width = `${props.width}px`,
  	height = `${props.height}px`,
    right = `${props.right}`,
  	halfHeight = `${parseInt(height.replace('px', '')) / 2}px`,
  	isOpen = props.isOpen,
  	strokeWidth = props.strokeWidth,
    halfStrokeWidth = `-${strokeWidth / 2}px`,
    animationDuration = props.animationDuration

	const getTransformValue = (isOpen, defaultPos, rotateVal) => (
		`translate3d(0,${isOpen ? halfHeight : defaultPos},0)
    rotate(${isOpen ? `${rotateVal}deg` : '0'})`
	)

	const styles = {
		container: {
			width,
			height,
			position: 'absolute',
			right,
			transform: `rotate(${props.rotate}deg)`
		},
		lineBase: {
			display: 'block',
			height: `${strokeWidth}px`,
			width: '100%',
			background: props.color,
			transitionTimingFunction: 'ease-in-out',
			transitionDuration : `${animationDuration}s`,
			transformOrigin: 'center',
			position: 'absolute'
		},
		firstLine: {
			transform: getTransformValue(isOpen, 0, 45),
			marginTop: halfStrokeWidth,
		},
		secondLine: {
      transitionTimingFunction: 'ease-out',
			transitionDuration : `${animationDuration / 4}s`,
			opacity: isOpen ? '0' : '1',
			top: halfHeight,
			marginTop: halfStrokeWidth
		},
		thirdLine: {
			transform: getTransformValue(isOpen, height, -45),
			marginTop: halfStrokeWidth
		}
	}

	return (
		<div style={styles.container}
      onClick={props.menuClicked}
      className='hamburger-menu'>

		  <span style={
        Object.assign({},
        styles.lineBase,
        styles.firstLine)
      }>
      </span>
		  <span style={
        Object.assign({},
        styles.lineBase,
        styles.secondLine)
      }>
      </span>
		  <span style={
        Object.assign({},
        styles.lineBase,
        styles.thirdLine)
      }>
      </span>
		</div>
	)
}

Hamburger.PropTypes = {
	isOpen: React.PropTypes.bool.isRequired,
	menuClicked: React.PropTypes.func.isRequired,
	width: React.PropTypes.number,
	height: React.PropTypes.number,
	strokeWidth: React.PropTypes.number,
	rotate: React.PropTypes.number,
	color: React.PropTypes.string,
	borderRadius: React.PropTypes.number,
	animationDuration: React.PropTypes.number
}
