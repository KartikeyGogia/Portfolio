import { useEffect, useState } from "react"

function CursorGlow() {

  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMove)

    return () => {
      window.removeEventListener("mousemove", handleMove)
    }
  }, [])

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x - 150 + "px",
        top: pos.y - 150 + "px",
        width: "300px",
        height: "300px",
        background: "rgba(100,255,218,0.2)",
        filter: "blur(120px)",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999
      }}
    />
  )
}

export default CursorGlow