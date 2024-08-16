import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import motionVariants from "./etc/motionVariants";

const MotionComponent = React.memo((props: HTMLMotionProps<'div'>) => {
    return <motion.div
        variants={motionVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        {...props} />
})

export default MotionComponent;