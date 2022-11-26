import React, { useState, useEffect } from "react";
import "./Nav.css";

const Nav = ({ navItems }) => {
  const [activeNav, setActiveNav] = useState(`#${navItems[0].navID}`);

  const navHeader = navItems;

  useEffect(() => {
    const handleScroll = (e) => {
      const index = nearestIndex(
        window.scrollY,
        navHeader,
        0,
        navHeader.length - 1
      );
      const id = `#${navItems[index].navID}`
      setActiveNav(id);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  const nearestIndex = (
    currentPosition,
    sectionPositionArray,
    startIndex,
    endIndex
  ) => {
    if (startIndex === endIndex) return startIndex;
    else if (startIndex === endIndex - 1) {
      if (
        Math.abs(
          sectionPositionArray[startIndex].navRef.current?.offsetTop -
          currentPosition
        ) <
        Math.abs(
          sectionPositionArray[endIndex].navRef.current?.offsetTop -
          currentPosition
        )
      )
        return startIndex;
      else return endIndex;
    } else {
      let nextNearest = ~~((startIndex + endIndex) / 2);
      let a = Math.abs(
        sectionPositionArray[nextNearest].navRef.current?.offsetTop -
        currentPosition
      );
      let b = Math.abs(
        sectionPositionArray[nextNearest + 1].navRef.current?.offsetTop -
        currentPosition
      );
      if (a < b) {
        return nearestIndex(
          currentPosition,
          sectionPositionArray,
          startIndex,
          nextNearest
        );
      } else {
        return nearestIndex(
          currentPosition,
          sectionPositionArray,
          nextNearest,
          endIndex
        );
      }
    }
  };

  return (
    <nav>
      {
        navItems.map(value => {
          const Component = value.navIcon;
          return (
            <a
              key={`#${value.navID}`}
              href={`#${value.navID}`}
              onClick={() => setActiveNav(`#${value.navID}`)}
              className={activeNav === `#${value.navID}` ? "active" : ""}
            >
              <Component />
            </a>
          )
        })
      }
    </nav>
  );
};

export default Nav;
