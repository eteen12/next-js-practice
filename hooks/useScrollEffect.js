import { useState, useEffect } from "react";

export function useScrollEffect() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0); //loads 0 when is at the top of the page
  const [currentScrollPos, setCurrentScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY; //this gets the current scroll position from the top of the page
      setCurrentScrollPos(currentScrollPos);
      setScrollingDown(currentScrollPos > prevScrollPos); // it will set scrollingDown useState to (true), if current scroll is greater than previous, meaning that the nav bar will disapear
      setPrevScrollPos(currentScrollPos); // sets the prevScrollPos to the current one, so that the above function can work
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); //stops listening to avoid memory leaks
  }, [prevScrollPos]); //by using a dependancy array the effect only re-runs when one of the dependencies change, without it it might use outdated values of prevScrollPos

  return { scrollingDown,currentScrollPos };
}
