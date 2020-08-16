import React, {useRef, useEffect, useState} from "react";

const useOutsideClick = (ref) => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        console.log(document.body.classList.contains('open'));
        const handleClickOutside = (e) => {
            if(ref.current && !ref.current.contains(e.target)) {
                setShow(false)
                document.body.classList.remove('open')
            }
        }
        if(document.body.classList.contains('open')) {
            setShow(true)
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [ref])
    return {show}
}

const OutsideAlerter = (props) => {
    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef);

    const hasBodyOpenClass =useOutsideClick(wrapperRef).show

    return hasBodyOpenClass ? <div ref={wrapperRef}>{props.children}</div> : '';
}

export default OutsideAlerter;