export const getSessionId = () => {
    if (typeof window === 'undefined') {
        return 'qweqwe'
    } else {
        if(!window?.localStorage?.getItem('session_id')?.length) {
            window.localStorage.setItem('session_id', String(Date.now()))
        }
    
        return window.localStorage.getItem('session_id')
    }
}