import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Toylandia - ${title}`;
    }, [title])
};

export default useTitle;