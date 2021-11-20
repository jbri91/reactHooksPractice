import React, { useEffect } from 'react'


const syntax = () => {
    
    useEffect(() => {
        console.log('In useEffect');
        return () => {
            console.log("in useEffect Cleanup");
        }
    }, [])

    return (
        <div>

        </div>
    )

}

export default syntax