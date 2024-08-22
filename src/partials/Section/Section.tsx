import React from "react";
import { useNavbar } from "../../App/options/hooks";
import useIntersectionObserver from "../../core/hooks/useIntersectionObserver";

interface SectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    selfProps?: React.HTMLAttributes<HTMLDivElement>;
}

const Section = React.memo((props: SectionProps) => {
    const { id, selfProps = {}, ...divProps } = props;
    const { active, setActive } = useNavbar();
    const { className = '', ...rest } = selfProps;

    const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
        root: null,
        threshold: 1.0,
    });

    React.useEffect(() => {
        if (!id) return;        

        if (isIntersecting && active !== id) {
            setActive(id);
        }

    }, [isIntersecting, active, id]);

    return (
        <div
            ref={ref}
            className={`section d-flex px-2 px-md-5 ${className}`}
            id={id}
            {...rest}
        >
            <div {...divProps} />
        </div>
    );
});

export default Section;
