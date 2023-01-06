import { RefObject, useEffect, useState } from "react"

type TCoordinates = {
    x: number,
    y: number
}

const getAngle = (client: TCoordinates, event: TCoordinates): number => {
    const
        distanceY = event.y - client.y,
        distanceX = event.x - client.x,
        rad = Math.atan2(distanceY, distanceX),// range(-PI,PI)
        degree = rad * 180 / Math.PI;// rads to degree, range(-180,180)
    return degree;
}

const getAnchors = (position1: number, position2: number): number => position1 + position2 / 2;

export const useMoveEye = (anchor: RefObject<HTMLImageElement> | null) => {
    const
        [angle, setAngle] = useState<number>(0);

    useEffect(() => {
        const handelWindowMouseMove = (event: MouseEvent) => {
            if (anchor?.current) {
                const client: TCoordinates = {
                    x: event.clientX,
                    y: event.clientY
                }
                const rect = anchor.current.getBoundingClientRect()
                const anchors: TCoordinates = {
                    x: getAnchors(rect.left, rect.width),
                    y: getAnchors(rect.top, rect.height),
                }
                setAngle(getAngle(client, anchors))
            }
        }
        window.addEventListener('mousemove', handelWindowMouseMove)
        return () => window.removeEventListener('mousemove', handelWindowMouseMove)
    }, [anchor])

    return { angle }
}
