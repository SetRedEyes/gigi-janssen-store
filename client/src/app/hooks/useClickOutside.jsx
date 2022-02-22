import { useEffect, useRef } from "react"

export const useClickOutside = (handler) => {
    const domNode = useRef()
    useEffect(() => {
        const closeMenu = (e) => {
            if (!domNode.current?.contains(e.target)) {
                handler()
            }
        }

        document.addEventListener("mousedown", closeMenu)

        return () => {
            document.removeEventListener("mousedown", closeMenu)
        }
    })

    return domNode
}
