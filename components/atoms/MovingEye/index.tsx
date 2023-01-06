import Image from "next/image";
import { useRef } from "react";
import { useMoveEye } from "./Hooks";

import headImage from "./images/Head.png";
import eyeImage from "./images/Eye.png";

type TDimension = {
    width: number,
    height: number
}

interface IMovingEye {
    positionFixed?: boolean,
    headDimension?: TDimension,
    eyeDimension?: TDimension
}

export const MovingEye = ({ positionFixed = false, headDimension, eyeDimension }: IMovingEye) => {
    const
        anchor = useRef<HTMLImageElement>(null),
        { angle } = useMoveEye(anchor);
    return (
        <div className={`${positionFixed ? "fixed" : "relative"} w-64`}>
            {headDimension ?
                <Image src={headImage} priority alt="Head Image" width={headDimension.width} height={headDimension.height} ref={anchor} />
                : <Image src={headImage} priority alt="Head Image" ref={anchor} />
            }
            {eyeDimension ?
                <div>
                    <Image src={eyeImage} priority className="absolute w-2" alt="Eye Image" width={eyeDimension.width} height={eyeDimension.height} style={{ top: "129px", right: "150px", transform: `rotate(${(90 + angle)}deg)` }} />
                    <Image src={eyeImage} priority className="absolute w-2" alt="Eye Image" width={eyeDimension.width} height={eyeDimension.height} style={{ top: "129px", right: "97px", transform: `rotate(${(90 + angle)}deg)` }} />
                </div> :
                <div>
                    <Image src={eyeImage} priority className="absolute w-2" alt="Eye Image" style={{ top: "129px", right: "150px", transform: `rotate(${(90 + angle)}deg)` }} />
                    <Image src={eyeImage} priority className="absolute w-2" alt="Eye Image" style={{ top: "129px", right: "97px", transform: `rotate(${(90 + angle)}deg)` }} />
                </div>
            }
        </div>
    );
}
export * from "./Hooks"