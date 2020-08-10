import React, { useState, useEffect, useRef } from 'react';

export function useOutside(ref: any, setValue: any, value: any) {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setValue(value)
            }
        }
        document.addEventListener("mousemove", handleClickOutside);
        return () => {
            document.removeEventListener("mousemove", handleClickOutside);
        };
    }, [ref]);
}
