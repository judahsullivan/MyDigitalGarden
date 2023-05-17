import { MotionBox } from "../animations/motion/motion"
import {Icon} from '@chakra-ui/react'
import { container } from "../animations/motion/transition"
import { IconType } from "react-icons/lib"

interface IconProps{
    icon: IconType;
}

export default function IconList({icon}: IconProps){
    return(
        <MotionBox variants={container}>
        <Icon as={icon} w={4} h={4}/>
        </MotionBox>
    )
}