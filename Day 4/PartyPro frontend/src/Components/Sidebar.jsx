import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Container = styled.div`
  position: fixed;
  /*background-color:white;*/
  .active {
    border-right: 4px solid white;

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
  background-color: black;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: white;
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: black;
  width: 4.5rem;
  height: 60vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

const Logo = styled.div`
  width: 2rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const SlickBar = styled.ul`
  color: white;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;

  padding: 2rem 0;

  position: absolute;
  top: 6rem;
  left: 0;

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: white;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid white;

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const Profile = styled.div`
  width: ${(props) => (props.clicked ? "13rem" : "4rem")};
  height: 6rem;
  aspect-ratio: 1/1;

  padding: 0.5rem 1rem;
  /* border: 2px solid var(--white); */
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "13rem" : "0")};

  background-color: black;
  color: white;

  transition: all 0.3s ease;

  img {
    width: -100rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    display:flex;

    &:hover {
      border: 2px solid grey;
      padding: 2px;
    }
  }
`;

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    display: inline-block;
  }

  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;

  img {
    width: 100%;
    height: auto;
    filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
      brightness(100%) contrast(126%);
    transition: all 0.3s ease;
    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;

const Sidebar = () => {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);
// //   const user=useSelector(selectUser)
// const user=""
//   const [profileClick, setprofileClick] = useState(false);
//   const handleProfileClick = () => {
//     localStorage.clear()
//     setprofileClick(!profileClick);}

  return (
    <Container >
      <Button >
      </Button>
      <SidebarContainer>
        <Logo>
          { <img src={"https://res.cloudinary.com/dfrc94azr/image/upload/v1695392420/imgingest-4258771966650437681_a86eus.webp"} alt="l1" /> }
        </Logo>
        {/* <SlickBar clicked={click}>
          <Item
            onClick={() => setClick(false)}
            exact
            activeClassName="active"
            to="/"
          >
            <img src={src/Assets/Logo.png} alt="Dashboard" />
            <Text clicked={click}>Dashboard</Text>
          </Item> */}
          {/* <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/attendance"
          >
            <img src={Attendance} alt="Attendance" />
            <Text clicked={click}>Attendance</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/marks"
          >
            <img src={Marks} alt="Marks" />
            <Text clicked={click}>Marks</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/subjects"
          >
            <img src={Subjects} alt="Subjects" />
            <Text clicked={click}>Subjects</Text>
          </Item> */}
          {/* <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/fees"
          >
            <img src={Fees} alt="Fees" />
            <Text clicked={click}>Fees</Text>
          </Item> */}
          
        {/* </SlickBar> */}

        {/* <Profile clicked={profileClick}>
          <img
            onClick={() => handleProfileClick()}
            src={"https://res.cloudinary.com/dfrc94azr/image/upload/v1695392517/am-a-19-year-old-multimedia-artist-student-from-manila--21_jptzys.png"}
            alt="Profile"
          /> */}
          {/* <Details clicked={profileClick}>
            <Name>
              {user?.username}
                <a href="/#">Logout</a> 
            </Name>

            <Logout>
               <img src={l6} 
              onClick={() => handleProfileClick()}
              
              alt="logout" /> 
            </Logout>
          </Details> */}
        {/* </Profile> */}
      </SidebarContainer>
    </Container>
  );
};

export default Sidebar;

