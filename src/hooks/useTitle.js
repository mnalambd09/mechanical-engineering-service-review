import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - MESR`;
    }, [title])
};

export default useTitle;