"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("d9c5198b-3159-44db-93f9-11dee76ed7a7");
    }, []);

    return null;
}