"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  if (isMobile) {
    return <>{children}</>; // 👈 native scroll fallback
  }

  
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: false,  orientation: "vertical", }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;