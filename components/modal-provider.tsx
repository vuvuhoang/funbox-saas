"use client";

import { useEffect, useState } from "react";
import { ProModal } from "@/components/pro-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    // Fix Hydration issue for Nextjs
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <ProModal />
        </>
    )
}