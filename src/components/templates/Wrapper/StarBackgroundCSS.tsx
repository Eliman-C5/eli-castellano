import { ContainerProp } from "@/interfaces/app_interfaces"

export const StarBackgroundCSS = ({ children }: ContainerProp) => {
  return (
    <div className="starbg">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      {children}
    </div>
  )
}