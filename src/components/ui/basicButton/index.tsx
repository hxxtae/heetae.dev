import S from './page.module.css';

interface ButtonProps {
  width?: string
  height?: string
  radius?: number
  onclick?: () => void
  children: React.ReactNode
}

export const BasicButton = ({ width = "auto", height = "auto", radius = 7, onclick, children }: ButtonProps) => {
  return (
    <button className={S.basic_button} style={{width, height, borderRadius: `${radius}px`}} type="button" onClick={onclick}>
      {children}
    </button>
  )
}