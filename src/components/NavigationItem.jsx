import React from "react"

const FadeIn = ({children, ...props}) => (
  <CSSTransition
      {...props}
      in={true}
      appear={true}
      timeout={500}
      classNames="nav-fade">
    {children}
  </CSSTransition>
);

export default class Navigation extends React.Component {
	constructor(props) {
    super(props);
  }

	render() {
		<FadeIn delay={this.delay}>
      <NavItem>
        <NavLink 
        	href="#"
        	onClick={ e => (
        		e.preventDefault()
        		onClick()
        	})
        >this.label</NavLink>
      </NavItem>
    </FadeIn>
  }
};