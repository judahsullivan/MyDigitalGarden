import { MotionBox } from "../animations/motion/motion"
import {Icon} from '@chakra-ui/react'
import { container } from "../animations/motion/transition"

export default function IconList({icon}: any){
    return(
        <MotionBox variants={container}>
        <Icon as={icon} w={4} h={4}/>
        </MotionBox>
    )
}