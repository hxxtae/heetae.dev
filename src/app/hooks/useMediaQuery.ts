import { useEffect, useState } from 'react'

interface useMediaQueryProps {
  query: string
}

export const useMediaQuery = ({ query }: useMediaQueryProps) => {
  const [matche, setMatches] = useState(false);  

  useEffect(() => {
    const media = window.matchMedia(query);

    // NOTE: 첫 렌더링 시 값 초기화
    if (media.matches !== matche) {
      setMatches(media.matches)
    }
    
    const listener = () => {
      setMatches(media.matches)
    }

    if (typeof media.addEventListener === "function") {
      media.addEventListener('change', listener);
    }

    return () => {
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener('change', listener);
      }
    }
  }, [query, matche])

  return matche
}